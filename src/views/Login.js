import React from 'react'
import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    TouchableOpacity,
    Button,
    ImageBackground,
    TextInput,
    Dimensions,
    findNodeHandle,
    Image
} from 'react-native'
import S from '../styles';
import Background from '../assets/images/travel-road-highway.gif'
import { SIGNED_OUT_SCREEN_NAME } from '../navigations/SignedOutNavigator';
import * as Animatable from 'react-native-animatable'
import { BlurView } from 'react-native-blur'
import { NavigationEvents } from 'react-navigation'
const TouchableOpacityAnimate = Animatable.createAnimatableComponent(TouchableOpacity)
const BlurViewAnimate = Animatable.createAnimatableComponent(BlurView)
const upFlipOutX = Animatable.createAnimation({
    easing: "linear",
    0: {
        // translateY: 0,
        transform: [
            { perspective: 850 },
            { rotateX: "0deg" },
            { opacity: 1 },
            { translateY: 0 }
        ]
    },
    // 0.7: {
    //     // translateY: -220,
    //     transform: [
    //         { perspective: 850 },
    //         { rotateX: "0deg" },
    //         { opacity: 1 }
    //     ]
    // },
    1: {
        // translateY: -250,
        transform: [
            { perspective: 850 },
            { rotateX: "-90deg" },
            { opacity: 0 },
            { translateY: -450 }
        ],
    },
})
Animatable.registerAnimation("upFlipOutX", upFlipOutX)
class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            direction: "alternate",
            viewRef: null
        }
    }
    onRegister = (reverse) => {
        // this.props.navigation.navigate(SIGNED_OUT_SCREEN_NAME.Register)
    }

    startAnimation = () => {
        this.setState({
            direction: this.state.direction == "alternate" ? 'alternate-reverse' : "alternate"
        }, () => {
            this.gg.animate('upFlipOutX', 500)
            this.fb.animate('upFlipOutX', 500)
            this.bla.animate('zoomOut', 500)
            this.reg.animate('zoomOut', 500)
            this.blur && this.blur.animate('fadeIn', 500)
        })
    }

    imageLoaded = () => {
        this.setState({ viewRef: findNodeHandle(this.img) });
    }

    render() {
        const renderBlurView = this.state.viewRef && this.state.direction == "alternate" ? <BlurViewAnimate viewRef={this.state.viewRef} ref={ref => this.blur = ref} style={L.absolute} useNativeDriver={true} direction={this.state.direction} /> : null
        return (
            <SafeAreaView style={S.container}>
                <NavigationEvents onWillBlur={this.startAnimation} onWillFocus={this.startAnimation} />
                <Image
                    source={Background}
                    style={L.absolute}
                    ref={ref => this.img = ref}
                    onLoadEnd={this.imageLoaded}
                >
                </Image>
                {renderBlurView}
                <View style={[L.contentContainer, L.fromEndContainer]}>
                    <TouchableOpacityAnimate ref={ref => this.gg = ref} style={[S.button, L.buttonX]} useNativeDriver={true} direction={this.state.direction}>
                        <Text style={S.textCenter}>Đăng nhập với Google++</Text>
                    </TouchableOpacityAnimate>
                    <TouchableOpacityAnimate ref={ref => this.fb = ref} style={S.button} useNativeDriver={true} direction={this.state.direction}>
                        <Text style={S.textCenter}>Đăng nhập với Facebook</Text>
                    </TouchableOpacityAnimate>
                    <TouchableOpacityAnimate ref={ref => this.bla = ref} style={S.button} useNativeDriver={true} direction={this.state.direction}>
                        <Text style={S.textCenter}>Đăng nhập với BlaBla</Text>
                    </TouchableOpacityAnimate>
                    <TouchableOpacityAnimate ref={ref => this.reg = ref} style={S.buttonLink} useNativeDriver={true} direction={this.state.direction} onPress={this.onRegister} >
                        <Text style={S.textLink}>Đăng ký mới BlaBla</Text>
                    </TouchableOpacityAnimate>
                </View>
            </SafeAreaView>)
    }
}

const L = StyleSheet.create({
    fromEndContainer: {
        justifyContent: 'flex-end',
        flex: 1
    },
    contentContainer: {
        margin: 20,
    },
    absolute: {
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0
    },
    buttonX: {
        transform: []
    }
})

export default Login