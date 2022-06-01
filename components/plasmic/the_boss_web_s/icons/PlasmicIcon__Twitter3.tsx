// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Twitter3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Twitter3Icon(props: Twitter3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 28 28"}
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
          "M25.667 6.767a9.904 9.904 0 01-2.754.746 4.818 4.818 0 002.112-2.648c-.94.56-1.97.955-3.045 1.167a4.783 4.783 0 00-8.167 4.363A13.581 13.581 0 013.955 5.39a4.853 4.853 0 00-.642 2.415 4.772 4.772 0 002.124 3.978 4.725 4.725 0 01-2.17-.595v.059a4.783 4.783 0 003.85 4.666 4.584 4.584 0 01-1.284.199 5.72 5.72 0 01-.898-.082 4.795 4.795 0 004.468 3.313 9.59 9.59 0 01-7.07 1.984 13.499 13.499 0 007.339 2.158A13.522 13.522 0 0023.333 9.858V9.24a9.835 9.835 0 002.334-2.473z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Twitter3Icon;
/* prettier-ignore-end */
