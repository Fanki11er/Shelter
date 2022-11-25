import { useEffect, useState } from "react";
import endpoints from "../../Api/endpoints";
import AddCandidateForm from "../../Components/Organisms/AddCandidateForm/AddCandidateForm";
import useAxiosPrivate from "../../Hooks/useAxiosPrivate";
import { AddCandidateFormOptionsList } from "../../Types/types";
import { AddCandidateFormViewWrapper } from "./AddCandidateView.styles";

const AddCandidateView = () => {
  const [optionsList, setOptionsList] =
    useState<AddCandidateFormOptionsList | null>(null);
  const { candidateOptions } = endpoints;
  const axiosPrivate = useAxiosPrivate();

  useEffect(() => {
    axiosPrivate
      .get(candidateOptions)
      .then((response) => {
        const data = response.data as AddCandidateFormOptionsList;
        setOptionsList(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [axiosPrivate, candidateOptions]);
  return (
    <AddCandidateFormViewWrapper>
      {optionsList ? <AddCandidateForm optionsList={optionsList} /> : null}
    </AddCandidateFormViewWrapper>
  );
};

export default AddCandidateView;
