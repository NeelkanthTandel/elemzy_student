import React, { useState } from "react";
import { View, Text, Dimensions } from "react-native";
import colors from "../theme/color";
import { Picker } from "@react-native-picker/picker";
import { LineChart } from "react-native-chart-kit";

const UpExamContainer = (props) => {
   return (
      <View style={{ marginVertical: 10 }}>
         <Text style={{ fontSize: 12, marginBottom: 5 }}>{props.date}</Text>
         <View
            style={{
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
               <Text style={{ color: props.textColor }}>{props.faculty}</Text>
               <Text style={{ color: props.textColor }}>{props.duration}</Text>
            </View>
         </View>
      </View>
   );
};

const dashboardSectionTwo = (props) => {
   const [selectedDate, setSelectedDate] = useState();

   return (
      <View
         style={{
            flex: 1,
            paddingHorizontal: 20,
            paddingBottom: 30,
            backgroundColor: colors.backgroundColor,
         }}
      >
         <View>
            <Text
               style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  color: colors.textPrimary,
                  marginTop: 50,
               }}
            >
               Holistic Ranking
            </Text>
            <View style={{ width: "100%", marginVertical: 20 }}>
               <View
                  style={{
                     flexDirection: "row",
                     justifyContent: "space-between",
                  }}
               >
                  <Text>
                     Points: <Text>350</Text>
                  </Text>
                  <Text>
                     Rank: <Text>7</Text>
                  </Text>
               </View>
            </View>
            <LineChart
               data={{
                  labels: ["QT1", "", "QT2", "", "QT3"],
                  datasets: [
                     {
                        data: [1.5, 10, 2.5, 4, 3.5],
                     },
                  ],
               }}
               width={Dimensions.get("window").width - 20} // from react-native
               height={220}
               chartConfig={{
                  backgroundColor: colors.backgroundColor,
                  backgroundGradientFrom: colors.backgroundColor,
                  backgroundGradientTo: colors.backgroundColor,
                  decimalPlaces: 0, // optional, defaults to 2dp
                  color: () => "red",
                  labelColor: () => "#ccc",
               }}
               bezier
               style={{
                  marginLeft: -35,
               }}
            />
         </View>
         <View style={{ flex: 1 }}>
            <Text
               style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  color: colors.textPrimary,
                  marginTop: 50,
               }}
            >
               Upcoming Examinations
            </Text>
            <View style={{ alignItems: "flex-end", marginBottom: 5 }}>
               <View
                  style={{
                     borderWidth: 1,
                     borderColor: "grey",
                     paddingVertical: 2,
                     borderRadius: 5,
                  }}
               >
                  <Picker
                     selectedValue={selectedDate}
                     onValueChange={(itemValue, itemIndex) =>
                        setSelectedDate(itemValue)
                     }
                     style={{
                        color: "grey",
                        width: 110,
                        marginRight: -10,
                     }}
                     dropdownIconColor="grey"
                  >
                     <Picker.Item label="Today" value="today" />
                     <Picker.Item label="Tomorrow" value="tomorrow" />
                  </Picker>
               </View>
            </View>
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
            />
            {/* </ScrollView> */}
         </View>
      </View>
   );
};

export default dashboardSectionTwo;
