// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group21IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group21Icon(props: Group21IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 39 38"}
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
          "M9.259 12.556l6.788 9.052 2.548-3.485L10.08 6.505a4.396 4.396 0 00-.822 6.051zm9.562 12.893c.157.012.311.045.46.097a.462.462 0 00.148.019c.02 0 .032.006.052.006a.609.609 0 00.258-.064c.013 0 .02-.007.032-.013a.617.617 0 00.195-.175l9.575-12.762a4.41 4.41 0 00-.828-6.052L14.704 25.63c.672.408 1.27.926 1.772 1.532l.75-1.008a1.91 1.91 0 011.597-.705h-.001zm5.328.141l-1.397-1.83-1.584 2.115 1.125 1.312a7.193 7.193 0 011.856-1.596zM5.173 31.681a5.818 5.818 0 105.819-5.819 5.828 5.828 0 00-5.82 5.819zm5.819-3.233a3.232 3.232 0 110 6.464 3.232 3.232 0 010-6.463zM27.801 37.5a5.818 5.818 0 10-5.819-5.819 5.829 5.829 0 005.82 5.819zm0-9.052a3.232 3.232 0 11.001 6.464 3.232 3.232 0 010-6.464zM5.819 9.053a.647.647 0 00-.647-.647H.646a.647.647 0 000 1.293h4.526a.647.647 0 00.647-.646zm8.134-2.91l.905-1.581 3.325 6.096c.114.206.33.334.566.334h.039a.647.647 0 00.562-.405l3.279-8.2 1.727 4.319a.647.647 0 101.2-.48L23.228.407a.646.646 0 00-1.2 0l-3.37 8.423-3.22-5.906a.647.647 0 00-1.13-.014l-1.477 2.586a.647.647 0 001.122.642v.005zm24.194 2.262H33.62a.647.647 0 000 1.294h4.526a.647.647 0 000-1.294z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group21Icon;
/* prettier-ignore-end */
