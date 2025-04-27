import Badge from './Badge.jsx';

export default {
  title: 'Components/Button',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'inline-radio',
      options: ['primary', 'secondary', 'success', 'warning', 'error'],
    },
    size: {
      control: 'inline-radio',
      options: ['small', 'large'],
    },
  },
};

export const Primary = {
  args: {
    label: 'Badge',
    variant: "primary",
  },
};

export const Secondary = {
  args: {
    label: 'Badge',
    variant: "secondary"
  },
};

export const Success = {
  args: {
    label: 'Badge',
    variant: "success"
  },
};

export const Warning = {
  args: {
    label: 'Badge',
    variant: "warning"
  },
};

export const Error = {
  args: {
    label: 'Badge',
    variant: "error"
  },
};

export const Small = {
  args: {
    label: 'Badge',
    size: "small"
  },
};

export const Large = {
  args: {
    label: 'Badge',
    size: "large"
  },
};
