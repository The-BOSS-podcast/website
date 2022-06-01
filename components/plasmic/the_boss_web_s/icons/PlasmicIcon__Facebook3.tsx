// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Facebook3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Facebook3Icon(props: Facebook3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 28 28"}
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
          "M16.77 6.857h1.902V3.642a26.399 26.399 0 00-2.77-.142c-2.75 0-4.631 1.678-4.631 4.752v2.65H8.165V14.5h3.104v9.221h3.721V14.5h3.094l.465-3.6H14.99V8.606c0-1.062.284-1.75 1.78-1.75z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Facebook3Icon;
/* prettier-ignore-end */
