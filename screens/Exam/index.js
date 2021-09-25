import React from "react";
import {
   StyleSheet,
   View,
   Text,
   ScrollView,
   TouchableOpacity,
} from "react-native";

import colors from "../../theme/color";

const UpExamContainer = (props) => {
   return (
      <View style={{ marginVertical: 10 }}>
         <Text style={{ fontSize: 12, marginBottom: 5 }}>{props.date}</Text>
         <View
            style={{
               flexDirection: "row",
               width: "100%",
               alignItems: "center",
            }}
         >
            <View
               style={{
                  flex: 1,
                  backgroundColor: props.color,
                  flexDirection: "row",
                  borderRadius: 10,
                  padding: 10,
               }}
            >
               <View
                  style={{
                     justifyContent: "space-between",
                     marginRight: 10,
                  }}
               >
                  <Text style={{ color: props.textColor }}>{props.from}</Text>
                  <Text style={{ color: props.textColor }}>{props.to}</Text>
               </View>
               <View style={{ marginVertical: 5 }}>
                  <Text style={{ color: props.textColor, fontWeight: "bold" }}>
                     {props.subject}
                  </Text>
                  <Text style={{ color: props.textColor }}>
                     {props.faculty}
                  </Text>
                  <Text style={{ color: props.textColor }}>
                     {props.duration}
                  </Text>
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
      </View>
   );
};

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
               Exam
            </Text>
            <View style={{ flex: 1, width: "100%" }}>
               <Text
                  style={{
                     fontSize: 20,
                     fontWeight: "bold",
                     color: colors.textPrimary,
                     marginVertical: 10,
                     marginTop: 30,
                  }}
               >
                  Your upcomming examinations
               </Text>

               {/* <ScrollView showsVerticalScrollIndicator={false}> */}
               <UpExamContainer
                  subject="Machine Learning"
                  faculty="Waden Warren"
                  duration="1 hour"
                  from="10:00"
                  to="11:00"
                  color="#fff2d5"
                  textColor="#fe4500"
                  date="Sunday, 12 September"
                  onPress={() => props.navigation.navigate("viewExam")}
               />
               <UpExamContainer
                  subject="Machine Learning"
                  faculty="Waden Warren"
                  duration="1.5 hour"
                  from="13:00"
                  to="14:30"
                  color="#e4ecfa"
                  textColor="#0043b4"
                  date="Tuesday, 01 March"
                  onPress={() => props.navigation.navigate("viewExam")}
               />
               {/* </ScrollView> */}
            </View>
         </View>
      </ScrollView>
   );
};

export default index;
