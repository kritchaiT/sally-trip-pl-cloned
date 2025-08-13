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
        <SafeAreaView className='flex-1 bg-white'>
            <ScrollView className='flex-1'>
                <View className='flex-row justify-between items-center px-4 pt-4 pb-2'>
                    <Image 
                        source={{ uri : "https://wanderlog.com/assets/logoWithText.png" }}
                        className = "w-36 h-8"
                        resizeMode="contain"
                    />
                    <View className='flex-row space-x-3 items-center'>
                        <TouchableOpacity className='p-2 bg-gray-100 rounded-full'>
                            <Text className='text-lg'>Search</Text>
                        </TouchableOpacity>
                        <TouchableOpacity className='px-3 py-1 bg-gray-100 rounded-full'>
                            <Text className='text-lg'>Profile</Text>
                        </TouchableOpacity>
                </View>
                <View>
                    <Image 
                        source = {{
                            uri: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
                        }}
                        className='w-full h-64 rounded-lg'
                        resizeMode="cover"`
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})