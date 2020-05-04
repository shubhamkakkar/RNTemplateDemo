import React, {Dispatch, SetStateAction} from 'react';

export default function useBooleabState(
  defaultState?: boolean,
): [boolean, () => void, Dispatch<SetStateAction<boolean>>] {
  const [state, setState] = React.useState<boolean>(() => !!defaultState);
  function toggleState() {
    setState(!state);
  }
  return [state, toggleState, setState];
}
