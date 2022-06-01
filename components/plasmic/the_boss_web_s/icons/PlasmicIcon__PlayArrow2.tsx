// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PlayArrow2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PlayArrow2Icon(props: PlayArrow2IconProps) {
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
        d={"M9.333 5.833v16.334L22.166 14 9.333 5.833z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PlayArrow2Icon;
/* prettier-ignore-end */
