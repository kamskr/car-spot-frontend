import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { ParkingSpot } from 'api/models';
import styled from '@xstyled/styled-components';
import { useUser } from 'contexts';

export const MySpotsList = () => {
  const user = useUser();

  if (!user || !user.parking_spots || !user.parking_spots.length) {
    return (
      <ListContainer>
        <Typography component="p">You have no spots reserved yet.</Typography>
      </ListContainer>
    );
  }

  return (
    <ListContainer>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', padding: 1 }}>
        {user.parking_spots.map((spot) => (
          <ListItem
            key={spot}
            disableGutters
            secondaryAction={
              <IconButton>
                <LocationOnIcon />
              </IconButton>
            }
          >
            <ListItemText primary={`Spot id ${spot}`} />
          </ListItem>
        ))}
      </List>
    </ListContainer>
  );
};

const ListContainer = styled.div`
  margin-top: 20px;
`;
