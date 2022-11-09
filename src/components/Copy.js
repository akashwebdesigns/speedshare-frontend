import React from "react";
import { useAlert } from "react-alert";
import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import styled from "@emotion/styled";
import copy from "copy-to-clipboard";  

const MyBox = styled(Box)(({ theme }) => ({
  width: "80%",
  margin: "2rem",
  display: "flex",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    gap:20
  },
}));


const MyButton = styled(Button)(({ theme }) => ({
  backgroundColor: "rgb(241,196,15)",
  height:"3.5rem",
  "&:hover":{
    backgroundColor:"rgb(224, 182, 16)"
  },
}));

const Copy = ({ link }) => {

  const alert = useAlert();
  const handleCopy = () => {
    copy(link);

    alert.success("Link Copied to Clipboard");
  };
  return (
    <MyBox>
      <TextField
        disabled
        fullWidth
        id="outlined-basic"
        variant="outlined"
        value={link}
      />
      <MyButton disableElevation onClick={handleCopy} variant="contained" >
        Copy to Clipboard
      </MyButton>
    </MyBox>
  );
};

export default Copy;
