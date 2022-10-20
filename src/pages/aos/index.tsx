import React, { ReactNode, useEffect, useLayoutEffect, useState } from 'react'
import classes from '../../styles/aos.module.css';
import dynamic from 'next/dynamic'
// import AosComp from '../../components/AnimationOnScroll/aosComp';

// import cx from 


const AnimationOnScroll = dynamic(() => import('../../components/AnimationOnScroll/aosComp'),
  { ssr: false }
)

export default AnimationOnScroll