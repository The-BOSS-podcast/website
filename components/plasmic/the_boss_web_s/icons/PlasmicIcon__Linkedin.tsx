// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LinkedinIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LinkedinIcon(props: LinkedinIconProps) {
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
          "M5.525 7.846v9.375H2.404V7.846h3.121zm.199-2.894l.001.057c0 .433-.184.823-.478 1.096l-.001.001a1.774 1.774 0 01-1.286.463h.004-.02a1.704 1.704 0 01-1.251-.463h.001a1.545 1.545 0 01-.472-1.114v-.08c0-.44.188-.838.487-1.116a1.774 1.774 0 011.277-.461h-.004l.083-.002c.454 0 .868.176 1.177.462l-.001-.001c.298.287.483.69.483 1.136v.025-.002zm11.03 6.897v5.372H13.64v-5.014a2.72 2.72 0 00-.39-1.568l.007.013a1.345 1.345 0 00-1.201-.563h.004l-.051-.001c-.359 0-.689.123-.95.33l.004-.003a2.022 2.022 0 00-.597.796l-.005.013a2.235 2.235 0 00-.104.77v-.004 5.232h-3.11c.013-2.516.019-4.556.019-6.12 0-1.565-.003-2.498-.01-2.8l-.009-.454h3.112V9.21h-.019a4.1 4.1 0 01.392-.535l-.004.005c.162-.179.337-.34.525-.485l.01-.007c.233-.18.507-.32.805-.407l.017-.004a3.68 3.68 0 011.04-.147h.046-.003a3.351 3.351 0 012.6 1.071l.002.002c.656.716.984 1.765.984 3.146z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default LinkedinIcon;
/* prettier-ignore-end */
