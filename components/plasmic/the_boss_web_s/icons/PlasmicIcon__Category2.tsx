// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Category2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Category2Icon(props: Category2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 27 27"}
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
          "M12.543 3.825l-4.185 6.84c-.46.743.08 1.71.957 1.71h8.358c.878 0 1.418-.967.957-1.71l-4.174-6.84a1.117 1.117 0 00-1.913 0zm7.145 20.925a5.063 5.063 0 100-10.125 5.063 5.063 0 000 10.125zM4.5 24.188h6.75c.619 0 1.125-.507 1.125-1.125v-6.75c0-.62-.506-1.125-1.125-1.125H4.5c-.619 0-1.125.506-1.125 1.124v6.75c0 .62.506 1.125 1.125 1.125z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Category2Icon;
/* prettier-ignore-end */
