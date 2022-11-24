import axios from "axios";
import { useEffect, useState } from "react";
import AnimalAdoptionForm from "../../Components/Organisms/AnimalAdoptionForm/AnimalAdoptionForm";
import { AdoptionOptionsList } from "../../Types/types";
import { AnimalAdoptionViewWrapper } from "./AnimalAdoptionView.styles";

const AnimalAdoptionView = () => {
  const [optionsList, setOptionsList] = useState<AdoptionOptionsList | null>(
    null
  );

  useEffect(() => {
    axios
      .get(`https://localhost:7121/Adoption/Options`)
      .then((response) => {
        const data = response.data as AdoptionOptionsList;
        console.log(data);
        setOptionsList(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <AnimalAdoptionViewWrapper>
      {optionsList ? <AnimalAdoptionForm optionsList={optionsList} /> : null}
    </AnimalAdoptionViewWrapper>
  );
};
export default AnimalAdoptionView;
