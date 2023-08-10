import React from "react";
import { NativeBaseProvider, Box, Input } from "native-base";
import InputData from "./Components/InputData";
import DropDown from "./Components/DropDown";

export default function App() {
  return (
    <NativeBaseProvider>
      <InputData placeholder="Enter your name"/>
      <InputData placeholder="Enter your age"/>
      <DropDown />
      <InputData placeholder="Enter a description"/>



    </NativeBaseProvider>
  );
}