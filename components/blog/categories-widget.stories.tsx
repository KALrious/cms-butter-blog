import Blog from './blog';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Pages/Blog',
  component: Blog,
  decorators: [
    (Story) => (
      <div>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Blog>;

const Template: ComponentStory<typeof Blog> = (args) => <Blog {...args} />;

export const Defaults = Template.bind({});

Defaults.args = {
  posts: [
    { label: 'Home', url: 'home' },
    { label: 'Blog', url: 'blog' },
  ],
};
