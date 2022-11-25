import { useEffect, useState } from "react";
import endpoints from "../../Api/endpoints";
import AnimalAdoptionForm from "../../Components/Organisms/AnimalAdoptionForm/AnimalAdoptionForm";
import useAxiosPrivate from "../../Hooks/useAxiosPrivate";
import { AdoptionOptionsList } from "../../Types/types";
import { AnimalAdoptionViewWrapper } from "./AnimalAdoptionView.styles";

const AnimalAdoptionView = () => {
  const [optionsList, setOptionsList] = useState<AdoptionOptionsList | null>(
    null
  );
  const { adoptionOptions } = endpoints;
  const axiosPrivate = useAxiosPrivate();

  useEffect(() => {
    axiosPrivate
      .get(adoptionOptions)
      .then((response) => {
        const data = response.data as AdoptionOptionsList;
        setOptionsList(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [axiosPrivate, adoptionOptions]);

  return (
    <AnimalAdoptionViewWrapper>
      {optionsList ? <AnimalAdoptionForm optionsList={optionsList} /> : null}
    </AnimalAdoptionViewWrapper>
  );
};
export default AnimalAdoptionView;
