// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Facebook2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Facebook2Icon(props: Facebook2IconProps) {
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
        d={
          "M11.979 4.898h1.358V2.6a18.856 18.856 0 00-1.98-.101C9.394 2.5 8.05 3.699 8.05 5.894v1.893H5.833v2.57H8.05v6.587h2.658v-6.586h2.21l.332-2.571h-2.542v-1.64c0-.758.202-1.25 1.27-1.25z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Facebook2Icon;
/* prettier-ignore-end */
