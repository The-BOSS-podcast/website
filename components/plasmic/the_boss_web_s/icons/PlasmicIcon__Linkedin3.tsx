// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Linkedin3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Linkedin3Icon(props: Linkedin3IconProps) {
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
          "M7.735 10.985v13.124h-4.37V10.985h4.37zm.278-4.052l.002.08a2.09 2.09 0 01-.67 1.535 2.484 2.484 0 01-1.802.648h.006-.027a2.385 2.385 0 01-1.751-.649v.001a2.163 2.163 0 01-.66-1.559v-.111c0-.617.262-1.173.681-1.562l.002-.001A2.483 2.483 0 015.58 4.67h-.005c.035-.002.075-.002.116-.002.636 0 1.215.245 1.647.646l-.001-.002c.417.403.676.967.676 1.591v.034-.003zm15.441 9.656v7.52h-4.356V17.09a3.81 3.81 0 00-.547-2.195l.01.017a1.884 1.884 0 00-1.682-.787h.007l-.072-.002c-.503 0-.964.173-1.33.462l.005-.003a2.83 2.83 0 00-.836 1.113l-.006.019a3.13 3.13 0 00-.145 1.078v-.006 7.325h-4.357c.018-3.523.027-6.379.027-8.569 0-2.19-.004-3.496-.013-3.92l-.013-.635h4.357v1.906h-.027c.173-.279.352-.521.549-.748l-.006.007c.227-.25.472-.476.735-.679l.013-.01a3.428 3.428 0 011.128-.57l.024-.005c.436-.13.937-.206 1.456-.206h.064-.004a4.692 4.692 0 013.64 1.5l.002.003c.92 1.002 1.379 2.47 1.379 4.403h-.002z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Linkedin3Icon;
/* prettier-ignore-end */
