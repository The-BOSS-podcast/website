// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group16IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group16Icon(props: Group16IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 43 48"}
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
          "M29.354 23.064l-4.343-7.938h-5.242l4.343 7.938h5.242zm12.88-7.938h-8.687l4.419 7.938h5.017v-7.189c0-.449-.3-.749-.75-.749zm-5.916 7.938L31.9 15.126h-5.242l4.343 7.938h5.317zm-13.853 0l-4.418-7.938h-5.242l4.418 7.938h5.242zM9.81 15.126H6.215l-.15.3.225.374 4.044 7.264h5.242l-4.418-7.938H9.81zm14.901-4.193l2.92-8.612-5.091.974-2.996 8.611 5.167-.973zm6.739-1.198l2.996-8.687-5.167.974-2.92 8.611 5.092-.898zm-13.553 2.471l2.995-8.612-5.167.899-2.995 8.686 5.167-.973z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M8.686 23.064H1.198v-7.189c0-.374.3-.749.749-.749-.374 0-.674-.224-.749-.599L0 8.162c0-.224 0-.374.15-.524.075-.15.3-.3.45-.3l6.664-1.273-2.996 9.061 4.418 7.938zM41.71 7.788c.374-.075.674-.45.6-.824L41.11.6a.506.506 0 00-.3-.45C40.661 0 40.511 0 40.287 0l-4.193.749-2.995 8.611 8.611-1.572z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M6.066 14.003l.224.3 3.52-.6 1.273-.224 2.995-8.612-5.167.899-2.696 7.938-.15.3zM1.198 24.412v21.566c0 1.123.899 2.022 2.022 2.022h37.741a2.013 2.013 0 002.022-2.022V24.412c-.524.225-41.335.15-41.785 0zm17.223 5.99c0-.599.3-1.123.824-1.347.524-.3 1.123-.3 1.573 0L25.01 31.6c.45.3.749.823.749 1.348 0 .524-.3 1.048-.749 1.347l-4.193 2.546c-.524.3-1.124.3-1.573 0-.524-.3-.824-.823-.824-1.347v-5.092zM36.318 42.01H12.431v.974a.75.75 0 01-.75.749c-.448 0-.748-.3-.748-.75v-.973h-3.22a.75.75 0 01-.749-.748c0-.375.3-.75.75-.75h3.294v-.973c0-.374.3-.749.749-.749.45 0 .749.3.749.75v.973h23.887c.375 0 .75.3.75.748-.076.375-.375.75-.825.75z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group16Icon;
/* prettier-ignore-end */
