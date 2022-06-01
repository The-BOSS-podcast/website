// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ArrowForwardIos2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ArrowForwardIos2Icon(props: ArrowForwardIos2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 16"}
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
          "M3.92 2.747L9.173 8 3.92 13.253l1.413 1.414L12 8 5.333 1.333 3.92 2.747z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ArrowForwardIos2Icon;
/* prettier-ignore-end */
