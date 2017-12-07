
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Image,
  TextInput,
  Text,
  View,
  ScrollView,
  Button,
  Navigator,
} from 'react-native';

import SceneComponent1 from './app/components/component1';
import SceneComponent2 from './app/components/component2';
export default class App extends Component {
  renderScene(route,Navigator){
    switch(route.id){
      case 'scene1':
        return (<SceneComponent1 navigator={navigator} title="scene1" />)
      case 'scene2':
        return (<SceneComponent2 navigator={navigator} title="scene2" />)
    }
  }
}

