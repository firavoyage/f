import { Input } from './Input';
import { useState } from 'react';

export default {
  title: 'Example/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'radio', options: ['text', 'password', 'email', 'number'] },
  },
};

export const Default = {
  args: {
    label: 'Username',
    placeholder: 'Enter username',
  },
};

export const Password = {
  args: {
    label: 'Password',
    type: 'password',
    placeholder: 'Enter password',
  },
};

export const WithInteraction = {
  render: (args) => {
    const [value, setValue] = useState('');
    return (
      <div>
        <Input {...args} value={value} onChange={setValue} />
        <p className="Input-demo-value">Value: {value}</p>
      </div>
    );
  },
  args: {
    label: 'Type something',
    placeholder: 'Start typing...',
  },
};