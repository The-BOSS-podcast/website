// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PlayArrowIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PlayArrowIcon(props: PlayArrowIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 32 32"}
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
        d={"M10.667 6.667v18.666L25.333 16 10.667 6.667z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PlayArrowIcon;
/* prettier-ignore-end */
