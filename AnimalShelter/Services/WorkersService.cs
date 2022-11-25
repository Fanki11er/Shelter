using AnimalShelter.Entities;
using AnimalShelter.Models;
using AutoMapper;
using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace AnimalShelter.Services
{
    public interface IWorkersService
    {
        public bool RegisterWorker(RegisterUserDto dto);
        public AuthUserDto LoginUser(LoginDto dto);



    }
    public class WorkersService:IWorkersService
    {
        private readonly AnimalShelterDbContext _dbContext;
        private readonly IMapper _mapper;
        private readonly IPasswordHasher<User> _hasher;
        private readonly AuthenticationSettings _authenticationSettings;

        public WorkersService(AnimalShelterDbContext dbContext, IMapper mapper, IPasswordHasher<User> hasher, AuthenticationSettings authenticationSettings)
        {
              _dbContext = dbContext;
            _mapper = mapper;
            _hasher = hasher;
            _authenticationSettings = authenticationSettings;
        }


        public bool RegisterWorker(RegisterUserDto dto )
        {
            var existingUser = _dbContext.Users.FirstOrDefault(u => u.Email == dto.Email);
            if (existingUser == null)
            {


                var user = _mapper.Map<User>(dto);
                var hashedPassword = _hasher.HashPassword(user, dto.UserPassword);
                user.Password = hashedPassword;
                _dbContext.Users.Add(user);
                _dbContext.SaveChanges();
                return true;
            }
            return false;
        }

        public AuthUserDto LoginUser(LoginDto dto)
        {
            var user = _dbContext.Users.FirstOrDefault(u => u.Email == dto.Email);

            if(user == null)
            {
                return null;
            }
            var result = _hasher.VerifyHashedPassword(user, user.Password, dto.Password);
            if(result == PasswordVerificationResult.Failed)
            {
                return null;
            }

            var claims = new List<Claim>()
            {
                new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
                new Claim(ClaimTypes.Name, user.Name),

            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_authenticationSettings.JwtKey));
            var cred = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
            var expires = DateTime.Now.AddDays(_authenticationSettings.JwtExpireDays);
            var token = new JwtSecurityToken(_authenticationSettings.JwtIssuer,_authenticationSettings.JwtIssuer,
                claims,
                expires: expires,
                signingCredentials: cred);
            var authToken = new JwtSecurityTokenHandler().WriteToken(token);

            var authUser = new AuthUserDto()
            {
                Id = user.Id,
                UserName = user.Name,
                AccessToken = authToken
            };

            return authUser;
        }
    }
}
