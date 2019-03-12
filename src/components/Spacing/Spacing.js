import React from "react";
import "./Spacing.css";

const Spacing = ({ children, size }) => (
  <div className={size ? `h-spacing-${size}` : "h-spacing"}>{children}</div>
);

export default Spacing;
