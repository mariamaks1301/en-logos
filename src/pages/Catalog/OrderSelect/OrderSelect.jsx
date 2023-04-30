import * as React from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


export default function OrderSelect({order, setOrder}) {


  const handleChange = (e) => {
    setOrder(e.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Order</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={order}
          label="Order"
          onChange={handleChange}
          className='catalog__aside-label catalog__aside-select'
        >
            <MenuItem className='catalog__aside-item'  value={'default'}>Default</MenuItem>
            <MenuItem className='catalog__aside-item'  value={'desc'}>Descending</MenuItem>
            <MenuItem className='catalog__aside-item'  value={'asc'}>Ascending</MenuItem>
            <MenuItem className='catalog__aside-item'  value={'abc'}>Аlphabetically</MenuItem>
            <MenuItem className='catalog__aside-item'  value={'weight'}>Weight</MenuItem>
            <MenuItem className='catalog__aside-item'  value={'ccal'}>Ccal</MenuItem>

        
        </Select>
      </FormControl>
    </Box>
  );
}