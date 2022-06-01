// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _37GroupIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _37GroupIcon(props: _37GroupIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 35 25"}
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
          "M6.25 17.5v6.25c-.003.427.074.85.225 1.25H1.25A1.25 1.25 0 010 23.75v-5a5 5 0 015-5h2.1a8.6 8.6 0 00-.85 3.75zM30 13.75h-2.1a8.6 8.6 0 01.85 3.75v6.25c.003.427-.074.85-.225 1.25h5.225A1.25 1.25 0 0035 23.75v-5a5 5 0 00-5-5zM6.875 12.5a4.375 4.375 0 100-8.75 4.375 4.375 0 000 8.75zm21.25 0a4.375 4.375 0 100-8.75 4.375 4.375 0 000 8.75zM17.5 10a5 5 0 100-10 5 5 0 000 10zm2.5 1.25h-5a6.25 6.25 0 00-6.25 6.25v6.25A1.25 1.25 0 0010 25h15a1.25 1.25 0 001.25-1.25V17.5A6.25 6.25 0 0020 11.25z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _37GroupIcon;
/* prettier-ignore-end */
