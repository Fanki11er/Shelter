import { useFormikContext } from "formik";
import { AddPhotoFieldInput, AddPhotoFieldLabel } from "./AddPhotoField.styles";
type Props = {
  name: string;
  label: string;
  handleAddImage: (image: string) => void;
};

const AddPhotoField = (props: Props) => {
  const { name, label, handleAddImage } = props;
  const { setFieldValue } = useFormikContext();

  return (
    <AddPhotoFieldLabel>
      {label}
      <AddPhotoFieldInput
        name={name}
        type={"file"}
        accept={"image/*"}
        value={undefined}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          const files = e.currentTarget.files;
          if (files?.length) {
            setFieldValue("photo", files[0]);
            const imageUrl = URL.createObjectURL(files[0]);
            handleAddImage(imageUrl);
          }
        }}
      />
    </AddPhotoFieldLabel>
  );
};

export default AddPhotoField;
