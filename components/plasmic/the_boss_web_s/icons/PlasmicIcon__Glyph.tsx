// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type GlyphIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function GlyphIcon(props: GlyphIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 25 25"}
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
          "M0 12.444C0 5.572 5.572 0 12.444 0 19.317 0 24.89 5.572 24.89 12.444h-3.111a9.333 9.333 0 10-9.334 9.334v3.11C5.572 24.889 0 19.319 0 12.445zm12.444 7.467a7.467 7.467 0 117.467-7.467h-2.715a4.752 4.752 0 10-4.752 4.752v2.715z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default GlyphIcon;
/* prettier-ignore-end */
