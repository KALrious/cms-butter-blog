import PostPreviewCondensed from './post-preview-condensed';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Pages/Blog/PostPreviewCondensed',
  component: PostPreviewCondensed,
  decorators: [
    (Story) => (
      <div
        style={{ height: '100vh', width: '100vw', backgroundColor: '#37C2CC' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof PostPreviewCondensed>;

const Template: ComponentStory<typeof PostPreviewCondensed> = (args) => (
  <PostPreviewCondensed {...args} />
);

export const Defaults = Template.bind({});

Defaults.args = {
  title: 'toto',
  coverImage: './',
  coverImageAlt: 'image toto',
  excerpt: 'meilleur titi',
  slug: 'url slug',
};
