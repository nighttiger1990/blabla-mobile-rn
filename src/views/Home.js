import React from 'react'
import {
    View,
    Text,
    SafeAreaView
} from 'react-native'
import S from '../styles';
class Home extends React.Component {
    render() {
        return (
            <SafeAreaView style={S.container}>
                <Text>Home Screen</Text>
            </SafeAreaView>)
    }
}

export default Home