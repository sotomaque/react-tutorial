import React from 'react';
import Button from './Button';
import { action } from '@storybook/addon-actions';

export default {
  title: 'form/Button',
  component: Button,
};

const Template = (args) => (
  <Button onClick={action('Click handler')} {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  children: 'Primary Args',
};
export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  children: 'Secondary Args',
};
export const Success = Template.bind({});
Success.args = {
  variant: 'success',
  children: 'Success Args',
};
export const Danger = Template.bind({});
Danger.args = {
  variant: 'danger',
  children: 'Danger Args',
};
