import Login from '../views/Login';
import Register from '../views/Register';
import { Easing, Animated } from 'react-native'
import { createStackNavigator } from 'react-navigation'
export const SIGNED_OUT_SCREEN_NAME = {
    Login: 'Login',
    Register: 'Register'
}

const transitionConfig = () => {
    return {
        transitionSpec: {
            duration: 500,
            easing: Easing.out(Easing.poly(4)),
            timing: Animated.timing,
            useNativeDriver: true,
        },
        containerStyle: {
            backgroundColor: 'transparent',
        },
        screenInterpolator: sceneProps => {
            const { position, scene } = sceneProps

            const thisSceneIndex = scene.index

            const opacity = position.interpolate({
                inputRange: [thisSceneIndex - 1, thisSceneIndex],
                outputRange: [0, 1],
            })

            return { opacity }
        },
    }
}

const SignedOutNavigator = createStackNavigator({
    [SIGNED_OUT_SCREEN_NAME.Login]: {
        screen: Login,
        navigationOptions: {
        }
    },
    [SIGNED_OUT_SCREEN_NAME.Register]: {
        screen: Register,
        navigationOptions: {

        }
    }
}, {
        initialRouteName: SIGNED_OUT_SCREEN_NAME.Login,
        transitionConfig: () => {
            return {
                ...transitionConfig(),
            }
        },
        navigationOptions: {

        },
        headerMode: 'none',
        cardStyle: {
            backgroundColor: "transparent",
            shadowColor: "black"
        },
    })

export default SignedOutNavigator