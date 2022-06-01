// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Emoji9IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Emoji9Icon(props: Emoji9IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 28 26"}
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
          "M28 7.724A7.724 7.724 0 0020.276 0 7.71 7.71 0 0014 3.232 7.71 7.71 0 007.724 0 7.724 7.724 0 000 7.724c0 .605.077 1.19.208 1.755C1.281 16.142 8.69 23.173 14 25.103c5.31-1.93 12.72-8.96 13.79-15.624A7.63 7.63 0 0028 7.724z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Emoji9Icon;
/* prettier-ignore-end */
