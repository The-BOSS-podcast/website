// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: sx3ERcdAG6itf9PoNvoQTY
// Component: RjiAS_vB3Q
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
import sty from "./PlasmicHomeSplash1.module.css"; // plasmic-import: RjiAS_vB3Q/css

export type PlasmicHomeSplash1__VariantMembers = {};

export type PlasmicHomeSplash1__VariantsArgs = {};
type VariantPropType = keyof PlasmicHomeSplash1__VariantsArgs;
export const PlasmicHomeSplash1__VariantProps = new Array<VariantPropType>();

export type PlasmicHomeSplash1__ArgsType = {};
type ArgPropType = keyof PlasmicHomeSplash1__ArgsType;
export const PlasmicHomeSplash1__ArgProps = new Array<ArgPropType>();

export type PlasmicHomeSplash1__OverridesType = {
  root?: p.Flex<"div">;
  rectangle44?: p.Flex<"div">;
  theBossLogo1?: p.Flex<"div">;
  frame39?: p.Flex<"div">;
  btnCtaPrimary?: p.Flex<"a"> & Partial<LinkProps>;
  btnCtaPrimary2?: p.Flex<"a"> & Partial<LinkProps>;
};

export interface DefaultHomeSplash1Props {
  className?: string;
}

export const defaultHomeSplash1__Args: Partial<PlasmicHomeSplash1__ArgsType> =
  {};

function PlasmicHomeSplash1__RenderFunc(props: {
  variants: PlasmicHomeSplash1__VariantsArgs;
  args: PlasmicHomeSplash1__ArgsType;
  overrides: PlasmicHomeSplash1__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const args = Object.assign({}, defaultHomeSplash1__Args, props.args);
  const $props = args;
  const $ctx = ph.useDataEnv?.() || {};

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
        sty.root,
        "" as const
      )}
    >
      {true ? (
        <p.Stack
          as={"div"}
          data-plasmic-name={"rectangle44"}
          data-plasmic-override={overrides.rectangle44}
          hasGap={true}
          className={classNames(projectcss.all, sty.rectangle44)}
        >
          {true ? (
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__spkxa)}
            >
              {true ? (
                <div className={classNames(projectcss.all, sty.freeBox__rbcvE)}>
                  <div
                    data-plasmic-name={"theBossLogo1"}
                    data-plasmic-override={overrides.theBossLogo1}
                    className={classNames(projectcss.all, sty.theBossLogo1)}
                  />
                </div>
              ) : null}
              {true ? (
                <div className={classNames(projectcss.all, sty.freeBox__pixUa)}>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__oySyr
                    )}
                  >
                    {"A Place Where Brands Advertise\nAnd Podcasters Monetize"}
                  </div>
                </div>
              ) : null}

              <p.Stack
                as={"div"}
                data-plasmic-name={"frame39"}
                data-plasmic-override={overrides.frame39}
                hasGap={true}
                className={classNames(projectcss.all, sty.frame39)}
              >
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
                  href={"/advertisers" as const}
                  platform={"nextjs"}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__lOgQ
                    )}
                  >
                    {"Advertise on Podcasts"}
                  </div>
                </p.Stack>

                <p.Stack
                  as={p.PlasmicLink}
                  data-plasmic-name={"btnCtaPrimary2"}
                  data-plasmic-override={overrides.btnCtaPrimary2}
                  hasGap={true}
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    sty.btnCtaPrimary2
                  )}
                  component={Link}
                  href={"/podcasters" as const}
                  platform={"nextjs"}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___1SMzL
                    )}
                  >
                    {"Monetize your Podcast"}
                  </div>
                </p.Stack>
              </p.Stack>
            </p.Stack>
          ) : null}
        </p.Stack>
      ) : null}
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "rectangle44",
    "theBossLogo1",
    "frame39",
    "btnCtaPrimary",
    "btnCtaPrimary2"
  ],
  rectangle44: [
    "rectangle44",
    "theBossLogo1",
    "frame39",
    "btnCtaPrimary",
    "btnCtaPrimary2"
  ],
  theBossLogo1: ["theBossLogo1"],
  frame39: ["frame39", "btnCtaPrimary", "btnCtaPrimary2"],
  btnCtaPrimary: ["btnCtaPrimary"],
  btnCtaPrimary2: ["btnCtaPrimary2"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  rectangle44: "div";
  theBossLogo1: "div";
  frame39: "div";
  btnCtaPrimary: "a";
  btnCtaPrimary2: "a";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHomeSplash1__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHomeSplash1__VariantsArgs;
    args?: PlasmicHomeSplash1__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHomeSplash1__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicHomeSplash1__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicHomeSplash1__ArgProps,
      internalVariantPropNames: PlasmicHomeSplash1__VariantProps
    });

    return PlasmicHomeSplash1__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomeSplash1";
  } else {
    func.displayName = `PlasmicHomeSplash1.${nodeName}`;
  }
  return func;
}

export const PlasmicHomeSplash1 = Object.assign(
  // Top-level PlasmicHomeSplash1 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    rectangle44: makeNodeComponent("rectangle44"),
    theBossLogo1: makeNodeComponent("theBossLogo1"),
    frame39: makeNodeComponent("frame39"),
    btnCtaPrimary: makeNodeComponent("btnCtaPrimary"),
    btnCtaPrimary2: makeNodeComponent("btnCtaPrimary2"),

    // Metadata about props expected for PlasmicHomeSplash1
    internalVariantProps: PlasmicHomeSplash1__VariantProps,
    internalArgProps: PlasmicHomeSplash1__ArgProps
  }
);

export default PlasmicHomeSplash1;
/* prettier-ignore-end */
