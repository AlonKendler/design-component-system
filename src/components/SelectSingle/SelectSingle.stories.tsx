import { ComponentStory, ComponentMeta } from "@storybook/react";

import SelectSingle from ".";

export default {
  title: "Select/Single Select",
  component: SelectSingle,
} as ComponentMeta<typeof SelectSingle>;

const Template: ComponentStory<typeof SelectSingle> = (args: any) => {
  return <SelectSingle {...args} />;
};


export const singleSelect = Template.bind({});

singleSelect.args = {

  options: [
    { id: 0, label: "red", isSelected: false },
    { id: 1, label: "blue", isSelected: false },
    { id: 2, label: "purple", isSelected: false },
    { id: 3, label: "yellow", isSelected: false },
    { id: 4, label: "green", isSelected: false },
  ],
  placeholder: "select a single thing...",
  label: "Single Select - Pick a color:",
  multi: false,
};
