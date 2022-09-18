import PostsPreview from '@/components/blog/post-preview';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Pages/PostsPreview',
  component: PostsPreview,
  decorators: [
    (Story) => (
      <div>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof PostsPreview>;

const Template: ComponentStory<typeof PostsPreview> = (args) => (
  <PostsPreview {...args} />
);

export const Defaults = Template.bind({});

Defaults.args = {
  title: 'Post',
  coverImage: 'https://source.unsplash.com/random',
  coverImageAlt: 'random',
  date: '2016-01-01',
  author: {
    first_name: 'John',
    last_name: 'Doe',
    profile_image: 'https://source.unsplash.com/random',
  },
  tags: [{ name: 'titi', slug: 'toto' }],
  excerpt: 'zob',
  slug: 'zobi',
};
