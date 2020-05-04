import {LoginSignup} from '../Screens';

type TStackScreen = {
  name: string;
  component: () => React.ReactElement;
};

export const stackScreeenArray: TStackScreen[] = [
  {
    name: '',
    component: LoginSignup,
  },
];
