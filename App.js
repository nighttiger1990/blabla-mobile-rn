/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { Provider } from 'react-redux'
import { makeStore } from './src/redux/stores';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import AuthSwitchNavigator from './src/navigations/AuthNavigator';
import RNFirebase from 'react-native-firebase'

const fbMessaging  = RNFirebase.messaging()
const fbNotifications = RNFirebase.notifications()
class App extends Component {
  constructor(props) {
    super(props)
    let store = makeStore()
    let pStore = persistStore(store, null, this.persistRehydrateCallback)
    this.state = {
      store: store,
      pStore: pStore,
      finishedRehydrate: false
    }
  }
  persistRehydrateCallback = () => {
    this.setState({
      finishedRehydrate: true
    })
  }

  componentDidMount = () => {
    fbMessaging.requestPermission()
    fbMessaging.getToken().then(token => {
      console.log("Token: ", token)
    })
    fbMessaging.onTokenRefresh(token=>{
      console.log("Refresh Token: ", token)
    })
    fbMessaging.onMessage(mes => {
      console.log("onMes: ", mes)
    })
    fbNotifications.onNotification(notif=>{
      console.log("onNotif: ", notif)
    })
  }
  render() {
    return (
      <Provider store={this.state.store}>
        <PersistGate persistor={this.state.pStore} loading={<ActivityIndicator />}>
          <AuthSwitchNavigator screenProps={{ finishedRehydrate: this.state.finishedRehydrate }} />
        </PersistGate>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});


export default App