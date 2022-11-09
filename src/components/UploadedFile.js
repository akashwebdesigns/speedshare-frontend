import * as React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import FolderIcon from "@mui/icons-material/Folder";

import {
  Card,
  CardHeader,
  IconButton,
} from "@mui/material";

export default function UploadedFile({ file, deSelect }) {
  let fName = file.name;
  let result = fName.slice(0, 15) + (fName.length > 15 ? "..." : "");
  let size=Math.round(file.size / 1024) +" KB"
  return (
    <Card sx={{margin: 5,display:"flex",justifyContent:"center",alignItems:"center" }}>
      <CardHeader
        avatar={
            <FolderIcon fontSize="large" sx={{ color: "#f1c40f" }} />
        }
        title={result}
        subheader={size}
      />
       <IconButton sx={{margin:1}} onClick={() => deSelect()}>
          <DeleteIcon fontSize="large" color="error"    />
        </IconButton>
    </Card>
  );
}
