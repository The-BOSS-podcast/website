// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group11IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group11Icon(props: Group11IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 100 84"}
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
          "M36.111 16.667a8.333 8.333 0 100-16.667 8.333 8.333 0 000 16.667zm27.778 0a8.333 8.333 0 100-16.667 8.333 8.333 0 000 16.667zM47.222 38.889a8.333 8.333 0 100-16.667 8.333 8.333 0 000 16.667zm27.778 0a8.333 8.333 0 100-16.667 8.333 8.333 0 000 16.667zm-55.555 0a8.333 8.333 0 100-16.667 8.333 8.333 0 000 16.667zm16.666 22.222a8.333 8.333 0 100-16.667 8.333 8.333 0 000 16.667zm-27.778 0a8.333 8.333 0 100-16.667 8.333 8.333 0 000 16.667zm55.556 0a8.333 8.333 0 100-16.667 8.333 8.333 0 000 16.667zm27.778 0a8.333 8.333 0 100-16.666 8.333 8.333 0 000 16.666zM47.222 83.333a8.333 8.333 0 100-16.666 8.333 8.333 0 000 16.666zm27.778 0a8.333 8.333 0 100-16.666 8.333 8.333 0 000 16.666zm-55.555 0a8.333 8.333 0 100-16.666 8.333 8.333 0 000 16.666z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group11Icon;
/* prettier-ignore-end */
