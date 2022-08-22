import IconButton from './icon-button';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/IconButton',
  component: IconButton,
  decorators: [
    (Story) => (
      <div>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => (
  <IconButton {...args} />
);

export const Defaults = Template.bind({});

Defaults.args = {
  component: 'button',
  children: 'IN',
};
