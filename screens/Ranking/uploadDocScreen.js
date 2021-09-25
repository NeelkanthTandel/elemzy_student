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
import * as DocumentPicker from "expo-document-picker";

import colors from "../../theme/color";

const uploadDocScreen = (props) => {
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
            {/* <View style={{ flexDirection: "row", alignItems: "center" }}>
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
               Assignments
            </Text> */}

            <View
               style={{
                  alignItems: "flex-start",
               }}
            >
               <Text
                  style={{
                     fontSize: 18,
                     fontWeight: "bold",
                     color: colors.textPrimary,
                     marginBottom: 20,
                  }}
               >
                  Add Document
               </Text>
               <View style={{ width: "100%", marginBottom: 15 }}>
                  <Text>Document Name</Text>
                  <TextInput
                     placeholder="Name"
                     style={{
                        width: "100%",
                        borderWidth: 1,
                        paddingVertical: 4,
                        paddingHorizontal: 10,
                        borderRadius: 5,
                        borderColor: colors.textSecondary,
                        marginTop: 10,
                     }}
                  />
               </View>
               <View style={{ width: "100%", marginBottom: 15 }}>
                  <Text>Document category</Text>
                  <TextInput
                     placeholder="Category"
                     style={{
                        width: "100%",
                        borderWidth: 1,
                        paddingVertical: 4,
                        paddingHorizontal: 10,
                        borderRadius: 5,
                        borderColor: colors.textSecondary,
                        marginTop: 10,
                     }}
                  />
               </View>
               <View style={{ width: "100%", marginBottom: 15 }}>
                  <Text>Description</Text>
                  <TextInput
                     placeholder="Description"
                     style={{
                        width: "100%",
                        borderWidth: 1,
                        paddingVertical: 4,
                        paddingHorizontal: 10,
                        borderRadius: 5,
                        borderColor: colors.textSecondary,
                        marginTop: 10,
                     }}
                     numberOfLines={5}
                     textAlignVertical="top"
                  />
               </View>
               <TouchableOpacity
                  activeOpacity={0.6}
                  onPress={() => {
                     DocumentPicker.getDocumentAsync({
                        copyToCacheDirectory: false,
                     }).then((data) => console.log(data));
                  }}
                  style={{
                     width: "100%",
                     marginBottom: 15,
                     flexDirection: "row",
                     alignItems: "center",
                  }}
               >
                  <Text>Upload Document</Text>
                  <MaterialIcons
                     name="upload-file"
                     size={23}
                     style={{ marginLeft: 15 }}
                  />
               </TouchableOpacity>

               <TouchableOpacity
                  style={{
                     paddingVertical: 10,
                     width: "100%",
                     backgroundColor: "#3283c9",
                     alignItems: "center",
                     marginVertical: 10,
                     borderRadius: 5,
                  }}
               >
                  <Text
                     style={{
                        color: "white",
                        fontSize: 16,
                        fontWeight: "bold",
                     }}
                  >
                     Upload
                  </Text>
               </TouchableOpacity>
            </View>
         </View>
      </ScrollView>
   );
};

export default uploadDocScreen;
