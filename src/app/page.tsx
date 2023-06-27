import ClientOnly from '@/components/ClientOnly/ClientOnly';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Image from 'next/image';

const Activities = dynamic(() => import('@/components/activities/Activities'));
const Benefits = dynamic(() => import('@/components/benefits/Benefits'));
const Services = dynamic(() => import('@/components/services/Services'));
const Testimonial = dynamic(() => import('@/components/testimonial/Testimonial'));
const Organization = dynamic(() => import('@/components/organization/Organization'));
const Heros = dynamic(() => import('@/components/heros/Heros'));
const Contact = dynamic(() => import('@/components/contact/Contact'));

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
