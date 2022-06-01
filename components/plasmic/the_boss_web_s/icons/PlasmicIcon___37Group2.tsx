// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _37Group2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _37Group2Icon(props: _37Group2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 28 20"}
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
          "M5 14v5c-.002.342.059.68.18 1H1a1 1 0 01-1-1v-4a4 4 0 014-4h1.68A6.88 6.88 0 005 14zm19-3h-1.68a6.88 6.88 0 01.68 3v5a2.77 2.77 0 01-.18 1H27a1 1 0 001-1v-4a4 4 0 00-4-4zM5.5 10a3.5 3.5 0 100-7 3.5 3.5 0 000 7zm17 0a3.5 3.5 0 100-7 3.5 3.5 0 000 7zM14 8a4 4 0 100-8 4 4 0 000 8zm2 1h-4a5 5 0 00-5 5v5a1 1 0 001 1h12a1 1 0 001-1v-5a5 5 0 00-5-5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _37Group2Icon;
/* prettier-ignore-end */
