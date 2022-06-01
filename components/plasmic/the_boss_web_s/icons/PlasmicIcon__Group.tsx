// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type GroupIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function GroupIcon(props: GroupIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 11 11"}
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
          "M.47 8.885a.75.75 0 101.06 1.06L.47 8.886zM9.416 1h.75a.75.75 0 00-.75-.75V1zM1 .25H.25v1.5H1V.25zm7.666 9.166v.75h1.5v-.75h-1.5zm-7.136.53l5.44-5.44 2.123-2.123.626-.626.169-.168.043-.044.011-.01.003-.004L9.416 1l-.53-.53-.003.003-.012.011-.043.044-.169.168-.626.626L5.91 3.445.47 8.885l1.06 1.06zM1 1.75h8.416V.25H1v1.5zM8.666 1v8.416h1.5V1h-1.5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default GroupIcon;
/* prettier-ignore-end */
