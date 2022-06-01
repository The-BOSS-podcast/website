// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group26IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group26Icon(props: Group26IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 25 27"}
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
          "M13.65 4.43a4.43 4.43 0 11-8.858 0 4.43 4.43 0 018.859 0zM8.61 9.295a8.59 8.59 0 00-8.6 9.013c-.007.112-.01.225-.01.34v1.835a6.018 6.018 0 006.031 6.031h6.381a6.013 6.013 0 004.708-2.254 7.663 7.663 0 01-6.487-7.563 7.665 7.665 0 013.365-6.336 8.598 8.598 0 00-4.164-1.066H8.61z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M18.297 10.408a6.288 6.288 0 100 12.576 6.288 6.288 0 000-12.576zm0 2.04a.79.79 0 01.792.793v2.664h2.664a.79.79 0 01.792.792.79.79 0 01-.792.792h-2.664v2.664a.79.79 0 01-.792.792.79.79 0 01-.792-.792v-2.664H14.84a.79.79 0 01-.792-.792.79.79 0 01.792-.792h2.664V13.24a.79.79 0 01.792-.792z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group26Icon;
/* prettier-ignore-end */
