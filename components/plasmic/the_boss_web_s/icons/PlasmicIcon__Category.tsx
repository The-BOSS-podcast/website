// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CategoryIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CategoryIcon(props: CategoryIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 36 36"}
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
          "M16.725 5.1l-5.58 9.12c-.615.99.105 2.28 1.275 2.28h11.145c1.17 0 1.89-1.29 1.275-2.28L19.275 5.1a1.489 1.489 0 00-2.55 0zM26.25 33a6.75 6.75 0 100-13.5 6.75 6.75 0 000 13.5zM6 32.25h9c.825 0 1.5-.675 1.5-1.5v-9c0-.825-.675-1.5-1.5-1.5H6c-.825 0-1.5.675-1.5 1.5v9c0 .825.675 1.5 1.5 1.5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CategoryIcon;
/* prettier-ignore-end */
