import { TextField, TextFieldProps } from "@mui/material";

interface InputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = (props: InputProps) => {
  const { value, onChange } = props;

  return (
    <TextField
      id="filled-basic"
      label="Search"
      variant="outlined"
      value={value}
      onChange={onChange}
    />
  );
};
