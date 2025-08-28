import * as React from 'react';
import Button from '@mui/material/Button';

export default function Demo({func}) {
  return <Button variant="contained" onClick = {func}>CLICK HERE</Button>;
}