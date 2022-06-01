// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Emoji17IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Emoji17Icon(props: Emoji17IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 14 24"}
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
          "M13.078 15.473c0-5.114-9.429-4.78-9.429-7.868 0-1.495 1.43-2.224 3.089-2.224 2.789 0 3.285 1.791 4.548 1.791.895 0 1.326-.563 1.326-1.194 0-1.467-2.225-2.578-4.358-2.962V1.6a1.599 1.599 0 10-3.198 0v1.466C2.73 3.595.73 5.208.73 7.838c0 4.912 9.427 4.713 9.427 8.163 0 1.195-1.294 2.39-3.42 2.39-3.186 0-4.248-2.157-5.543-2.157-.63 0-1.194.531-1.194 1.33 0 1.271 2.13 2.8 5.058 3.228l-.002.01V22.4a1.6 1.6 0 003.2 0v-1.598c0-.019-.01-.034-.011-.05 2.635-.492 4.833-2.21 4.833-5.28z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Emoji17Icon;
/* prettier-ignore-end */
