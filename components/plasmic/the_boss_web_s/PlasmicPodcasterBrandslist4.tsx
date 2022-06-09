// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: sx3ERcdAG6itf9PoNvoQTY
// Component: yhB6jGyQZjp
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
import SectionHeading from "../../SectionHeading"; // plasmic-import: 9cHukr1vk4/component
import Brandlist from "../../Brandlist"; // plasmic-import: Dd02V_gwsj/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_the_boss_web_s.module.css"; // plasmic-import: sx3ERcdAG6itf9PoNvoQTY/projectcss
import sty from "./PlasmicPodcasterBrandslist4.module.css"; // plasmic-import: yhB6jGyQZjp/css

export type PlasmicPodcasterBrandslist4__VariantMembers = {};

export type PlasmicPodcasterBrandslist4__VariantsArgs = {};
type VariantPropType = keyof PlasmicPodcasterBrandslist4__VariantsArgs;
export const PlasmicPodcasterBrandslist4__VariantProps =
  new Array<VariantPropType>();

export type PlasmicPodcasterBrandslist4__ArgsType = {};
type ArgPropType = keyof PlasmicPodcasterBrandslist4__ArgsType;
export const PlasmicPodcasterBrandslist4__ArgProps = new Array<ArgPropType>();

export type PlasmicPodcasterBrandslist4__OverridesType = {
  root?: p.Flex<"div">;
  sectionHeading?: p.Flex<typeof SectionHeading>;
  freeBox?: p.Flex<"div">;
  brandlist?: p.Flex<typeof Brandlist>;
};

export interface DefaultPodcasterBrandslist4Props {
  className?: string;
}

export const defaultPodcasterBrandslist4__Args: Partial<PlasmicPodcasterBrandslist4__ArgsType> =
  {};

function PlasmicPodcasterBrandslist4__RenderFunc(props: {
  variants: PlasmicPodcasterBrandslist4__VariantsArgs;
  args: PlasmicPodcasterBrandslist4__ArgsType;
  overrides: PlasmicPodcasterBrandslist4__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const args = Object.assign({}, defaultPodcasterBrandslist4__Args, props.args);
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
      <SectionHeading
        data-plasmic-name={"sectionHeading"}
        data-plasmic-override={overrides.sectionHeading}
        className={classNames("__wab_instance", sty.sectionHeading)}
      >
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text___4ALRv
          )}
        >
          {"We Have Worked With"}
        </div>
      </SectionHeading>

      {true ? (
        <div
          data-plasmic-name={"freeBox"}
          data-plasmic-override={overrides.freeBox}
          className={classNames(projectcss.all, sty.freeBox)}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text___1KcGb
            )}
          >
            {"Some Brands We Have Already Worked With"}
          </div>
        </div>
      ) : null}

      <Brandlist
        data-plasmic-name={"brandlist"}
        data-plasmic-override={overrides.brandlist}
        className={classNames("__wab_instance", sty.brandlist)}
      />
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "sectionHeading", "freeBox", "brandlist"],
  sectionHeading: ["sectionHeading"],
  freeBox: ["freeBox"],
  brandlist: ["brandlist"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  sectionHeading: typeof SectionHeading;
  freeBox: "div";
  brandlist: typeof Brandlist;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicPodcasterBrandslist4__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicPodcasterBrandslist4__VariantsArgs;
    args?: PlasmicPodcasterBrandslist4__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicPodcasterBrandslist4__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicPodcasterBrandslist4__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicPodcasterBrandslist4__ArgProps,
      internalVariantPropNames: PlasmicPodcasterBrandslist4__VariantProps
    });

    return PlasmicPodcasterBrandslist4__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPodcasterBrandslist4";
  } else {
    func.displayName = `PlasmicPodcasterBrandslist4.${nodeName}`;
  }
  return func;
}

export const PlasmicPodcasterBrandslist4 = Object.assign(
  // Top-level PlasmicPodcasterBrandslist4 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    sectionHeading: makeNodeComponent("sectionHeading"),
    freeBox: makeNodeComponent("freeBox"),
    brandlist: makeNodeComponent("brandlist"),

    // Metadata about props expected for PlasmicPodcasterBrandslist4
    internalVariantProps: PlasmicPodcasterBrandslist4__VariantProps,
    internalArgProps: PlasmicPodcasterBrandslist4__ArgProps
  }
);

export default PlasmicPodcasterBrandslist4;
/* prettier-ignore-end */
