import {useState, SetStateAction, Dispatch} from 'react';

export default function useStringState(
  iniitalString?: string,
): [string, Dispatch<SetStateAction<string>>] {
  const [string, setString] = useState<string>(iniitalString || '');
  return [string, setString];
}
