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

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

            modelBuilder.Entity<Address>(eb =>
            {
                eb.HasOne(a => a.Candidate)
                .WithOne(u => u.Address).HasForeignKey<Address>(a => a.CandidateId);
            });

            modelBuilder.Entity<Adoption>(eb =>
            {
                eb.Property(p => p.Date).HasDefaultValueSql("getutcdate()");
                eb.HasOne(a => a.Animal).WithOne(an => an.Adoption).HasForeignKey<Adoption>(ad => ad.Animal_Id);
                eb.HasOne(a => a.Candidate).WithMany(cn => cn.Adoprions).HasForeignKey(ad => ad.Candidate_Id);
            });

            modelBuilder.Entity<Animal>(eb =>
            {
                eb.HasOne(a => a.Species).WithMany(sp => sp.Animals).HasForeignKey(k => k.Species_Id).OnDelete(DeleteBehavior.ClientSetNull);
                eb.HasOne(a => a.Race).WithMany(ra => ra.Animals).HasForeignKey(k => k.Race_id).OnDelete(DeleteBehavior.ClientSetNull);
                eb.HasOne(a => a.Gender).WithMany(ge => ge.Animals).HasForeignKey(k => k.Gender_id);
                eb.HasOne(a => a.Den).WithOne(de =>de.Animal).HasForeignKey<Animal>(k => k.Den_Id);

            });

            modelBuilder.Entity<AnimalFuture>(eb =>
            {
                eb.HasOne(f => f.Characteristic).WithMany(ch => ch.AnimalsFutures).HasForeignKey(k=> k.Characeristic_Id);
                eb.HasOne(f => f.Animal).WithMany(an => an.AnimalFutures).HasForeignKey(k => k.Animal_Id);


            });

            modelBuilder.Entity<Box>(eb =>
            {
                eb.HasOne(b => b.Species).WithMany(sp => sp.Boxes).HasForeignKey(k => k.Species_id);

            });

            modelBuilder.Entity<Den>(eb =>
            {
                eb.HasOne(d => d.Box).WithMany(bx => bx.Dens).HasForeignKey(k => k.Box_Id);
            });

            modelBuilder.Entity<Race>(eb =>
            {
                eb.HasOne(d => d.Species).WithMany(sp => sp.Races).HasForeignKey(k => k.SpeciesId);
            });
        }

    }
}
