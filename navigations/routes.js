import FoodHomeScreen from "../screens/ecommerce/food_home_ui"
import HomePage1 from "../screens/Landings/HomePage1"

const Routes = [
  {
    title: 'E-Commerce',
    routes: [
      {
        title: "Food HomeScreen ",
        route: 'FoodHomeScreen1',
        component: FoodHomeScreen,
      }
    ]
    
  },
  {
    title: 'Landing Screens',
    routes: [
      {
        title: "Home Page 1",
        route: 'Home',
        component: HomePage1,
      }
    ]
    
  }
]

export default Routes