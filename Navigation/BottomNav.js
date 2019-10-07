import { createBottomTabNavigator } from "react-navigation-tabs";
import CoffeeStackNav from "./CoffeeStackNav";
import AuthStackNav from "./AuthStackNav";
import OrderStackNav from "./OrdersStackNav";

const BottomNav = createBottomTabNavigator({
  Auth: AuthStackNav,
  Home: CoffeeStackNav,
  Orders: OrderStackNav
});

export default BottomNav;
