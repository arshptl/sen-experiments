import type { NextPage } from "next";
import React from "react";
import classes from "../../styles/changeback.module.css";

class ChangeBack extends React.Component {
  state = { scrolled: 0, scrolledbar: 0 };

  componentDidMount() {
    window.addEventListener("scroll", this.onScrollPage);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScrollPage);
  }

  onScrollPage = (): void => {
    const winHeightPx =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    console.log("win height", winHeightPx);

    const scrolledPercentage = `${(this.state.scrolled / winHeightPx) * 100}%`;

    this.setState({
      scrolledbar: scrolledPercentage,
    });
    console.log(document.documentElement.scrollTop);
    this.setState({
      scrolled: document.documentElement.scrollTop,
    });

    if (this.state.scrolled >= 800 && this.state.scrolled <= 1800) {
      var element: any = document.getElementById(classes.bg);

      element.style.background = "#dc480d";
      element.style.color = "#ffa988";
    } else if (this.state.scrolled >= 1800 && this.state.scrolled <= 2800) {
      var ele: any = document.getElementById(classes.bg);
      ele.style.background = "#00d9ff";
      ele.style.color = "#93efff";
    }
    // else {
    //   var element: any = document.getElementById(classes.bg);
    //   element.style.background = "inherit";
    // }
  };

  render() {
    return (
      <div id={classes.bg}>
        <div className={classes.progressContinerStyle}>
          <div
            className={classes.progressBarStyle}
            style={{ width: this.state.scrolledbar }}
          />
        </div>

        <div className={classes.contentDiv}>
          <h1 className={classes.texth1}>{this.state.scrolled}</h1>
          <h2 className={classes.texth2}>
            Please scroll down to see the changes on background color, and
            progress bar :
          </h2>
        </div>

        <div className={classes.contentDiv}>
          <h1 className={classes.texth1}>{this.state.scrolled}</h1>
          <h2 className={classes.texth2}>
            Please scroll down to see the changes on background color, and
            progress bar.
          </h2>
        </div>

        <div className={classes.contentDiv}>
          <h1 className={classes.texth1}>{this.state.scrolled}</h1>
          <h2 className={classes.texth2}>
            Please scroll down to see the changes on background color, and
            progress bar.
          </h2>
        </div>

        <div className={classes.contentDiv}>
          <h1 className={classes.texth1}>{this.state.scrolled}</h1>
          <h2 className={classes.texth2}>
            Please scroll down to see the changes on background color, and
            progress bar.
          </h2>
        </div>
      </div>
    );
  }
}

export default ChangeBack;
