// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector6IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector6Icon(props: Vector6IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 3 14"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M2.79 1.361c0 .775-.62 1.43-1.395 1.43C.655 2.79 0 2.119 0 1.36 0 .655.654 0 1.395 0c.74 0 1.395.638 1.395 1.361zM.154 5.1c0-.827.518-1.378 1.24-1.378.724 0 1.24.55 1.24 1.378v6.614c0 .827-.516 1.378-1.24 1.378-.723 0-1.24-.551-1.24-1.378V5.1z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector6Icon;
/* prettier-ignore-end */
