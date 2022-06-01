// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group18IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group18Icon(props: Group18IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 39 27"}
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
          "M19.66 9.92a4.96 4.96 0 100-9.92 4.96 4.96 0 000 9.92zm13.12 5.68H28.3s-4.28-3.44-4.64-3.72c-.4-.28-1.08-.6-1.8-.6h-4.28c-.72 0-1.44.32-1.8.6-.4.28-4.64 3.72-4.64 3.72H6.62c-1.28 0-2.32 1.08-2.24 2.4.08 1.2 1.12 2.08 2.32 2.08h5.2c.52 0 1-.16 1.4-.48l1.44-1.16-.04 6.52c0 .6.48 1.12 1.12 1.12h7.72c.6 0 1.12-.52 1.12-1.12v-6.52l1.4 1.12c.4.32.88.48 1.4.48h5.2c1.2 0 2.24-.92 2.32-2.08.16-1.28-.88-2.36-2.2-2.36zM11.02 6.04c.56-.56.56-1.48 0-2.04s-1.48-.56-2.04 0L4.3 8.64 2.46 6.8C1.9 6.24.98 6.24.42 6.8s-.56 1.48 0 2.04l2.84 2.84c.28.28.64.44 1.04.44.36 0 .76-.16 1.04-.44l5.68-5.64zm24.52 1.8l2-2c.56-.56.56-1.48 0-2.04s-1.48-.56-2.04 0l-2 2-2-2c-.56-.56-1.48-.56-2.04 0s-.56 1.48 0 2.04l2 2-2 2c-.56.56-.56 1.48 0 2.04.28.28.64.44 1.04.44.36 0 .76-.16 1.04-.44l2-2 2 2c.28.28.64.44 1.04.44.36 0 .76-.16 1.04-.44.56-.56.56-1.48 0-2.04l-2.08-2z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group18Icon;
/* prettier-ignore-end */
