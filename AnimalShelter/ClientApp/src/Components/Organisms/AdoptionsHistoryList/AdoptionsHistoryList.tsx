import { Link } from "react-router-dom";
import { routes } from "../../../Routes/Routes";
import { AdoptionsHistoryDto } from "../../../Types/types";
import { LongButton } from "../../Atoms/Buttons/Buttons";
import {
  AdoptionHistoryInfo,
  AdoptionsHistoryListContainer,
  AdoptionsHistoryListElement,
  AdoptionsHistoryListHeader,
  AdoptionsHistoryListWrapper,
  NoElementsInfo,
} from "./AdoptionsHistoryList.styles";

type Props = {
  information: AdoptionsHistoryDto[];
};
const AdoptionsHistoryList = (props: Props) => {
  const { information } = props;
  const { options } = routes;

  const renderListElements = (infos: AdoptionsHistoryDto[]) => {
    return infos.map((info, index) => {
      return (
        <AdoptionsHistoryListElement key={index}>
          <AdoptionHistoryInfo>{info.information}</AdoptionHistoryInfo>
        </AdoptionsHistoryListElement>
      );
    });
  };

  return (
    <AdoptionsHistoryListContainer>
      <AdoptionsHistoryListHeader>Historia adopcji</AdoptionsHistoryListHeader>
      {information.length ? (
        <AdoptionsHistoryListWrapper>
          {renderListElements(information)}
        </AdoptionsHistoryListWrapper>
      ) : (
        <NoElementsInfo>Brak elementów do wyświetlenia</NoElementsInfo>
      )}
      <LongButton as={Link} to={options}>
        Powrót
      </LongButton>
    </AdoptionsHistoryListContainer>
  );
};

export default AdoptionsHistoryList;
