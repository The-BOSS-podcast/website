// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector5IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector5Icon(props: Vector5IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 145 89"}
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
          "M138.889 0a5.555 5.555 0 00-5.556 5.556v11.11c0 33.745-27.361 61.112-61.11 61.112-33.75 0-61.112-27.367-61.112-61.111V5.556A5.558 5.558 0 005.556 0 5.558 5.558 0 000 5.556v11.11C0 56.557 32.333 88.89 72.222 88.89c39.889 0 72.223-32.333 72.223-72.222V5.556A5.555 5.555 0 00138.889 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector5Icon;
/* prettier-ignore-end */
