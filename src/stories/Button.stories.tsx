import React from 'react';
import { Meta, StoryFn } from '@storybook/react'; 
import { Button } from '../components/Button';
import { ButtonProps } from '@models/button';
import { JSX } from 'react/jsx-runtime';

export default {
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
  theme: 'light',
};

export const WithIconLeft = Template.bind({});
WithIconLeft.args = {
  text: 'Click me',
  size: 'md',
  type: 'primary',
  theme: 'light',
  icon: <span>⭐️</span>,
  iconPosition: 'left',
};

// Кнопка с иконкой справа
export const WithIconRight = Template.bind({});
WithIconRight.args = {
  text: 'Click me',
  size: 'md',
  type: 'primary',
  theme: 'light',
  icon: <span>⭐️</span>,
  iconPosition: 'right',
};

export const Loading = Template.bind({});
Loading.args = {
  text: 'Click me',
  size: 'md',
  type: 'primary',
  theme: 'light',
  loading: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  text: 'Click me',
  size: 'md',
  type: 'primary',
  theme: 'light',
  disabled: true,
};

export const Sizes = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
    <Button text="Small" size="sm" type="primary" theme="light" />
    <Button text="Medium" size="md" type="primary" theme="light" />
    <Button text="Large" size="lg" type="primary" theme="light" />
    <Button text="Extra Large" size="xl" type="primary" theme="light" />
    <Button text="Full Width" size="full" type="primary" theme="light" />
  </div>
);

export const Types = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
    <Button text="Primary" size="md" type="primary" theme="light" />
    <Button text="Secondary" size="md" type="secondary" theme="light" />
    <Button text="Ghost" size="md" type="ghost" theme="light" />
  </div>
);

export const Themes = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
    <Button text="Light Theme" size="md" type="ghost" theme="light" />
    <div style={{background: "#222"}}>
        <Button text="Dark Theme" size="md" type="ghost" theme="dark" />
    </div>
  </div>
);