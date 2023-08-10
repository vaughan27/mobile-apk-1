import React from "react";
import { Input, Center, NativeBaseProvider } from "native-base";

function InputData(props) {
  return <Input shadow={2} _light={{
    bg: "coolGray.100",
    _hover: {
      bg: "coolGray.200"
    },
    _focus: {
      bg: "#fafafa"
    }
  }} _dark={{
    bg: "coolGray.800",
    _hover: {
      bg: "coolGray.900"
    },
    _focus: {
      bg: "coolGray.900:alpha.70"
    }
  }} placeholder={props.placeholder} />;
};

export default InputData;
    