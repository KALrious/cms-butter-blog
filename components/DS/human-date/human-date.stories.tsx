import HumanDate from './human-date';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/HumanDate',
  component: HumanDate,
  decorators: [
    (Story) => (
      <div>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof HumanDate>;

const Template: ComponentStory<typeof HumanDate> = (args) => (
  <HumanDate {...args} />
);

export const Defaults = Template.bind({});

Defaults.args = {
  dateString: '2016-01-01',
};
