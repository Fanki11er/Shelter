import { useField, useFormikContext } from "formik";
import { useEffect, useState } from "react";
import { SelectOption } from "../../../Types/types";
import {
  FormDependableValues,
  MyFormValues,
} from "../../Organisms/AddAnimalForm/AddAnimalForm";
import {
  HiddenStyledOption,
  SelectInputFieldLabel,
  SelectInputFieldWrapper,
  StyledOption,
  StyledSelect,
} from "../SelectInputField/SelectInputField.styled";
type Props = {
  label: string;
  name: string;
  options: SelectOption[];
  placeholder: string;
  valueName: FormDependableValues;
};

const DependableSelectInputField = (props: Props) => {
  const { label, name, options, placeholder, valueName } = props;
  const [field, meta] = useField(name);
  const [filteredOptions, setFilteredOption] = useState<SelectOption[]>([]);
  const { values, setFieldValue } = useFormikContext<MyFormValues>();
  const [prevValue, setPrevValue] = useState(0);

  useEffect(() => {
    if (prevValue !== values[valueName]) {
      setPrevValue(values[valueName]);
      setFieldValue(name, 0);
    }
    /* eslint-disable */
  }, [values]);

  useEffect(() => {
    const property = values[valueName];
    if (property === 0) {
    } else {
      setFilteredOption(
        options.filter((el) => {
          return el.additionalValue === Number(property);
        })
      );
    }
  }, [options, valueName, values, setFieldValue]);

  const renderOptions = (options: SelectOption[]) => {
    return options.map((option) => {
      const { id, value } = option;
      return <StyledOption key={id} value={id}>{`${value}`}</StyledOption>;
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
        disabled={values[valueName] === 0 ? true : false}
      >
        <HiddenStyledOption disabled value={0}>
          {placeholder}
        </HiddenStyledOption>
        {renderOptions(filteredOptions)}
      </StyledSelect>
    </SelectInputFieldWrapper>
  );
};

export default DependableSelectInputField;
