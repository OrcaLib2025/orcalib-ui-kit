import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Grid } from '@components/Grid';

const meta: Meta<typeof Grid> = {
  title: 'Components/Grid',
  component: Grid,
  tags: ['autodocs'],
  argTypes: {
    columns: {
      control: 'object',
      description: 'Максимальное количество колонок на каждом брейкпоинте',
    },
    gap: {
      control: 'text',
      description: 'Отступ между элементами',
    },
    className: {
      control: false,
    },
    style: {
      control: false,
    },
  },
};

export default meta;

type Story = StoryObj<typeof Grid>;

const DummyItem = ({ index }: { index: number }) => (
  <div style={{
    background: '#f1f1f1',
    padding: '20px',
    textAlign: 'center',
    borderRadius: '8px',
  }}>
    Item {index + 1}
  </div>
);

const generateItems = (count: number) => Array.from({ length: count }, (_, i) => <DummyItem key={i} index={i} />);

export const Default: Story = {
  args: {
    columns: { sm: 1, md: 2, lg: 3, xl: 4 },
    gap: '16px',
    children: generateItems(12),
  },
};

export const ResponsiveAutoFit: Story = {
  args: {
    columns: { sm: 1, md: 2, lg: 4 },
    gap: '24px',
    children: generateItems(8),
  },
};

export const MaxTwoColumns: Story = {
  args: {
    columns: { sm: 1, md: 2, lg: 2, xl: 2 },
    gap: '12px',
    children: generateItems(6),
  },
};
