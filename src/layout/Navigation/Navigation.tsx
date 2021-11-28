import React, { useState } from 'react';
import { AppBar } from './AppBar';
import { Drawer } from './Drawer';

export const Navigation = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <AppBar openDrawer={() => setIsDrawerOpen(true)} />
      <Drawer isOpen={isDrawerOpen} setIsOpen={setIsDrawerOpen} />
    </>
  );
};
