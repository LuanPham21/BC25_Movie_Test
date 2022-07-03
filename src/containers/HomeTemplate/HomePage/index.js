import React from 'react'
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';

export default function HomePage() {

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  return (
    <div>HomePage
      <Button variant="contained">Contained</Button>
      <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />

      <h1 className='demo'>Hello Cybersoft</h1>
    </div>
  )
}
