// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ManageAppsIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ManageAppsIcon(props: ManageAppsIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 48 48"}
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
          "M22.445 31.911v9.732A6.357 6.357 0 0116.09 48H6.357A6.369 6.369 0 010 41.643v-9.732a6.357 6.357 0 016.357-6.357h9.732a6.357 6.357 0 016.357 6.357zM16.09 0H6.357A6.368 6.368 0 000 6.357V16.1a6.368 6.368 0 006.357 6.357h9.732a6.357 6.357 0 006.357-6.357V6.357A6.357 6.357 0 0016.088 0zm25.543 25.555H31.9a6.357 6.357 0 00-6.357 6.356v9.732A6.368 6.368 0 0031.9 48h9.732a6.357 6.357 0 006.357-6.357v-9.732a6.358 6.358 0 00-6.357-6.357zM27.138 7.883l1.618-2.96c.659-.161 2.15-.311 2.6.162l2.44-1.49c-.22-.613.612-1.873 1.051-2.381l3.375-.081c.474.497 1.352 1.71 1.156 2.334l2.52 1.376c.415-.497 1.918-.416 2.588-.278l1.757 2.878c-.196.648-.809 2.023-1.445 2.173l.058 2.855c.648.116 1.33 1.456 1.549 2.104l-1.618 2.958c-.67.162-2.161.312-2.6-.162l-2.45 1.492c.219.612-.602 1.872-1.053 2.38l-3.363.081c-.474-.497-1.352-1.71-1.167-2.334l-2.508-1.376c-.428.497-1.919.416-2.601.29l-1.745-2.88c.196-.659.809-2.034 1.444-2.184l-.069-2.855c-.636-.116-1.317-1.456-1.537-2.104zm8.195 5.975a2.997 2.997 0 102.859-5.27 2.997 2.997 0 00-2.86 5.27z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ManageAppsIcon;
/* prettier-ignore-end */
