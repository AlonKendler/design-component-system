import { ComponentStory, ComponentMeta } from "@storybook/react";

import Select from ".";

export default {
    title: "Select/Select",
    component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args: any) => {
    return <Select {...args} />;
};


export const SelectSingle = Template.bind({});
export const SelectMulit = Template.bind({});

SelectSingle.args = {

    options: [
        { id: 0, label: "red", isSelected: false },
        { id: 1, label: "blue", isSelected: false },
        { id: 2, label: "purple", isSelected: false },
        { id: 3, label: "yellow", isSelected: false },
        { id: 4, label: "green", isSelected: false },
    ],
    placeholder: "select a single thing...",
    label: "Single Select - Pick a color:",
    multi: false
};
SelectSingle.args = {

    options: [
        { id: 0, label: "red", isSelected: false },
        { id: 1, label: "blue", isSelected: false },
        { id: 2, label: "purple", isSelected: false },
        { id: 3, label: "yellow", isSelected: false },
        { id: 4, label: "green", isSelected: false },
    ],
    placeholder: "select a single thing...",
    label: "Single Select - Pick a color:",
    multi: true
};
