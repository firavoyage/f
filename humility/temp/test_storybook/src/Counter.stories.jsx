import { Counter } from './Counter';
import { fn, expect, userEvent } from '@storybook/test';

export default {
  title: 'Example/Counter',
  component: Counter,
  tags: ['autodocs'],
  argTypes: {
    initialCount: { control: 'number' },
  },
};

export const Default = {
  args: {
    initialCount: 0,
    onIncrement: fn(),
  },
};

export const ClickThreeTimes = {
  args: {
    initialCount: 0,
    onIncrement: fn(),
  },
  play: async ({ canvas }) => {
    const button = canvas.getByRole('button', { name: 'Increment' });
    
    await userEvent.click(button);
    await userEvent.click(button);
    await userEvent.click(button);

    await expect(canvas.getByText('Count: 3')).toBeInTheDocument();
  },
};

export const WithSpy = {
  args: {
    initialCount: 10,
    onIncrement: fn(),
  },
  play: async ({ canvas, args }) => {
    const button = canvas.getByRole('button', { name: 'Increment' });
    
    await userEvent.click(button);
    await userEvent.click(button);

    await expect(canvas.getByText('Count: 12')).toBeInTheDocument();
    await expect(args.onIncrement).toHaveBeenCalledTimes(2);
  },
};