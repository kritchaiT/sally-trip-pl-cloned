import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const tabNavigator = () => {
    const Tab = createBottomTabNavigator();
  return (
    <View>
      <Text>tabNavigator</Text>
    </View>
  )
}

export default tabNavigator

const styles = StyleSheet.create({})