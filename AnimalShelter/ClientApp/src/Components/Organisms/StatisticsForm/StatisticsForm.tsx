import { Link } from "react-router-dom";
import { routes } from "../../../Routes/Routes";
import { BoxesStatisticsDto } from "../../../Types/types";
import { LongButton } from "../../Atoms/Buttons/Buttons";
import {
  ColoredSpan,
  StatisticInfo,
  StatisticsFormWrapper,
  StatisticsHeader,
  StatisticsList,
  TextStatisticsElement,
} from "./StatisticsForm.styles";

type Props = {
  statistics: BoxesStatisticsDto[];
};

const StatisticsForm = (props: Props) => {
  const { statistics } = props;
  const { options } = routes;

  const renderElements = (statistics: BoxesStatisticsDto[]) => {
    return statistics.map((statistic, index) => {
      const { information, allDens, usedDens } = statistic;
      console.log(usedDens, allDens);
      return (
        <TextStatisticsElement key={index}>
          <StatisticInfo>{information}</StatisticInfo>
          <ColoredSpan
            amount={allDens / usedDens}
          >{`${usedDens} / ${allDens}`}</ColoredSpan>
        </TextStatisticsElement>
      );
    });
  };
  return (
    <StatisticsFormWrapper>
      <StatisticsHeader>Statystyki</StatisticsHeader>

      <StatisticsList>
        {statistics.length ? renderElements(statistics) : null}
      </StatisticsList>
      <LongButton as={Link} to={options}>
        Powrót
      </LongButton>
    </StatisticsFormWrapper>
  );
};

export default StatisticsForm;
