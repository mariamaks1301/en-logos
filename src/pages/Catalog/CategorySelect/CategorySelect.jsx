import * as React from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { menuData } from '../../../utils/menuData';

export default function CategorySelect() {
  const {category} = useParams();
  const navigate = useNavigate();

  const handleChange = (e) => {
    navigate(`/catalog/${e.target.value}`)
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          label="Category"
          onChange={handleChange}
          className='catalog__aside-label catalog__aside-select'
        >
            <MenuItem className='catalog__aside-item'  value={'all'}>All Categories</MenuItem>
            {
                menuData.map(item => (
                    <MenuItem className='catalog__aside-item' key={item.category} value={item.category}>{item.name}</MenuItem>
                ))
            }
          
          
        </Select>
      </FormControl>
    </Box>
  );
}