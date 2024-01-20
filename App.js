import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import "react-native-gesture-handler";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import myPage from "./src/screens/myPage";
import settings from "./src/screens/settings";
import report from "./src/screens/report";
import editInfo from "./src/screens/editInfo";

const stack = createStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="myPage">
        <Stack.Screen name="myPage" component={myPage}/>
        <Stack.Screen name="editInfo" component={editInfo}/>
        <Stack.Screen name="settings" component={settings}/>
        <Stack.Screen name="report" component={report}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  title: {
    margin: 24,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
  },
});
