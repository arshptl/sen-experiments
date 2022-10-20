import React, { ReactNode, useEffect, useLayoutEffect, useRef, useState } from 'react'
import classes from '../../styles/aos.module.css';

const AosComp = () => {
    const [hiddenEle, sethiddenEle] = useState<ReactNode>()
    const conRef1 = useRef() as React.MutableRefObject<HTMLInputElement>;
    // const conRef2 = useRef() as React.MutableRefObject<HTMLInputElement>;
    // const conRef3 = useRef() as React.MutableRefObject<HTMLInputElement>;
    // const refList = [] as any;

    const [refList, setRefList] = useState<any>([]);


    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                // console.log(entry.isIntersecting);
                if (entry.isIntersecting) {
                    // console.log(`%c Current entry for ${entry.target.id} : ${entry}`, 'background: #320c0c; color: #e21313');
                    // console.log(`%c Intersectiong id: ${entry.target.id}`, 'background: #320c0c; color: #bada55');
                    entry.target.classList.add(`${classes.show}`);
                }
                else {
                    entry.target.classList.remove(`${classes.show}`)
                }
            })
        });

        const allSecs = conRef1.current.querySelectorAll(`.${classes.hidden}`);
        console.log(allSecs);   
        setRefList(allSecs);
        // refList.push(allSecs);
        // sethiddenEle(refList.length);
        console.log(refList);
        // const hiddenElements = document.querySelectorAll(classes.hidden);
        refList.forEach((el: any) => observer.observe(el));
        // console.log(refList.length);
    }, [refList.length])

    return (
        <div className={classes.back} ref={conRef1}>
            <div className={`${classes.section} ${classes.hidden}`} id="1">
                <h1>Hey dad</h1>
                <p>this is my website</p>
                <p>am I winning now?</p>
            </div>

            <div className={`${classes.section} ${classes.hidden}`} id="2">
                <h2>
                    buy my products
                </h2>
                <p>
                    Just buy it, do not think too much, I know you need it
                </p>
            </div>

            <div className={`${classes.section} ${classes.hidden}`} id="3">
                <h2>It is really good</h2>
            </div>
            <div>
                {hiddenEle}
            </div>
        </div>
    )
}

export default AosComp