import AlertBanner from '../components/AlertBanner';
import Hero from '../components/Hero';
import ImpactCounters from '../components/ImpactCounters';
import WhyLeoraksha from '../components/WhyLeoraksha';
import TrustedPartners from '../components/TrustedPartners';
import CollegeOutreach from '../components/CollegeOutreach';
import JoinLeoSainik from '../components/JoinLeoSainik';
import HelplineStrip from '../components/HelplineStrip';

export default function Home() {
  return (
    <main>
      <AlertBanner />
      <Hero />
      <ImpactCounters />
      <WhyLeoraksha />
      <CollegeOutreach />
      <JoinLeoSainik />
      <TrustedPartners />
      <HelplineStrip />
    </main>
  );
}
