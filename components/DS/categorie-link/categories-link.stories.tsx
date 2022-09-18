import CategorieLink from './categorie-link';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/CategorieLink',
  component: CategorieLink,
  decorators: [
    (Story) => (
      <div>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof CategorieLink>;

const Template: ComponentStory<typeof CategorieLink> = (args) => (
  <CategorieLink {...args} />
);

export const Defaults = Template.bind({});

Defaults.args = {
  href: '/',
  name: 'Sex',
};
