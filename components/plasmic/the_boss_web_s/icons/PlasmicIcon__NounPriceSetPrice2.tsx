// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type NounPriceSetPrice2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function NounPriceSetPrice2Icon(props: NounPriceSetPrice2IconProps) {
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
          "M9.742 20.267A6.542 6.542 0 103.2 13.725a6.55 6.55 0 006.542 6.542zm-.18-6.003c-1.967-.66-2.38-1.65-2.38-2.364 0-1.068.825-1.907 1.991-2.11v-.9h1.138v.915c1.14.235 1.991 1.137 1.991 2.214h-1.138c0-.617-.658-1.138-1.438-1.138-.699 0-1.406.35-1.406 1.02 0 .675 1.121 1.123 1.603 1.285 1.966.66 2.38 1.65 2.38 2.364 0 1.068-.826 1.907-1.992 2.11v.901H9.173v-.915c-1.139-.235-1.991-1.137-1.991-2.214H8.32c0 .617.659 1.138 1.438 1.138.699 0 1.406-.35 1.406-1.02 0-.675-1.12-1.123-1.603-1.285zm-.596 8.796l9.606 5.547a1.453 1.453 0 001.983-.534l7.314-12.667c1.043-1.807 1.028-2.77.818-4.234l-.843-5.876a2.438 2.438 0 00-3.326-1.92l-5.512 2.207c-1.371.55-2.213 1.019-3.257 2.825l-.033.058A7.957 7.957 0 018.268 21.55a1.449 1.449 0 00.698 1.51zM22.818 6.503a1.828 1.828 0 113.166 1.828 1.828 1.828 0 01-3.166-1.828z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default NounPriceSetPrice2Icon;
/* prettier-ignore-end */
