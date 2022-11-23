import axios from "axios";
import { useEffect, useState } from "react";
import AddCandidateForm from "../../Components/Organisms/AddCandidateForm/AddCandidateForm";
import { AddCandidateFormOptionsList } from "../../Types/types";
import { AddCandidateFormViewWrapper } from "./AddCandidateView.styles";

const AddCandidateView = () => {
  const [optionsList, setOptionsList] =
    useState<AddCandidateFormOptionsList | null>(null);

  useEffect(() => {
    axios
      .get(`https://localhost:7121/Candidate/Options`)
      .then((response) => {
        const data = response.data as AddCandidateFormOptionsList;
        setOptionsList(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <AddCandidateFormViewWrapper>
      {optionsList ? <AddCandidateForm optionsList={optionsList} /> : null}
    </AddCandidateFormViewWrapper>
  );
};

export default AddCandidateView;
