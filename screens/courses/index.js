import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList, Image } from "react-native";
import { SearchBar } from "react-native-elements";

import colors from "../../theme/color";

const CourseBox = (props) => {
   return (
      <TouchableOpacity activeOpacity={0.6} style={{ marginBottom: 30 }}>
         <Image
            source={{
               uri: props.imageURI,
            }}
            style={{
               width: "100%",
               height: 160,
               borderRadius: 10,
               marginBottom: 10,
            }}
            resizeMode="contain"
         />
         <Text
            style={{
               fontWeight: "bold",
               fontSize: 16,
            }}
         >
            {props.title}
         </Text>
         <Text style={{ marginTop: 5 }}>{props.author}</Text>
         <Text style={{ fontWeight: "bold", color: "#e04000" }}>
            Rating: {props.rating}/5
         </Text>
         <View
            style={{
               flexDirection: "row",
               justifyContent: "space-between",
               alignItems: "center",
            }}
         >
            <Text>&#8377; {props.price}</Text>
            {props.bestseller ? (
               <View
                  style={{
                     paddingVertical: 3,
                     paddingHorizontal: 10,
                     borderWidth: 1,
                     borderRadius: 5,
                  }}
               >
                  <Text style={{ fontSize: 12 }}>BestSeller</Text>
               </View>
            ) : null}
         </View>
      </TouchableOpacity>
   );
};

const coursesHomeScreen = (props) => {
   const [search, setSearch] = useState("");
   const [filteredCourses, setFilteredCourses] = useState([]);

   const courses = [
      {
         imageURI:
            "https://hackr.io/blog/machine-learning-courses/thumbnail/large",
         title: "Mathematical foundation of machine learning",
         author: "Dr jon krohn ligency team",
         rating: 4.5,
         price: "8,650",
         bestseller: true,
      },
      {
         imageURI:
            "https://hackr.io/blog/artificial-intelligence-courses/thumbnail/large",
         title: "Artificial Intelligence course",
         author: "Dr jon krohn ligency team",
         rating: 4.5,
         price: "8,650",
         bestseller: false,
      },
   ];

   const handleSearch = (text) => {
      const formatedText = text.toLowerCase();
      const filteredData = courses.filter((user) =>
         user.title.toLowerCase().includes(formatedText)
      );
      setFilteredCourses(filteredData);
   };

   return (
      <View
         style={{
            paddingHorizontal: 20,
            paddingTop: 30,
            backgroundColor: colors.backgroundColor,
            flex: 1,
         }}
      >
         <SearchBar
            placeholder="Search"
            onChangeText={(val) => {
               setSearch(val);
               handleSearch(val);
            }}
            value={search}
            inputContainerStyle={{
               backgroundColor: "#e8f4ff",
               borderRadius: 10,
            }}
            lightTheme
            containerStyle={{
               padding: 0,
               borderTopWidth: 0,
               borderBottomWidth: 0,
               borderRadius: 10,
               marginBottom: 30,
            }}
         />
         {!search ? (
            <Text
               style={{
                  fontSize: 18,
                  fontWeight: "700",
                  lineHeight: 18,
                  color: colors.textPrimary,
                  marginBottom: 15,
               }}
            >
               All courses
            </Text>
         ) : null}

         <FlatList
            data={search ? filteredCourses : courses}
            renderItem={(itemData) => {
               return (
                  <CourseBox
                     imageURI={itemData.item.imageURI}
                     title={itemData.item.title}
                     author={itemData.item.author}
                     rating={itemData.item.rating}
                     price={itemData.item.price}
                     bestseller={itemData.item.bestseller}
                  />
               );
            }}
            keyExtractor={(item, index) => index.toString()}
            ListEmptyComponent={() => (
               <View style={{ marginTop: 30, alignItems: "center" }}>
                  <Text>No result found</Text>
               </View>
            )}
            showsVerticalScrollIndicator={false}
         />
      </View>
   );
};

export default coursesHomeScreen;
