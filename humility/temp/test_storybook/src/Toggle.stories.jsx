import { Toggle } from './Toggle';
import { fn } from '@storybook/test';

export default {
  title: 'Example/Toggle',
  component: Toggle,
  tags: ['autodocs'],
  argTypes: {
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    onChange: { action: 'changed' },
  },
};

export const Off = {
  args: {
    label: 'Enable notifications',
    checked: false,
    onChange: fn(),
  },
};

export const On = {
  args: {
    label: 'Enable notifications',
    checked: true,
    onChange: fn(),
  },
};

export const Disabled = {
  args: {
    label: 'Disabled toggle',
    checked: true,
    disabled: true,
    onChange: fn(),
  },
};

export const WithInteraction = {
  args: {
    label: 'Toggle me',
    checked: false,
    onChange: fn(),
  },
  play: async ({ canvas }) => {
    const checkbox = canvas.getByRole('checkbox');
    await checkbox.click();
  },
};