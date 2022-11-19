import axios from "axios";
import { useEffect, useState } from "react";
import AddAnimalForm from "../../Components/Organisms/AddAnimalForm/AddAnimalForm";
import { AddAnimalFormOptionsList } from "../../Types/types";
import { AddAnimalFormViewWrapper } from "./AddAnimalFormView.styles";

const AddAnimalFormView = () => {
  const [optionsList, setOptionsList] =
    useState<AddAnimalFormOptionsList | null>(null);

  useEffect(() => {
    axios
      .get(`https://localhost:7121/Animal/Options`)
      .then((response) => {
        const data = response.data as AddAnimalFormOptionsList;
        setOptionsList(data);
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <AddAnimalFormViewWrapper>
      {optionsList ? <AddAnimalForm optionsList={optionsList} /> : null}
    </AddAnimalFormViewWrapper>
  );
};

export default AddAnimalFormView;
