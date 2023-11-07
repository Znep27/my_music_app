import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function Dashboard(props) {
  return (
    <Box
      component="form"
      sx={{
        display: "grid",
        width: "300px",
        height: "300px",
        gridGap: "10px",
        backgroundColor: "white",
        margin: "10px auto",
      }}
      noValidate
      autoComplete="o"
    >
      <TextField
        id="email-field"
        label="Email"
        variant="outlined"
        type="email"
        required
      ></TextField>
      <TextField
        id="password-field"
        label="Password"
        variant="outlined"
        type="password"
        required
      ></TextField>
      <Button
        variant="contained"
        onClick={() => {
          props.setLoggedIn(true);
        }}
      >
        Login
      </Button>
    </Box>
  );
}

export default Dashboard;