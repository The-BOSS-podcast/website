// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: sx3ERcdAG6itf9PoNvoQTY
// Component: 9rZHnLjFgeB
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
import sty from "./PlasmicHeaderComDesk.module.css"; // plasmic-import: 9rZHnLjFgeB/css

export type PlasmicHeaderComDesk__VariantMembers = {};

export type PlasmicHeaderComDesk__VariantsArgs = {};
type VariantPropType = keyof PlasmicHeaderComDesk__VariantsArgs;
export const PlasmicHeaderComDesk__VariantProps = new Array<VariantPropType>();

export type PlasmicHeaderComDesk__ArgsType = {};
type ArgPropType = keyof PlasmicHeaderComDesk__ArgsType;
export const PlasmicHeaderComDesk__ArgProps = new Array<ArgPropType>();

export type PlasmicHeaderComDesk__OverridesType = {
  root?: p.Flex<"div">;
  freeBox?: p.Flex<"div">;
  logo?: p.Flex<"a"> & Partial<LinkProps>;
  theBossLogo1?: p.Flex<"div">;
  frame38?: p.Flex<"div">;
  navLinks?: p.Flex<"div">;
  btnCtaPrimary?: p.Flex<"a"> & Partial<LinkProps>;
};

export interface DefaultHeaderComDeskProps {
  className?: string;
}

export const defaultHeaderComDesk__Args: Partial<PlasmicHeaderComDesk__ArgsType> =
  {};

function PlasmicHeaderComDesk__RenderFunc(props: {
  variants: PlasmicHeaderComDesk__VariantsArgs;
  args: PlasmicHeaderComDesk__ArgsType;
  overrides: PlasmicHeaderComDesk__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const args = Object.assign({}, defaultHeaderComDesk__Args, props.args);
  const $props = args;
  const $ctx = ph.useDataEnv?.() || {};

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
        <div
          data-plasmic-name={"freeBox"}
          data-plasmic-override={overrides.freeBox}
          className={classNames(projectcss.all, sty.freeBox)}
        >
          <p.Stack
            as={p.PlasmicLink}
            data-plasmic-name={"logo"}
            data-plasmic-override={overrides.logo}
            hasGap={true}
            className={classNames(projectcss.all, projectcss.a, sty.logo)}
            component={Link}
            href={"/" as const}
            platform={"nextjs"}
          >
            <div
              data-plasmic-name={"theBossLogo1"}
              data-plasmic-override={overrides.theBossLogo1}
              className={classNames(projectcss.all, sty.theBossLogo1)}
            />

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__fdLpc
              )}
            >
              {"The Balls Of Steel Show"}
            </div>
          </p.Stack>

          <p.Stack
            as={"div"}
            data-plasmic-name={"frame38"}
            data-plasmic-override={overrides.frame38}
            hasGap={true}
            className={classNames(projectcss.all, sty.frame38)}
          >
            <p.Stack
              as={"div"}
              data-plasmic-name={"navLinks"}
              data-plasmic-override={overrides.navLinks}
              hasGap={true}
              className={classNames(projectcss.all, sty.navLinks)}
            >
              <p.PlasmicLink
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  projectcss.__wab_text,
                  sty.link__fKUn
                )}
                component={Link}
                href={"/guests" as const}
                platform={"nextjs"}
              >
                {"Guests"}
              </p.PlasmicLink>

              <p.PlasmicLink
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  projectcss.__wab_text,
                  sty.link__zgz7A
                )}
                component={Link}
                href={"/advertisers" as const}
                platform={"nextjs"}
              >
                {"For Advertisers"}
              </p.PlasmicLink>

              <p.PlasmicLink
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  projectcss.__wab_text,
                  sty.link__o7L3Z
                )}
                component={Link}
                href={"/podcasters" as const}
                platform={"nextjs"}
              >
                {"For Podcasters"}
              </p.PlasmicLink>

              <p.PlasmicLink
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  projectcss.__wab_text,
                  sty.link__ewpg1
                )}
                component={Link}
                href={"/contact" as const}
                platform={"nextjs"}
              >
                {"Contact"}
              </p.PlasmicLink>

              <p.PlasmicLink
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  projectcss.__wab_text,
                  sty.link__bzu22
                )}
                component={Link}
                href={"contenthouse.ballsofsteelshow.com" as const}
                platform={"nextjs"}
              >
                {"Content House"}
              </p.PlasmicLink>

              <p.Stack
                as={p.PlasmicLink}
                data-plasmic-name={"btnCtaPrimary"}
                data-plasmic-override={overrides.btnCtaPrimary}
                hasGap={true}
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  sty.btnCtaPrimary
                )}
                component={Link}
                href={"/podcast" as const}
                platform={"nextjs"}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__zbX3Q
                  )}
                >
                  {"Go to Podcast"}
                </div>
              </p.Stack>
            </p.Stack>
          </p.Stack>
        </div>
      ) : null}
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "freeBox",
    "logo",
    "theBossLogo1",
    "frame38",
    "navLinks",
    "btnCtaPrimary"
  ],
  freeBox: [
    "freeBox",
    "logo",
    "theBossLogo1",
    "frame38",
    "navLinks",
    "btnCtaPrimary"
  ],
  logo: ["logo", "theBossLogo1"],
  theBossLogo1: ["theBossLogo1"],
  frame38: ["frame38", "navLinks", "btnCtaPrimary"],
  navLinks: ["navLinks", "btnCtaPrimary"],
  btnCtaPrimary: ["btnCtaPrimary"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  freeBox: "div";
  logo: "a";
  theBossLogo1: "div";
  frame38: "div";
  navLinks: "div";
  btnCtaPrimary: "a";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHeaderComDesk__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHeaderComDesk__VariantsArgs;
    args?: PlasmicHeaderComDesk__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHeaderComDesk__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicHeaderComDesk__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicHeaderComDesk__ArgProps,
      internalVariantPropNames: PlasmicHeaderComDesk__VariantProps
    });

    return PlasmicHeaderComDesk__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHeaderComDesk";
  } else {
    func.displayName = `PlasmicHeaderComDesk.${nodeName}`;
  }
  return func;
}

export const PlasmicHeaderComDesk = Object.assign(
  // Top-level PlasmicHeaderComDesk renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    logo: makeNodeComponent("logo"),
    theBossLogo1: makeNodeComponent("theBossLogo1"),
    frame38: makeNodeComponent("frame38"),
    navLinks: makeNodeComponent("navLinks"),
    btnCtaPrimary: makeNodeComponent("btnCtaPrimary"),

    // Metadata about props expected for PlasmicHeaderComDesk
    internalVariantProps: PlasmicHeaderComDesk__VariantProps,
    internalArgProps: PlasmicHeaderComDesk__ArgProps
  }
);

export default PlasmicHeaderComDesk;
/* prettier-ignore-end */
