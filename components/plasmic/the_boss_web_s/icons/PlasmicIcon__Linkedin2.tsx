// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Linkedin2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Linkedin2Icon(props: Linkedin2IconProps) {
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
          "M5.526 6.846v9.375H2.405V6.846h3.121zm.199-2.894v.057c0 .433-.183.823-.477 1.096l-.001.001a1.774 1.774 0 01-1.287.463h.005-.02a1.704 1.704 0 01-1.251-.463h.001a1.545 1.545 0 01-.471-1.156v.002l-.001-.04c0-.44.187-.838.487-1.116a1.774 1.774 0 011.277-.461h-.004l.083-.002c.454 0 .868.176 1.177.462l-.001-.001c.297.287.483.69.483 1.136v.025-.002zm11.03 6.897v5.372h-3.113v-5.014a2.72 2.72 0 00-.39-1.568l.007.013a1.346 1.346 0 00-1.202-.563h.005l-.051-.001c-.36 0-.689.123-.95.33l.004-.003a2.022 2.022 0 00-.598.796l-.004.013a2.232 2.232 0 00-.104.77v-.004 5.232H7.248c.012-2.516.019-4.556.019-6.12 0-1.565-.003-2.498-.01-2.8l-.009-.454h3.112V8.21h-.02a4.1 4.1 0 01.393-.535l-.005.005c.163-.179.338-.34.526-.485l.01-.007c.233-.18.507-.32.805-.407l.017-.004a3.68 3.68 0 011.04-.147h.045-.002a3.351 3.351 0 012.6 1.071l.001.002c.657.716.985 1.765.985 3.146z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Linkedin2Icon;
/* prettier-ignore-end */
