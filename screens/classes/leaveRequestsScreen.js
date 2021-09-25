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

const PrevRequestsBox = (props) => {
   return (
      <View
         style={{
            flexDirection: "row",
            padding: 10,
            borderWidth: 0.5,
            borderRadius: 10,
            marginBottom: 15,
         }}
      >
         <View style={{ flex: 1, marginRight: 5 }}>
            <Text
               style={{
                  fontSize: 16,
                  fontWeight: "bold",
                  color: colors.textPrimary,
               }}
            >
               {props.title}
            </Text>
            <Text style={{ fontSize: 12 }}>{props.reason}</Text>
         </View>
         <View style={{ alignItems: "center" }}>
            <Text style={{ fontSize: 12 }}>
               Requested for: {props.requestedDate}
            </Text>
            <View style={{ flex: 1, justifyContent: "center" }}>
               <Text
                  style={{
                     fontWeight: "bold",
                     color: props.status === "Approved" ? "green" : "red",
                  }}
               >
                  {props.status}
               </Text>
            </View>
         </View>
      </View>
   );
};

const leaveRequestScreen = (props) => {
   const [date, setDate] = useState(new Date());
   const [mode, setMode] = useState("date");
   const [show, setShow] = useState(false);
   const [classroom, setClassroom] = useState("");
   const [subject, setSubject] = useState("");

   const formatedDate =
      (date.getDate() < 10 ? "0" + date.getDate() : date.getDate()) +
      "-" +
      (date.getMonth() < 10
         ? "0" + (date.getMonth() + 1)
         : date.getMonth() + 1) +
      "-" +
      (date.getFullYear() % 100);

   const onChange = (event, selectedDate) => {
      const currentDate = selectedDate || date;
      setShow(Platform.OS === "ios");
      setDate(currentDate);
   };

   const showMode = (currentMode) => {
      setShow(true);
      setMode(currentMode);
   };

   const showDatepicker = () => {
      showMode("date");
   };

   const showTimepicker = () => {
      showMode("time");
   };

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
               Leave Request
            </Text>
            <View
               style={{
                  marginTop: 30,
               }}
            >
               {show && (
                  <DateTimePicker
                     testID="dateTimePicker"
                     value={date}
                     mode={mode}
                     is24Hour={true}
                     display="default"
                     onChange={onChange}
                  />
               )}
               <View
                  style={{
                     width: "100%",
                     marginBottom: 15,
                     alignItems: "flex-start",
                  }}
               >
                  <Text style={{ marginBottom: 10 }}>Choose Date</Text>
                  <DatePickerButton
                     date={formatedDate}
                     onPress={() => showMode("date")}
                  />
               </View>
               <View style={{ width: "100%", marginBottom: 15 }}>
                  <Text>Subject</Text>
                  <TextInput
                     placeholder="Subject"
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
                     Submit Request
                  </Text>
               </TouchableOpacity>
            </View>
            <View>
               <Text
                  style={{
                     fontSize: 18,
                     fontWeight: "bold",
                     color: colors.textPrimary,
                     marginTop: 30,
                     marginBottom: 20,
                  }}
               >
                  Previous requests
               </Text>
               <PrevRequestsBox
                  title="Title"
                  reason="Reason for which leave was requested"
                  requestedDate="20/10/22"
                  status="Approved"
               />
               <PrevRequestsBox
                  title="Title"
                  reason="Reason for which leave was requested"
                  requestedDate="1/10/21"
                  status="Rejected"
               />
            </View>
         </View>
      </ScrollView>
   );
};

export default leaveRequestScreen;
