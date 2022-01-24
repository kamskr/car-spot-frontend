import AdapterDateFns from '@mui/lab/AdapterDateFns';
import DateTimePicker from '@mui/lab/DateTimePicker';
import LoadingButton from '@mui/lab/LoadingButton';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { Button, FormControlLabel, FormGroup, InputLabel, Switch, TextField, Typography } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import styled from '@xstyled/styled-components';
import { api } from 'api';
import { ParkingSpot, ParkingSpotDTO } from 'api/models';
import { CSModal } from 'components/CSModal';
import { useUser } from 'contexts';
import { add } from 'date-fns';
import { useParkingSpots } from 'features/SearchSpots/context/ParkingSpots.context';
import useApiRequest from 'hooks/useApiRequest';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

interface Props {
  parkingSpot: ParkingSpot;
  open: boolean;
  handleClose: () => void;
}

export const BookSpot = ({ parkingSpot, open, handleClose }: Props) => {
  const [dateStart, setDateStart] = useState<Date | null>(new Date());
  const [dateTo, setDateTo] = useState<Date | null>(add(new Date(), { hours: 1 }));
  const [allowContact, setAllowContact] = useState(!!parkingSpot?.allowContact);
  const [, setCarId] = useState('');
  const request = useApiRequest();
  const user = useUser();
  const { reloadParkingSpots } = useParkingSpots();
  const { handleSubmit, setValue, getValues } = useForm<ParkingSpotDTO>({
    defaultValues: {
      ...parkingSpot,
      dateStart: (parkingSpot?.dateStart && parkingSpot?.dateStart.toString()) || new Date().toString(),
      dateTo: (parkingSpot?.dateTo && parkingSpot?.dateTo.toString()) || add(new Date(), { hours: 1 }).toString(),
      car: parkingSpot?.car?.id || '',
      allowContact: !!parkingSpot?.allowContact,
      user: user?.id,
    },
  });

  const onSubmit = handleSubmit(async (data) => {
    await request.dispatch(api.updateParkingSpot(parkingSpot.id, data));
    handleClose();
    reloadParkingSpots();
  });

  return (
    <CSModal open={open} handleClose={handleClose}>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        Parking spot
      </Typography>

      {!parkingSpot.spotBusy || user?.id === parkingSpot.user?.id ? (
        <Form onSubmit={onSubmit}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateTimePicker
              label="Start date"
              value={dateStart}
              onChange={(date) => {
                setDateStart(date);
                setValue('dateStart', date?.toString());
              }}
              renderInput={(params) => <TextField {...params} />}
            />
            <DateTimePicker
              label="End date"
              value={dateTo}
              onChange={(date) => {
                setDateTo(date);
                setValue('dateTo', date?.toString());
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
          {user && user.cars && (
            <FormControl fullWidth>
              <InputLabel id="car">Car</InputLabel>
              <Select
                labelId="car"
                id="car-select"
                value={getValues('car')}
                label="Car"
                onChange={(e) => {
                  setValue('car', e.target.value);
                  setCarId(e.target.value);
                }}
              >
                {user.cars.map((car) => (
                  <MenuItem value={car.id}>
                    {car.id} ({car.carBrand}, {car.model}, {car.color})
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          )}
          <FormGroup aria-label="contact" row>
            <FormControlLabel
              value={allowContact}
              control={
                <Switch
                  checked={allowContact}
                  color="primary"
                  onChange={(e) => {
                    setValue('allowContact', e.target.checked);
                    setAllowContact(e.target.checked);
                  }}
                />
              }
              label="Allow contact"
              labelPlacement="start"
            />
          </FormGroup>

          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <Button variant="contained" color="error" onClick={handleClose}>
              Cancel
            </Button>
            <LoadingButton type="submit" variant="contained" loading={request.isLoading}>
              Book
            </LoadingButton>
          </div>
        </Form>
      ) : (
        parkingSpot && (
          <>
            <p>Date start: {parkingSpot.dateStart?.toString()}</p>
            <p>Date end: {parkingSpot.dateTo?.toString()}</p>
            <p>Lat: {parkingSpot.position.lat}</p>
            <p>Lng: {parkingSpot.position.lng}</p>
            <h4>Car</h4>
            <p>Brand: {parkingSpot.car?.carBrand}</p>
            <p>Model: {parkingSpot.car?.model}</p>
            <p>Color: {parkingSpot.car?.color}</p>
            <p>Plates: {parkingSpot.car?.registrationNumber}</p>

            {parkingSpot.allowContact && (
              <>
                <h4>Contact</h4>
                <p>Username: {parkingSpot.user?.username}</p>
                <p>Name: {parkingSpot.user?.name}</p>
                <p>Surname: {parkingSpot.user?.surname}</p>
                <p>Email: {parkingSpot.user?.email}</p>
              </>
            )}
          </>
        )
      )}
    </CSModal>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 500px;
  margin-top: 20px;
`;
