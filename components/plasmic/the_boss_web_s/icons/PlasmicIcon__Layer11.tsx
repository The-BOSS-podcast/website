// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Layer11IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Layer11Icon(props: Layer11IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 56 45"}
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
          "M20.63 16.428h-2.416v3.867h2.417v-3.867zm13.634-3.588l-11.7 1.992v7.069l11.7 1.982V12.84zM20.63 22.23h-.647v.057a4.303 4.303 0 003.452 4.613 4.245 4.245 0 004.486-2.128l-6.459-1.102a.966.966 0 01-.822-.967l-.01-.474z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M7.732 32.778h40.495a.803.803 0 00.802-.802V5.869a.802.802 0 00-.802-.802H7.732a.803.803 0 00-.802.802v26.107a.803.803 0 00.802.802zM16.28 15.51a1.045 1.045 0 01.967-.967h3.384v-.464a.968.968 0 01.802-.967l12.87-2.185a2.302 2.302 0 012.263-1.885h.802a2.311 2.311 0 012.301 2.3V25.43a2.31 2.31 0 01-2.3 2.301h-.803a2.301 2.301 0 01-2.263-1.885l-4.39-.735a6.14 6.14 0 01-5.695 3.8c-.376 0-.751-.032-1.121-.097a6.188 6.188 0 01-5.048-6.575h-.754a1.045 1.045 0 01-.967-.967l-.048-5.763z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M36.566 25.807h.802a.367.367 0 00.368-.367V11.293a.367.367 0 00-.368-.368h-.802a.367.367 0 00-.367.368V25.43a.367.367 0 00.367.377z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M55.517 36.994a2.552 2.552 0 00-2.069-1.044 4.235 4.235 0 00.638-2.33V4.264A4.274 4.274 0 0049.851 0H6.108a4.274 4.274 0 00-4.235 4.264V33.62c.002.829.247 1.639.706 2.33a2.573 2.573 0 00-2.466 3.326l.967 3.2a2.552 2.552 0 002.417 1.809h48.965a2.553 2.553 0 002.456-1.837l.967-3.201a2.552 2.552 0 00-.368-2.253zM4.987 5.88a2.746 2.746 0 012.736-2.737h40.504a2.746 2.746 0 012.736 2.737v26.106a2.746 2.746 0 01-2.736 2.727H7.732a2.747 2.747 0 01-2.746-2.707V5.879zm16.436 32.95l-.3-.967h13.71l-.299.967h-13.11z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Layer11Icon;
/* prettier-ignore-end */
