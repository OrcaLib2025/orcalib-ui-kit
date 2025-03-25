import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Search } from '../components/Search';
import { SearchProps } from '@models/search';
import { JSX } from 'react/jsx-runtime';

export default {
  title: 'Components/Search',
  component: Search,
  argTypes: {
    placeholder: {
      control: 'text',
      description: 'Placeholder текст для поля ввода',
    },
    value: {
      control: 'text',
      description: 'Текущее значение поля ввода',
    },
    theme: {
      control: 'select',
      options: ['light', 'dark'],
      description: 'Тема компонента',
    },
  },
} as Meta<typeof Search>;

const Template: StoryFn<SearchProps> = (args: JSX.IntrinsicAttributes & SearchProps) => {
  const [value, setValue] = useState<string>(args.value || '');
  return <Search {...args} value={value} onChange={setValue} />;
};

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Введите рецепт или ингредиент...',
  value: '',
  theme: 'light',
};

export const DarkTheme = Template.bind({});
DarkTheme.args = {
  placeholder: 'Поиск в темной теме...',
  value: '',
  theme: 'dark',
};

export const WithInitialValue = Template.bind({});
WithInitialValue.args = {
  placeholder: 'Введите рецепт или ингредиент...',
  value: 'Пирог с яблоками',
  theme: 'light',
};

export const Interactive = () => {
  const [value, setValue] = useState<string>('');
  return (
    <div>
      <Search
        placeholder="Введите текст..."
        value={value}
        onChange={setValue}
        theme="light"
      />
      <p style={{ marginTop: '10px' }}>Текущее значение: {value}</p>
    </div>
  );
};
Interactive.parameters = {
  controls: { hideNoControlsWarning: true }, // Отключаем предупреждения о контролах
};