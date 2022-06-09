// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: sx3ERcdAG6itf9PoNvoQTY
// Component: AQlk9iey1p
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_the_boss_web_s.module.css"; // plasmic-import: sx3ERcdAG6itf9PoNvoQTY/projectcss
import sty from "./PlasmicAdvSplash1.module.css"; // plasmic-import: AQlk9iey1p/css

export type PlasmicAdvSplash1__VariantMembers = {};

export type PlasmicAdvSplash1__VariantsArgs = {};
type VariantPropType = keyof PlasmicAdvSplash1__VariantsArgs;
export const PlasmicAdvSplash1__VariantProps = new Array<VariantPropType>();

export type PlasmicAdvSplash1__ArgsType = {};
type ArgPropType = keyof PlasmicAdvSplash1__ArgsType;
export const PlasmicAdvSplash1__ArgProps = new Array<ArgPropType>();

export type PlasmicAdvSplash1__OverridesType = {
  root?: p.Flex<"div">;
  ctAs?: p.Flex<"div">;
  btn?: p.Flex<"a"> & Partial<LinkProps>;
  btn2?: p.Flex<"a"> & Partial<LinkProps>;
};

export interface DefaultAdvSplash1Props {
  className?: string;
}

export const defaultAdvSplash1__Args: Partial<PlasmicAdvSplash1__ArgsType> = {};

function PlasmicAdvSplash1__RenderFunc(props: {
  variants: PlasmicAdvSplash1__VariantsArgs;
  args: PlasmicAdvSplash1__ArgsType;
  overrides: PlasmicAdvSplash1__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const args = Object.assign({}, defaultAdvSplash1__Args, props.args);
  const $props = args;
  const $ctx = ph.useDataEnv?.() || {};

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      {true ? (
        <div className={classNames(projectcss.all, sty.freeBox__dockW)}>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__bPq01
            )}
          >
            {"Amplify Your Brand \nBy Advertising On Top Podcasts"}
          </div>
        </div>
      ) : null}
      {true ? (
        <div className={classNames(projectcss.all, sty.freeBox__qrJqf)}>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__hj4Pu
            )}
          >
            {
              "The BOSS is the bridge that connects you to podcasts of all genres where you can advertise your brand."
            }
          </div>
        </div>
      ) : null}

      <p.Stack
        as={"div"}
        data-plasmic-name={"ctAs"}
        data-plasmic-override={overrides.ctAs}
        hasGap={true}
        className={classNames(projectcss.all, sty.ctAs)}
      >
        <p.Stack
          as={p.PlasmicLink}
          data-plasmic-name={"btn"}
          data-plasmic-override={overrides.btn}
          hasGap={true}
          className={classNames(projectcss.all, projectcss.a, sty.btn)}
          component={Link}
          href={"#advertiser-form" as const}
          platform={"nextjs"}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__le9A
            )}
          >
            {"Start Advertising"}
          </div>
        </p.Stack>

        <p.Stack
          as={p.PlasmicLink}
          data-plasmic-name={"btn2"}
          data-plasmic-override={overrides.btn2}
          hasGap={true}
          className={classNames(projectcss.all, projectcss.a, sty.btn2)}
          component={Link}
          href={"#boss-services" as const}
          platform={"nextjs"}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__ofUux
            )}
          >
            {"The BOSS Services"}
          </div>
        </p.Stack>
      </p.Stack>
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "ctAs", "btn", "btn2"],
  ctAs: ["ctAs", "btn", "btn2"],
  btn: ["btn"],
  btn2: ["btn2"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  ctAs: "div";
  btn: "a";
  btn2: "a";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicAdvSplash1__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicAdvSplash1__VariantsArgs;
    args?: PlasmicAdvSplash1__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicAdvSplash1__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicAdvSplash1__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicAdvSplash1__ArgProps,
      internalVariantPropNames: PlasmicAdvSplash1__VariantProps
    });

    return PlasmicAdvSplash1__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicAdvSplash1";
  } else {
    func.displayName = `PlasmicAdvSplash1.${nodeName}`;
  }
  return func;
}

export const PlasmicAdvSplash1 = Object.assign(
  // Top-level PlasmicAdvSplash1 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    ctAs: makeNodeComponent("ctAs"),
    btn: makeNodeComponent("btn"),
    btn2: makeNodeComponent("btn2"),

    // Metadata about props expected for PlasmicAdvSplash1
    internalVariantProps: PlasmicAdvSplash1__VariantProps,
    internalArgProps: PlasmicAdvSplash1__ArgProps
  }
);

export default PlasmicAdvSplash1;
/* prettier-ignore-end */
