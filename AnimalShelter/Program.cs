using AnimalShelter;
using AnimalShelter.Entities;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllersWithViews();
builder.Services.AddDbContext<AnimalShelterDbContext>(
    option => option.UseSqlServer(builder.Configuration.GetConnectionString("AnimalShelterConnectionString"))

    );





var app = builder.Build();

using var scope = app.Services.CreateScope();
var dbcontext = scope.ServiceProvider.GetService<AnimalShelterDbContext>();

DataGenerator.Seed(dbcontext);


// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();


app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html"); ;

app.Run();
