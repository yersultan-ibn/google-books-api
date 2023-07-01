import { TextField, TextFieldProps } from "@mui/material";

interface InputProps {}

export const Input = (props: InputProps) => {
  return (
    <TextField id="filled-basic" label="Search" variant="outlined" {...props} />
  );
};
