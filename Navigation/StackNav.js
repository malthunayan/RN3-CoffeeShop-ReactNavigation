import { createStackNavigator } from "react-navigation-stack";

// import HomePage from "../Components/Home";
import CoffeeList from "../Components/CoffeeList";
import CoffeeDetail from "../Components/CoffeeDetail";
import Login from "../Components/Login";
import CoffeeCart from "../Components/CoffeeCart";

const MyStackNav = createStackNavigator(
  {
    // HomeScreen: HomePage,
    ListScreen: CoffeeList,
    DetailScreen: CoffeeDetail,
    LoginScreen: Login,
    CoffeeCartScreen: CoffeeCart
  },
  {
    initialRouteName: "LoginScreen",
    defaultNavigationOptions: {
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "rgb(20, 90, 100)",
        fontWeight: "bold"
      }
    }
  }
);

export default MyStackNav;
