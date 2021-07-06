import React from "react";
import { Story, ComponentMeta } from "@storybook/react";
import { Button, ButtonProps } from "antd";

export default {
  title: "Example/Antd Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Button>;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  type: "primary",
  children: "Button",
} as ButtonProps;

export const Secondary = Template.bind({});
Secondary.args = {
  children: "Button",
};
