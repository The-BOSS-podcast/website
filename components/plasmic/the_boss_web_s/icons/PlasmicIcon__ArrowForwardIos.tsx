// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ArrowForwardIosIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ArrowForwardIosIcon(props: ArrowForwardIosIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 18"}
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
        d={"M4.41 3.09L10.32 9l-5.91 5.91L6 16.5 13.5 9 6 1.5 4.41 3.09z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ArrowForwardIosIcon;
/* prettier-ignore-end */
