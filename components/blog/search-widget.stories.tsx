import SearchWidget from './search-widget';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Pages/SearchWidget',
  component: SearchWidget,
  decorators: [
    (Story) => (
      <div
        style={{ height: '100vh', width: '100vw', backgroundColor: '#37C2CC' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof SearchWidget>;

const Template: ComponentStory<typeof SearchWidget> = (_args) => (
  <SearchWidget />
);

export const Defaults = Template.bind({});
Defaults.args = {};
