import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import colors from "../../theme/color";
import { MaterialIcons } from "@expo/vector-icons";
import NavigatorBox from "../../components/navigatorBox";

const classesScreen = (props) => {
   return (
      <ScrollView
         style={{ backgroundColor: colors.backgroundColor }}
         showsVerticalScrollIndicator={false}
      >
         <View
            style={{
               flex: 1,
               alignItems: "center",
               paddingTop: 30,
               paddingHorizontal: 20,
               backgroundColor: "white",
            }}
         >
            <View style={{ alignItems: "center", marginBottom: 30 }}>
               <Text
                  style={{
                     fontSize: 24,
                     fontWeight: "700",
                     lineHeight: 24,
                     color: colors.textPrimary,
                  }}
               >
                  Classes
               </Text>
               <Text
                  style={{
                     color: colors.textPrimary,
                  }}
               >
                  Overview
               </Text>
            </View>
            <View style={{ width: "100%" }}>
               <View
                  style={{
                     flexDirection: "row",
                     width: "100%",
                     justifyContent: "space-between",
                     marginBottom: 15,
                  }}
               >
                  <NavigatorBox
                     title="NOTES"
                     view
                     onPress={() => props.navigation.navigate("notes")}
                  />
                  <NavigatorBox
                     title="ASSIGNMENTS"
                     view
                     onPress={() => props.navigation.navigate("assignment")}
                  />
               </View>
               <View
                  style={{
                     flexDirection: "row",
                     width: "100%",
                     justifyContent: "space-between",
                  }}
               >
                  <NavigatorBox
                     title="DOCUMENTS"
                     view
                     onPress={() => props.navigation.navigate("document")}
                  />
                  <NavigatorBox
                     title="LEAVE REQUESTS"
                     view
                     onPress={() => props.navigation.navigate("leaveRequest")}
                  />
               </View>
            </View>
         </View>
      </ScrollView>
   );
};

export default classesScreen;
