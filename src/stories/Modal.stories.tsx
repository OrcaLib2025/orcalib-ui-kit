import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Modal } from '../components/Modal';
import { JSX } from 'react/jsx-runtime';
import { ModalProps } from '@models/button';

export default {
  title: 'Components/Modal',
  component: Modal,
  argTypes: {
    theme: {
      control: { type: 'select' },
      options: ['light', 'dark'],
    },
    buttonDirection: {
      control: { type: 'select' },
      options: ['row', 'column'],
    },
    backgroundImg: {
      control: { type: 'text' },
    },
    isClosable: {
      control: { type: 'boolean' },
    },
  },
} as Meta;

const Template: StoryFn<ModalProps> = (args: JSX.IntrinsicAttributes & ModalProps) => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div>
      <Modal
        {...args}
        isVisible={isVisible}
        onClose={() => setIsVisible(false)}
        onBackgroundClick={() => setIsVisible(false)}
      />
      <button onClick={() => setIsVisible(true)}>Open Modal</button>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  title: 'Заголовок',
  subtitle: 'Подзаголовок',
  theme: 'light',
  isClosable: true,
  children: <p>Содержимое модального окна</p>,
  action: [
    { text: 'Отмена', onClick: () => console.log('Cancel clicked') },
    { text: 'Подтвердить', onClick: () => console.log('Confirm clicked') },
  ],
};

export const DarkTheme = Template.bind({});
DarkTheme.args = {
  ...Default.args,
  theme: 'dark',
};

export const WithBackgroundImage = Template.bind({});
WithBackgroundImage.args = {
  ...Default.args,
  theme: 'dark',
  backgroundImg: 'img/modalbg.jpg',
};

export const WithoutButtons = Template.bind({});
WithoutButtons.args = {
  ...Default.args,
  action: undefined,
};

export const VerticalButtons = Template.bind({});
VerticalButtons.args = {
  ...Default.args,
  buttonDirection: 'column',
};

export const Sizes = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
    <Modal
      title="Маленький"
      subtitle="Размер sm"
      theme="light"
      isVisible={true}
      onClose={() => {}}
      onBackgroundClick={() => {}}
      className="sm"
    >
      <p>Маленький размер</p>
    </Modal>
    <Modal
      title="Большой"
      subtitle="Размер lg"
      theme="light"
      isVisible={true}
      onClose={() => {}}
      onBackgroundClick={() => {}}
      className="lg"
    >
      <p>Большой размер</p>
    </Modal>
  </div>
);

export const Themes = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
    <Modal
      title="Light Theme"
      subtitle="Тема light"
      theme="light"
      isVisible={true}
      onClose={() => {}}
      onBackgroundClick={() => {}}
    >
      <p>Light тема</p>
    </Modal>
    <div style={{ background: '#222', padding: '20px' }}>
      <Modal
        title="Dark Theme"
        subtitle="Тема dark"
        theme="dark"
        isVisible={true}
        onClose={() => {}}
        onBackgroundClick={() => {}}
      >
        <p>Dark тема</p>
      </Modal>
    </div>
  </div>
);
