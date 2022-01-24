import React from 'react';
import { Button, TextField, Typography } from '@mui/material';
import { CSModal } from 'components/CSModal';
import { useForm } from 'react-hook-form';

import { ParkingSpotDTO, Position } from 'api/models';
import useApiRequest from 'hooks/useApiRequest';
import LoadingButton from '@mui/lab/LoadingButton';
import styled from '@xstyled/styled-components';
import { api } from 'api';
import { useParkingSpots } from 'features/SearchSpots/context/ParkingSpots.context';

interface Props {
  position: Position;
  open: boolean;
  handleClose: () => void;
}

export const AddSpot = ({ open, handleClose, position }: Props) => {
  const { register, handleSubmit } = useForm<ParkingSpotDTO>({ defaultValues: { position } });
  const request = useApiRequest();
  const { reloadParkingSpots } = useParkingSpots();

  const onSubmit = handleSubmit(async (data) => {
    await request.dispatch(api.createParkingSpot(data));
    handleClose();
    reloadParkingSpots();
  });

  return (
    <CSModal open={open} handleClose={handleClose}>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        Add new spot
      </Typography>
      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        This will be added to our data base and marked as available.
      </Typography>
      <Form onSubmit={onSubmit}>
        <TextField
          {...register('position.lat')}
          type="number"
          inputProps={{ step: 'any' }}
          label="Lat"
          variant="standard"
        />
        <TextField {...register('position.lng')} type="number" inputProps={{ step: 'any' }} variant="standard" />
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <Button variant="contained" color="error" onClick={handleClose}>
            Cancel
          </Button>
          <LoadingButton type="submit" variant="contained" loading={request.isLoading}>
            Add spot
          </LoadingButton>
        </div>
      </Form>
    </CSModal>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 500px;
`;
