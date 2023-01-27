import { FormInputLabel, Group, Input } from "./form-input.styles";

const FormInput = ({ title, ...otherProps }) => {
  return (
    <Group>
      <Input {...otherProps} />

      {title && (
        <FormInputLabel shrink={otherProps.value.length}>
          {title}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
