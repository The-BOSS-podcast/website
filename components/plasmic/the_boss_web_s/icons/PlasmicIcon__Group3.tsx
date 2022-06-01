// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group3Icon(props: Group3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 49 50"}
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
          "M29 44a3 3 0 01-3 3H6a3 3 0 01-3-3V6a3 3 0 013-3h4a1 1 0 01.89.54l.46.91a1 1 0 00.89.55h7.52a1 1 0 00.89-.55l.46-.91A1 1 0 0122 3h4a3 3 0 013 3v12.27a6.78 6.78 0 012.84-1.17H32V6a6 6 0 00-6-6H6a6 6 0 00-6 6v38a6 6 0 006 6h20a6 6 0 006-6v-2h-3v2z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M26 35.59V24a6.743 6.743 0 01.1-1.19c0-.12 0-.23.07-.35.034-.156.078-.31.13-.46 0-.15.09-.29.14-.43a3.26 3.26 0 01.14-.32 2 2 0 01.17-.37 4.77 4.77 0 01.25-.48V6a1 1 0 00-1-1h-3.39l-.18.36A3 3 0 0119.76 7h-7.52a3 3 0 01-2.67-1.65L9.39 5H6a1 1 0 00-1 1v38a1 1 0 001 1h20a1 1 0 001-1v-2h-5a1 1 0 01-.92-.62 1 1 0 01.21-1.09l4.71-4.7zM12 17a4 4 0 118 0v6a4 4 0 01-8 0v-6zm7 19a1 1 0 010 2h-6a1 1 0 110-2h2v-4.06A9 9 0 017 23v-1a1 1 0 011-1h1a1 1 0 010 2 7 7 0 0014 0 1 1 0 110-2h1a1 1 0 011 1v1a9 9 0 01-8 8.94V36h2z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M44 19H33a5.442 5.442 0 00-.82.07 5 5 0 00-3.33 2.14A5 5 0 0028 24v12a.998.998 0 01-.29.71L24.41 40H44a5 5 0 005-5V24a5 5 0 00-5-5zm1 14.7a1.3 1.3 0 01-1.3 1.3.577.577 0 01-.19 0 1.26 1.26 0 01-.9-.56A5.418 5.418 0 0038.09 32h-1.61l1.45 3.63A.998.998 0 0137 37a1 1 0 01-.93-.63l-1.78-4.46A3 3 0 0135 26h3.09a5.42 5.42 0 004.52-2.42 1.261 1.261 0 01.9-.56.582.582 0 01.19 0A1.3 1.3 0 0145 24.3v9.4z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group3Icon;
/* prettier-ignore-end */
