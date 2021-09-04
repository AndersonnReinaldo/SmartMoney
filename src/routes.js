import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Main from './pages/Main/Index';
import NewEntry from './pages/NewEntry/index';
import Report from './pages/Report/index';
import FormCard from './components/FormCard/FormCard';

const Routes = createAppContainer(
  createSwitchNavigator(
    {
      Main,
      NewEntry,
      Report,
      FormCard,
    },
    {
      initialRouteName: 'Main',
      backBehavior: 'history',
    },
  ),
);

export default Routes;