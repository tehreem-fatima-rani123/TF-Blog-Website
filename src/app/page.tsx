import AuthoreCard from '@/components/AuthoreCard';
import Contact from '@/components/Contact';
import Feature from '@/components/Feature';
import Mega from '@/components/Mega';
import React from 'react';


const Home = () => {
  return (
   <div className=''>
   <Feature/>
  <Mega/>
  <AuthoreCard/>
  <Contact/>
   </div>
  );
};

export default Home;
