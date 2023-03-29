import SpiderMan from './spider-man';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Svg/SpiderMan',
  component: SpiderMan,
} as ComponentMeta<typeof SpiderMan>;

const Template: ComponentStory<typeof SpiderMan> = (args) => (
  <SpiderMan {...args} />
);

export const Defaults = Template.bind({});

Defaults.args = {
  mainMenuLinks: [
    { label: 'Home', url: 'home' },
    { label: 'Blog', url: 'blog' },
  ],
};
