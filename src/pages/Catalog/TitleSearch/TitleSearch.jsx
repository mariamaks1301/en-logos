import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import  { throttle }  from 'lodash';



export default function TitleSearch({title, setTitle}) {

    const handleChangeTitle = (e) => {
        setTitle(e.target.value);
    }


  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { width: '19ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField value={title} onChange={throttle(handleChangeTitle, 1000)} id="standard-basic" label="Title Search" variant="standard" />
    </Box>
  );
}

