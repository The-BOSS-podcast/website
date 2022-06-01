// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type NounGrowthBusinessDev1IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function NounGrowthBusinessDev1Icon(
  props: NounGrowthBusinessDev1IconProps
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
          "M5.479 28.335a1.518 1.518 0 011.517-1.517h4.418a1.517 1.517 0 011.518 1.517v6.913a1.514 1.514 0 01-1.518 1.514H6.996a1.513 1.513 0 01-1.517-1.514v-6.913zm27.525 8.427a1.512 1.512 0 001.517-1.514V14.781a1.518 1.518 0 00-1.517-1.518h-4.425a1.518 1.518 0 00-1.518 1.518v20.467a1.514 1.514 0 001.518 1.514h4.425zM22.206 21.235h-4.419a1.517 1.517 0 00-1.517 1.518v12.495a1.514 1.514 0 001.517 1.514h4.419a1.512 1.512 0 001.517-1.514V22.76a1.517 1.517 0 00-1.517-1.525zM6.058 17.724a1.514 1.514 0 000 2.142l1.023 1.016a1.513 1.513 0 002.153 0l8.97-8.977a.607.607 0 011.034.43v3.406a1.518 1.518 0 001.517 1.517h1.44a1.518 1.518 0 001.507-1.517V4.752a1.513 1.513 0 00-1.507-1.514H11.206A1.514 1.514 0 009.69 4.752v1.44a1.514 1.514 0 001.517 1.517h3.405a.607.607 0 01.431 1.034l-8.984 8.98z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default NounGrowthBusinessDev1Icon;
/* prettier-ignore-end */
