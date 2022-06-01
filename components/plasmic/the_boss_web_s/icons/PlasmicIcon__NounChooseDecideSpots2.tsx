// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type NounChooseDecideSpots2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function NounChooseDecideSpots2Icon(
  props: NounChooseDecideSpots2IconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 32 32"}
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
          "M22.13 22.884c.34.781-.05 1.663-.825 1.95l-5.986 2.642a1.28 1.28 0 00-.465.348l-1.003 1.196a1.28 1.28 0 01-1.484.354L6.23 26.746a1.28 1.28 0 01-.73-1.515l2.177-7.927a.664.664 0 01.029-.083l.622-1.453c.29-.676 1.042-1.067 1.742-.843a1.407 1.407 0 01.868 1.895l.233-.542c.289-.675 1.041-1.067 1.741-.843a1.407 1.407 0 01.869 1.895l.232-.542c.29-.676 1.042-1.067 1.741-.843a1.407 1.407 0 01.87 1.895l2.273-5.307c.289-.676 1.041-1.068 1.74-.844a1.407 1.407 0 01.87 1.895l-4.002 9.344 2.82-.834c.713-.211 1.508.108 1.805.79zm-11.818-12.52a4.086 4.086 0 004.081-4.08 4.086 4.086 0 00-4.082-4.082 4.086 4.086 0 00-4.08 4.081c0 2.25 1.83 4.082 4.08 4.082zm16.234-4.08c0 2.25-1.83 4.08-4.081 4.08a4.086 4.086 0 01-4.081-4.08 4.085 4.085 0 014.08-4.082 4.086 4.086 0 014.082 4.081zm-.96 0c0-1.722-1.4-3.122-3.121-3.122s-3.122 1.4-3.122 3.121c0 1.722 1.4 3.122 3.122 3.122 1.721 0 3.121-1.4 3.121-3.122z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default NounChooseDecideSpots2Icon;
/* prettier-ignore-end */
