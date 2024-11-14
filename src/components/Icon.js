import React from "react";

export default function Icon({ name, size, className }) {
  return (
    <span className={`icon-${name} ${className}`} style={{ fontSize: size }}></span>
  );
}
