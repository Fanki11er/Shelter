import { useEffect, useState } from "react";
import endpoints from "../../Api/endpoints";
import AddAnimalForm from "../../Components/Organisms/AddAnimalForm/AddAnimalForm";
import useAxiosPrivate from "../../Hooks/useAxiosPrivate";
import { AddAnimalFormOptionsList } from "../../Types/types";
import { AddAnimalFormViewWrapper } from "./AddAnimalFormView.styles";

const AddAnimalFormView = () => {
  const [optionsList, setOptionsList] =
    useState<AddAnimalFormOptionsList | null>(null);
  const axiosPrivate = useAxiosPrivate();
  const { animalOptions } = endpoints;

  useEffect(() => {
    axiosPrivate
      .get(animalOptions)
      .then((response) => {
        const data = response.data as AddAnimalFormOptionsList;
        setOptionsList(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [axiosPrivate, animalOptions]);
  return (
    <AddAnimalFormViewWrapper>
      {optionsList ? <AddAnimalForm optionsList={optionsList} /> : null}
    </AddAnimalFormViewWrapper>
  );
};

export default AddAnimalFormView;
