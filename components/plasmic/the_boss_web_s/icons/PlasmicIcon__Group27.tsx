// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group27IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group27Icon(props: Group27IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 37 38"}
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
          "M21.75 33a2.25 2.25 0 01-2.25 2.25h-15A2.25 2.25 0 012.25 33V4.5A2.25 2.25 0 014.5 2.25h3a.75.75 0 01.668.405l.345.683a.75.75 0 00.667.412h5.64a.75.75 0 00.668-.413l.345-.682a.75.75 0 01.667-.405h3a2.25 2.25 0 012.25 2.25v9.203a5.085 5.085 0 012.13-.878H24V4.5A4.5 4.5 0 0019.5 0h-15A4.5 4.5 0 000 4.5V33a4.5 4.5 0 004.5 4.5h15A4.5 4.5 0 0024 33v-1.5h-2.25V33z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M19.5 26.692V18c-.001-.3.024-.598.075-.892 0-.09 0-.173.053-.263.025-.117.058-.232.097-.345 0-.113.068-.218.105-.323.03-.081.066-.162.105-.24a1.48 1.48 0 01.128-.277c.056-.123.118-.244.187-.36V4.5a.75.75 0 00-.75-.75h-2.542l-.135.27a2.25 2.25 0 01-2.003 1.23H9.18a2.25 2.25 0 01-2.002-1.237l-.135-.263H4.5a.75.75 0 00-.75.75V33a.75.75 0 00.75.75h15a.75.75 0 00.75-.75v-1.5H16.5a.75.75 0 01-.69-.465.749.749 0 01.158-.817l3.532-3.526zM9 12.75a3 3 0 016 0v4.5a3 3 0 01-6 0v-4.5zM14.25 27a.75.75 0 010 1.5h-4.5a.75.75 0 110-1.5h1.5v-3.045a6.75 6.75 0 01-6-6.705v-.75a.75.75 0 01.75-.75h.75a.75.75 0 110 1.5 5.25 5.25 0 1010.5 0 .75.75 0 010-1.5H18a.75.75 0 01.75.75v.75a6.75 6.75 0 01-6 6.705V27h1.5z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M33 14.25h-8.25a3.752 3.752 0 00-3.113 1.658A3.75 3.75 0 0021 18v9a.748.748 0 01-.217.532L18.308 30H33a3.75 3.75 0 003.75-3.75V18A3.75 3.75 0 0033 14.25zm.75 11.025a.975.975 0 01-.975.975.437.437 0 01-.142 0 .946.946 0 01-.675-.42 4.065 4.065 0 00-3.39-1.83H27.36l1.088 2.723a.75.75 0 11-1.395.555l-1.335-3.345a2.25 2.25 0 01.532-4.433h2.318a4.064 4.064 0 003.39-1.815.945.945 0 01.675-.42.437.437 0 01.142 0 .975.975 0 01.975.96v7.05z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group27Icon;
/* prettier-ignore-end */
