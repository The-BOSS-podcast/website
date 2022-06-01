// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Layer5IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Layer5Icon(props: Layer5IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 56 44"}
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
          "M50 0H6a6 6 0 00-6 6v32a6 6 0 006 6h44a6 6 0 006-6V6a6 6 0 00-6-6zM12 20h6a2 2 0 010 4h-6a2 2 0 010-4zm16 14H12a2 2 0 010-4h16a2 2 0 010 4zm16 0h-6a2 2 0 010-4h6a2 2 0 010 4zm0-10H28a2 2 0 010-4h16a2 2 0 010 4z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Layer5Icon;
/* prettier-ignore-end */
