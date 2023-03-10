
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


import HomeScreen from "../screens/HomeScreen";
import NewsOverview from "../screens/NewsOverview";


const Stack=createNativeStackNavigator()

export default function AppNavigator(){
    return <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}} >
            <Stack.Screen name="HomeScreen" component={HomeScreen} options={headerShown=false} />
            <Stack.Screen name="NewsOverview" component={NewsOverview} options={{headerShown:true}}/>
        </Stack.Navigator>
    </NavigationContainer>
}