import FixedButton from './fixed-button';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/FixedButton',
  component: FixedButton,
  decorators: [
    (Story) => (
      <div>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof FixedButton>;

const Template: ComponentStory<typeof FixedButton> = (args) => (
  <FixedButton {...args} />
);

export const Defaults = Template.bind({});

Defaults.args = {
  component: 'button',
  children: '^',
};
