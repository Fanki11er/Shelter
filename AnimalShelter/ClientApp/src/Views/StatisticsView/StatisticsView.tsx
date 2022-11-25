import { useEffect, useState } from "react";
import endpoints from "../../Api/endpoints";
import StatisticsForm from "../../Components/Organisms/StatisticsForm/StatisticsForm";
import useAxiosPrivate from "../../Hooks/useAxiosPrivate";
import { BoxesStatisticsDto } from "../../Types/types";
import { StatisticsViewWrapper } from "./StatisticsView.styles";

const StatisticsView = () => {
  const [optionsList, setOptionsList] = useState<BoxesStatisticsDto[] | null>(
    null
  );

  const { statisticsEndpoint } = endpoints;
  const axiosPrivate = useAxiosPrivate();

  useEffect(() => {
    axiosPrivate
      .get(statisticsEndpoint)
      .then((response) => {
        const data = response.data as BoxesStatisticsDto[];
        setOptionsList(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [axiosPrivate, statisticsEndpoint]);
  return (
    <StatisticsViewWrapper>
      {optionsList ? <StatisticsForm statistics={optionsList} /> : null}
    </StatisticsViewWrapper>
  );
};

export default StatisticsView;
