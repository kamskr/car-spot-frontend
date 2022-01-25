import React, { useState } from 'react';
import { ContentContainer } from 'layout/ContentContainer';
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { useAuth } from 'contexts';
import { MyCarsForm } from 'features/MyCars/components';
import { Car } from 'api/models';

export const MyCars = () => {
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const { user } = useAuth();

  if (!user) {
    return null;
  }

  return (
    <>
      <ContentContainer style={{ display: 'flex', justifyContent: 'center' }}>
        <TableContainer
          component={Paper}
          style={{ maxWidth: '800px', margin: '20px', display: 'flex', flexDirection: 'column' }}
        >
          <Button variant="contained" onClick={() => setIsFormOpen(true)} style={{ margin: '10px' }}>
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
                <TableRow
                  key={car.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  onClick={() => {
                    setSelectedCar(car);
                    setIsFormOpen(true);
                  }}
                >
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
      {isFormOpen && (
        <MyCarsForm
          car={selectedCar}
          open={isFormOpen}
          handleClose={() => {
            setSelectedCar(null);
            setIsFormOpen(false);
          }}
        />
      )}
    </>
  );
};
