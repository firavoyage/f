import { Button } from './Button';
import { fn } from '@storybook/test';

export default {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'radio', options: ['primary', 'secondary'] },
    disabled: { control: 'boolean' },
  },
};

export const Primary = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
    onClick: fn(),
  },
};

export const Secondary = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
    onClick: fn(),
  },
};

export const Disabled = {
  args: {
    variant: 'primary',
    disabled: true,
    children: 'Disabled Button',
    onClick: fn(),
  },
};

export const WithClick = {
  args: {
    variant: 'primary',
    children: 'Click me',
    onClick: fn(),
  },
  play: async ({ canvas }) => {
    await canvas.getByRole('button').click();
  },
};