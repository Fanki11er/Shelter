import { useEffect, useState } from "react";
import endpoints from "../../Api/endpoints";
import AdoptionsHistoryList from "../../Components/Organisms/AdoptionsHistoryList/AdoptionsHistoryList";
import useAxiosPrivate from "../../Hooks/useAxiosPrivate";
import { AdoptionsHistoryDto } from "../../Types/types";
import { AdoptionsHistoryViewWrapper } from "./AdoptionsHistoryView.styles";

const AdoptionsHistoryViewW = () => {
  const [adoptionsHistory, setAdoptionsHistory] = useState<
    AdoptionsHistoryDto[] | null
  >(null);
  const { adoptionsHistoryEndpoint } = endpoints;
  const axiosPrivate = useAxiosPrivate();

  useEffect(() => {
    axiosPrivate
      .get(adoptionsHistoryEndpoint)
      .then((response) => {
        const data = response.data as AdoptionsHistoryDto[];
        setAdoptionsHistory(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [axiosPrivate, adoptionsHistoryEndpoint]);
  return (
    <AdoptionsHistoryViewWrapper>
      {adoptionsHistory ? (
        <AdoptionsHistoryList information={adoptionsHistory} />
      ) : null}
    </AdoptionsHistoryViewWrapper>
  );
};

export default AdoptionsHistoryViewW;
