// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group12IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group12Icon(props: Group12IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 39 48"}
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
          "M35.475 12.59H2.815c-2.478 0-3.742 2.982-2.023 4.752l14.106 14.712v10.213c0 .607.303 1.112.758 1.466l6.118 4.095c.708.455 1.668-.05 1.668-.86V32.055l14.106-14.713c1.669-1.82.405-4.752-2.073-4.752zM14.898 9.707h9c.657 0 1.061-.708.707-1.264l-4.5-7.786a.81.81 0 00-1.415 0l-4.5 7.837c-.354.556.05 1.213.708 1.213zm21.589-4.702a5.005 5.005 0 11-10.01 0 5.005 5.005 0 0110.01 0zM4.23 9.353c.152.253.404.405.657.405h4.601c.253 0 .556-.152.658-.405L12.47 5.36c.152-.253.152-.557 0-.759L10.146.607C9.994.354 9.74.203 9.488.203h-4.6c-.254 0-.557.151-.658.404L1.904 4.601c-.152.253-.152.556 0 .759L4.23 9.353z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group12Icon;
/* prettier-ignore-end */
