import React from 'react';
import { Meta, StoryFn } from '@storybook/react'; 
import { Button } from '../components/Button';
import { ButtonProps } from '@models/button';
import { JSX } from 'react/jsx-runtime';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'xl', 'full'],
    },
    type: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'ghost'],
    },
    theme: {
      control: { type: 'select' },
      options: ['light', 'dark'],
    },
    iconPosition: {
      control: { type: 'select' },
      options: ['left', 'right'],
    },
  },
} as Meta;

const Template: StoryFn<React.ComponentProps<typeof Button>> = (args: JSX.IntrinsicAttributes & ButtonProps) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Click me',
  size: 'md',
  type: 'primary',
};

export const WithIconLeft = Template.bind({});
WithIconLeft.args = {
  text: 'Click me',
  size: 'md',
  type: 'primary',
  icon: <span>⭐️</span>,
  iconPosition: 'left',
};

export const WithIconRight = Template.bind({});
WithIconRight.args = {
  text: 'Click me',
  size: 'md',
  type: 'primary',
  icon: <span>⭐️</span>,
  iconPosition: 'right',
};

export const Loading = Template.bind({});
Loading.args = {
  text: 'Click me',
  size: 'md',
  type: 'primary',
  loading: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  text: 'Click me',
  size: 'md',
  type: 'primary',
  disabled: true,
};

export const Sizes = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
    <Button text="Small" size="sm" type="primary" />
    <Button text="Medium" size="md" type="primary" />
    <Button text="Large" size="lg" type="primary" />
    <Button text="Extra Large" size="xl" type="primary" />
    <Button text="Full Width" size="full" type="primary" />
  </div>
);

export const Types = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
    <Button text="Primary" size="md" type="primary" />
    <Button text="Secondary" size="md" type="secondary" />
    <Button text="Ghost" size="md" type="ghost" />
  </div>
);

export const Themes = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
    <Button text="Light Theme" size="md" type="ghost" />
    <div style={{background: "#222"}}>
        <Button text="Dark Theme" size="md" type="ghost" />
    </div>
  </div>
);