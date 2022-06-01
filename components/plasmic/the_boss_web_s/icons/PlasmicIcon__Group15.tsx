// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group15IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group15Icon(props: Group15IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 48 44"}
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
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M24.16 2.633l2.633.807-2.633.806-.806 2.633-.806-2.633-2.634-.806 2.633-.807L23.354 0l.806 2.633zM44.435 16.14l2.633.806-2.633.806-.807 2.633-.806-2.633-2.633-.806 2.633-.807.806-2.633.807 2.633zM16.364 6.983l5.273 1.62-5.273 1.612-1.613 5.267-1.612-5.267-5.274-1.613 5.274-1.619 1.613-5.267 1.612 5.267zm-1.034 1.04l1.88.58-1.88.572-.579 1.885-.578-1.885-1.88-.573 1.88-.578.578-1.886.58 1.886zm-8.375-5.39l2.634.807-2.634.806-.806 2.633-.806-2.633-2.634-.806 2.634-.807L6.149 0l.806 2.633zm36.317 5.104c0 .462-.163.891-.481 1.21L8.224 43.518a1.705 1.705 0 01-1.21.48c-.46 0-.89-.162-1.208-.48L.48 38.193C.156 37.875 0 37.44 0 36.984c0-.455.162-.884.481-1.21L35.047 1.21a1.684 1.684 0 011.209-.487c.462 0 .89.162 1.21.487l5.325 5.32c.325.324.48.753.48 1.208zm-12.393 8.687l9.07-9.064-3.31-3.31-9.07 9.065 3.31 3.31z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group15Icon;
/* prettier-ignore-end */
