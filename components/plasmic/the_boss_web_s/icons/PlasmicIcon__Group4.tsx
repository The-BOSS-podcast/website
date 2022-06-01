// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group4IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group4Icon(props: Group4IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 46 45"}
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
          "M42.36 14.543c-2.245 2.245-5.466 3.026-8.296 2.245l-4.197 4.197-8.59 8.687-4.197 4.197c.781 2.928 0 6.051-2.244 8.394-2.05 2.05-4.783 2.83-7.418 2.44l3.709-3.71-1.465-5.855-5.856-1.367L.097 37.48c-.39-2.635.39-5.368 2.44-7.418a8.7 8.7 0 018.394-2.245l4.197-4.197 8.687-8.59 4.197-4.196c-.78-2.928 0-6.052 2.245-8.297 2.05-2.05 4.783-2.83 7.418-2.44l-3.709 3.71 1.464 5.855 5.857 1.465 3.709-3.71a9.11 9.11 0 01-2.636 7.126z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M22.352 13.469l-8.687 8.687-5.271-5.27 8.687-8.688 5.27 5.271zm16.397 16.398l-8.687 8.687-7.516-7.516 8.687-8.687 7.516 7.516zM15.617 6.832L11.42 2.635a2.769 2.769 0 00-3.904 0L2.733 7.417a2.769 2.769 0 000 3.905l4.197 4.197 8.687-8.687zM31.428 39.92c.684.586 1.464 1.074 2.343 1.269l7.906 1.562a1.035 1.035 0 001.171-1.172l-1.562-7.906c-.195-.878-.585-1.659-1.268-2.342l-8.59 8.59z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group4Icon;
/* prettier-ignore-end */
