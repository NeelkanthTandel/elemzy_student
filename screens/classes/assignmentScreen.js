import React, { useState } from "react";
import {
   View,
   Text,
   TouchableOpacity,
   ScrollView,
   Platform,
   TextInput,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import colors from "../../theme/color";

const PendingBox = (props) => {
   return (
      <View
         style={{
            flexDirection: "row",
            alignItems: "center",
            borderWidth: 0.5,
            borderRadius: 10,
            padding: 10,
            marginBottom: 15,
         }}
      >
         <View style={{ flex: 1 }}>
            <Text
               style={{
                  color: colors.textPrimary,
                  fontSize: 16,
                  fontWeight: "bold",
               }}
            >
               {props.subject}
            </Text>
            <View style={{ flexDirection: "row", marginRight: 5 }}>
               {/* <Text style={{ flex: 1, fontSize: 12 }}>
                           This will be description of first chapter
                        </Text> */}
               <Text style={{ fontSize: 12 }}>Deadline: {props.deadline}</Text>
            </View>
         </View>
         <TouchableOpacity
            style={{
               backgroundColor: "#3283c9",
               paddingVertical: 3,
               paddingHorizontal: 13,
               borderRadius: 5,
               alignItems: "center",
               justifyContent: "center",
               marginLeft: 15,
            }}
            onPress={props.onPress}
            activeOpacity={0.6}
         >
            <Text style={{ color: "white", fontSize: 14 }}>View</Text>
         </TouchableOpacity>
      </View>
   );
};

const assignmentScreen = (props) => {
   return (
      <ScrollView
         style={{ backgroundColor: colors.backgroundColor }}
         showsVerticalScrollIndicator={false}
      >
         <View
            style={{
               paddingHorizontal: 20,
               paddingVertical: 30,
               flex: 1,
            }}
         >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
               <TouchableOpacity
                  onPress={() => {
                     props.navigation.goBack();
                  }}
               >
                  <MaterialIcons
                     name="keyboard-arrow-left"
                     size={35}
                     color={colors.textPrimary}
                  />
               </TouchableOpacity>
               <Text
                  style={{
                     fontSize: 24,
                     fontWeight: "700",
                     lineHeight: 24,
                     color: colors.textPrimary,
                     marginTop: 5,
                     flex: 1,
                     textAlign: "center",
                  }}
               >
                  Classes
               </Text>
               <MaterialIcons
                  name="keyboard-arrow-left"
                  size={35}
                  color={colors.backgroundColor}
               />
            </View>
            <Text
               style={{
                  color: colors.textPrimary,
                  textAlign: "center",
               }}
            >
               Assignment
            </Text>
            <View style={{ width: "100%" }}>
               <Text
                  style={{
                     fontSize: 18,
                     fontWeight: "700",
                     color: colors.textPrimary,
                     marginTop: 30,
                     marginBottom: 15,
                  }}
               >
                  Pending Assignments
               </Text>
               <PendingBox
                  subject="English"
                  deadline="4/2/21"
                  onPress={() => props.navigation.navigate("viewAssignment")}
               />
               <PendingBox
                  subject="Maths"
                  deadline="10/2/21"
                  onPress={() => props.navigation.navigate("viewAssignment")}
               />
            </View>
         </View>
      </ScrollView>
   );
};

export default assignmentScreen;
