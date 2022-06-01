// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame277IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame277Icon(props: Frame277IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 21 21"}
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
          "M13.284 7.716a3.937 3.937 0 11-5.568 5.568 3.937 3.937 0 015.568-5.568"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M15.094 0H5.906A5.913 5.913 0 000 5.906v9.188A5.913 5.913 0 005.906 21h9.188A5.913 5.913 0 0021 15.094V5.906A5.913 5.913 0 0015.094 0zM10.5 15.75a5.256 5.256 0 01-5.25-5.25 5.256 5.256 0 015.25-5.25 5.256 5.256 0 015.25 5.25 5.256 5.256 0 01-5.25 5.25zm5.906-10.5a.656.656 0 110-1.312.656.656 0 010 1.312z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Frame277Icon;
/* prettier-ignore-end */
