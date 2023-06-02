import ClientOnly from '@/components/ClientOnly/ClientOnly';
import Contact from '@/components/contact/Contact';
import Heros from '@/components/heros/Heros';
import Organization from '@/components/organization/Organization';
import Testimonial from '@/components/testimonial/Testimonial';
import dynamic from 'next/dynamic';
import Image from 'next/image';

const Activities = dynamic(() => import('@/components/activities/Activities'));
const Benefits = dynamic(() => import('@/components/benefits/Benefits'));
const Services = dynamic(() => import('@/components/services/Services'));

export default function Home() {
  return (
    <ClientOnly>
      <Heros />
      <Services />
      <Activities />
      <Benefits />
      <Organization />
      <Testimonial />
      <Contact />
    </ClientOnly>
  );
}
