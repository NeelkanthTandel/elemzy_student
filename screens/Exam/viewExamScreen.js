import React, { useState } from "react";
import {
   StyleSheet,
   View,
   ScrollView,
   Text,
   TouchableOpacity,
   TextInput,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";

import colors from "../../theme/color";
import DatePickerButton from "../../components/DatePickerButton";

const viewExamScreen = (props) => {
   return (
      <ScrollView
         style={{ backgroundColor: colors.backgroundColor }}
         showsVerticalScrollIndicator={false}
      >
         <View
            style={{
               flex: 1,
               paddingTop: 30,
               paddingHorizontal: 20,
               backgroundColor: "white",
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
                  Exam
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
               Design
            </Text>
            <View style={{ marginTop: 30 }}>
               <Text
                  style={{
                     fontSize: 16,
                     fontWeight: "bold",
                     color: colors.textPrimary,
                     marginBottom: 10,
                  }}
               >
                  Subject:{" "}
                  <Text
                     style={{ fontSize: 16, fontWeight: "300", color: "black" }}
                  >
                     English
                  </Text>
               </Text>
               <Text
                  style={{
                     fontSize: 16,
                     fontWeight: "bold",
                     color: colors.textPrimary,
                     marginBottom: 10,
                  }}
               >
                  Date:{" "}
                  <Text
                     style={{ fontSize: 16, fontWeight: "300", color: "black" }}
                  >
                     Monday, 28 October
                  </Text>
               </Text>
               <Text
                  style={{
                     fontSize: 16,
                     fontWeight: "bold",
                     color: colors.textPrimary,
                     marginBottom: 10,
                  }}
               >
                  Time:{" "}
                  <Text
                     style={{ fontSize: 16, fontWeight: "300", color: "black" }}
                  >
                     11:00 to 13:00
                  </Text>
               </Text>

               <Text
                  style={{
                     fontSize: 16,
                     fontWeight: "300",
                     color: "black",
                     marginBottom: 15,
                  }}
               >
                  Description here{"\n"}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
               </Text>

               <TouchableOpacity
                  style={{
                     backgroundColor: "#3283c9",
                     paddingVertical: 3,
                     paddingHorizontal: 13,
                     borderRadius: 5,
                     alignItems: "center",
                     justifyContent: "center",
                     alignSelf: "flex-start",
                  }}
                  onPress={props.onPress}
                  activeOpacity={0.6}
               >
                  <Text style={{ color: "white", fontSize: 14 }}>
                     View Document
                  </Text>
               </TouchableOpacity>
            </View>
         </View>
      </ScrollView>
   );
};
export default viewExamScreen;
