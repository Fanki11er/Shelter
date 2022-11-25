import styled from "styled-components";

type Props = {
  width?: string;
};

export const InputFieldWrapper = styled.div`
  width: ${(props: Props) => (props.width ? props.width : "300px")};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
