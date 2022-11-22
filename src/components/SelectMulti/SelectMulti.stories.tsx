import { ComponentStory, ComponentMeta } from "@storybook/react";

import SelectMulti from ".";

export default {
  title: "Select/Multi Select",
  component: SelectMulti,
} as ComponentMeta<typeof SelectMulti>;

const Template: ComponentStory<typeof SelectMulti> = (args: any) => {
  return <SelectMulti {...args} />;
};


export const multipleSelect = Template.bind({});
export const multipleSelectLong = Template.bind({});

multipleSelect.args = {
  options: [
    { id: 0, label: "red", isSelected: false },
    { id: 1, label: "blue", isSelected: false },
    { id: 2, label: "purple", isSelected: true },
    { id: 3, label: "yellow", isSelected: false },
    { id: 4, label: "green", isSelected: false },
  ],
  placeholder: "select...",
  label: "Multi Select - Pick a color:",
  multi: true,
};

multipleSelectLong.args = {
  options: [
    {
      id: 1,
      label: "France",
      isSelected: true
    },
    {
      id: 2,
      label: "China",
      isSelected: false
    },
    {
      id: 3,
      label: "Colombia",
      isSelected: true
    },
    {
      id: 4,
      label: "New Zealand",
      isSelected: false
    },

    {
      id: 6,
      label: "Panama",
      isSelected: false
    },

    {
      id: 9,
      label: "Russia",
      isSelected: true
    },
    {
      id: 10,
      label: "Portugal",
      isSelected: true
    },

    {
      id: 12,
      label: "Morocco",
      isSelected: true
    },
    {
      id: 13,
      label: "East Timor",
      isSelected: true
    },

    {
      id: 15,
      label: "Argentina",
      isSelected: false
    },
    {
      id: 16,
      label: "Greece",
      isSelected: false
    },
    {
      id: 17,
      label: "Indonesia",
      isSelected: true
    },
    {
      id: 18,
      label: "Poland",
      isSelected: true
    },

  ],
  placeholder: "select...",
  label: "Multi Select - Pick a color:",
};
