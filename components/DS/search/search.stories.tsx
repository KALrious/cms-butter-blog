import Search from './search';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/Search',
  component: Search,
  decorators: [
    (Story) => (
      <div>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Search>;

const Template: ComponentStory<typeof Search> = (args) => <Search {...args} />;

export const Defaults = Template.bind({});

Defaults.args = {};
