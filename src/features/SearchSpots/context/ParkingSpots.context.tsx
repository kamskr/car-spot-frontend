import React, { createContext, FC, useContext } from 'react';
import { ParkingSpotsState } from 'features/SearchSpots/context/ParkingSpots.types';
import { useParkingSpotsActions } from './ParkingSpots.actions';

export const ParkingSpotsContext = createContext<ParkingSpotsState>({} as ParkingSpotsState);

export const ParkingSpotsProvider: FC = ({ children }) => {
  const { parkingSpots } = useParkingSpotsActions();
  return (
    <ParkingSpotsContext.Provider
      value={{
        isLoading: false,
        parkingSpots,
      }}
    >
      {children}
    </ParkingSpotsContext.Provider>
  );
};

export const useParkingSpots = () => useContext<ParkingSpotsState>(ParkingSpotsContext);
