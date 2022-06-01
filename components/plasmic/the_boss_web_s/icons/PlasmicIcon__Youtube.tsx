// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type YoutubeIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function YoutubeIcon(props: YoutubeIconProps) {
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
          "M19.167 8.092a7.083 7.083 0 00-.759-3.442 2.433 2.433 0 00-1.433-.833A65.3 65.3 0 0010 3.558c-2.32-.04-4.64.044-6.95.25-.457.083-.88.298-1.217.617C1.083 5.117 1 6.3.917 7.3a40.242 40.242 0 000 5.4c.024.563.108 1.122.25 1.667.1.42.303.81.591 1.133.34.336.772.563 1.242.65a37.64 37.64 0 005.417.275c2.916.042 5.475 0 8.5-.233a2.4 2.4 0 001.275-.65c.233-.234.407-.52.508-.834a8.816 8.816 0 00.433-2.833c.034-.467.034-3.283.034-3.783zm-11.05 4.283V7.217l4.933 2.591c-1.383.767-3.208 1.634-4.933 2.567z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default YoutubeIcon;
/* prettier-ignore-end */
