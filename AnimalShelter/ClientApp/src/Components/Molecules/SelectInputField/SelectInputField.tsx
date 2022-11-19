import { useField } from "formik";
import { SelectOption } from "../../../Types/types";
import {
  StyledSelect,
  SelectInputFieldLabel,
  SelectInputFieldWrapper,
  StyledOption,
  HiddenStyledOption,
} from "./SelectInputField.styled";
type Props = {
  label: string;
  name: string;
  options: SelectOption[];
  placeholder: string;
  disabled: boolean;
};

const SelectInputField = (props: Props) => {
  const { label, name, options, placeholder, disabled } = props;
  const [field, meta] = useField(name);

  const figurePicture = (value: string) => {
    switch (value) {
      case "Pies": {
        return "🐶";
      }
      case "Kot": {
        return "🐱";
      }
      default: {
        return "";
      }
    }
  };
  const renderOptions = (options: SelectOption[]) => {
    return options.map((option) => {
      const { id, value } = option;
      return (
        <StyledOption key={id} value={id}>{`${value} ${figurePicture(
          value
        )}`}</StyledOption>
      );
    });
  };
  return (
    <SelectInputFieldWrapper>
      <SelectInputFieldLabel>{label}</SelectInputFieldLabel>

      <StyledSelect
        as={"select"}
        name={name}
        value={meta.value}
        onChange={field.onChange}
        disabled={disabled}
      >
        <HiddenStyledOption disabled value={0}>
          {placeholder}
        </HiddenStyledOption>
        {renderOptions(options)}
      </StyledSelect>
    </SelectInputFieldWrapper>
  );
};

export default SelectInputField;
