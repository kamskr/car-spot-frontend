import React from 'react';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import styled from '@xstyled/styled-components';

export const SpotsList = () => {
  return (
    <SideListContainer>
      <Typography variant="h4" component="h2">
        My spots
      </Typography>
      <Button>Login to see your spots</Button>

      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', padding: 1 }}>
        {[1, 2, 3].map((value) => (
          <ListItem
            key={value}
            disableGutters
            secondaryAction={
              <IconButton>
                <LocationOnIcon />
              </IconButton>
            }
          >
            <ListItemText primary={`Line item ${value}`} />
          </ListItem>
        ))}
      </List>
    </SideListContainer>
  );
};

const SideListContainer = styled.div`
  width: 400px;
  max-height: 100%;
  overflow-y: auto;
  padding: 10px 10px 0 10px;
`;
