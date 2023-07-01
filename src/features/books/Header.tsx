import { Box, Typography } from "@mui/material";
import { Input } from "./Input";

export const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };
  return (
    <Box className="header">
      <Typography
        component={"h1"}
        sx={{
          "font-size": "30px",
        }}
      >
        Search for books
      </Typography>
      <Input value={searchQuery} onChange={handleInputChange} />;
    </Box>
  );
};
