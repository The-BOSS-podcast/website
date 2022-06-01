// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import {
  PlasmicForbes30U3,
  DefaultForbes30U3Props
} from "./plasmic/the_boss_web_s/PlasmicForbes30U3";
import { HTMLElementRefOf } from "@plasmicapp/react-web";

// Your component props start with props for variants and slots you defined
// in Plasmic, but you can add more here, like event handlers that you can
// attach to named nodes in your component.
//
// If you don't want to expose certain variants or slots as a prop, you can use
// Omit to hide them:
//
// interface Forbes30U3Props extends Omit<DefaultForbes30U3Props, "hideProps1"|"hideProp2"> {
//   // etc.
// }
//
// You can also stop extending from DefaultForbes30U3Props altogether and have
// total control over the props for your component.
export interface Forbes30U3Props extends DefaultForbes30U3Props {}

function Forbes30U3_(props: Forbes30U3Props, ref: HTMLElementRefOf<"div">) {
  // Use PlasmicForbes30U3 to render this component as it was
  // designed in Plasmic, by activating the appropriate variants,
  // attaching the appropriate event handlers, etc.  You
  // can also install whatever React hooks you need here to manage state or
  // fetch data.
  //
  // Props you can pass into PlasmicForbes30U3 are:
  // 1. Variants you want to activate,
  // 2. Contents for slots you want to fill,
  // 3. Overrides for any named node in the component to attach behavior and data,
  // 4. Props to set on the root node.
  //
  // By default, we are just piping all Forbes30U3Props here, but feel free
  // to do whatever works for you.

  return <PlasmicForbes30U3 root={{ ref }} {...props} />;
}

const Forbes30U3 = React.forwardRef(Forbes30U3_);
export default Forbes30U3;