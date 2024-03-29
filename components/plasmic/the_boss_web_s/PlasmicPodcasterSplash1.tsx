// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: sx3ERcdAG6itf9PoNvoQTY
// Component: XbwfbuBKi4r
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

import { useScreenVariants as useScreenVariantsjp7EaCu1Pi8YJ } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: Jp7eaCu1Pi8yJ/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_the_boss_web_s.module.css"; // plasmic-import: sx3ERcdAG6itf9PoNvoQTY/projectcss
import sty from "./PlasmicPodcasterSplash1.module.css"; // plasmic-import: XbwfbuBKi4r/css

export type PlasmicPodcasterSplash1__VariantMembers = {};

export type PlasmicPodcasterSplash1__VariantsArgs = {};
type VariantPropType = keyof PlasmicPodcasterSplash1__VariantsArgs;
export const PlasmicPodcasterSplash1__VariantProps =
  new Array<VariantPropType>();

export type PlasmicPodcasterSplash1__ArgsType = {};
type ArgPropType = keyof PlasmicPodcasterSplash1__ArgsType;
export const PlasmicPodcasterSplash1__ArgProps = new Array<ArgPropType>();

export type PlasmicPodcasterSplash1__OverridesType = {
  root?: p.Flex<"div">;
  freeBox?: p.Flex<"div">;
  group42?: p.Flex<"div">;
  ctAs?: p.Flex<"div">;
  btn?: p.Flex<"a"> & Partial<LinkProps>;
  btn2?: p.Flex<"a"> & Partial<LinkProps>;
};

export interface DefaultPodcasterSplash1Props {
  className?: string;
}

function PlasmicPodcasterSplash1__RenderFunc(props: {
  variants: PlasmicPodcasterSplash1__VariantsArgs;
  args: PlasmicPodcasterSplash1__ArgsType;
  overrides: PlasmicPodcasterSplash1__OverridesType;

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

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsjp7EaCu1Pi8YJ()
  });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
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
        <p.Stack
          as={"div"}
          data-plasmic-name={"freeBox"}
          data-plasmic-override={overrides.freeBox}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox)}
        >
          <p.Stack
            as={"div"}
            data-plasmic-name={"group42"}
            data-plasmic-override={overrides.group42}
            hasGap={true}
            className={classNames(projectcss.all, sty.group42)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__gErxl
              )}
            >
              <React.Fragment>
                <React.Fragment>{"hey fellow "}</React.Fragment>
                {
                  <span
                    className={classNames(
                      projectcss.all,
                      projectcss.span,
                      projectcss.__wab_text,
                      projectcss.plasmic_default__inline,
                      sty.span__mcl9J
                    )}
                  >
                    {"podcasters,"}
                  </span>
                }
                <React.Fragment>{"\nlet's "}</React.Fragment>
                {
                  <span
                    className={classNames(
                      projectcss.all,
                      projectcss.span,
                      projectcss.__wab_text,
                      projectcss.plasmic_default__inline,
                      sty.span__yYhMm
                    )}
                  >
                    {"monetize"}
                  </span>
                }
                <React.Fragment>{" your "}</React.Fragment>
                {
                  <span
                    className={classNames(
                      projectcss.all,
                      projectcss.span,
                      projectcss.__wab_text,
                      projectcss.plasmic_default__inline,
                      sty.span___1Rf3O
                    )}
                  >
                    {"content"}
                  </span>
                }
                <React.Fragment>{""}</React.Fragment>
              </React.Fragment>
            </div>

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__fqOGx
              )}
            >
              {
                "It is time for all podcasters to monetize their podcasts and\n unleash the unexplored potential of their podcasting career."
              }
            </div>

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
                href={"#podcaster-form" as const}
                platform={"nextjs"}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__o5YHc
                  )}
                >
                  {"Sign-Up with BOSS"}
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
                    sty.text__eby0Y
                  )}
                >
                  {"The BOSS Services"}
                </div>
              </p.Stack>
            </p.Stack>
          </p.Stack>
        </p.Stack>
      ) : null}
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "freeBox", "group42", "ctAs", "btn", "btn2"],
  freeBox: ["freeBox", "group42", "ctAs", "btn", "btn2"],
  group42: ["group42", "ctAs", "btn", "btn2"],
  ctAs: ["ctAs", "btn", "btn2"],
  btn: ["btn"],
  btn2: ["btn2"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  freeBox: "div";
  group42: "div";
  ctAs: "div";
  btn: "a";
  btn2: "a";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicPodcasterSplash1__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicPodcasterSplash1__VariantsArgs;
    args?: PlasmicPodcasterSplash1__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicPodcasterSplash1__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicPodcasterSplash1__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicPodcasterSplash1__ArgProps,
          internalVariantPropNames: PlasmicPodcasterSplash1__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicPodcasterSplash1__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPodcasterSplash1";
  } else {
    func.displayName = `PlasmicPodcasterSplash1.${nodeName}`;
  }
  return func;
}

export const PlasmicPodcasterSplash1 = Object.assign(
  // Top-level PlasmicPodcasterSplash1 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    group42: makeNodeComponent("group42"),
    ctAs: makeNodeComponent("ctAs"),
    btn: makeNodeComponent("btn"),
    btn2: makeNodeComponent("btn2"),

    // Metadata about props expected for PlasmicPodcasterSplash1
    internalVariantProps: PlasmicPodcasterSplash1__VariantProps,
    internalArgProps: PlasmicPodcasterSplash1__ArgProps
  }
);

export default PlasmicPodcasterSplash1;
/* prettier-ignore-end */
