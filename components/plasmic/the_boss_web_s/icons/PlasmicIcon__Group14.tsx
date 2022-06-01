// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group14IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group14Icon(props: Group14IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 52 50"}
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
          "M12.345 16.742l9.051 12.069 3.397-4.647L13.44 8.673a5.861 5.861 0 00-1.095 8.069zm12.75 17.19c.209.017.414.06.612.13a.66.66 0 00.198.025c.026 0 .043.008.069.008a.812.812 0 00.345-.086c.017 0 .026-.008.043-.017a.824.824 0 00.259-.233l12.767-17.017a5.88 5.88 0 00-1.103-8.069l-18.68 25.5a9.404 9.404 0 012.361 2.043l1-1.345a2.55 2.55 0 012.13-.94h-.001zm7.103.188l-1.862-2.439-2.112 2.819 1.5 1.75a9.595 9.595 0 012.474-2.13zM6.897 42.241a7.758 7.758 0 107.758-7.758 7.772 7.772 0 00-7.758 7.758zm7.758-4.31a4.309 4.309 0 11.001 8.618 4.309 4.309 0 010-8.618zM37.068 50a7.758 7.758 0 10-7.758-7.759A7.771 7.771 0 0037.068 50zm0-12.07v.001a4.31 4.31 0 11.001 8.62 4.31 4.31 0 010-8.62zM7.759 12.07a.862.862 0 00-.862-.862H.862a.862.862 0 000 1.724h6.035a.862.862 0 00.862-.862zm10.845-3.88l1.207-2.107 4.434 8.127a.86.86 0 00.754.446h.052a.862.862 0 00.749-.54l4.372-10.933 2.302 5.758a.862.862 0 101.6-.64L30.972.544a.862.862 0 00-1.601 0l-4.492 11.23-4.294-7.875a.863.863 0 00-1.506-.018l-1.97 3.448a.862.862 0 001.496.856v.006zm32.258 3.017h-6.035a.862.862 0 000 1.724h6.035a.862.862 0 000-1.724z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group14Icon;
/* prettier-ignore-end */
