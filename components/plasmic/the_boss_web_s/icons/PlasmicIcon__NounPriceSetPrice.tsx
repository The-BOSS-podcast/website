// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type NounPriceSetPriceIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function NounPriceSetPriceIcon(props: NounPriceSetPriceIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 40 40"}
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
          "M12.178 25.334A8.178 8.178 0 104 17.156a8.188 8.188 0 008.178 8.178zm-.227-7.504c-2.458-.825-2.974-2.062-2.974-2.955 0-1.335 1.031-2.384 2.49-2.637V11.11h1.422v1.144c1.424.293 2.489 1.421 2.489 2.767h-1.423c0-.77-.823-1.422-1.798-1.422-.873 0-1.757.438-1.757 1.275 0 .843 1.401 1.404 2.004 1.606 2.458.825 2.974 2.062 2.974 2.955 0 1.335-1.031 2.384-2.49 2.637V23.2h-1.422v-1.143c-1.423-.294-2.489-1.422-2.489-2.768H10.4c0 .77.823 1.422 1.798 1.422.873 0 1.757-.438 1.757-1.275 0-.843-1.401-1.404-2.004-1.606zm-.744 10.995l12.008 6.933a1.817 1.817 0 002.48-.667l9.141-15.834c1.304-2.258 1.285-3.463 1.023-5.292L34.804 6.62a3.048 3.048 0 00-4.157-2.4l-6.89 2.76c-1.714.687-2.766 1.273-4.07 3.532l-.042.071a9.947 9.947 0 01-9.31 16.356 1.81 1.81 0 00.872 1.887zM28.522 8.13a2.285 2.285 0 113.957 2.285 2.285 2.285 0 01-3.957-2.285z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default NounPriceSetPriceIcon;
/* prettier-ignore-end */
