import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

import colors from "../../theme/color";

const resultListBox = (props) => {
   return (
      <View
         style={{
            flexDirection: "row",
            justifyContent: "space-between",
            borderWidth: 0.5,
            borderColor: colors.textSecondary,
            paddingVertical: 5,
            paddingHorizontal: 10,
            alignItems: "center",
            borderRadius: 5,
            marginBottom: 15,
         }}
      >
         <Text>Unit test</Text>
         <Text>22-07-2021</Text>
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

export default resultListBox;
