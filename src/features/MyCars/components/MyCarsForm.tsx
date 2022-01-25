import LoadingButton from '@mui/lab/LoadingButton';
import { Button, TextField, Typography } from '@mui/material';
import styled from '@xstyled/styled-components';
import { api } from 'api';
import { Car } from 'api/models';
import { CSModal } from 'components/CSModal';
import { useAuth } from 'contexts';
import useApiRequest from 'hooks/useApiRequest';
import React from 'react';
import { useForm } from 'react-hook-form';

interface Props {
  car: Car | null;
  open: boolean;
  handleClose: () => void;
}

export const MyCarsForm = ({ car, open, handleClose }: Props) => {
  const { reloadUser, user } = useAuth();
  const { register, handleSubmit } = useForm<Car>({
    defaultValues: {
      user: user?.id || '',
      carBrand: car?.carBrand || '',
      model: car?.model || '',
      color: car?.color || '',
      registrationNumber: car?.registrationNumber || '',
    },
  });

  const request = useApiRequest();

  const onSubmit = handleSubmit(async (data) => {
    if (!car) {
      await request.dispatch(api.createCar(data));
    } else {
      await request.dispatch(api.updateCar(car.id || '', data));
    }
    handleClose();
    reloadUser();
  });

  const onDelete = async () => {
    await request.dispatch(api.deleteCar(car?.id || ''));
    handleClose();
    reloadUser();
  };

  return (
    <CSModal open={open} handleClose={handleClose}>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        Car form
      </Typography>
      <Form onSubmit={onSubmit}>
        <TextField {...register('carBrand')} variant="standard" label="Brand" />
        <TextField {...register('model')} variant="standard" label="Model" />
        <TextField {...register('color')} variant="standard" label="Color" />
        <TextField {...register('registrationNumber')} variant="standard" label="Registration number" />
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          {car ? (
            <Button variant="contained" color="error" onClick={onDelete}>
              Delete
            </Button>
          ) : (
            <Button variant="contained" color="error" onClick={handleClose}>
              Cancel
            </Button>
          )}
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
