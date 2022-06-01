// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Emoji2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Emoji2Icon(props: Emoji2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 14 14"}
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
          "M10.824 13.394a.814.814 0 01-.474-.152L7 10.838 3.65 13.24a.812.812 0 01-1.249-.907l1.25-4.031-3.32-2.34a.815.815 0 01.477-1.468l4.111-.006L6.23.557a.812.812 0 011.543 0L9.06 4.49l4.132.006a.813.813 0 01.478 1.469l-3.32 2.339 1.25 4.032a.811.811 0 01-.775 1.06z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Emoji2Icon;
/* prettier-ignore-end */
