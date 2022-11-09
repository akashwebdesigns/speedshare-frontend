import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

export default function Loader2({state}) {

  return (
    <div style={{height:'100vh',display: 'flex', justifyContent: 'center', alignItems:'center'}}>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={state}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}
