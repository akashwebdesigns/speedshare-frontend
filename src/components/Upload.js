import React, { useState } from "react";
import Button from '@mui/material/Button';
import UploadedFile from "./UploadedFile";
import axios from 'axios'
import Loader2 from "./Loader2";
import { useAlert } from "react-alert";
import Copy from "./Copy";
import ShareLinks from "./ShareLinks";
import './Upload.css'
import { Box } from "@mui/material";


const Upload = () => {
    const alert=useAlert();
    const [selected, setSelected] = useState(false);
    const [selectedFile, setSelectedFile] = useState();
    const [state,setState]=useState(false);
    const [link,setLink]=useState("");
    const [share,setShare]=useState(false);

    const deSelect=()=>{
        setSelected(false);
        setShare(false);
        setSelectedFile(null);
        alert.success("File deselected")
    }


    const selectHandler=(e)=>{
        const file=e.target.files[0];
        const fileSize=file.size/Math.pow(1024,2);
        if(fileSize>10){
            alert.error("Maximum upload size is 100MB");
        }
        else{
            setSelectedFile(file);
            setSelected(true);
        }
    }

    const uploadHandler=async(e)=>{
        e.preventDefault();
        setState(true);
        const myForm=new FormData();
        myForm.append("myfile",selectedFile);


        const config = { headers: { "Content-Type": "multipart/form-data" } };
        const HOSTED_API="https://speedshare.onrender.com/api/files/"
        // const LOCAL_API="http://localhost:3000/api/files/"

        axios.post(HOSTED_API, myForm, config).then((res)=>{
            if(res){
                setState(false);
                setShare(true);
                setLink(res.data.file);
            }
            alert.success("File Uploaded Successfully");
        })
        .catch((err)=>{
            console.log(err);
        })
           
    }
  return (
    <Box sx={{display:"flex",alignItems:"center",flexDirection:"column",marginTop:"2rem"}}>
        <h1>Share <span>Files</span> on the go!!</h1>
        <h1>To get started select the file from below</h1>
      <Button variant="contained" component="label">
        Select File
        <input hidden type="file" onChange={selectHandler} />
      </Button>
      {selected && <UploadedFile file={selectedFile} deSelect={deSelect} />}
      {selected && <Button variant="contained" onClick={uploadHandler} color="success">Upload File</Button>}
      {state && <Loader2 state={state} />}
      {share && <Copy link={link} />}
      {share && <ShareLinks link={link} />}
    </Box>
  );
};

export default Upload;
