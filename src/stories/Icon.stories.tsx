import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Icon } from '../components/Icon';
import { Grid } from '@components/Grid';
import { IconName, IconProps } from '@models/icon';
import { JSX } from 'react/jsx-runtime';

export default {
  title: 'Components/Icon',
  component: Icon,
  argTypes: {
    icon: {
      control: 'select',
      options: [
        "add-image",
        "add-list",
        "add-photo",
        "add-uder",
        "arrow-chevron-down",
        "arrow-chevron-left",
        "arrow-chevron-right",
        "arrow-chevron-up",
        "arrow-reverse",
        "arrow-to-down-bold",
        "arrow-to-left-bold",
        "arrow-to-right-bold",
        "arrow-to-top-bold",
        "attachment",
        "check-circle-fill",
        "check-circle-outline",
        "check",
        "close-bold",
        "close-circle-fill",
        "close-circle",
        "close",
        "copy",
        "desktop",
        "dish-plate",
        "dots",
        "edit",
        "email-success",
        "email",
        "eye-closed-filled",
        "eye-closed",
        "eye-open-filled",
        "eye-open",
        "food-bread-svgrepo-com",
        "food-cheese-svgrepo-com",
        "food-dinner-fork-spoon-knife-svgrepo-com",
        "food-dish-hand-serve",
        "food-dish",
        "food-fried-egg",
        "food-hamburger",
        "food-hot-dog",
        "food-knife-and-fork",
        "food-meat-beef-stake-svgrepo-com",
        "food-meat-chicken-svgrepo-com",
        "food-pizza-slice-svgrepo-com",
        "food-taco-svgrepo-com",
        "food-wine-and-glass",
        "food",
        "history",
        "home",
        "image",
        "info-filled",
        "info",
        "key",
        "libro-icon",
        "lock",
        "logout",
        "notification-new",
        "notification",
        "phone",
        "pin",
        "plus",
        "search",
        "selector-down",
        "selector-up",
        "settings",
        "share",
        "sort-asc",
        "sort-desc",
        "spinner-cringe-base",
        "spinner-for-normies",
        "tablet",
        "trash-filled",
        "trash",
        "unlink",
        "upload-picture",
        "user-check",
        "user-follow",
        "user",
        "warning-circle-filled",
        "warning-circle",
        "warning-hex-filled",
        "warning-hex",
        "warning-triangle-filled",
        "warning-triangle",
      ],
      description: 'Имя иконки',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Размер иконки',
    },
    color: {
      control: 'color',
      description: 'Цвет иконки',
    },
    className: {
      control: 'text',
      description: 'Дополнительные классы стилей',
    },
    disabled: {
      control: 'boolean',
      description: 'Флаг отключения иконки',
    },
    onClick: {
      action: 'clicked',
      description: 'Обработчик клика по иконке',
    },
  },
} as Meta<typeof Icon>;

const Template: StoryFn<IconProps> = (args: JSX.IntrinsicAttributes & IconProps) => <Icon {...args} />;

export const Default = Template.bind({});
Default.args = {
  icon: 'search',
  size: 'md',
};

export const WithCustomColor = Template.bind({});
WithCustomColor.args = {
  icon: 'check-circle-fill',
  size: 'lg',
  color: '#4CAF50',
};

export const SmallSize = Template.bind({});
SmallSize.args = {
  icon: 'arrow-chevron-down',
  size: 'sm',
};

export const LargeSize = Template.bind({});
LargeSize.args = {
  icon: 'warning-triangle-filled',
  size: 'lg',
  color: '#FF9800',
};

export const DisabledIcon = Template.bind({});
DisabledIcon.args = {
  icon: 'close',
  size: 'md',
  disabled: true,
};

export const InteractiveExample = () => {
  const handleClick = () => {
    alert("Кнопка была нажата!");
  };

  return (
    <div>
      <Icon
        icon="plus"
        size="md"
        onClick={handleClick}
        color="#2196F3"
      />
    </div>
  );
};
InteractiveExample.parameters = {
  controls: { hideNoControlsWarning: true },
};

export const AllIcons = () => {
  const iconNames: IconName[] = [
    "add-image",
    "add-list",
    "add-photo",
    "add-uder",
    "arrow-chevron-down",
    "arrow-chevron-left",
    "arrow-chevron-right",
    "arrow-chevron-up",
    "arrow-reverse",
    "arrow-to-down-bold",
    "arrow-to-left-bold",
    "arrow-to-right-bold",
    "arrow-to-top-bold",
    "attachment",
    "check-circle-fill",
    "check-circle-outline",
    "check",
    "close-bold",
    "close-circle-fill",
    "close-circle",
    "close",
    "copy",
    "desktop",
    "dish-plate",
    "dots",
    "edit",
    "email-success",
    "email",
    "eye-closed-filled",
    "eye-closed",
    "eye-open-filled",
    "eye-open",
    "food-bread-svgrepo-com",
    "food-cheese-svgrepo-com",
    "food-dinner-fork-spoon-knife-svgrepo-com",
    "food-dish-hand-serve",
    "food-dish",
    "food-fried-egg",
    "food-hamburger",
    "food-hot-dog",
    "food-knife-and-fork",
    "food-meat-beef-stake-svgrepo-com",
    "food-meat-chicken-svgrepo-com",
    "food-pizza-slice-svgrepo-com",
    "food-taco-svgrepo-com",
    "food-wine-and-glass",
    "food",
    "history",
    "home",
    "image",
    "info-filled",
    "info",
    "key",
    "libro-icon",
    "lock",
    "logout",
    "notification-new",
    "notification",
    "phone",
    "pin",
    "plus",
    "search",
    "selector-down",
    "selector-up",
    "settings",
    "share",
    "sort-asc",
    "sort-desc",
    "spinner-cringe-base",
    "spinner-for-normies",
    "tablet",
    "trash-filled",
    "trash",
    "unlink",
    "upload-picture",
    "user-check",
    "user-follow",
    "user",
    "warning-circle-filled",
    "warning-circle",
    "warning-hex-filled",
    "warning-hex",
    "warning-triangle-filled",
    "warning-triangle"
  ];

  return (
    <Grid columns={6} gap="16px">
      {iconNames.map((icon) => (
        <div key={icon} style={{ textAlign: 'center' }}>
          <Icon icon={icon} size="md" />
          <p style={{ fontSize: '12px', marginTop: '8px' }}>{icon}</p>
        </div>
      ))}
    </Grid>
  );
};
AllIcons.parameters = {
  controls: { hideNoControlsWarning: true },
};