// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame276IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame276Icon(props: Frame276IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 15 15"}
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
        d={"M9.489 5.511A2.812 2.812 0 115.51 9.49a2.812 2.812 0 013.98-3.98"}
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M10.781 0H4.22A4.223 4.223 0 000 4.219v6.562A4.223 4.223 0 004.219 15h6.562A4.223 4.223 0 0015 10.781V4.22A4.223 4.223 0 0010.781 0zM7.5 11.25A3.754 3.754 0 013.75 7.5 3.754 3.754 0 017.5 3.75a3.754 3.754 0 013.75 3.75 3.754 3.754 0 01-3.75 3.75zm4.219-7.5a.469.469 0 110-.938.469.469 0 010 .938z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Frame276Icon;
/* prettier-ignore-end */
