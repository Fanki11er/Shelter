import axios from "axios";
import { useEffect, useState } from "react";
import StatisticsForm from "../../Components/Organisms/StatisticsForm/StatisticsForm";
import { BoxesStatisticsDto } from "../../Types/types";
import { StatisticsViewWrapper } from "./StatisticsView.styles";

const StatisticsView = () => {
  const [optionsList, setOptionsList] = useState<BoxesStatisticsDto[] | null>(
    null
  );

  useEffect(() => {
    axios
      .get(`https://localhost:7121/Animal/Statistics`)
      .then((response) => {
        const data = response.data as BoxesStatisticsDto[];
        setOptionsList(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <StatisticsViewWrapper>
      {optionsList ? <StatisticsForm statistics={optionsList} /> : null}
    </StatisticsViewWrapper>
  );
};

export default StatisticsView;
