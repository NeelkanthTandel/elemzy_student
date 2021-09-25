import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import { StatusBar, TouchableOpacity } from "react-native";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
   createDrawerNavigator,
   DrawerContentScrollView,
   DrawerItem,
   DrawerItemList,
} from "@react-navigation/drawer";
import {
   MaterialIcons,
   MaterialCommunityIcons,
   Ionicons,
   FontAwesome,
   Entypo,
   Octicons,
} from "@expo/vector-icons";

import { AUTH_API_URL } from "../keys";
import colors from "../theme/color";

import dashboardScreen from "../screens/dashboardScreen";

import LoginScreen from "../screens/loginScreen";

import profileScreen from "../screens/profileScreen";

import chatHomeScreen from "../screens/chat";
import chatScreen from "../screens/chat/chatScreen";

import supportScreen from "../screens/supportScreen";

import calendarScreen from "../screens/calendarsScreen";

import resultHomeScreen from "../screens/result";
import viewResultScreen from "../screens/result/viewResultScreen";
import studentResultScreen from "../screens/result/studentResultScreen";

import coursesHomeScreen from "../screens/courses";
import courseScreen from "../screens/courses/courseScreen";

import notesScreen from "../screens/classes/notesScreen";
import assignmentScreen from "../screens/classes/assignmentScreen";
import documentScreen from "../screens/classes/documentScreen";
import leaveRequestsScreen from "../screens/classes/leaveRequestsScreen";
import classesScreen from "../screens/classes";
import viewAssignmentScreen from "../screens/classes/viewAssignmentScreen";

import attendanceHomeScreen from "../screens/Attendance";
import viewAttendanceScreen from "../screens/Attendance/viewAttendance";

import examHome from "../screens/Exam/index";
import viewExamScreen from "../screens/Exam/viewExamScreen";

import meetingHomeScreen from "../screens/Meeting";
import viewMeetingScreen from "../screens/Meeting/viewMeetingScreen";

import rankingHomeScreen from "../screens/Ranking";
import uploadDocScreen from "../screens/Ranking/uploadDocScreen";
import notificationSceen from "../screens/notificationScreen";

const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

const chatStack = () => {
   return (
      <Stack.Navigator
         screenOptions={{ headerShown: false, animation: "slide_from_right" }}
      >
         <Stack.Screen name="home" component={chatHomeScreen} />
         <Stack.Screen name="chat" component={chatScreen} />
      </Stack.Navigator>
   );
};

const coursesStack = () => {
   return (
      <Stack.Navigator
         screenOptions={{ headerShown: false, animation: "slide_from_right" }}
      >
         <Stack.Screen name="home" component={coursesHomeScreen} />
         <Stack.Screen name="viewCourse" component={courseScreen} />
      </Stack.Navigator>
   );
};

const classesStack = () => {
   return (
      <Stack.Navigator
         screenOptions={{ headerShown: false, animation: "slide_from_right" }}
      >
         <Stack.Screen name="overview" component={classesScreen} />
         <Stack.Screen name="notes" component={notesScreen} />
         <Stack.Screen name="assignment" component={assignmentScreen} />
         <Stack.Screen name="viewAssignment" component={viewAssignmentScreen} />
         <Stack.Screen name="document" component={documentScreen} />
         <Stack.Screen name="leaveRequest" component={leaveRequestsScreen} />
      </Stack.Navigator>
   );
};

const examStack = () => {
   return (
      <Stack.Navigator
         screenOptions={{ headerShown: false, animation: "slide_from_right" }}
      >
         <Stack.Screen name="home" component={examHome} />
         <Stack.Screen name="viewExam" component={viewExamScreen} />
      </Stack.Navigator>
   );
};

const resultStack = () => {
   return (
      <Stack.Navigator
         screenOptions={{ headerShown: false, animation: "slide_from_right" }}
      >
         <Stack.Screen name="home" component={resultHomeScreen} />
         <Stack.Screen name="viewResult" component={viewResultScreen} />
         <Stack.Screen name="studentResult" component={studentResultScreen} />
      </Stack.Navigator>
   );
};

const rankingStack = () => {
   return (
      <Stack.Navigator
         screenOptions={{ headerShown: false, animation: "slide_from_right" }}
      >
         <Stack.Screen name="home" component={rankingHomeScreen} />
         <Stack.Screen name="uploadDoc" component={uploadDocScreen} />
      </Stack.Navigator>
   );
};

const meetingStack = () => {
   return (
      <Stack.Navigator
         screenOptions={{ headerShown: false, animation: "slide_from_right" }}
      >
         <Stack.Screen name="home" component={meetingHomeScreen} />
         <Stack.Screen name="viewMeeting" component={viewMeetingScreen} />
      </Stack.Navigator>
   );
};

const attendanceStack = () => {
   return (
      <Stack.Navigator
         screenOptions={{ headerShown: false, animation: "slide_from_right" }}
      >
         <Stack.Screen name="home" component={attendanceHomeScreen} />
         <Stack.Screen name="viewAttendance" component={viewAttendanceScreen} />
      </Stack.Navigator>
   );
};

const DrawerStack = (props) => {
   let toggleDrawer;

   const logoutHandler = async () => {
      const token = await AsyncStorage.getItem("token");
      try {
         const response = await fetch(`${AUTH_API_URL}/logout`, {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
               Authorization: "Token " + token,
            },
         });
         // const data = await response.json();
         console.log("logout");
         await AsyncStorage.removeItem("token");
         props.navigation.dispatch(StackActions.replace("Launch"));
      } catch (err) {
         console.log(err);
      }
   };

   return (
      <Drawer.Navigator
         screenOptions={{
            //   swipeEnabled: false,
            drawerActiveTintColor: colors.headerTitle,
            //  drawerActiveBackgroundColor: 'grey',
            drawerInactiveTintColor: colors.headerTitle,
            //  drawerItemStyle: {
            //    borderWidth: 1,
            //  },
            drawerLabelStyle: {
               color: colors.headerTitle,
            },
            drawerStyle: {
               paddingTop: 60,
               borderTopRightRadius: 20,
               borderBottomRightRadius: 20,
               backgroundColor: colors.headerBackground,
            },
            //   overlayColor: Colors.selected,
            headerTintColor: colors.headerTitle,

            headerStyle: {
               backgroundColor: colors.headerBackground,
               height: 60,
            },
            headerLeft: () => (
               <TouchableOpacity
                  onPress={() => toggleDrawer()}
                  activeOpacity={0.6}
               >
                  <Ionicons
                     name="ios-menu"
                     size={25}
                     color={colors.headerTitle}
                     style={{ marginTop: 3, marginLeft: 15 }}
                  />
               </TouchableOpacity>
            ),
            headerRight: () => (
               <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <TouchableOpacity
                     onPress={() => props.navigation.navigate("Notification")}
                  >
                     <Ionicons
                        name="notifications"
                        size={28}
                        color={colors.headerTitle}
                        style={{ marginTop: 3, marginRight: 15 }}
                     />
                  </TouchableOpacity>
                  <TouchableOpacity
                     onPress={() => props.navigation.navigate("Profile")}
                  >
                     <Ionicons
                        name="ios-person-circle"
                        size={30}
                        color={colors.headerTitle}
                        style={{ marginTop: 3, marginRight: 15 }}
                     />
                  </TouchableOpacity>
               </View>
            ),
         }}
         drawerContent={(props) => {
            toggleDrawer = props.navigation.toggleDrawer;
            return (
               <DrawerContentScrollView {...props}>
                  <DrawerItemList {...props} />
                  <DrawerItem
                     label={() => (
                        <View
                           style={{
                              flexDirection: "row",
                              alignItems: "center",
                           }}
                        >
                           <Ionicons
                              name="log-out"
                              size={23}
                              color={colors.headerTitle}
                           />
                           <Text
                              style={{
                                 color: colors.headerTitle,
                                 marginLeft: 30,
                              }}
                           >
                              Log Out
                           </Text>
                        </View>
                     )}
                     onPress={logoutHandler}
                  />
               </DrawerContentScrollView>
            );
         }}
      >
         <Drawer.Screen
            name="Dashboard"
            component={dashboardScreen}
            options={{
               drawerLabel: "Dashboard",
               title: "",
               drawerIcon: () => (
                  <MaterialIcons
                     name="dashboard"
                     size={23}
                     color={colors.headerTitle}
                  />
               ),
            }}
         />
         <Drawer.Screen
            name="Courses"
            component={coursesStack}
            options={{
               drawerLabel: "Courses",
               title: "",
               drawerIcon: () => (
                  <MaterialIcons
                     name="library-books"
                     size={23}
                     color={colors.headerTitle}
                  />
               ),
            }}
         />
         <Drawer.Screen
            name="Classes"
            component={classesStack}
            options={{
               drawerLabel: "Classes",
               title: "",
               drawerIcon: () => (
                  <Entypo
                     name="blackboard"
                     size={23}
                     color={colors.headerTitle}
                  />
               ),
            }}
         />
         <Drawer.Screen
            name="Exams"
            component={examStack}
            options={{
               drawerLabel: "Exams",
               title: "",
               drawerIcon: () => (
                  <MaterialCommunityIcons
                     name="clipboard-list"
                     size={23}
                     color={colors.headerTitle}
                  />
               ),
            }}
         />
         <Drawer.Screen
            name="Events"
            component={calendarScreen}
            options={{
               drawerLabel: "Events",
               title: "",
               drawerIcon: () => (
                  <Ionicons
                     name="person"
                     size={23}
                     color={colors.headerTitle}
                  />
               ),
            }}
         />

         <Drawer.Screen
            name="Result"
            component={resultStack}
            options={{
               drawerLabel: "Result",
               title: "",
               drawerIcon: () => (
                  <FontAwesome
                     name="graduation-cap"
                     size={18}
                     color={colors.headerTitle}
                  />
               ),
            }}
         />
         <Drawer.Screen
            name="Ranking"
            component={rankingStack}
            options={{
               drawerLabel: "Ranking",
               title: "",
               drawerIcon: () => (
                  <Entypo
                     name="bar-graph"
                     size={23}
                     color={colors.headerTitle}
                  />
               ),
            }}
         />
         <Drawer.Screen
            name="Meeting"
            component={meetingStack}
            options={{
               drawerIcon: () => (
                  <FontAwesome
                     name="group"
                     size={22}
                     color={colors.headerTitle}
                  />
               ),
            }}
         />
         <Drawer.Screen
            name="Attendance"
            component={attendanceStack}
            options={{
               drawerLabel: "Attendance",
               title: "",
               drawerIcon: () => (
                  <Octicons
                     name="checklist"
                     size={25}
                     color={colors.headerTitle}
                  />
               ),
            }}
         />

         <Drawer.Screen
            name="Chat"
            component={chatStack}
            options={{
               drawerLabel: "Chat",
               title: "",
               drawerIcon: () => (
                  <Ionicons
                     name="chatbox-ellipses"
                     size={23}
                     color={colors.headerTitle}
                  />
               ),
            }}
         />
         <Drawer.Screen
            name="Support"
            component={supportScreen}
            options={{
               title: "",
               drawerLabel: "Support",
               drawerIcon: () => (
                  <MaterialIcons
                     name="support-agent"
                     size={23}
                     color={colors.headerTitle}
                  />
               ),
            }}
         />
      </Drawer.Navigator>
   );
};

export default function MainNavigator(Props) {
   const [isLoggedIn, setIsLoggedIn] = useState(null);
   const [data, setData] = useState({});
   const checkIfLoggedIn = async () => {
      const token = await AsyncStorage.getItem("token");
      console.log("token: ", token);
      if (!token || token == "") {
         console.log("No token => In main navigator");
         return setIsLoggedIn(false);
      } else {
         try {
            const response = await fetch(`${AUTH_API_URL}/user`, {
               method: "GET",
               headers: {
                  "Content-Type": "application/json",
                  Authorization: "Token " + token,
               },
            });
            const data = await response.json();
            console.log(data);
            if (data.email) {
               setData(data);
               setIsLoggedIn(true);
            } else {
               setIsLoggedIn(false);
            }
         } catch (err) {
            console.log(err);
         }
      }
   };

   useEffect(() => {
      checkIfLoggedIn();
   }, []);

   return (
      <>
         {isLoggedIn == null ? (
            <View
               style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
               }}
            >
               <Text>Loading...</Text>
            </View>
         ) : (
            <>
               <StatusBar
                  backgroundColor={colors.headerTitle}
                  barStyle="dark-content"
               />
               <NavigationContainer>
                  <Stack.Navigator
                     screenOptions={{
                        headerTintColor: colors.headerTitle,
                        headerStyle: {
                           backgroundColor: colors.headerBackground,
                           height: 60,
                        },
                        // headerLeft: () => (
                        //    <TouchableOpacity
                        //       onPress={() => Props.navigation.goBack()}
                        //    >
                        //       <MaterialIcons
                        //          name="keyboard-arrow-left"
                        //          size={30}
                        //          style={{ marginTop: 3, marginRight: 10 }}
                        //          color={colors.headerTitle}
                        //       />
                        //    </TouchableOpacity>
                        // ),
                     }}
                  >
                     {isLoggedIn ? (
                        <>
                           <Stack.Screen
                              name="Drawer"
                              component={DrawerStack}
                              options={{ headerShown: false }}
                              initialParams={{
                                 Props: true,
                              }}
                           />
                           <Stack.Screen
                              name="Launch"
                              component={LoginScreen}
                              options={{ headerShown: false }}
                           />
                           <Stack.Screen
                              name="Profile"
                              component={profileScreen}
                           />
                           <Stack.Screen
                              name="Notification"
                              component={notificationSceen}
                           />
                        </>
                     ) : (
                        <>
                           <Stack.Screen
                              name="Launch"
                              component={LoginScreen}
                              options={{ headerShown: false }}
                           />
                           <Stack.Screen
                              name="Drawer"
                              component={DrawerStack}
                              options={{ headerShown: false }}
                              initialParams={{
                                 Props: true,
                              }}
                           />
                           <Stack.Screen
                              name="Profile"
                              component={profileScreen}
                           />
                           <Stack.Screen
                              name="Notification"
                              component={notificationSceen}
                           />
                        </>
                     )}
                  </Stack.Navigator>
               </NavigationContainer>
            </>
         )}
      </>
   );
}
