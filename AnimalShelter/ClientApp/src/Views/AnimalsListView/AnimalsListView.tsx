import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { LongButton } from "../../Components/Atoms/Buttons/Buttons";
import AnimalsList from "../../Components/Organisms/AnimalsList/AnimalsList";
import { routes } from "../../Routes/Routes";
import { AnimalForAdoption, Species } from "../../Types/types";
import {
  AnimalsListViewHeader,
  AnimalsListViewWrapper,
  NoAnimalsInformation,
} from "./AnimalsListView.styles";

const AnimalsListView = () => {
  const location = useLocation();
  const [animalsList, setAnimalsList] = useState<AnimalForAdoption[] | null>(
    null
  );
  const { options } = routes;
  const species = location.state && (location.state.species as Species | null);

  useEffect(() => {
    if (species) {
      axios
        .get(`https://localhost:7121/Animal/List/${species}`)
        .then((response) => {
          const data = response.data as AnimalForAdoption[];
          setAnimalsList(data);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }, [species]);

  return (
    <AnimalsListViewWrapper>
      <AnimalsListViewHeader>
        {species ? `${species}ki` : ""}
      </AnimalsListViewHeader>
      {animalsList ? (
        <AnimalsList animalsList={animalsList} />
      ) : (
        <NoAnimalsInformation>
          Obecnie nie ma zwierzaków do wyświetlenia
        </NoAnimalsInformation>
      )}
      <LongButton as={Link} to={options}>
        Powrót
      </LongButton>
    </AnimalsListViewWrapper>
  );
};

export default AnimalsListView;
