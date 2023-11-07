import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";

function MasterVolume(props) {
  return (
    <Box>
      <Card className="card" variant="outlined">
        <CardContent>
          <Typography variant="h5" component="div">
            Master Volume
          </Typography>
          <Typography variant="body2">
            Overrides all other sound settings in this application
          </Typography>
        </CardContent>
        <Slider
          aria-label="Temperature"
          defaultValue={30}
          valueLabelDisplay="auto"
          step={10}
          marks
          min={10}
          max={100}
          onChange={(event) => {
            props.setVolume(Number(event.target.value));
          }}
        />
      </Card>
    </Box>
  );
}

export default MasterVolume;