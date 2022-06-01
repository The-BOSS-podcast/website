// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group17IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group17Icon(props: Group17IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 31 34"}
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
          "M17.064 5.537a5.537 5.537 0 11-11.074 0 5.537 5.537 0 0111.074 0zm-6.302 6.082A10.738 10.738 0 00.012 22.884 7.69 7.69 0 000 23.31v2.295a7.522 7.522 0 007.539 7.539h7.976a7.516 7.516 0 005.886-2.817 9.58 9.58 0 01-8.11-9.455 9.582 9.582 0 014.206-7.92 10.749 10.749 0 00-5.205-1.333h-1.53z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M22.871 13.01a7.86 7.86 0 100 15.721 7.86 7.86 0 000-15.72zm0 2.551c.549 0 .99.442.99.99v3.33h3.33c.548 0 .99.442.99.99s-.442.99-.99.99h-3.33v3.33c0 .548-.441.99-.99.99a.988.988 0 01-.99-.99v-3.33h-3.33a.988.988 0 01-.99-.99c0-.548.442-.99.99-.99h3.33v-3.33c0-.548.442-.99.99-.99z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group17Icon;
/* prettier-ignore-end */
