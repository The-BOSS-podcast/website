// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type TwitterIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function TwitterIcon(props: TwitterIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 20"}
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
          "M18.333 4.833a7.075 7.075 0 01-1.966.534 3.442 3.442 0 001.508-1.892c-.672.4-1.408.682-2.175.833a3.417 3.417 0 00-5.833 3.117A9.7 9.7 0 012.825 3.85c-.3.525-.459 1.12-.458 1.725a3.408 3.408 0 001.516 2.842 3.375 3.375 0 01-1.55-.425v.041a3.417 3.417 0 002.75 3.334c-.297.09-.606.138-.916.141a4.084 4.084 0 01-.642-.058 3.425 3.425 0 003.192 2.367 6.85 6.85 0 01-5.05 1.416 9.641 9.641 0 005.241 1.542 9.66 9.66 0 009.759-9.733V6.6a7.024 7.024 0 001.666-1.767z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default TwitterIcon;
/* prettier-ignore-end */
