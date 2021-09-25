import React from "react";
import {
   StyleSheet,
   View,
   Text,
   ScrollView,
   TouchableOpacity,
} from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../../theme/color";
import NavigatorBox from "../../components/navigatorBox";

const index = (props) => {
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
            <Text
               style={{
                  fontSize: 24,
                  fontWeight: "700",
                  lineHeight: 24,
                  color: colors.textPrimary,
               }}
            >
               Attendance
            </Text>
            <View
               style={{
                  width: "100%",
                  flexDirection: "row",
                  marginVertical: 30,
                  justifyContent: "center",
               }}
            >
               <NavigatorBox
                  title="VIEW ATTENDANCE"
                  onPress={() => props.navigation.navigate("viewAttendance")}
                  view
               />
            </View>
            <View style={{ flex: 1, width: "100%" }}>
               <Text
                  style={{
                     fontSize: 20,
                     fontWeight: "bold",
                     color: colors.textPrimary,
                  }}
               >
                  Recents
               </Text>
               <View
                  style={{
                     flexDirection: "row",
                     width: "100%",
                     marginTop: 15,
                     marginBottom: 10,
                  }}
               >
                  <Text style={{ width: "25%", fontWeight: "bold" }}>
                     Subject
                  </Text>
                  <Text style={{ width: "25%", fontWeight: "bold" }}>Date</Text>
                  <Text style={{ width: "30%", fontWeight: "bold" }}>Time</Text>
                  <Text style={{ width: "20%", fontWeight: "bold" }}>
                     Status
                  </Text>
               </View>
               <View
                  style={{
                     flexDirection: "row",
                     width: "100%",
                     alignItems: "center",
                     marginBottom: 10,
                  }}
               >
                  <Text style={{ width: "25%" }}>English</Text>
                  <Text style={{ width: "25%" }}>20-07-21</Text>
                  <Text style={{ width: "30%" }}>11:45 - 13:00</Text>
                  <Text style={{ color: "green", fontSize: 14 }}>Present</Text>
               </View>
               <View
                  style={{
                     flexDirection: "row",
                     width: "100%",
                     alignItems: "center",
                     marginBottom: 10,
                  }}
               >
                  <Text style={{ width: "25%" }}>English</Text>
                  <Text style={{ width: "25%" }}>20-07-21</Text>
                  <Text style={{ width: "30%" }}>11:45 - 13:00</Text>
                  <Text style={{ color: "red", fontSize: 14 }}>Absent</Text>
               </View>
            </View>
         </View>
      </ScrollView>
   );
};

export default index;
