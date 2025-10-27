import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';

import AllLogin from './SRC/AllLogin';
import Logout from './SRC/Logout';

import MasterLogin from './SRC/Master/MasterLogin';
import MasterInactive from './SRC/Master/MasterInactive';
import MasterActive from './SRC/Master/MasterActive';

import AdminLogin from './SRC/Admin/AdminLogin';
import AdminSignUp from './SRC/Admin/AdminSignUp';
import ChangePassword from './SRC/Admin/ChangePassword';
import Home from './SRC/Admin/Home';
import ClubInfo from './SRC/Admin/ClubInfo';
import Post from './SRC/Admin/Post';

import UserLogin from './SRC/user/UserLogin';
import UserHomePage from './SRC/user/UserHomePage';
import UserAllClubs from './SRC/user/UserAllClubs';
import UserSubClubs from './SRC/user/UserSubClubs';
import UserSubClubDescription from './SRC/user/UserSubClubDescription';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="AllLogin" component={AllLogin} options={{ headerShown: false }}/>
                <Stack.Screen name="MasterLogin" component={MasterLogin} options={{ headerShown: false }} />
                <Stack.Screen name="MasterInactive" component={DrawerNavigator} options={{ headerShown: false }} />

                <Stack.Screen name="AdminLogin" component={AdminLogin}/>
                <Stack.Screen name="AdminSignUp" component={AdminSignUp}/>
                <Stack.Screen name="ChangePassword" component={ChangePassword}/>
                <Stack.Screen name="Home" component={RootNavigator} options={{ headerShown: false }}/>
                <Stack.Screen name="Post" component={Post} />
                {/* <Stack.Screen name="ClubInfo" component={ClubInfo} /> */}

                <Stack.Screen name="UserLogin" component={UserLogin}/>
                <Stack.Screen name="UserHomePage" component={DrawerNavigators} options={{ headerShown: false }}/>
                <Stack.Screen name="UserSubClubs" component={UserSubClubs}/>
                <Stack.Screen name="UserSubClubDescription" component={UserSubClubDescription}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const RootNavigator = ({navigation}) => {
       return (
         <Drawer.Navigator initialRouteName="Home">
           <Drawer.Screen name="Home" component={Home} 
            options={{
              headerRight: () => (
                <View  style={styles.pluscontainer}>
                <TouchableOpacity onPress={() => navigation.navigate('Post')} >
                  <MaterialCommunityIcons name="plus" size={30} color="black" />
                </TouchableOpacity>
                </View>
              ),
            }}
             />
          <Drawer.Screen name="Club Information" component={ClubInfo} />
          <Drawer.Screen name="Change Password" component={ChangePassword} />
          <Drawer.Screen name="Logout" component={Logout} />
        </Drawer.Navigator>
      );
    };
const DrawerNavigator = ({ navigation }) => {
    return (
        <Drawer.Navigator initialRouteName="MasterInactive">
            <Drawer.Screen
                name="Inactive"
                component={MasterInactive}
                // options={{
                //     headerTitle: props => <CustomDrawerContent {...props} />,
                // }}
            />
            <Drawer.Screen
                name="Active"
                component={MasterActive}
                // options={{
                //     headerTitle: props => <CustomDrawerContent {...props} />,
                // }}
            />
            <Drawer.Screen
                name="Logout"
                component={Logout}
                // options={{
                //     headerTitle: props => <CustomDrawerContent {...props} />,
                // }}
            />
        </Drawer.Navigator>
    );

    
};
const DrawerNavigators = () => {
  return (
    <Drawer.Navigator initialRouteName="UserHomePage">
      <Drawer.Screen
        name="Home"
        component={UserHomePage}
        // options={{
        //   headerTitle: props => <CustomDrawerContent {...props} />,
        // }}
      />
      <Drawer.Screen
        name="All Clubs"
        component={UserAllClubs}
        // options={{
        //   headerTitle: props => <CustomDrawerContent {...props} />,
        // }}
      />
      {/* <Drawer.Screen
        name="Calendar"
        component={UserCalendar}
        options={{
          headerTitle: props => <CustomDrawerContent {...props} />,
        }}
      /> */}
      <Drawer.Screen
        name="LogOut"
        component={Logout}
        // options={{
        //   headerTitle: props => <CustomDrawerContent {...props} />,
        // }}
      />
    </Drawer.Navigator>
  );
};
// const CustomDrawerContent = () => {
//     return (
//         <View style={styles.container}>
//             <View style={styles.cegramContainer}>
//                 <Text style={styles.cegramText}>CEG</Text>
//                 <Text style={[styles.cegramText, styles.gram]}>GRAM</Text>
//             </View>
//         </View>
//     );
// };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cegramContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    cegramText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#add2c9',
    },
    gram: {
        marginLeft: 5,
        color: '#5ea3a3',
    },
});
export default App;