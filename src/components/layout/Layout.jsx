import React from "react";
import Nav from "../navbar/Nav";
import classes from "./Layout.module.css";

export default function Layout({ children }) {
  return (
    <div>
      <Nav />
      <main className={classes.main}>
        <div className={classes.container}>{children}</div>
      </main>
    </div>
  );
}
