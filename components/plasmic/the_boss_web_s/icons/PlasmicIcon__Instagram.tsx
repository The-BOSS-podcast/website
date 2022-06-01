// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type InstagramIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function InstagramIcon(props: InstagramIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 20"}
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
        d={"M10 13.118a3.125 3.125 0 100-6.25 3.125 3.125 0 000 6.25z"}
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M6.946 6.91a4.351 4.351 0 013.093-1.287c1.169 0 2.267.463 3.094 1.29a4.31 4.31 0 011.102 1.857h3.285V4.355c0-1.035-.8-1.835-1.836-1.835H4.434c-1.036 0-1.914.8-1.914 1.835V8.77h3.323a4.318 4.318 0 011.103-1.86zm9.324-1.14a.5.5 0 01-.5.5h-1.5a.5.5 0 01-.5-.5v-1.5a.5.5 0 01.5-.5h1.5a.5.5 0 01.5.5v1.5zm-3.137 7.327a4.341 4.341 0 01-3.094 1.276A4.34 4.34 0 016.946 13.1a4.388 4.388 0 01-1.282-3.08H2.52v5.586c0 1.036.878 1.915 1.914 1.915h11.25c1.035 0 1.836-.879 1.836-1.915V10.02h-3.106a4.381 4.381 0 01-1.281 3.077z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default InstagramIcon;
/* prettier-ignore-end */
