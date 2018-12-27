import { createSwitchNavigator } from 'react-navigation'
import AuthLoading from '../views/AuthLoading';
import SignedOutNavigator from './SignedOutNavigator';
import SignedInNavigator from './SignedInNavigator';
export const AUTH_SCREEN_NAME = {
    AuthLoading: 'AuthLoading',
    SignedInNavigator: "SignedInNavigator",
    SignedOutNavigator: "SignedOutNavigator",
}
const AuthSwitchNavigator = createSwitchNavigator({
    [AUTH_SCREEN_NAME.AuthLoading]: {
        screen: AuthLoading,
    },
    [AUTH_SCREEN_NAME.SignedOutNavigator]: {
        screen: SignedOutNavigator
    },
    [AUTH_SCREEN_NAME.SignedInNavigator]: {
        screen: SignedInNavigator
    }
}, {
        initialRouteName: AUTH_SCREEN_NAME.AuthLoading
    })

export default AuthSwitchNavigator