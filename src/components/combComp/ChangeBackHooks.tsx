import React from "react";
import { useState, useEffect } from "react";
import classes from "../../styles/changeback.module.css";

const ChangeBackHooks = () => {
    const [scrolled, setScrolled] = useState(0);
    const [scrolledbar, setScrolledbar] = useState("0");

    useEffect(() => {
        window.addEventListener("scroll", onScrollPage);
    }, [scrolled, scrolledbar]);

    const onScrollPage = (): void => {
        const winHeightPx =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;
        console.log("win height", winHeightPx);

        const scrolledPercentage = `${(scrolled / winHeightPx) * 100}%`;

        setScrolledbar(scrolledPercentage);
        console.log(document.documentElement.scrollTop);
        setScrolled(document.documentElement.scrollTop);

        if (scrolled >= 800 && scrolled <= 1800) {
            var element: any = document.getElementById(classes.bg);

            element.style.background = "#dc480d";
            element.style.color = "#ffa988";
        } else if (scrolled >= 1800 && scrolled <= 2800) {
            var ele: any = document.getElementById(classes.bg);
            ele.style.background = "#00d9ff";
            ele.style.color = "#93efff";
        }
        // else {
        //   var element: any = document.getElementById(classes.bg);
        //   element.style.background = "inherit";
        // }
    };
    return (
        <div id={classes.bg}>
            <div className={classes.progressContinerStyle}>
                <div
                    className={classes.progressBarStyle}
                    style={{ width: scrolledbar }}
                />
            </div>

            <div className={classes.contentDiv}>
                <h1 className={classes.texth1}>{scrolled}</h1>
                <h2 className={classes.texth2}>
                    Please scroll down to see the changes on background color, and
                    progress bar : Hooks are being used to make this, hell yeah!!
                </h2>
            </div>

            <div className={classes.contentDiv}>
                <h1 className={classes.texth1}>{scrolled}</h1>
                <h2 className={classes.texth2}>
                    Please scroll down to see the changes on background color, and
                    progress bar.
                </h2>
            </div>

            <div className={classes.contentDiv}>
                <h1 className={classes.texth1}>{scrolled}</h1>
                <h2 className={classes.texth2}>
                    Please scroll down to see the changes on background color, and
                    progress bar.
                </h2>
            </div>

            <div className={classes.contentDiv}>
                <h1 className={classes.texth1}>{scrolled}</h1>
                <h2 className={classes.texth2}>
                    Please scroll down to see the changes on background color, and
                    progress bar.
                </h2>
            </div>
        </div>
    );
};

export default ChangeBackHooks;
