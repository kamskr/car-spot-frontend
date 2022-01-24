import React from 'react';
import { ContentContainer } from 'layout/ContentContainer';
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { useAuth } from 'contexts';

export const MyCars = () => {
  const { user } = useAuth();

  if (!user) {
    return null;
  }
  // id: string;
  // carBrand: string;
  // model: string;
  // color: string;
  // registrationNumber: string;
  return (
    <>
      <ContentContainer style={{ display: 'flex', justifyContent: 'center' }}>
        <TableContainer
          component={Paper}
          style={{ maxWidth: '800px', margin: '20px', display: 'flex', flexDirection: 'column' }}
        >
          <Button variant="contained" onClick={() => console.log('test')} style={{ margin: '10px' }}>
            Add
          </Button>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell align="right">Car brand</TableCell>
                <TableCell align="right">Model</TableCell>
                <TableCell align="right">Color</TableCell>
                <TableCell align="right">Registration number</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {user?.cars.map((car) => (
                <TableRow key={car.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component="th" scope="row">
                    {car.id}
                  </TableCell>
                  <TableCell align="right">{car.carBrand}</TableCell>
                  <TableCell align="right">{car.model}</TableCell>
                  <TableCell align="right">{car.color}</TableCell>
                  <TableCell align="right">{car.registrationNumber}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </ContentContainer>
    </>
  );
};
