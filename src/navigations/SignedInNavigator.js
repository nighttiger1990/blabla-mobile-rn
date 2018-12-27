import { createStackNavigator } from 'react-navigation'
import Home from '../views/Home';
export const SIGNED_IN_SCREEN_NAME = {
    Home: 'Home',
}
const SignedInNavigator = createStackNavigator({
    [SIGNED_IN_SCREEN_NAME.Home]: {
        screen: Home
    }
}, {
        initialRouteName: SIGNED_IN_SCREEN_NAME.Home,
    })

export default SignedInNavigator