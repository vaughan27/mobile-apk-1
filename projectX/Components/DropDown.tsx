import React from "react";
import { Select, VStack, CheckIcon, Input } from "native-base";

function DropDown() {
  let [service, setService] = React.useState("");
  return <VStack alignItems="center" space={4}>
      <Select shadow={2} selectedValue={service} minWidth="200" accessibilityLabel="Choose Designation" placeholder="Choose Designation" _selectedItem={{
      bg: "teal.600",
      endIcon: <CheckIcon size="5" />
    }} _light={{
      bg: "coolGray.100",
      _hover: {
        bg: "coolGray.200"
      },
      _focus: {
        bg: "coolGray.200:alpha.70"
      }
    }} _dark={{
      bg: "coolGray.800",
      _hover: {
        bg: "coolGray.900"
      },
      _focus: {
        bg: "coolGray.900:alpha.70"
      }
    }} onValueChange={itemValue => setService(itemValue)}>
        <Select.Item shadow={2} label="Front Developer" value="front" />
        <Select.Item shadow={2} label="Tester" value="test" />
        <Select.Item shadow={2} label="Project Manager" value="project" />
        <Select.Item shadow={2} label="UI Designer" value="ui" />
        <Select.Item shadow={2} label="Backend Developer" value="backend" />
        <Select.Item shadow={2} label="Mobile APP Developer" value="mobile" />
      </Select>
    </VStack>;
};

export default DropDown;
    