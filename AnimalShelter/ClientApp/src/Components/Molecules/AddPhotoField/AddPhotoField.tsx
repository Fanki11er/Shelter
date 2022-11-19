import { AddPhotoFieldInput, AddPhotoFieldLabel } from "./AddPhotoField.styles";
type Props = {
  name: string;
  label: string;
};

const AddPhotoField = (props: Props) => {
  const { name, label } = props;
  return (
    <AddPhotoFieldLabel>
      {label}
      <AddPhotoFieldInput name={name} type={"file"} />
    </AddPhotoFieldLabel>
  );
};

export default AddPhotoField;
