// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: sx3ERcdAG6itf9PoNvoQTY
// Component: cLvU_l0Kaq
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
import Brandlist from "../../Brandlist"; // plasmic-import: Dd02V_gwsj/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_the_boss_web_s.module.css"; // plasmic-import: sx3ERcdAG6itf9PoNvoQTY/projectcss
import sty from "./PlasmicGuestsBrands4.module.css"; // plasmic-import: cLvU_l0Kaq/css

export type PlasmicGuestsBrands4__VariantMembers = {};

export type PlasmicGuestsBrands4__VariantsArgs = {};
type VariantPropType = keyof PlasmicGuestsBrands4__VariantsArgs;
export const PlasmicGuestsBrands4__VariantProps = new Array<VariantPropType>();

export type PlasmicGuestsBrands4__ArgsType = {};
type ArgPropType = keyof PlasmicGuestsBrands4__ArgsType;
export const PlasmicGuestsBrands4__ArgProps = new Array<ArgPropType>();

export type PlasmicGuestsBrands4__OverridesType = {
  root?: p.Flex<"div">;
  group61?: p.Flex<"div">;
  text?: p.Flex<"div">;
  brandlist?: p.Flex<typeof Brandlist>;
};

export interface DefaultGuestsBrands4Props {
  className?: string;
}

function PlasmicGuestsBrands4__RenderFunc(props: {
  variants: PlasmicGuestsBrands4__VariantsArgs;
  args: PlasmicGuestsBrands4__ArgsType;
  overrides: PlasmicGuestsBrands4__OverridesType;

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
      <div
        data-plasmic-name={"group61"}
        data-plasmic-override={overrides.group61}
        className={classNames(projectcss.all, sty.group61)}
      >
        <div
          data-plasmic-name={"text"}
          data-plasmic-override={overrides.text}
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text
          )}
        >
          {"Some of the heroes we’ve worked with"}
        </div>
      </div>

      <Brandlist
        data-plasmic-name={"brandlist"}
        data-plasmic-override={overrides.brandlist}
        className={classNames("__wab_instance", sty.brandlist)}
      />
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "group61", "text", "brandlist"],
  group61: ["group61", "text"],
  text: ["text"],
  brandlist: ["brandlist"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  group61: "div";
  text: "div";
  brandlist: typeof Brandlist;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicGuestsBrands4__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicGuestsBrands4__VariantsArgs;
    args?: PlasmicGuestsBrands4__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicGuestsBrands4__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicGuestsBrands4__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicGuestsBrands4__ArgProps,
          internalVariantPropNames: PlasmicGuestsBrands4__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicGuestsBrands4__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicGuestsBrands4";
  } else {
    func.displayName = `PlasmicGuestsBrands4.${nodeName}`;
  }
  return func;
}

export const PlasmicGuestsBrands4 = Object.assign(
  // Top-level PlasmicGuestsBrands4 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    group61: makeNodeComponent("group61"),
    text: makeNodeComponent("text"),
    brandlist: makeNodeComponent("brandlist"),

    // Metadata about props expected for PlasmicGuestsBrands4
    internalVariantProps: PlasmicGuestsBrands4__VariantProps,
    internalArgProps: PlasmicGuestsBrands4__ArgProps
  }
);

export default PlasmicGuestsBrands4;
/* prettier-ignore-end */
