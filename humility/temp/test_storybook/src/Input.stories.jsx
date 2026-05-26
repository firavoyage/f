import { Input } from './Input';
import { fn } from '@storybook/test';

export default {
  title: 'Example/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'radio', options: ['text', 'password', 'email', 'number'] },
    onChange: { action: 'changed' },
  },
};

export const Default = {
  args: {
    label: 'Username',
    placeholder: 'Enter username',
    onChange: fn(),
  },
};

export const Password = {
  args: {
    label: 'Password',
    type: 'password',
    placeholder: 'Enter password',
    onChange: fn(),
  },
};

export const WithInteraction = {
  args: {
    label: 'Type something',
    placeholder: 'Start typing...',
    onChange: fn(),
  },
  play: async ({ canvas }) => {
    const input = canvas.getByRole('textbox');
    await input.type('Hello World');
  },
};