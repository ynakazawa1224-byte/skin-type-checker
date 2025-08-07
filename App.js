import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import QuestionScreen from './QuestionScreen';
import ResultScreen from './ResultScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Question">
        <Stack.Screen name="Question" component={QuestionScreen} options={{ title: '肌タイプ診断' }} />
        <Stack.Screen name="Result" component={ResultScreen} options={{ title: '診断結果' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
