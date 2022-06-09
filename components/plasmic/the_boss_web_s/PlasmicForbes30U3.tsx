// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: sx3ERcdAG6itf9PoNvoQTY
// Component: xWD27F545h
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
import sty from "./PlasmicForbes30U3.module.css"; // plasmic-import: xWD27F545h/css

export type PlasmicForbes30U3__VariantMembers = {};

export type PlasmicForbes30U3__VariantsArgs = {};
type VariantPropType = keyof PlasmicForbes30U3__VariantsArgs;
export const PlasmicForbes30U3__VariantProps = new Array<VariantPropType>();

export type PlasmicForbes30U3__ArgsType = {
  name?: React.ReactNode;
  brand?: React.ReactNode;
  brandLogo?: React.ReactNode;
  bg?: React.ReactNode;
  children?: React.ReactNode;
};

type ArgPropType = keyof PlasmicForbes30U3__ArgsType;
export const PlasmicForbes30U3__ArgProps = new Array<ArgPropType>(
  "name",
  "brand",
  "brandLogo",
  "bg",
  "children"
);

export type PlasmicForbes30U3__OverridesType = {
  root?: p.Flex<"div">;
  freeBox?: p.Flex<"div">;
};

export interface DefaultForbes30U3Props {
  name?: React.ReactNode;
  brand?: React.ReactNode;
  brandLogo?: React.ReactNode;
  bg?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}

export const defaultForbes30U3__Args: Partial<PlasmicForbes30U3__ArgsType> = {};

function PlasmicForbes30U3__RenderFunc(props: {
  variants: PlasmicForbes30U3__VariantsArgs;
  args: PlasmicForbes30U3__ArgsType;
  overrides: PlasmicForbes30U3__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const args = Object.assign({}, defaultForbes30U3__Args, props.args);
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
      {p.renderPlasmicSlot({
        defaultContents: (
          <p.PlasmicImg
            alt={""}
            className={classNames(sty.img__tFvIx)}
            displayHeight={"auto" as const}
            displayMaxHeight={"none" as const}
            displayMaxWidth={"105%" as const}
            displayMinHeight={"0" as const}
            displayMinWidth={"0" as const}
            displayWidth={"auto" as const}
            loading={"lazy" as const}
            src={{
              src: "/plasmic/the_boss_web_s/images/satanikHxkarTjpg2.jpeg",
              fullWidth: 1065,
              fullHeight: 1902,
              aspectRatio: undefined
            }}
          />
        ),

        value: args.bg
      })}

      {p.renderPlasmicSlot({
        defaultContents: (
          <p.PlasmicImg
            alt={""}
            className={classNames(sty.img__f2XvL)}
            displayHeight={"4rem" as const}
            displayMaxHeight={"none" as const}
            displayMaxWidth={"100%" as const}
            displayMinHeight={"0" as const}
            displayMinWidth={"0" as const}
            displayWidth={"auto" as const}
            loading={"lazy" as const}
            src={{
              src: "/plasmic/the_boss_web_s/images/image10.png",
              fullWidth: 960,
              fullHeight: 960,
              aspectRatio: undefined
            }}
          />
        ),

        value: args.brandLogo
      })}

      {p.renderPlasmicSlot({
        defaultContents: "Vaibhav Vasa",
        value: args.name,
        className: classNames(sty.slotTargetName)
      })}

      {p.renderPlasmicSlot({
        defaultContents: "Khatabook",
        value: args.brand,
        className: classNames(sty.slotTargetBrand)
      })}

      {true ? (
        <div
          data-plasmic-name={"freeBox"}
          data-plasmic-override={overrides.freeBox}
          className={classNames(projectcss.all, sty.freeBox)}
        >
          {p.renderPlasmicSlot({
            defaultContents: (
              <p.Stack
                as={p.PlasmicLink}
                hasGap={true}
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  sty.link__jCwS
                )}
                component={Link}
                platform={"nextjs"}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___9EZZ
                  )}
                >
                  {"Go to Episode"}
                </div>
              </p.Stack>
            ),

            value: args.children
          })}
        </div>
      ) : null}
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "freeBox"],
  freeBox: ["freeBox"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  freeBox: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicForbes30U3__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicForbes30U3__VariantsArgs;
    args?: PlasmicForbes30U3__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicForbes30U3__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicForbes30U3__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicForbes30U3__ArgProps,
      internalVariantPropNames: PlasmicForbes30U3__VariantProps
    });

    return PlasmicForbes30U3__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicForbes30U3";
  } else {
    func.displayName = `PlasmicForbes30U3.${nodeName}`;
  }
  return func;
}

export const PlasmicForbes30U3 = Object.assign(
  // Top-level PlasmicForbes30U3 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),

    // Metadata about props expected for PlasmicForbes30U3
    internalVariantProps: PlasmicForbes30U3__VariantProps,
    internalArgProps: PlasmicForbes30U3__ArgProps
  }
);

export default PlasmicForbes30U3;
/* prettier-ignore-end */
