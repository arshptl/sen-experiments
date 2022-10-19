import type { NextPage } from "next";
import Link from "next/link";
import React, { useRef, useState } from "react";
import ChangeBack from "../components/ChangeBack/ChangeBack";
import ChangeBackHooks from "../components/ChangeBack/ChangeBackHooks";
import classes from '../styles/home.module.css';

const Home: NextPage = () => {
  return <>
    <div className={classes.linkDiv}>
      <h1>Want to see magic?</h1>
      <div className={classes.linkStyle}>
        <Link href="/changeback">1. Background color related</Link>
      </div>
      <div className={classes.linkStyle}>
        <Link href="/aos">2. Animation on scroll related</Link>
      </div>
    </div>
  </>;
};

export default Home;
