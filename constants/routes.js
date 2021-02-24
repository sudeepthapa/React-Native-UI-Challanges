import HomePage1 from "../screens/Landings/HomePage1"
import ProfileScreen1 from "../screens/profiles/ProfileScreen1"

const Routes = [
  {
    title: 'Profile Screens',
    routes: [
      {
        title: "Profile Screen 1",
        route: 'ProfileScreen1',
        component: ProfileScreen1,
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