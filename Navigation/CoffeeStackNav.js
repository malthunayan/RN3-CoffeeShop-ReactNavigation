import React from "react";
import { createStackNavigator } from "react-navigation-stack";

import { Icon } from "native-base";

import CoffeeList from "../Components/CoffeeList";
import CoffeeDetail from "../Components/CoffeeDetail";

const CoffeeStackNav = createStackNavigator(
  {
    CoffeeList,
    CoffeeDetail
  },
  {
    navigationOptions: {
      tabBarLabel: "Home",
      tabBarIcon: () => <Icon type="FontAwesome" name="home" size={20} />
    }
  }
);

export default CoffeeStackNav;
