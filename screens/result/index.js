import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import NavigatorBox from "../../components/navigatorBox";

import colors from "../../theme/color";
import ResultListBox from "./resultListBox";

const resultHomeScreen = (props) => {
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
                  marginBottom: 30,
               }}
            >
               Result
            </Text>
            <NavigatorBox
               title="View Results"
               view
               onPress={() => props.navigation.navigate("viewResult")}
            />
            <View style={{ width: "100%" }}>
               <Text
                  style={{
                     fontSize: 18,
                     fontWeight: "700",
                     lineHeight: 18,
                     color: colors.textPrimary,
                     marginTop: 30,
                     marginBottom: 15,
                  }}
               >
                  Resently added
               </Text>
               <ResultListBox
                  exam="Unit Test 1"
                  date="22-07-2021"
                  onPress={() => props.navigation.navigate("studentResult")}
               />
            </View>
         </View>
      </ScrollView>
   );
};

export default resultHomeScreen;
