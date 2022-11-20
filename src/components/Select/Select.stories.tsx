import { red } from "@mui/material/colors";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useState } from "react";

import { Select, Selectprops } from "./Select";

export default {
  title: "Select/Select",

  component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args: any) => {
  return <Select {...args} />;
};

export const singleSelect = Template.bind({});
export const multipleSelect = Template.bind({});

singleSelect.args = {
  id: 1,
  options: [
    { id: 0, label: "red", isSelected: false },
    { id: 1, label: "blue", isSelected: false },
    { id: 2, label: "purple", isSelected: false },
    { id: 3, label: "yellow", isSelected: false },
    { id: 4, label: "green", isSelected: false },
  ],
  label: "Pick a color:",
  onChange: (value) => alert(value),
};

multipleSelect.args = {
  id: 1,
  options: [
    { id: 0, label: "red", isSelected: false },
    { id: 1, label: "blue", isSelected: false },
    { id: 2, label: "purple", isSelected: false },
    { id: 3, label: "yellow", isSelected: false },
    { id: 4, label: "green", isSelected: false },
  ],
  label: "Pick a color:",
  onChange: (value) => alert(value),
  multi: true,
};
