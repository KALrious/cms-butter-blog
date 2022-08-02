import HeaderSection from './header-section';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Pages/Header',
  component: HeaderSection,
  decorators: [
    (Story) => (
      <div
        style={{ height: '100vh', width: '100vw', backgroundColor: '#37C2CC' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof HeaderSection>;

const Template: ComponentStory<typeof HeaderSection> = (args) => (
  <HeaderSection {...args} />
);

export const Defaults = Template.bind({});

Defaults.args = {
  mainMenuLinks: [
    { label: 'Home', url: 'home' },
    { label: 'Blog', url: 'blog' },
  ],
};
