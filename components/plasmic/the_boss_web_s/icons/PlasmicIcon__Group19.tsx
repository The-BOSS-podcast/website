// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group19IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group19Icon(props: Group19IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 29 36"}
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
          "M26.606 9.442H2.111c-1.858 0-2.806 2.237-1.517 3.564l10.58 11.035v7.66c0 .454.227.834.568 1.099l4.588 3.071c.531.341 1.252-.038 1.252-.644V24.04l10.58-11.035c1.25-1.365.303-3.564-1.555-3.564zM11.174 7.28h6.75c.492 0 .796-.53.53-.948L15.079.493a.607.607 0 00-1.062 0l-3.374 5.878c-.266.416.037.91.53.91zm16.191-3.526a3.754 3.754 0 11-7.508 0 3.754 3.754 0 017.508 0zM3.172 7.015c.114.19.304.304.494.304h3.45c.19 0 .417-.114.493-.304L9.354 4.02c.113-.19.113-.417 0-.569L7.609.456a.592.592 0 00-.493-.304h-3.45c-.19 0-.418.114-.494.304L1.428 3.45c-.114.19-.114.417 0 .569l1.744 2.995z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group19Icon;
/* prettier-ignore-end */
