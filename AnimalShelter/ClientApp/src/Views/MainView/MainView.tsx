import axios from "axios";
import { useEffect, useState } from "react";
import AdoptionProcedureInfo from "../../Components/Molecules/AdoptionProcedureInfo/AdoptionProcedureInfo";
import PortalToAnimalsList from "../../Components/Molecules/PortalToAnimalsList/PortalToAnimalsList";
import { AnimalsToAdoptionAmount } from "../../Types/types";
import {
  MainViewHeader,
  MainViewHeaderIcon,
  MainViewHeaderWrapper,
  MainViewWrapper,
} from "./MainView.styles";

const MainView = () => {
  const [data, setData] = useState<AnimalsToAdoptionAmount | null>(null);

  useEffect(() => {
    axios
      .get("https://localhost:7121/Animal/Amount")
      .then((response) => {
        const data = response.data as AnimalsToAdoptionAmount;
        setData(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <MainViewWrapper>
      <MainViewHeaderWrapper>
        <MainViewHeaderIcon />
        <MainViewHeader>Adoptuj</MainViewHeader>
      </MainViewHeaderWrapper>
      <PortalToAnimalsList
        headerSubtext="psa"
        buttonSubstring="psiaki"
        spices={"Pies"}
        animalsToAdoptionAmount={data ? data.dogsAmount : 0}
      />
      <PortalToAnimalsList
        headerSubtext="kota"
        buttonSubstring="kotki"
        spices={"Kot"}
        animalsToAdoptionAmount={data ? data.catsAmount : 0}
      />

      <AdoptionProcedureInfo />
    </MainViewWrapper>
  );
};

export default MainView;
