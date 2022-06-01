// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type NounChooseDecideSpotsIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function NounChooseDecideSpotsIcon(
  props: NounChooseDecideSpotsIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 40 40"}
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
          "M27.663 28.605a1.82 1.82 0 01-1.032 2.439l-7.483 3.3a1.602 1.602 0 00-.58.436l-1.254 1.495a1.6 1.6 0 01-1.856.443l-7.67-3.285a1.6 1.6 0 01-.913-1.895l2.721-9.908a.83.83 0 01.036-.104l.779-1.816c.361-.844 1.301-1.334 2.176-1.054a1.759 1.759 0 011.086 2.37l.29-.678c.362-.845 1.302-1.334 2.177-1.055a1.759 1.759 0 011.086 2.37l.29-.678c.362-.845 1.302-1.334 2.177-1.054a1.759 1.759 0 011.086 2.369l2.842-6.634c.361-.845 1.302-1.334 2.176-1.055a1.759 1.759 0 011.086 2.37l-5.002 11.678 3.524-1.041c.893-.264 1.886.134 2.258.987zM12.889 12.956a5.108 5.108 0 005.102-5.102 5.108 5.108 0 00-5.102-5.101 5.108 5.108 0 00-5.101 5.101 5.108 5.108 0 005.101 5.102zm20.294-5.102a5.108 5.108 0 01-5.102 5.102 5.108 5.108 0 01-5.102-5.102 5.107 5.107 0 015.102-5.101 5.108 5.108 0 015.102 5.101zm-1.2 0a3.906 3.906 0 00-3.902-3.901 3.906 3.906 0 00-3.902 3.901 3.906 3.906 0 003.902 3.902 3.906 3.906 0 003.902-3.902z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default NounChooseDecideSpotsIcon;
/* prettier-ignore-end */
