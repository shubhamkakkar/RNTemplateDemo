import React from 'react';

type TStateFormBottomSheet = {
  visible: boolean;
  toggleVisible: () => void;
};

export const StateContextFormSheet = React.createContext<
  TStateFormBottomSheet | undefined
>(undefined);
