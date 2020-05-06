import React from 'react';

type TStateForgetPasswordBottomSheet = {
  visible: boolean;
  toggleVisible: () => void;
};

export const StateContextForgetPassword = React.createContext<
  TStateForgetPasswordBottomSheet | undefined
>(undefined);
