import { MediumButton } from "../../Atoms/Buttons/Buttons";
import {
  StatisticsFormWrapper,
  StatisticsHeader,
  TextStatistics,
} from "./StatisticsForm.styles";

const StatisticsForm = () => {
  return (
    <StatisticsFormWrapper>
      <StatisticsHeader>Statystyki</StatisticsHeader>
      <TextStatistics>Boks: 1 Gatunek: Psy Zajęte miejsca: 0 6</TextStatistics>
      <TextStatistics>Boks: 2 Gatunek: Koty Zajęte miejsca: 6 6</TextStatistics>
      <TextStatistics>Boks: 3 Gatunek: Psy Zajęte miejsca: 5 6</TextStatistics>
      <TextStatistics>Boks: 4 Gatunek: Psy Zajęte miejsca: 4 6</TextStatistics>
      <TextStatistics>Boks: 5 Gatunek: Koty Zajęte miejsca: 2 6</TextStatistics>
      <TextStatistics>Boks: 6 Gatunek: Psy Zajęte miejsca: 4 5</TextStatistics>

      <MediumButton>Cofnij</MediumButton>
    </StatisticsFormWrapper>
  );
};

export default StatisticsForm;
