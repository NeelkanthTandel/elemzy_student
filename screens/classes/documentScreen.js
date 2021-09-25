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
import DateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";
import * as DocumentPicker from "expo-document-picker";

import colors from "../../theme/color";
import DatePickerButton from "../../components/DatePickerButton";

const DocumentContainer = (props) => {
   return (
      <View
         style={{
            backgroundColor: "#3283c9",
            padding: 10,
            borderRadius: 10,
            width: "48%",
         }}
      >
         <Text
            style={{
               color: "white",
               fontWeight: "bold",
               fontSize: 16,
            }}
         >
            {props.title}
         </Text>
         <Text style={{ color: "white", fontSize: 10 }}>{props.chapter}</Text>
         <Text style={{ color: "white", marginTop: 5, fontSize: 12 }}>
            {props.description}
         </Text>
         <MaterialIcons
            name="file-download"
            size={23}
            color="white"
            style={{ marginTop: 5, textAlign: "right" }}
         />
      </View>
   );
};

const documentScreen = (props) => {
   return (
      <ScrollView
         style={{ backgroundColor: colors.backgroundColor }}
         showsVerticalScrollIndicator={false}
      >
         <View
            style={{
               paddingHorizontal: 20,
               paddingTop: 30,
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
               Documents
            </Text>

            <View>
               <Text
                  style={{
                     fontSize: 18,
                     fontWeight: "bold",
                     color: colors.textPrimary,
                     marginTop: 40,
                     marginBottom: 20,
                  }}
               >
                  Documents uploaded
               </Text>
               <View
                  style={{
                     flexDirection: "row",
                     justifyContent: "space-between",
                     marginBottom: 15,
                  }}
               >
                  <DocumentContainer
                     title="The Twinkle"
                     chapter="CHAPTER 1"
                     description="This will be the description of the first chapter"
                  />
                  <DocumentContainer
                     title="The Twinkle"
                     chapter="CHAPTER 1"
                     description="This will be the description of the first chapter"
                  />
               </View>
            </View>
         </View>
      </ScrollView>
   );
};

export default documentScreen;
