// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group23IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group23Icon(props: Group23IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 38 36"}
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
          "M15.605 10.096c0-2.016.51-3.913 1.404-5.575H3.445A3.45 3.45 0 000 7.967v27.875h23.541v-14.61c-4.612-1.605-7.936-5.984-7.936-11.136zm.653 15.832H7.284v-1.705h8.974v1.705zm0-4.786H7.284v-1.704h8.974v1.704z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M27.405 0c-5.567 0-10.096 4.529-10.096 10.096 0 5.566 4.529 10.095 10.096 10.095 5.566 0 10.095-4.529 10.095-10.095C37.5 4.529 32.971 0 27.405 0zm5.72 11.521l-3.873-2.483.92-1.435 1.47.943c-.635-1.734-2.287-2.98-4.237-2.98a4.534 4.534 0 00-4.53 4.53 4.534 4.534 0 004.53 4.528v1.705a6.24 6.24 0 01-6.234-6.234 6.24 6.24 0 016.234-6.234c2.734 0 5.058 1.773 5.895 4.227l.872-1.36 1.435.92-2.482 3.873z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group23Icon;
/* prettier-ignore-end */
