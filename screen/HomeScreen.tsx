import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export type HomeStackParamList = {
  HomeMain : undefined;
  NewTrip : undefined;
  PlanTrip : {trip:any};
  AIChat : undefined;
  MapScreen : undefined;
}

export type TabNavigatorParamList = {
  Home : undefined;
  Guide : undefined;
  Profile : undefined;
}

type HomeScreenNavigationProp = NativeStackNavigationProp<HomeStackParamList & TabNavigatorParamList>;

const HomeScreen = () => {
  const navigation = useNavigation();

    return (
        <SafeAreaView>
            <ScrollView>
                <View className='flex-row justify-between items-center px-4 pt-4 pb-2'>
                    <Image 
                        source={{ uri : "https://wanderlog.com/assets/logoWithText.png" }}
                        className = "w-36 h-8"
                        resizeMode="contain"
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})