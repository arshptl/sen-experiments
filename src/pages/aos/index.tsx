import React, { useEffect, useLayoutEffect, useState } from 'react'
import classes from '../../styles/aos.module.css';
// import cx from 


const AnimationOnScroll = () => {

  const [hiddenEle, sethiddenEle] = useState(0)

  
  useLayoutEffect(() => {
    const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
        entry.target.classList.add(classes.show);
      }
      else {
        entry.target.classList.remove(classes.show)
      }
    })
  })
    const hiddenElements = document.querySelectorAll(classes.hidden);
    hiddenElements.forEach((el) => observer.observe(el)); 
    sethiddenEle(hiddenElements.length)
    console.log(hiddenElements.length);
  }, [hiddenEle])

  return (
    <div className={classes.back}>
      <div className={`${classes.section} ${classes.hidden}`}>
        <h1>Hey dad</h1>
        <p>this is my website</p>
        <p>am I winning now?</p>
        
        <h2>
          buy my products
        </h2>
        <p>
          Just buy it, do not think too much, I know you need it
        </p>
      </div>

      <div className={`${classes.section} ${classes.hidden}`}>
        <h2>It is really good</h2>
      </div>
      <div>
        {hiddenEle}
      </div>
    </div>
  )
}

export default AnimationOnScroll