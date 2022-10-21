import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  children: 'Test primary button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  secondary: true,
  children: 'Test secondary button',
};

export const Danger  = Template.bind({});
Danger.args = {
  danger: true,
  children: 'Test danger button',
};
