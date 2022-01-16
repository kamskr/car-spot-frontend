import React from 'react';
import { TextField, Typography } from '@mui/material';
import { CSModal } from 'components/CSModal';
import { useForm } from 'react-hook-form';
import { ParkingSpot } from 'api/models';
import useApiRequest from 'hooks/useApiRequest';
import LoadingButton from '@mui/lab/LoadingButton';

interface Props {
  open: boolean;
  handleClose: (event: Event) => void;
}

export const AddSpot = ({ open, handleClose }: Props) => {
  const { register, handleSubmit } = useForm<ParkingSpot>();
  const request = useApiRequest();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <CSModal open={open} handleClose={handleClose}>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        Add new spot
      </Typography>
      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
      </Typography>
      <Form onSubmit={onSubmit}>
        <TextField {...register('position.lat')} label="Login or Email" variant="standard" />
        <TextField {...register('position.lng')} type="password" label="Password" variant="standard" />

        <LoadingButton type="submit" variant="contained" loading={request.isLoading}>
          Add spot
        </LoadingButton>
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
