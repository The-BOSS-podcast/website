// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group25IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group25Icon(props: Group25IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 31 21"}
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
          "M15.728 7.936a3.968 3.968 0 100-7.936 3.968 3.968 0 000 7.936zm10.496 4.544H22.64s-3.424-2.752-3.712-2.976c-.32-.224-.864-.48-1.44-.48h-3.424c-.576 0-1.152.256-1.44.48-.32.224-3.712 2.976-3.712 2.976H5.296a1.8 1.8 0 00-1.792 1.92c.064.96.896 1.664 1.856 1.664h4.16c.416 0 .8-.128 1.12-.384l1.152-.928-.032 5.216c0 .48.384.896.896.896h6.176c.48 0 .896-.416.896-.896v-5.216l1.12.896c.32.256.704.384 1.12.384h4.16c.96 0 1.792-.736 1.856-1.664.128-1.024-.704-1.888-1.76-1.888zM8.816 4.832a1.159 1.159 0 000-1.632 1.159 1.159 0 00-1.632 0L3.44 6.912 1.968 5.44a1.159 1.159 0 00-1.632 0 1.159 1.159 0 000 1.632l2.272 2.272c.224.224.512.352.832.352.288 0 .608-.128.832-.352l4.544-4.512zm19.616 1.44l1.6-1.6a1.159 1.159 0 000-1.632 1.159 1.159 0 00-1.632 0l-1.6 1.6-1.6-1.6a1.159 1.159 0 00-1.632 0 1.159 1.159 0 000 1.632l1.6 1.6-1.6 1.6a1.159 1.159 0 000 1.632c.224.224.512.352.832.352.288 0 .608-.128.832-.352l1.6-1.6 1.6 1.6c.224.224.512.352.832.352.288 0 .608-.128.832-.352a1.159 1.159 0 000-1.632l-1.664-1.6z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group25Icon;
/* prettier-ignore-end */
