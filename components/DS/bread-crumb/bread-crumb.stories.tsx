import BreadCrumb from '@/components/DS/bread-crumb/bread-crumb';

export default {
  title: 'Components/BreadCrumb',
  component: BreadCrumb,
};

const Template = (args) => (
  <BreadCrumb>
    <BreadCrumb.Link href="/" title="toto" />
    <BreadCrumb.Current title="now" />
  </BreadCrumb>
);

export const Defaults = Template.bind({});

Defaults.args = {};
