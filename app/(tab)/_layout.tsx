import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons';
import { tabs } from '@/constants/tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const TabLayout = () => {
    const insets = useSafeAreaInsets()
    const TabIcon = ({focused,tab}: {focused:boolean,tab:any}) =>{
        return(
            <View>
                <Ionicons name={tab.icon} size={24} color={focused?"#1d4ed8":"gray"} />
            </View>
        )
    }

  return (
    <Tabs screenOptions={{
            headerShown:false,
            tabBarStyle:{
                position:"absolute",
                bottom: Math.max(insets.bottom,28),
                marginHorizontal: 24,
                borderRadius: 24,
                backgroundColor: 'black',
                height: 72,
                borderTopWidth: 0,
                overflow: 'hidden'
            },
            tabBarItemStyle:{
                paddingVertical: 10
            }
        }}>
        
        {tabs.map((tab)=>(
            <Tabs.Screen
                key={tab.name} 
                name={tab.name}
                options={{
                    title: tab.title,
                    tabBarIcon: ({focused}) =>(
                        <TabIcon focused={focused} tab={tab} />
                    )
                }} 
            />
        ))}
    </Tabs>
  )
}

export default TabLayout