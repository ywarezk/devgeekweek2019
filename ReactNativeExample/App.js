/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Yariv, {Hello} from './stam';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  state = {
    latitude: 0,
    longitude: 0
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((geoLocation) => {
      this.setState({
        latitude: geoLocation.coords.latitude,
        longitude: geoLocation.coords.longitude
      })
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={ {height: '100%', width: '100%'} }
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            coordinate={this.state}
            title="me!!!"
            description="still me!!!!"
           />
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
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
