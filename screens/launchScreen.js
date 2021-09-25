import React, { useState } from "react";

import LoginScreen from "./loginScreen";
import SignUpScreen from "./signUpScreen";

const launchScreen = (props) => {
   const [isLogin, setIsLogin] = useState(true);

   const RenderScreen = isLogin ? LoginScreen : SignUpScreen;

   const switchScreenHandler = () => {
      setIsLogin(!isLogin);
   };

   return (
      <RenderScreen
         onPress={switchScreenHandler}
         navigation={props.navigation}
      />
   );
};

export default launchScreen;
