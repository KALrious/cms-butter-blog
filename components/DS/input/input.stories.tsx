import Input from './input';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/Input',
  component: Input,
  decorators: [
    (Story) => (
      <div>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Defaults = Template.bind({});

Defaults.args = {
  placeholder: 'Enter your name',
  type: 'email',
};
