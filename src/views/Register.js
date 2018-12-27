import React from 'react'
import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    TouchableWithoutFeedback,
    TouchableNativeFeedback,
    TouchableHighlight,
    TextInput,
    StyleSheet,
    KeyboardAvoidingView,
    Keyboard
} from 'react-native'
import S from '../styles';
import { NavigationEvents } from 'react-navigation'
import { createAnimatableComponent } from 'react-native-animatable'
const TextInputAnimate = createAnimatableComponent(TextInput)
const TouchableOpacityAnimate = createAnimatableComponent(TouchableOpacity)
class Register extends React.Component {
    constructor(props){
        super(props)
    }
    dismiss = () => {
        console.log(this.props)
        this.props.navigation.goBack()
    }

    startAnimation = () => {
        this.username.animate('fadeInDown', 500)
        this.password.animate('fadeInDown', 500)
        this.reg.animate('swing', 500)
    }
    componentDidMount = () => {
        this.startAnimation()
    }


    render = () => {
        return (
            <SafeAreaView style={[S.container, L.container]}>
                <TextInputAnimate autoFocus={false} ref={ref => this.username = ref} style={S.input} placeholder={"Username"} placeholderTextColor="#fff9" useNativeDriver={true} direction="alternate"/>
                <TextInputAnimate ref={ref => this.password = ref} style={S.input} placeholder={"Password"} placeholderTextColor="#fff9" useNativeDriver={true} direction="alternate"/>
                <TouchableOpacityAnimate style={S.button} ref={ref => this.reg = ref} useNativeDriver={true} direction="alternate" >
                    <Text style={S.textCenter}>Đăng ký</Text>
                </TouchableOpacityAnimate>
            </SafeAreaView>)
    }

}

const L = StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
        justifyContent: "center"
    },
    absolute: {
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0
    }
})

export default Register