import React from "react";
import { createStackNavigator } from "react-navigation-stack";

import { Icon } from "native-base";

import OrderHistory from "../Components/CoffeeCart/OrderHistory";
import CoffeeCart from "../Components/CoffeeCart";

const OrderStackNav = createStackNavigator(
  {
    OrderHistory,
    CoffeeCart
  },
  {
    navigationOptions: {
      tabBarLabel: "Cart",
      tabBarIcon: () => (
        <Icon type="FontAwesome" name="shopping-cart" size={20} />
      )
    }
  }
);

export default OrderStackNav;
