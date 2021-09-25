import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

const navigatorBox = (props) => {
   return (
      <TouchableOpacity
         onPress={props.onPress}
         activeOpacity={0.6}
         style={{
            backgroundColor: "#3283c9",
            justifyContent: "center",
            alignItems: "center",
            paddingHorizontal: 15,
            paddingVertical: 15,
            width: "48%",
            borderRadius: 5,
         }}
      >
         {props.view ? (
            <MaterialCommunityIcons
               name="eye-circle-outline"
               size={28}
               style={{ marginVertical: 8 }}
               color="white"
            />
         ) : (
            <Ionicons
               name="ios-add-circle-outline"
               size={28}
               style={{ marginVertical: 8 }}
               color="white"
            />
         )}

         <Text
            style={{
               fontSize: 14,
               color: "white",
               fontWeight: "bold",
            }}
            numberOfLines={1}
         >
            {props.title}
         </Text>
      </TouchableOpacity>
   );
};

export default navigatorBox;
