import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { ParkingSpot } from 'api/models';
import styled from '@xstyled/styled-components';

interface Props {
  items: ParkingSpot[];
}

export const MySpotsList = ({ items }: Props) => {
  if (!items || !items.length) {
    return (
      <ListContainer>
        <Typography component="p">You have no spots reserved yet.</Typography>
      </ListContainer>
    );
  }
  return (
    <ListContainer>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', padding: 1 }}>
        {items.map((spot) => (
          <ListItem
            key={spot.id}
            disableGutters
            secondaryAction={
              <IconButton>
                <LocationOnIcon />
              </IconButton>
            }
          >
            <ListItemText primary={`Line item ${spot.dateStart}`} />
          </ListItem>
        ))}
      </List>
    </ListContainer>
  );
};

const ListContainer = styled.div`
  margin-top: 20px;
`;
