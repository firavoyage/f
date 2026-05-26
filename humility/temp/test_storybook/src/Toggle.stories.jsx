import { Toggle } from './Toggle';
import { useState } from 'react';

export default {
  title: 'Example/Toggle',
  component: Toggle,
  tags: ['autodocs'],
  argTypes: {
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
};

export const Off = {
  args: {
    label: 'Enable notifications',
    checked: false,
  },
};

export const On = {
  args: {
    label: 'Enable notifications',
    checked: true,
  },
};

export const Disabled = {
  args: {
    label: 'Disabled toggle',
    checked: true,
    disabled: true,
  },
};

export const WithInteraction = {
  render: (args) => {
    const [checked, setChecked] = useState(false);
    return <Toggle {...args} checked={checked} onChange={setChecked} />;
  },
  args: {
    label: 'Toggle me',
  },
};