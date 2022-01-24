import React from 'react';
import styled from '@xstyled/styled-components';
import MUIDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import { Link } from 'react-router-dom';
import { routes } from 'routes/routes';

interface Props {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

export const Drawer = ({ isOpen, setIsOpen }: Props) => {
  const list = (
    <Box role="presentation" onClick={() => setIsOpen(false)}>
      <List>
        <Link to={routes.myCars} style={{ color: 'black', textDecoration: 'none' }}>
          <ListItem button>
            <ListItemIcon>
              <DirectionsCarIcon />
            </ListItemIcon>
            <ListItemText primary="My cars" />
          </ListItem>
        </Link>
      </List>
    </Box>
  );
  return (
    <MUIDrawer anchor="left" open={isOpen} onClose={() => setIsOpen(false)}>
      {list}
    </MUIDrawer>
  );
};
