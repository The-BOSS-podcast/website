// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: sx3ERcdAG6itf9PoNvoQTY
// Component: gFaoKwtgdUx
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

import { useScreenVariants as useScreenVariantsjp7EaCu1Pi8YJ } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: Jp7eaCu1Pi8yJ/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_the_boss_web_s.module.css"; // plasmic-import: sx3ERcdAG6itf9PoNvoQTY/projectcss
import sty from "./PlasmicHomeBrands3.module.css"; // plasmic-import: gFaoKwtgdUx/css

export type PlasmicHomeBrands3__VariantMembers = {};

export type PlasmicHomeBrands3__VariantsArgs = {};
type VariantPropType = keyof PlasmicHomeBrands3__VariantsArgs;
export const PlasmicHomeBrands3__VariantProps = new Array<VariantPropType>();

export type PlasmicHomeBrands3__ArgsType = {};
type ArgPropType = keyof PlasmicHomeBrands3__ArgsType;
export const PlasmicHomeBrands3__ArgProps = new Array<ArgPropType>();

export type PlasmicHomeBrands3__OverridesType = {
  root?: p.Flex<"div">;
  sectionHeading?: p.Flex<typeof SectionHeading>;
  freeBox?: p.Flex<"div">;
  brandlist?: p.Flex<typeof Brandlist>;
};

export interface DefaultHomeBrands3Props {
  className?: string;
}

export const defaultHomeBrands3__Args: Partial<PlasmicHomeBrands3__ArgsType> =
  {};

function PlasmicHomeBrands3__RenderFunc(props: {
  variants: PlasmicHomeBrands3__VariantsArgs;
  args: PlasmicHomeBrands3__ArgsType;
  overrides: PlasmicHomeBrands3__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const args = Object.assign({}, defaultHomeBrands3__Args, props.args);
  const $props = args;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsjp7EaCu1Pi8YJ()
  });

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
            sty.text___5R1Wn
          )}
        >
          {"Our Brand Collabs"}
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
              sty.text__dYBn
            )}
          >
            {"Emerging brands we work with"}
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
  PlasmicHomeBrands3__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHomeBrands3__VariantsArgs;
    args?: PlasmicHomeBrands3__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHomeBrands3__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicHomeBrands3__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicHomeBrands3__ArgProps,
      internalVariantPropNames: PlasmicHomeBrands3__VariantProps
    });

    return PlasmicHomeBrands3__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomeBrands3";
  } else {
    func.displayName = `PlasmicHomeBrands3.${nodeName}`;
  }
  return func;
}

export const PlasmicHomeBrands3 = Object.assign(
  // Top-level PlasmicHomeBrands3 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    sectionHeading: makeNodeComponent("sectionHeading"),
    freeBox: makeNodeComponent("freeBox"),
    brandlist: makeNodeComponent("brandlist"),

    // Metadata about props expected for PlasmicHomeBrands3
    internalVariantProps: PlasmicHomeBrands3__VariantProps,
    internalArgProps: PlasmicHomeBrands3__ArgProps
  }
);

export default PlasmicHomeBrands3;
/* prettier-ignore-end */
