import React from "react";
import {
   View,
   Text,
   StyleSheet,
   ScrollView,
   TouchableOpacity,
   Image,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import colors from "../../theme/color";

const courseScreen = (props) => {
   return (
      <ScrollView
         style={{ backgroundColor: colors.backgroundColor }}
         showsVerticalScrollIndicator={false}
      >
         <View
            style={{
               flex: 1,
               alignItems: "center",
               paddingVertical: 30,
               paddingHorizontal: 20,
            }}
         >
            <View
               style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginBottom: 30,
               }}
            >
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
                  Course
               </Text>
               <MaterialIcons
                  name="keyboard-arrow-left"
                  size={35}
                  color={colors.backgroundColor}
               />
            </View>
            <View
               style={{
                  width: "100%",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
               }}
            >
               <View style={{ flex: 1, marginRight: 10 }}>
                  <Text
                     style={{
                        fontWeight: "bold",
                        fontSize: 16,
                     }}
                  >
                     {props.route.params.title}
                  </Text>
                  <Text style={{ marginTop: 5 }}>
                     {props.route.params.author}
                  </Text>
                  <Text style={{ fontWeight: "bold", color: "#e04000" }}>
                     Rating: {props.route.params.rating}/5
                  </Text>
                  <Text style={{ fontWeight: "bold", marginTop: 10 }}>
                     &#8377; {props.route.params.price}
                  </Text>
               </View>
               <Image
                  source={{
                     uri: props.route.params.imageURI,
                  }}
                  style={{
                     width: "70%",
                     height: 120,
                     borderRadius: 20,
                     marginRight: "-40%",
                  }}
                  resizeMode="contain"
               />
            </View>
            <View
               style={{
                  paddingHorizontal: 15,
                  paddingVertical: 15,
                  marginTop: 30,
                  alignItems: "center",
                  backgroundColor: "#dfe3ff",
                  borderRadius: 10,
                  width: "100%",
               }}
            >
               <Text
                  style={{
                     color: colors.textPrimary,
                     fontSize: 18,
                     fontWeight: "bold",
                     marginBottom: 15,
                  }}
               >
                  What you'll learn
               </Text>
               <Text style={{ textAlign: "center", marginBottom: 10 }}>
                  Essential Linear Algebra and Calculus Hands-On in NumPy
                  TensorFlow, and PyTorch
               </Text>
               <Text style={{ textAlign: "center", marginBottom: 10 }}>
                  Understand the fundamentals of linear algebra, a critical
                  subject underlying
               </Text>
               <Text style={{ textAlign: "center", marginBottom: 10 }}>
                  Essential Linear Algebra and Calculus Hands-On in NumPy
                  TensorFlow, and PyTorch
               </Text>
               <Text>Essential Linear Algebra</Text>
            </View>
            <View
               style={{
                  paddingHorizontal: 15,
                  paddingVertical: 15,
                  marginTop: 30,
                  alignItems: "center",
                  backgroundColor: "#dfe3ff",
                  borderRadius: 10,
                  width: "100%",
               }}
            >
               <Text
                  style={{
                     color: colors.textPrimary,
                     fontSize: 18,
                     fontWeight: "bold",
                     marginBottom: 15,
                  }}
               >
                  Access to
               </Text>
               <Text style={{ textAlign: "center", marginBottom: 10 }}>
                  8.5 hours on-demand video
               </Text>
               <Text style={{ textAlign: "center", marginBottom: 10 }}>
                  1 article
               </Text>
               <Text style={{ textAlign: "center", marginBottom: 10 }}>
                  Full lifetime access
               </Text>
               <Text style={{ textAlign: "center", marginBottom: 10 }}>
                  Access on mobile and Web
               </Text>
               <Text style={{ textAlign: "center", marginBottom: 10 }}>
                  Certificate of completion
               </Text>
               <TouchableOpacity
                  style={{
                     backgroundColor: colors.textPrimary,
                     paddingHorizontal: 13,
                     paddingVertical: 8,
                     borderRadius: 10,
                     justifyContent: "center",
                  }}
               >
                  <Text style={{ color: "white", fontWeight: "bold" }}>
                     Buy now
                  </Text>
               </TouchableOpacity>
            </View>
         </View>
      </ScrollView>
   );
};

export default courseScreen;
