import BoxWithTitle from './box-with-title';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/BoxWithTitle',
  component: BoxWithTitle,
  decorators: [
    (Story) => (
      <div>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof BoxWithTitle>;

const Template: ComponentStory<typeof BoxWithTitle> = (args) => (
  <BoxWithTitle {...args} />
);

export const Defaults = Template.bind({});

Defaults.args = {
  title: 'My Title',
  children: 'My Content',
};
