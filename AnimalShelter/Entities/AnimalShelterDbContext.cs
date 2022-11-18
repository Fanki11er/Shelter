using Microsoft.EntityFrameworkCore;

namespace AnimalShelter.Entities
{
    public  class AnimalShelterDbContext: DbContext
    {
        public AnimalShelterDbContext(DbContextOptions<AnimalShelterDbContext> options): base(options)
        {

        }

        public DbSet<Adoption> Adoptions { get; set; }
        public DbSet<Address> Adreses { get; set; }
        public DbSet<Animal> Animals { get; set; }
        public DbSet<AnimalFuture> AnimalFutures { get; set; }
        public DbSet<Box> Boxes { get; set; }
        public DbSet<Candidate> Candidates { get; set; }
        public DbSet<Characteristic> Characteristics { get; set; }
        public DbSet<Den> Dens { get; set; }
        public DbSet<Gender> Genders { get; set; }
        public DbSet<Race> Races { get; set; }
        public DbSet<Species> Species { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<CandidateRequirement> CandidateRequirements { get; set; }
        public DbSet<AnimalCandidateRequirements> AnimalCandidateRequirements { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

            modelBuilder.Entity<Address>(eb =>
            {
                eb.HasOne(a => a.Candidate)
                .WithOne(u => u.Address).HasForeignKey<Address>(a => a.CandidateId);
                eb.Property(p => p.City).HasColumnType("nvarchar(50)").IsRequired();
                eb.Property(p => p.Street).HasColumnType("nvarchar(50)").IsRequired();
                eb.Property(p => p.PostalCode).HasColumnType("nvarchar(6)").IsRequired();
            });

            modelBuilder.Entity<Adoption>(eb =>
            {
                eb.Property(p => p.Date).HasDefaultValueSql("getutcdate()");
                eb.HasOne(a => a.Animal).WithOne(an => an.Adoption).HasForeignKey<Adoption>(ad => ad.Animal_Id);
                eb.HasOne(a => a.Candidate).WithMany(cn => cn.Adoprions).HasForeignKey(ad => ad.Candidate_Id);
                eb.Property(p => p.Animal_Id).IsRequired();
                eb.Property(p => p.Candidate_Id).IsRequired();
            });

            modelBuilder.Entity<Animal>(eb =>
            {
                eb.HasOne(a => a.Species).WithMany(sp => sp.Animals).HasForeignKey(k => k.Species_Id).OnDelete(DeleteBehavior.ClientSetNull);
                eb.HasOne(a => a.Race).WithMany(ra => ra.Animals).HasForeignKey(k => k.Race_id).OnDelete(DeleteBehavior.ClientSetNull);
                eb.HasOne(a => a.Gender).WithMany(ge => ge.Animals).HasForeignKey(k => k.Gender_id);
                eb.HasOne(a => a.Den).WithOne(de =>de.Animal).HasForeignKey<Animal>(k => k.Den_Id);
                eb.Property(p => p.Name).HasColumnType("nvarchar(30)");
                eb.Property(p => p.Description).HasColumnType("nvarchar(200)");
                eb.Property(p => p.Gender_id).IsRequired();
                eb.Property(p => p.Race_id).IsRequired();
                eb.Property(p => p.Species_Id).IsRequired();

            });

            modelBuilder.Entity<AnimalFuture>(eb =>
            {
                eb.HasOne(f => f.Characteristic).WithMany(ch => ch.AnimalsFutures).HasForeignKey(k=> k.Characeristic_Id);
                eb.HasOne(f => f.Animal).WithMany(an => an.AnimalFutures).HasForeignKey(k => k.Animal_Id);
                eb.Property(p => p.Characeristic_Id).IsRequired();
                eb.Property(p => p.Animal_Id).IsRequired();


            });

            modelBuilder.Entity<Box>(eb =>
            {
                eb.HasOne(b => b.Species).WithMany(sp => sp.Boxes).HasForeignKey(k => k.Species_id);
                eb.Property(p => p.Species_id).IsRequired();

            });

            modelBuilder.Entity<Den>(eb =>
            {
                eb.HasOne(d => d.Box).WithMany(bx => bx.Dens).HasForeignKey(k => k.Box_Id);
                eb.Property(p => p.Box_Id).IsRequired();
            });

            modelBuilder.Entity<Race>(eb =>
            {
                eb.HasOne(d => d.Species).WithMany(sp => sp.Races).HasForeignKey(k => k.SpeciesId);
                eb.Property(p => p.Value).HasColumnType("nvarchar(50)").IsRequired();
                eb.Property(p => p.SpeciesId).IsRequired();
            });

            modelBuilder.Entity<Candidate>(eb =>
            {
                eb.HasOne(d => d.CandidateRequirement).WithOne(cr => cr.Candidate).HasForeignKey<CandidateRequirement>(k => k.CandidateId);
                eb.Property(p => p.Name).HasColumnType("nvarchar(50)").IsRequired();
            });

            modelBuilder.Entity<CandidateRequirement>(eb =>
            {
                eb.HasOne(d => d.Gender).WithMany(gn => gn.CandidateRequirements).HasForeignKey(k => k.GenderId);
                eb.HasOne(d => d.Species).WithMany(sp => sp.CandidateRequirements).HasForeignKey(k => k.SpeciesId);
                eb.Property(p => p.SpeciesId).IsRequired();
                eb.Property(p => p.GenderId).IsRequired();
            });

            modelBuilder.Entity<AnimalCandidateRequirements>(eb =>
            {
                eb.HasOne(d => d.Characteristic).WithMany(ch => ch.AnimalCandidateRequirements).HasForeignKey(k => k.CharacteristicId);
                eb.HasOne(d => d.CandidateRequirement).WithMany(cr => cr.AnimalCandidateRequirements).HasForeignKey(k => k.CandidateRequirementId);
                eb.Property(p => p.CharacteristicId).IsRequired();
                eb.Property(p => p.CandidateRequirementId).IsRequired();
            });

            modelBuilder.Entity<Characteristic>(eb =>
            {
                eb.Property(p => p.Description).HasColumnType("nvarchar(30)").IsRequired();

            });

            modelBuilder.Entity<Species>(eb =>
            {
                eb.Property(p => p.Value).HasColumnType("nvarchar(10)").IsRequired();
            });

            modelBuilder.Entity<Gender>(eb =>
            {
                eb.Property(p => p.Value).HasColumnType("nvarchar(10)").IsRequired();
            });

            modelBuilder.Entity<User>(eb =>
            {
                eb.Property(p => p.Name).HasColumnType("nvarchar(50)").IsRequired();
                eb.Property(p => p.Email).HasColumnType("nvarchar(50)").IsRequired();
                eb.Property(p => p.Password).HasColumnType("nvarchar(12)").IsRequired();

            });



        }

    }
}
