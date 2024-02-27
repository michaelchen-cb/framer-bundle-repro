import React from "react";
import ReactDOM from "react-dom";
import { domAnimation, LazyMotion } from "framer-motion";

const App = () => (
  <LazyMotion strict features={domAnimation}>
    <motion.div
      animate={{ rotate: 180 }}
      transition={{ repeat: Infinity, duration: 2 }}
      style={{ width: 30, height: 30, backgroundColor: "red" }}
    />
  </LazyMotion>
);

ReactDOM.render(<App />, document.getElementById("app"));
