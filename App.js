import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CategoryMovieScreen from './src/screens/CategoryMovieScreen';
import CategoryListScreen from './src/screens/CategoryListScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import MoviesScreen from './src/screens/MoviesScreen';
import { createStore, applyMiddleware } from 'redux';
import { Provider, useSelector } from 'react-redux';
import LogInScreen from './src/screens/LogInScreen';
import Reducers from './src/containers/reducers/Index';
import HomeScreen from './src/screens/HomeScreen';
import SplashScreen from './src/screens/Splash';
import { Icon } from 'react-native-elements';
import { Dimensions } from 'react-native';
import ReduxThunk from 'redux-thunk';

const wp = Dimensions.get("window").width;
const hp = Dimensions.get("window").height;
const fontSize = wp * 0.04

const Tab = createBottomTabNavigator();
function TabScreens() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          switch (route.name) {
            case 'Home': {
              iconName = "home";
              color = focused ? "red" : color;
              break;
            }
            case 'CategoryList':
              {
                iconName = "list";
                color = focused ? "red" : color;
                break;
              }
            case 'CategoryMovie':
              {
                iconName = "movie";
                color = focused ? "red" : color;
                break;
              }
          }
          return <Icon name={iconName} size={25} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "red",
        labelStyle: { fontSize: fontSize },
        keyboardHidesTabBar: true,
        labelPosition: 'below-icon',
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} initialRouteName="Home" />
      <Tab.Screen name="CategoryList" component={CategoryListScreen} />
      <Tab.Screen name="CategoryMovie" component={CatgoryFlowStackScreens} />
    </Tab.Navigator>
  );
}

const CatgoryFlowStack = createStackNavigator();
function CatgoryFlowStackScreens() {
  return (
    <CatgoryFlowStack.Navigator>
      <CatgoryFlowStack.Screen name="Category" component={CategoryMovieScreen} options={{ headerShown: false }} />
      <CatgoryFlowStack.Screen name="Movies" component={MoviesScreen} options={{ headerShown: true }} />
    </CatgoryFlowStack.Navigator>
  )
}

const Stack = createStackNavigator();

function MyStacK() {
  const userToken = useSelector(State => State.AuthReducer.token);
  const isLoading = useSelector(State => State.AuthReducer.loading);
  console.log('isloading: ', isLoading);

  if (isLoading) {
    return <SplashScreen />
  }

  return (
    <Stack.Navigator>
      {userToken == '' ?
        <Stack.Screen name="LogIn" component={LogInScreen} options={{ headerShown: false }} />
        :
        <Stack.Screen name="TabScreens" component={TabScreens} options={{ headerShown: false }} />
      }
    </Stack.Navigator>
  );
}

export default function App() {
  const store = createStore(Reducers, {}, applyMiddleware(ReduxThunk))

  return (
    <NavigationContainer>
      <Provider store={store}>
        <MyStacK />
      </Provider>
    </NavigationContainer>
  );
}