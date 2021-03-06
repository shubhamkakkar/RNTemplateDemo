import {LoginSignup, FeaturesAndCommandScreen} from '../Screens';

type TStackScreen = {
  name: string;
  component: () => React.ReactElement;
};

export const stackScreeenArray: TStackScreen[] = [
  {
    name: 'LoginSignup',
    component: LoginSignup,
  },
  {
    name: 'FeaturesAndCommand',
    component: FeaturesAndCommandScreen,
  },
];
