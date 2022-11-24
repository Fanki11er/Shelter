import axios from "axios";
import { useEffect, useState } from "react";
import AdoptionsHistoryList from "../../Components/Organisms/AdoptionsHistoryList/AdoptionsHistoryList";
import { AdoptionsHistoryDto } from "../../Types/types";
import { AdoptionsHistoryViewWrapper } from "./AdoptionsHistoryView.styles";

const AdoptionsHistoryViewW = () => {
  const [adoptionsHistory, setAdoptionsHistory] = useState<
    AdoptionsHistoryDto[] | null
  >(null);

  useEffect(() => {
    axios
      .get(`https://localhost:7121/Adoption/History`)
      .then((response) => {
        const data = response.data as AdoptionsHistoryDto[];
        setAdoptionsHistory(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <AdoptionsHistoryViewWrapper>
      {adoptionsHistory ? (
        <AdoptionsHistoryList information={adoptionsHistory} />
      ) : null}
    </AdoptionsHistoryViewWrapper>
  );
};

export default AdoptionsHistoryViewW;
