// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group28IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group28Icon(props: Group28IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 34 34"}
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
          "M31.77 10.907c-1.683 1.684-4.1 2.27-6.222 1.684L22.4 15.739l-6.442 6.515L12.81 25.4c.586 2.197 0 4.54-1.683 6.296-1.538 1.537-3.587 2.123-5.564 1.83l2.782-2.782-1.098-4.392-4.392-1.025L.073 28.11c-.293-1.976.293-4.026 1.83-5.563a6.525 6.525 0 016.296-1.684l3.147-3.148 6.515-6.442 3.148-3.148a6.394 6.394 0 011.684-6.222C24.23.366 26.28-.22 28.256.073l-2.781 2.782 1.098 4.392 4.392 1.098 2.782-2.782a6.833 6.833 0 01-1.977 5.344z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M16.764 10.102l-6.515 6.515-3.953-3.953 6.515-6.515 3.953 3.953zM29.062 22.4l-6.516 6.515-5.636-5.636 6.515-6.516 5.637 5.637zM11.713 5.124L8.565 1.976a2.077 2.077 0 00-2.928 0L2.05 5.563a2.077 2.077 0 000 2.928l3.148 3.148 6.515-6.515zM23.571 29.94c.513.44 1.098.805 1.757.952l5.93 1.171a.776.776 0 00.878-.878l-1.171-5.93a3.472 3.472 0 00-.952-1.757l-6.442 6.442z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group28Icon;
/* prettier-ignore-end */
