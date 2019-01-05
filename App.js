
import React from 'react';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from './Screens/Home.js';
import PvtBus from './Screens/PvtBus';
import Train from './Screens/Train';
import AutoDrivers from './Screens/AutoDrivers';
import College from './Screens/CollegeBus';
import PvtBusDetails from './Screens/PvtBusDetails';
import Buses from './Screens/Buses';
import CBD from './Screens/CollegeBusDetails';

const AppNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  PvtBus: {screen: PvtBus},
  Train: {screen: Train},
  AutoDrivers: {screen: AutoDrivers},
  College: {screen: College},
  PvtBusDetails: {screen: PvtBusDetails},
  Buses: {screen: Buses},
  CBD: {screen: CBD}

},
{
  initialRouteName:'Home',
  headerMode: 'none'
}
);

export default class App extends React.Component {
  render() {
    return <AppNavigator/>;
  }
}
