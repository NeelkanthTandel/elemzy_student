import React from "react";
import {
   View,
   Text,
   Dimensions,
   ScrollView,
   TouchableOpacity,
} from "react-native";
import { LineChart } from "react-native-chart-kit";
import { MaterialIcons } from "@expo/vector-icons";

import colors from "../../theme/color";

const HistoryContainer = (props) => {
   return (
      <View
         style={{
            width: "48%",
            borderWidth: 1,
            borderColor: colors.textSecondary,
            paddingVertical: 12,
            paddingHorizontal: 10,
            borderRadius: 10,
         }}
      >
         <View
            style={{
               flexDirection: "row",
               justifyContent: "center",
               marginBottom: 5,
            }}
         >
            <View
               style={{
                  alignItems: "center",
                  paddingHorizontal: 8,
                  paddingVertical: 3,
                  backgroundColor: colors.textPrimary,
                  borderRadius: 5,
               }}
            >
               <Text style={{ color: "white" }}>{props.year}</Text>
            </View>
         </View>
         <View
            style={{
               flexDirection: "row",
               justifyContent: "space-between",
            }}
         >
            <Text>
               Points: <Text>{props.points}</Text>
            </Text>
            <Text>
               Rank: <Text>{props.rank}</Text>
            </Text>
         </View>
      </View>
   );
};

const rankingHomeScreen = (props) => {
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
            }}
         >
            <Text
               style={{
                  fontSize: 24,
                  fontWeight: "700",
                  lineHeight: 24,
                  color: colors.textPrimary,
                  marginTop: 5,
                  marginBottom: 30,
                  flex: 1,
                  textAlign: "center",
               }}
            >
               Holistic Ranking
            </Text>
            <View style={{ width: "100%", marginBottom: 20 }}>
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
                  marginLeft: -50,
               }}
            />
            <View
               style={{
                  width: "100%",
                  marginTop: 30,
               }}
            >
               <Text
                  style={{
                     fontSize: 20,
                     fontWeight: "700",
                     lineHeight: 20,
                     color: colors.textPrimary,
                     marginBottom: 15,
                  }}
               >
                  Holistic Ranking History
               </Text>
               <View
                  style={{
                     flexDirection: "row",
                     width: "100%",
                     justifyContent: "space-between",
                     marginBottom: 15,
                  }}
               >
                  <HistoryContainer year="2012" points="350" rank="7" />
                  <HistoryContainer year="2020" points="350" rank="7" />
               </View>
               <View
                  style={{
                     flexDirection: "row",
                     width: "100%",
                     justifyContent: "space-between",
                  }}
               >
                  <HistoryContainer year="2012" points="350" rank="7" />
                  <HistoryContainer year="2020" points="350" rank="7" />
               </View>
            </View>
            <TouchableOpacity
               style={{ marginTop: 30 }}
               onPress={() => props.navigation.navigate("uploadDoc")}
            >
               <Text>Upload Document Screen</Text>
            </TouchableOpacity>
         </View>
      </ScrollView>
   );
};
export default rankingHomeScreen;
