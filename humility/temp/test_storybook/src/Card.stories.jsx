import { Card } from './Card';

export default {
  title: 'Example/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    active: { control: 'boolean' },
  },
};

export const Default = {
  args: {
    title: "Card Title",
    children: 'This is a simple card component.',
    active: false,
  },
};

export const Active = {
  args: {
    title: 'Active Card',
    children: 'This card is in active state.',
    active: true,
  },
};