import React, { useState } from "react";
import { Button } from "primereact/button";

interface ButtonProps {
  /**
   * Icon to be displayed in the button.
   */
  icon?: string;
  /**
   * Class asigned to the button.
   */
  className?: string;
  /**
   * Label Displayed in the button
   */
  label?: string;
}

const ButtonComponent = (props: ButtonProps) => {
  return (
    <>
      <Button
        icon={props.icon}
        className={props.className}
        aria-label={props.label}
      />
    </>
  );
};

export default ButtonComponent;
