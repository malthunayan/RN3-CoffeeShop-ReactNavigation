import React from "react";
import { createStackNavigator } from "react-navigation-stack";

import { Icon } from "native-base";

import Login from "../Components/Login/";
import Profile from "../Components/Login/Profile";

const ProfileStackNav = createStackNavigator(
  {
    Login: Login,
    Profile: Profile
  },
  {
    navigationOptions: {
      tabBarLabel: "Profile",
      tabBarIcon: () => <Icon type="Octicons" name="person" size={20} />
    }
  }
);

export default ProfileStackNav;
