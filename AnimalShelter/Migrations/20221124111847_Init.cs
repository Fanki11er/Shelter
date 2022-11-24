using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace AnimalShelter.Migrations
{
    /// <inheritdoc />
    public partial class Init : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Candidates",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(50)", nullable: false),
                    AddressId = table.Column<int>(name: "Address_Id", type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Candidates", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Characteristics",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Description = table.Column<string>(type: "nvarchar(30)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Characteristics", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Genders",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Value = table.Column<string>(type: "nvarchar(10)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Genders", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Species",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Value = table.Column<string>(type: "nvarchar(10)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Species", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(50)", nullable: false),
                    Email = table.Column<string>(type: "nvarchar(50)", nullable: false),
                    Password = table.Column<string>(type: "nvarchar(12)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Adreses",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    City = table.Column<string>(type: "nvarchar(50)", nullable: false),
                    Street = table.Column<string>(type: "nvarchar(50)", nullable: false),
                    Phone = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PostalCode = table.Column<string>(type: "nvarchar(6)", nullable: false),
                    CandidateId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Adreses", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Adreses_Candidates_CandidateId",
                        column: x => x.CandidateId,
                        principalTable: "Candidates",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Boxes",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Speciesid = table.Column<int>(name: "Species_id", type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Boxes", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Boxes_Species_Species_id",
                        column: x => x.Speciesid,
                        principalTable: "Species",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "CandidateRequirements",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    SpeciesId = table.Column<int>(type: "int", nullable: false),
                    GenderId = table.Column<int>(type: "int", nullable: false),
                    CandidateId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CandidateRequirements", x => x.Id);
                    table.ForeignKey(
                        name: "FK_CandidateRequirements_Candidates_CandidateId",
                        column: x => x.CandidateId,
                        principalTable: "Candidates",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_CandidateRequirements_Genders_GenderId",
                        column: x => x.GenderId,
                        principalTable: "Genders",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_CandidateRequirements_Species_SpeciesId",
                        column: x => x.SpeciesId,
                        principalTable: "Species",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Races",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Value = table.Column<string>(type: "nvarchar(50)", nullable: false),
                    SpeciesId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Races", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Races_Species_SpeciesId",
                        column: x => x.SpeciesId,
                        principalTable: "Species",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Dens",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    BoxId = table.Column<int>(name: "Box_Id", type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Dens", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Dens_Boxes_Box_Id",
                        column: x => x.BoxId,
                        principalTable: "Boxes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AnimalCandidateRequirements",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CandidateRequirementId = table.Column<int>(type: "int", nullable: false),
                    CharacteristicId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AnimalCandidateRequirements", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AnimalCandidateRequirements_CandidateRequirements_CandidateRequirementId",
                        column: x => x.CandidateRequirementId,
                        principalTable: "CandidateRequirements",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_AnimalCandidateRequirements_Characteristics_CharacteristicId",
                        column: x => x.CharacteristicId,
                        principalTable: "Characteristics",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Animals",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(30)", nullable: false),
                    Weight = table.Column<int>(type: "int", nullable: false),
                    Age = table.Column<int>(type: "int", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(200)", nullable: false),
                    SpeciesId = table.Column<int>(name: "Species_Id", type: "int", nullable: false),
                    Raceid = table.Column<int>(name: "Race_id", type: "int", nullable: false),
                    Genderid = table.Column<int>(name: "Gender_id", type: "int", nullable: false),
                    DenId = table.Column<int>(name: "Den_Id", type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Animals", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Animals_Dens_Den_Id",
                        column: x => x.DenId,
                        principalTable: "Dens",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Animals_Genders_Gender_id",
                        column: x => x.Genderid,
                        principalTable: "Genders",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Animals_Races_Race_id",
                        column: x => x.Raceid,
                        principalTable: "Races",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Animals_Species_Species_Id",
                        column: x => x.SpeciesId,
                        principalTable: "Species",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "Adoptions",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Date = table.Column<DateTime>(type: "datetime2", nullable: false, defaultValueSql: "getutcdate()"),
                    AnimalId = table.Column<int>(name: "Animal_Id", type: "int", nullable: false),
                    CandidateId = table.Column<int>(name: "Candidate_Id", type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Adoptions", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Adoptions_Animals_Animal_Id",
                        column: x => x.AnimalId,
                        principalTable: "Animals",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Adoptions_Candidates_Candidate_Id",
                        column: x => x.CandidateId,
                        principalTable: "Candidates",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AnimalFutures",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CharaceristicId = table.Column<int>(name: "Characeristic_Id", type: "int", nullable: false),
                    AnimalId = table.Column<int>(name: "Animal_Id", type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AnimalFutures", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AnimalFutures_Animals_Animal_Id",
                        column: x => x.AnimalId,
                        principalTable: "Animals",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_AnimalFutures_Characteristics_Characeristic_Id",
                        column: x => x.CharaceristicId,
                        principalTable: "Characteristics",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Adoptions_Animal_Id",
                table: "Adoptions",
                column: "Animal_Id",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Adoptions_Candidate_Id",
                table: "Adoptions",
                column: "Candidate_Id");

            migrationBuilder.CreateIndex(
                name: "IX_Adreses_CandidateId",
                table: "Adreses",
                column: "CandidateId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_AnimalCandidateRequirements_CandidateRequirementId",
                table: "AnimalCandidateRequirements",
                column: "CandidateRequirementId");

            migrationBuilder.CreateIndex(
                name: "IX_AnimalCandidateRequirements_CharacteristicId",
                table: "AnimalCandidateRequirements",
                column: "CharacteristicId");

            migrationBuilder.CreateIndex(
                name: "IX_AnimalFutures_Animal_Id",
                table: "AnimalFutures",
                column: "Animal_Id");

            migrationBuilder.CreateIndex(
                name: "IX_AnimalFutures_Characeristic_Id",
                table: "AnimalFutures",
                column: "Characeristic_Id");

            migrationBuilder.CreateIndex(
                name: "IX_Animals_Den_Id",
                table: "Animals",
                column: "Den_Id",
                unique: true,
                filter: "[Den_Id] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_Animals_Gender_id",
                table: "Animals",
                column: "Gender_id");

            migrationBuilder.CreateIndex(
                name: "IX_Animals_Race_id",
                table: "Animals",
                column: "Race_id");

            migrationBuilder.CreateIndex(
                name: "IX_Animals_Species_Id",
                table: "Animals",
                column: "Species_Id");

            migrationBuilder.CreateIndex(
                name: "IX_Boxes_Species_id",
                table: "Boxes",
                column: "Species_id");

            migrationBuilder.CreateIndex(
                name: "IX_CandidateRequirements_CandidateId",
                table: "CandidateRequirements",
                column: "CandidateId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_CandidateRequirements_GenderId",
                table: "CandidateRequirements",
                column: "GenderId");

            migrationBuilder.CreateIndex(
                name: "IX_CandidateRequirements_SpeciesId",
                table: "CandidateRequirements",
                column: "SpeciesId");

            migrationBuilder.CreateIndex(
                name: "IX_Dens_Box_Id",
                table: "Dens",
                column: "Box_Id");

            migrationBuilder.CreateIndex(
                name: "IX_Races_SpeciesId",
                table: "Races",
                column: "SpeciesId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Adoptions");

            migrationBuilder.DropTable(
                name: "Adreses");

            migrationBuilder.DropTable(
                name: "AnimalCandidateRequirements");

            migrationBuilder.DropTable(
                name: "AnimalFutures");

            migrationBuilder.DropTable(
                name: "Users");

            migrationBuilder.DropTable(
                name: "CandidateRequirements");

            migrationBuilder.DropTable(
                name: "Animals");

            migrationBuilder.DropTable(
                name: "Characteristics");

            migrationBuilder.DropTable(
                name: "Candidates");

            migrationBuilder.DropTable(
                name: "Dens");

            migrationBuilder.DropTable(
                name: "Genders");

            migrationBuilder.DropTable(
                name: "Races");

            migrationBuilder.DropTable(
                name: "Boxes");

            migrationBuilder.DropTable(
                name: "Species");
        }
    }
}
