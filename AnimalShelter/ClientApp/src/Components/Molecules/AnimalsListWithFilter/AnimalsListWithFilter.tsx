import { SelectOption } from "../../../Types/types";
import CheckboxField from "../CheckboxField/CheckboxField";
import {
  AnimalsCheckboxLabel,
  AnimalsListWithFilterRow,
  AnimalsListWithFilterWrapper,
} from "./AnimalsListWithFilter.styles";

type Props = {
  animalsList: SelectOption[];
  characteristics: SelectOption[];
};

const AnimalsListWithFilter = (props: Props) => {
  const { animalsList, characteristics } = props;

  const renderRows = (animalsList: SelectOption[]) => {
    return animalsList.map((animal) => {
      return (
        <AnimalsListWithFilterRow key={animal.id}>
          <AnimalsCheckboxLabel>{animal.value}</AnimalsCheckboxLabel>
          <CheckboxField
            name={"adoptedAnimals"}
            value={animal.id.toString()}
            label={""}
          />
        </AnimalsListWithFilterRow>
      );
    });
  };
  return (
    <AnimalsListWithFilterWrapper>
      {renderRows(animalsList)}
    </AnimalsListWithFilterWrapper>
  );
};

export default AnimalsListWithFilter;
