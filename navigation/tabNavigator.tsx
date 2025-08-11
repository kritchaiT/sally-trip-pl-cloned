import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const tabNavigator = () => {
    const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={() => <View><Text>Home Screen</Text></View>} />
      <Tab.Screen name="Settings" component={() => <View><Text>Settings Screen</Text></View>} />
    </Tab.Navigator>
  )
}

export default tabNavigator

const styles = StyleSheet.create({})