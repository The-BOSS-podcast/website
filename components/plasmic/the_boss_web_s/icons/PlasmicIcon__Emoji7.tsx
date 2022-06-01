// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Emoji7IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Emoji7Icon(props: Emoji7IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 32"}
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
          "M17.437 20.63c0-6.819-12.571-6.373-12.571-10.49 0-1.993 1.906-2.966 4.118-2.966 3.718 0 4.38 2.39 6.065 2.39 1.192 0 1.766-.752 1.766-1.594 0-1.956-2.965-3.436-5.81-3.95V2.134a2.132 2.132 0 10-4.264 0v1.954C3.641 4.793.973 6.944.973 10.45c0 6.55 12.57 6.285 12.57 10.885 0 1.593-1.726 3.187-4.56 3.187-4.249 0-5.664-2.876-7.39-2.876-.841 0-1.593.707-1.593 1.774 0 1.694 2.84 3.733 6.744 4.302l-.003.014v2.13a2.134 2.134 0 004.266 0v-2.13c0-.025-.012-.045-.014-.067 3.513-.656 6.444-2.946 6.444-7.039z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Emoji7Icon;
/* prettier-ignore-end */
