import Loader from './loader';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/Loader',
  component: Loader,
  decorators: [
    (Story) => (
      <div>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

export const Defaults = Template.bind({});

Defaults.args = {};
