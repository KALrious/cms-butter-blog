import dynamic from 'next/dynamic';

import camelcaseKeys from 'camelcase-keys';

import MissingSection from './missing-section';
import Loader from '../DS/loader/loader';

export default function LandingPageSection({ type, sectionData }) {
  const sectionsComponentPaths = () => ({
    hero: dynamic(
      () =>
        import('@/components/landing-page-sections/hero').catch(
          () => () => MissingSection
        ),
      {
        loading: Loader,
      }
    ),
    two_column_with_image: dynamic(
      () =>
        import(
          '@/components/landing-page-sections/two-column-with-image'
        ).catch(() => () => MissingSection),
      {
        loading: Loader,
      }
    ),
    features: dynamic(
      () =>
        import('@/components/landing-page-sections/features').catch(
          () => () => MissingSection
        ),
      {
        loading: Loader,
      }
    ),
    testimonials: dynamic(
      () =>
        import('@/components/landing-page-sections/testimonials').catch(
          () => () => MissingSection
        ),
      {
        loading: Loader,
      }
    ),
  });
  const SectionComponent = sectionsComponentPaths()[type] || MissingSection;

  return <SectionComponent type={type} {...camelcaseKeys(sectionData)} />;
}
