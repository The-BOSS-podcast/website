// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: sx3ERcdAG6itf9PoNvoQTY
// Component: kO_8pVz_ef
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
import sty from "./PlasmicBackToTop.module.css"; // plasmic-import: kO_8pVz_ef/css

export type PlasmicBackToTop__VariantMembers = {};

export type PlasmicBackToTop__VariantsArgs = {};
type VariantPropType = keyof PlasmicBackToTop__VariantsArgs;
export const PlasmicBackToTop__VariantProps = new Array<VariantPropType>();

export type PlasmicBackToTop__ArgsType = {};
type ArgPropType = keyof PlasmicBackToTop__ArgsType;
export const PlasmicBackToTop__ArgProps = new Array<ArgPropType>();

export type PlasmicBackToTop__OverridesType = {
  backToTopBtn?: p.Flex<"a"> & Partial<LinkProps>;
  h1?: p.Flex<"h1">;
};

export interface DefaultBackToTopProps {
  className?: string;
}

function PlasmicBackToTop__RenderFunc(props: {
  variants: PlasmicBackToTop__VariantsArgs;
  args: PlasmicBackToTop__ArgsType;
  overrides: PlasmicBackToTop__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(
    () =>
      Object.assign(
        {},

        props.args
      ),
    [props.args]
  );

  const $props = args;

  return (
    <p.Stack
      as={p.PlasmicLink}
      data-plasmic-name={"backToTopBtn"}
      data-plasmic-override={overrides.backToTopBtn}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.a,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.backToTopBtn
      )}
      component={Link}
      href={"#top-of-page" as const}
      platform={"nextjs"}
    >
      <h1
        data-plasmic-name={"h1"}
        data-plasmic-override={overrides.h1}
        className={classNames(
          projectcss.all,
          projectcss.h1,
          projectcss.__wab_text,
          sty.h1
        )}
      >
        {"▲"}
      </h1>
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  backToTopBtn: ["backToTopBtn", "h1"],
  h1: ["h1"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  backToTopBtn: "a";
  h1: "h1";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicBackToTop__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicBackToTop__VariantsArgs;
    args?: PlasmicBackToTop__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicBackToTop__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicBackToTop__ArgsType, ReservedPropsType> &
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
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicBackToTop__ArgProps,
          internalVariantPropNames: PlasmicBackToTop__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicBackToTop__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "backToTopBtn") {
    func.displayName = "PlasmicBackToTop";
  } else {
    func.displayName = `PlasmicBackToTop.${nodeName}`;
  }
  return func;
}

export const PlasmicBackToTop = Object.assign(
  // Top-level PlasmicBackToTop renders the root element
  makeNodeComponent("backToTopBtn"),
  {
    // Helper components rendering sub-elements
    h1: makeNodeComponent("h1"),

    // Metadata about props expected for PlasmicBackToTop
    internalVariantProps: PlasmicBackToTop__VariantProps,
    internalArgProps: PlasmicBackToTop__ArgProps
  }
);

export default PlasmicBackToTop;
/* prettier-ignore-end */
