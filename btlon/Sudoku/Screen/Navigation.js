import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FontAwesome, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { View } from 'react-native';
import Home from "./Home";
import Challenge from "./Challenge";
import Thongke from "./Thongke";
import Trophy from "./Trophy";
import TuyChon from "./TuyChon";
import CaiDat from "./CaiDat";
import CachChoi from "./CachChoi";
import HuongDan1 from "./HuongDan1";
import HuongDan2 from "./HuongDan2";
import HuongDan3 from "./HuongDan3";
import GioiThieu from "./GioiThieu";
import GamePlay from "./GamePlay";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator initialRouteName="Chính">
    <Tab.Screen name="Chính" component={Home}
      options={{
        headerShown: false, 
        tabBarIcon: ({focused}) => { 
          return (
            <View style={{alignItems:'center', justifyContent: 'center'}}>
              <FontAwesome name="home" size={25} color={focused ? "#3685E4" : "#bababa"} />
            </View>
          );
        },
      }}
    />
    <Tab.Screen name="Thử thách Hàng ngày" component={Challenge} 
      options={{
        headerShown: false, 
        tabBarIcon: ({focused}) => { 
          return (
            <View style={{alignItems:'center', justifyContent: 'center'}}>
              <MaterialCommunityIcons name="calendar-star" size={25} color={focused ? "#3685E4" : "#bababa"} />
            </View>
          );
        },
      }}
    />
    <Tab.Screen name="Thống kê" component={Thongke} 
      options={{
        headerShown: false, 
        tabBarIcon: ({focused}) => { 
          return (
            <View style={{alignItems:'center', justifyContent: 'center'}}>
              <Ionicons name="stats-chart" size={25} color={focused ? "#3685E4" : "#bababa"} />
            </View>
          );
        },
      }}
    />
  </Tab.Navigator>
);

const Navigation = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Main" component={TabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="Trophy" component={Trophy} options={{ headerShown: false }} />
      <Stack.Screen name="TuyChon" component={TuyChon} options={{ headerShown: false }} />
      <Stack.Screen name="CaiDat" component={CaiDat} options={{ headerShown: false }} />
      <Stack.Screen name="CachChoi" component={CachChoi} options={{ headerShown: false }} />
      <Stack.Screen name="HuongDan1" component={HuongDan1} options={{ headerShown: false }} />
      <Stack.Screen name="HuongDan2" component={HuongDan2} options={{ headerShown: false }} />
      <Stack.Screen name="HuongDan3" component={HuongDan3} options={{ headerShown: false }} />
      <Stack.Screen name="GioiThieu" component={GioiThieu} options={{ headerShown: false }} /> 
      <Stack.Screen name="GamePlay" component={GamePlay} options={{ headerShown: false }} /> 
    </Stack.Navigator>
  </NavigationContainer>
);

export default Navigation;
