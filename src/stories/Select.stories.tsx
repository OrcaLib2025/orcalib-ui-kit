import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Select } from '@components/Select';
import { SelectProps } from '@models/select';

const meta: Meta<SelectProps> = {
  title: 'UI/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg', 'full'],
    },
    disabled: {
      control: 'boolean',
    },
  },
};
export default meta;

const Template: StoryObj<SelectProps> = {
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState<string>('');
    return <Select {...args} value={value} onChange={() => setValue(value)} />;
  },
};

export const Default = {
  ...Template,
  args: {
    placeholder: 'Выберите опцию',
    size: 'md',
    options: [
      { value: '1', label: 'Первый' },
      { value: '2', label: 'Второй' },
      { value: '3', label: 'Третий' },
    ],
  },
};

export const ManyOptions = {
  ...Template,
  args: {
    placeholder: 'Поиск по списку...',
    size: 'md',
    options: Array.from({ length: 50 }, (_, i) => ({
      value: `${i + 1}`,
      label: `Элемент ${i + 1}`,
    })),
  },
};

export const Disabled = {
  ...Template,
  args: {
    value: '2',
    disabled: true,
    options: [
      { value: '1', label: 'Один' },
      { value: '2', label: 'Два' },
    ],
  },
};
