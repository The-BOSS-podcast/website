// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group30IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group30Icon(props: Group30IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 138 21"}
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
          "M66.454 14.243V9.079h2.902c.739 0 1.422-.16 2.05-.477a3.847 3.847 0 001.507-1.336 3.448 3.448 0 00.564-1.936 3.44 3.44 0 00-.564-1.936 3.847 3.847 0 00-1.506-1.336 4.473 4.473 0 00-2.051-.477h-4.454v12.662h1.552zm2.938-6.596h-2.938V3.013h2.938c.493 0 .928.112 1.303.336.376.224.669.513.878.867.21.354.314.725.314 1.114 0 .389-.105.76-.314 1.114-.21.354-.502.643-.878.867-.375.224-.81.336-1.303.336zm9.277 6.879c.924 0 1.756-.212 2.495-.637a4.544 4.544 0 001.728-1.733 4.842 4.842 0 00.62-2.423c0-.884-.207-1.691-.62-2.422a4.544 4.544 0 00-1.728-1.733c-.739-.425-1.57-.637-2.495-.637-.924 0-1.755.212-2.494.637a4.544 4.544 0 00-1.728 1.733 4.842 4.842 0 00-.62 2.422c0 .885.207 1.692.62 2.423a4.53 4.53 0 001.728 1.733c.739.425 1.57.637 2.494.637zm0-1.362a3.33 3.33 0 01-1.626-.415 3.118 3.118 0 01-1.21-1.194c-.302-.519-.453-1.126-.453-1.822 0-.695.15-1.302.453-1.821a3.118 3.118 0 011.21-1.194 3.33 3.33 0 011.626-.415c.58 0 1.118.138 1.617.415.5.277.9.675 1.202 1.194.301.519.452 1.126.452 1.821 0 .696-.15 1.303-.452 1.822a3.138 3.138 0 01-1.202 1.194 3.277 3.277 0 01-1.617.415zm10.405 1.362c.727 0 1.373-.156 1.94-.469.567-.312.998-.693 1.294-1.14h.073v1.326h1.497V1.58h-1.57v3.731l.073 1.256h-.073c-.296-.46-.727-.846-1.294-1.158-.567-.313-1.213-.47-1.94-.47-.838 0-1.599.207-2.283.62a4.399 4.399 0 00-1.617 1.715c-.394.731-.591 1.55-.591 2.458 0 .92.197 1.742.591 2.467a4.415 4.415 0 001.617 1.707 4.332 4.332 0 002.283.619zm.184-1.362a2.974 2.974 0 01-1.533-.424 3.118 3.118 0 01-1.155-1.212c-.29-.524-.435-1.123-.435-1.795 0-.672.145-1.27.435-1.795.29-.524.674-.928 1.155-1.211a2.97 2.97 0 011.533-.424c.555 0 1.07.141 1.544.424.474.283.856.684 1.145 1.203.29.518.434 1.12.434 1.803 0 .684-.144 1.285-.434 1.804a3.16 3.16 0 01-1.145 1.203 2.959 2.959 0 01-1.544.424zm10.867 1.362c1.01 0 1.869-.23 2.578-.69a4.019 4.019 0 001.543-1.804l-1.405-.566a2.67 2.67 0 01-1.072 1.256c-.48.295-1.053.442-1.718.442a2.96 2.96 0 01-1.553-.433 3.2 3.2 0 01-1.155-1.212c-.29-.518-.434-1.114-.434-1.786 0-.672.145-1.267.434-1.786a3.2 3.2 0 011.155-1.211 2.96 2.96 0 011.553-.433c.653 0 1.21.144 1.672.433.462.289.81.71 1.044 1.264l1.423-.566a3.753 3.753 0 00-1.487-1.812c-.696-.454-1.556-.681-2.578-.681-.912 0-1.731.206-2.458.619a4.39 4.39 0 00-1.7 1.715c-.407.731-.61 1.55-.61 2.458 0 .908.203 1.725.61 2.45a4.469 4.469 0 001.7 1.715c.727.418 1.546.628 2.458.628zm8.482 0a3.65 3.65 0 001.83-.46c.542-.307.948-.678 1.219-1.114h.074v1.29h1.497v-5.71c0-1.108-.367-1.984-1.1-2.626-.733-.643-1.74-.964-3.021-.964-.789 0-1.506.153-2.153.46-.647.306-1.155.73-1.525 1.273l1.183.849a2.63 2.63 0 011.054-.91 3.26 3.26 0 011.459-.328c.752 0 1.374.203 1.867.61.493.407.739.946.739 1.618v.548c-.259-.153-.631-.288-1.118-.406a6.701 6.701 0 00-1.58-.177c-1.146 0-2.094.268-2.846.804-.751.537-1.127 1.283-1.127 2.237 0 .578.148 1.094.443 1.548.296.454.715.81 1.257 1.07.542.26 1.158.389 1.848.389zm.148-1.327c-.604 0-1.103-.153-1.497-.46a1.452 1.452 0 01-.591-1.202c0-.542.218-.984.656-1.326.437-.342 1.087-.513 1.949-.513.481 0 .937.059 1.368.177.431.118.794.271 1.09.46 0 .518-.135.996-.406 1.432a3.02 3.02 0 01-1.091 1.043c-.456.26-.948.39-1.478.39zm9.591 1.327c.69 0 1.318-.112 1.885-.336.567-.224 1.016-.545 1.349-.964.333-.419.499-.905.499-1.459a2.14 2.14 0 00-.702-1.618c-.468-.442-1.165-.775-2.089-1l-1.367-.335c-.542-.13-.949-.298-1.22-.504a.965.965 0 01-.406-.805c0-.354.194-.645.582-.875.388-.23.841-.345 1.358-.345 1.072 0 1.817.4 2.236 1.202l1.368-.6c-.271-.614-.73-1.091-1.377-1.433-.647-.342-1.383-.513-2.208-.513-.629 0-1.214.106-1.756.318-.542.212-.976.516-1.303.911a2.09 2.09 0 00-.49 1.37c0 .673.241 1.22.721 1.645.481.425 1.097.725 1.848.902l1.146.283c.714.165 1.238.363 1.571.592.332.23.499.534.499.911 0 .425-.21.752-.629.982-.419.23-.924.344-1.515.344a2.78 2.78 0 01-1.525-.442 2.725 2.725 0 01-1.044-1.255l-1.404.601c.283.707.764 1.288 1.441 1.742.678.454 1.522.68 2.532.68zm8.723-.142c.295 0 .539-.017.729-.053.191-.035.379-.094.564-.177v-1.467c-.333.2-.677.3-1.035.3-.443 0-.782-.13-1.016-.389-.197-.236-.296-.601-.296-1.096V6.586h2.292V5.224h-2.292V2.677h-1.571v2.547H122.8v1.362h1.644v5.287c0 .425.062.784.185 1.079.123.295.308.554.555.778.221.2.495.36.822.477.326.118.681.177 1.063.177zm6.357.142c.69 0 1.318-.112 1.885-.336.566-.224 1.016-.545 1.349-.964a2.28 2.28 0 00.499-1.459c0-.637-.234-1.176-.703-1.618-.468-.442-1.164-.775-2.088-1l-1.367-.335c-.542-.13-.949-.298-1.22-.504a.966.966 0 01-.407-.805c0-.354.194-.645.582-.875.389-.23.841-.345 1.359-.345 1.072 0 1.817.4 2.236 1.202l1.367-.6c-.271-.614-.73-1.091-1.376-1.433-.647-.342-1.383-.513-2.209-.513-.628 0-1.213.106-1.755.318-.542.212-.977.516-1.303.911-.327.395-.49.852-.49 1.37 0 .673.24 1.22.721 1.645.48.425 1.096.725 1.848.902l1.146.283c.714.165 1.238.363 1.57.592.333.23.499.534.499.911 0 .425-.209.752-.628.982-.419.23-.924.344-1.515.344a2.777 2.777 0 01-1.525-.442 2.725 2.725 0 01-1.044-1.255l-1.405.601c.284.707.764 1.288 1.442 1.742.677.454 1.521.68 2.532.68zM41.74 5.09c1.165 0 2.084.494 2.559 1.044h.072v-.756h2.04v8.349c0 3.439-2.112 4.841-4.613 4.841-2.357 0-3.78-1.513-4.312-2.75l1.854-.743c.33.756 1.135 1.65 2.443 1.65 1.596 0 2.588-.949 2.588-2.723v-.674h-.072c-.475.564-1.394 1.06-2.559 1.06-2.429 0-4.657-2.037-4.657-4.636 0-2.627 2.228-4.663 4.657-4.663zm-21.057.137c2.688 0 4.873 1.953 4.873 4.649 0 2.682-2.185 4.649-4.873 4.649-2.687 0-4.872-1.967-4.872-4.65 0-2.695 2.185-4.648 4.872-4.648zm10.637 0c2.688 0 4.872 1.953 4.872 4.649 0 2.682-2.184 4.649-4.872 4.649-2.688 0-4.873-1.967-4.873-4.65 0-2.695 2.185-4.648 4.873-4.648zm24.29 0c2.516 0 3.752 1.912 4.154 2.957l.216.523-6.497 2.572c.503.921 1.265 1.402 2.358 1.402 1.092 0 1.84-.508 2.4-1.279l1.653 1.06c-.546.756-1.826 2.063-4.053 2.063-2.76 0-4.816-2.05-4.816-4.65 0-2.764 2.085-4.648 4.586-4.648zM8.093 0c2.3 0 3.939.867 5.175 1.994L11.8 3.384c-.877-.798-2.07-1.417-3.709-1.417-3.032 0-5.404 2.338-5.404 5.24 0 2.903 2.372 5.24 5.404 5.24 1.97 0 3.09-.756 3.81-1.443.589-.564.977-1.376 1.12-2.476h-4.93V6.56h6.943a6.3 6.3 0 01.115 1.238c0 1.485-.417 3.314-1.783 4.607-1.336 1.32-3.032 2.022-5.275 2.022-4.168 0-7.66-3.232-7.66-7.207C.431 3.232 3.923 0 8.091 0zm41.899.55v13.658h-2.128V.55h2.128zM20.683 7.042c-1.48 0-2.745 1.142-2.745 2.82 0 1.664 1.28 2.82 2.745 2.82 1.466 0 2.746-1.156 2.746-2.82 0-1.678-1.28-2.82-2.746-2.82zm10.637 0c-1.48 0-2.746 1.142-2.746 2.82 0 1.664 1.28 2.82 2.746 2.82s2.745-1.156 2.745-2.82c0-1.678-1.265-2.82-2.745-2.82zm10.607-.124c-1.466 0-2.702 1.197-2.702 2.834 0 1.623 1.236 2.806 2.702 2.806 1.452 0 2.602-1.17 2.587-2.806 0-1.637-1.135-2.834-2.587-2.834zm13.755.097c-1.092 0-2.601.921-2.544 2.71l4.341-1.72c-.23-.591-.948-.99-1.797-.99z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group30Icon;
/* prettier-ignore-end */