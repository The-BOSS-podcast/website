// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type NounGrowthBusinessDev2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function NounGrowthBusinessDev2Icon(
  props: NounGrowthBusinessDev2IconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
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
          "M3.287 17.001a.91.91 0 01.91-.91H6.85a.91.91 0 01.91.91v4.148a.908.908 0 01-.91.908H4.198a.908.908 0 01-.91-.908V17zm16.515 5.056a.909.909 0 00.91-.908V8.869a.91.91 0 00-.91-.91h-2.655a.91.91 0 00-.91.91v12.28a.91.91 0 00.91.908h2.655zm-6.479-9.316h-2.65a.91.91 0 00-.911.91v7.498a.908.908 0 00.91.908h2.651a.909.909 0 00.91-.908v-7.493a.91.91 0 00-.91-.915zm-9.688-2.107a.91.91 0 000 1.285l.614.61a.909.909 0 001.291 0l5.382-5.386a.364.364 0 01.62.258v2.043a.91.91 0 00.911.91h.864a.91.91 0 00.904-.91V2.851a.908.908 0 00-.904-.908H6.724a.908.908 0 00-.91.908v.864a.908.908 0 00.91.91h2.043a.364.364 0 01.258.62l-5.39 5.39z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default NounGrowthBusinessDev2Icon;
/* prettier-ignore-end */
