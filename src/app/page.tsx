import ClientOnly from '@/components/ClientOnly/ClientOnly';
import MaintenancePage from '@/components/common/MaintenancePage/MaintenancePage';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Image from 'next/image';

const Activities = dynamic(() => import('@/components/home/activities/Activities'));
const Benefits = dynamic(() => import('@/components/home/benefits/Benefits'));
const Services = dynamic(() => import('@/components/home/services/Services'));
const Testimonial = dynamic(() => import('@/components/home/testimonial/Testimonial'));
const Organization = dynamic(() => import('@/components/home/organization/Organization'));
const Heros = dynamic(() => import('@/components/home/heros/Heros'));
const Contact = dynamic(() => import('@/components/contact/Contact'));

export default function Home() {
  return (
    <MaintenancePage />
    // <ClientOnly>
    //   <Heros />
    //   <Services />
    //   <Activities />
    //   <Benefits />
    //   <Organization />
    //   <Testimonial />
    //   <Contact />
    // </ClientOnly>
  );
}
