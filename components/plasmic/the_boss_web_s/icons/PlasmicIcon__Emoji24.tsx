// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Emoji24IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Emoji24Icon(props: Emoji24IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 21 19"}
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
          "M21 5.793C21 2.593 18.406 0 15.207 0A5.783 5.783 0 0010.5 2.424 5.782 5.782 0 005.793 0 5.793 5.793 0 000 5.793c0 .454.058.893.156 1.316.804 4.998 6.361 10.27 10.344 11.718 3.982-1.448 9.54-6.72 10.343-11.717.1-.424.157-.863.157-1.317z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Emoji24Icon;
/* prettier-ignore-end */
