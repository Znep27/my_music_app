import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function SoundQuality(props) {
  const [quality, setQuality] = React.useState("");

  const handleChange = (event) => {
    props.setSoundQuality(Number(event.target.value));
    setQuality(Number(event.target.value));
    console.log(event.target.value);
  };

  return (
    <Box>
      <Card className="card" variant="outlined">
        <CardContent>
          <Typography variant="h5" component="div">
            Sound Quality
          </Typography>
          <Typography variant="body2">
            Manually control the music quality in event of poor connection
          </Typography>
        </CardContent>
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <InputLabel id="demo-simple-select-label">Quality</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={quality}
            label="Quality"
            onChange={handleChange}
          >
            <MenuItem value={1}>Low</MenuItem>
            <MenuItem value={2}>Normal</MenuItem>
            <MenuItem value={3}>High</MenuItem>
          </Select>
        </FormControl>
      </Card>
    </Box>
  );
}

export default SoundQuality;