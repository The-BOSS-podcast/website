// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Youtube3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Youtube3Icon(props: Youtube3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 28 28"}
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
          "M26.833 11.328a9.917 9.917 0 00-1.061-4.818 3.407 3.407 0 00-2.007-1.167A91.42 91.42 0 0014 4.982a91.523 91.523 0 00-9.73.35 3.348 3.348 0 00-1.703.863C1.517 7.163 1.4 8.82 1.283 10.22a56.338 56.338 0 000 7.56c.034.788.152 1.57.35 2.333.141.59.426 1.135.829 1.587.475.47 1.08.788 1.738.91 2.515.31 5.05.44 7.583.385 4.084.058 7.665 0 11.9-.327a3.36 3.36 0 001.785-.91c.327-.326.571-.726.712-1.166.417-1.28.622-2.62.607-3.967.046-.653.046-4.597.046-5.297zm-15.47 5.997v-7.222l6.907 3.629c-1.937 1.073-4.492 2.286-6.907 3.593z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Youtube3Icon;
/* prettier-ignore-end */
