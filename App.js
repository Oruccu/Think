import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import AntDesign from '@expo/vector-icons/AntDesign'
import SingIn from './Src/Pages/Auth/SingIn';
import SingUp from './Src/Pages/Auth/SingUp';
import Home from './Src/Pages/Home';
import Favorite from './Src/Pages/Favorite';
import Color from './Src/Style/Color';
import { auth } from './firebaseConfig';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


export default function App() {
  const [userSession, setUserSession] = useState()

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      setUserSession(!!user)
    })
  }, [])

  function HomeScreen() {
    return (
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: Color.Primary,
          tabBarInactiveTintColor: Color.Secondary
        }}
      >
        <Tab.Screen
          name='Home'
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={23} />
            ),
            headerRight: () => (
              <AntDesign
                name='logout'
                size={30}
                style={styles.icon}
                onPress={() => auth.signOut()} />
            )
          }} />
        <Tab.Screen
          name='Favorite'
          component={Favorite}
          options={{
            tabBarLabel: 'Favorite',
            tabBarIcon: ({ color }) => (
              <AntDesign
                name="heart"
                color={color}
                size={23}/>
            ),
            headerRight: () => (
              <AntDesign
                name='logout'
                size={30}
                style={styles.icon}
                onPress={() => auth.signOut()} />
            )

          }}

        />
      </Tab.Navigator>
    )
  }
  const AuthStack = () => {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }} >
        <Stack.Screen name='SingIn' component={SingIn} />
        <Stack.Screen name='SingUp' component={SingUp} />
      </Stack.Navigator>
    )
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {
          !userSession ?
            <Stack.Screen name='AuthStack' component={AuthStack} />
            // <AuthStack/> {AuthStack()} bu şekilde de yazabilirsin.
            :
            <Stack.Screen name='HomeScreen' component={HomeScreen} />
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    paddingRight: 20
  }
});
