import React from 'react'
import {
    View,
    Text,
    SafeAreaView,
    ImageBackground
} from 'react-native'
import S from '../styles';
import { AUTH_SCREEN_NAME } from '../navigations/AuthNavigator';
import { connect } from 'react-redux'
import Analog3DGGIF from '../assets/images/3d-analog.gif'
class AuthLoading extends React.Component {
    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.screenProps.finishedRehydrate) {
            let nextRouter = nextProps.userInfo ? AUTH_SCREEN_NAME.SignedInNavigator : AUTH_SCREEN_NAME.SignedOutNavigator
            nextProps.navigation.navigate(nextRouter)
            return false
        }
        return true
    }
    render() {
        return (
            <SafeAreaView style={[S.container, {justifyContent: 'center', alignItems: 'center'}]}>
                {/* <Text style={{ color: 'green' }}>AuthLoading Screen</Text> */}
                <ImageBackground source={Analog3DGGIF} style={{width: 200, height: 200}}>

                </ImageBackground>
            </SafeAreaView>)
    }
}

const mapStateToProps = store => {
    let userInfo = store.auth.userInfo
    return {
        userInfo
    }
}

export default connect(mapStateToProps)(AuthLoading)