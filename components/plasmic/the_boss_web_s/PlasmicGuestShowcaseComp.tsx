// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: sx3ERcdAG6itf9PoNvoQTY
// Component: Xx-I0YJ0crD
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
import sty from "./PlasmicGuestShowcaseComp.module.css"; // plasmic-import: Xx-I0YJ0crD/css

export type PlasmicGuestShowcaseComp__VariantMembers = {};

export type PlasmicGuestShowcaseComp__VariantsArgs = {};
type VariantPropType = keyof PlasmicGuestShowcaseComp__VariantsArgs;
export const PlasmicGuestShowcaseComp__VariantProps =
  new Array<VariantPropType>();

export type PlasmicGuestShowcaseComp__ArgsType = {
  name?: React.ReactNode;
  company?: React.ReactNode;
  ep623?: React.ReactNode;
  children?: React.ReactNode;
  slot?: React.ReactNode;
  photos?: React.ReactNode;
};

type ArgPropType = keyof PlasmicGuestShowcaseComp__ArgsType;
export const PlasmicGuestShowcaseComp__ArgProps = new Array<ArgPropType>(
  "name",
  "company",
  "ep623",
  "children",
  "slot",
  "photos"
);

export type PlasmicGuestShowcaseComp__OverridesType = {
  root?: p.Flex<"div">;
  frame280?: p.Flex<"div">;
  frame281?: p.Flex<"div">;
  frame282?: p.Flex<"div">;
  frame284?: p.Flex<"div">;
  frame283?: p.Flex<"div">;
  frame285?: p.Flex<"div">;
  freeBox?: p.Flex<"div">;
};

export interface DefaultGuestShowcaseCompProps {
  name?: React.ReactNode;
  company?: React.ReactNode;
  ep623?: React.ReactNode;
  children?: React.ReactNode;
  slot?: React.ReactNode;
  photos?: React.ReactNode;
  className?: string;
}

function PlasmicGuestShowcaseComp__RenderFunc(props: {
  variants: PlasmicGuestShowcaseComp__VariantsArgs;
  args: PlasmicGuestShowcaseComp__ArgsType;
  overrides: PlasmicGuestShowcaseComp__OverridesType;

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
          data-plasmic-name={"frame280"}
          data-plasmic-override={overrides.frame280}
          className={classNames(projectcss.all, sty.frame280)}
        >
          <p.Stack
            as={"div"}
            data-plasmic-name={"frame281"}
            data-plasmic-override={overrides.frame281}
            hasGap={true}
            className={classNames(projectcss.all, sty.frame281)}
          >
            <p.Stack
              as={"div"}
              data-plasmic-name={"frame282"}
              data-plasmic-override={overrides.frame282}
              hasGap={true}
              className={classNames(projectcss.all, sty.frame282)}
            >
              {p.renderPlasmicSlot({
                defaultContents: (
                  <React.Fragment>
                    <div
                      className={classNames(projectcss.all, sty.freeBox__ooPSo)}
                    />

                    <div
                      className={classNames(
                        projectcss.all,
                        sty.freeBox___3RlIk
                      )}
                    />
                  </React.Fragment>
                ),
                value: args.photos
              })}
            </p.Stack>
          </p.Stack>
        </div>
      ) : null}

      <p.Stack
        as={"div"}
        data-plasmic-name={"frame284"}
        data-plasmic-override={overrides.frame284}
        hasGap={true}
        className={classNames(projectcss.all, sty.frame284)}
      >
        <div
          data-plasmic-name={"frame283"}
          data-plasmic-override={overrides.frame283}
          className={classNames(projectcss.all, sty.frame283)}
        >
          {p.renderPlasmicSlot({
            defaultContents: "Meghna Kishore & Barkha Bhatnagar Das",
            value: args.name,
            className: classNames(sty.slotTargetName)
          })}

          {p.renderPlasmicSlot({
            defaultContents: "Greendigo ",
            value: args.company,
            className: classNames(sty.slotTargetCompany)
          })}
        </div>

        <p.Stack
          as={"div"}
          data-plasmic-name={"frame285"}
          data-plasmic-override={overrides.frame285}
          hasGap={true}
          className={classNames(projectcss.all, sty.frame285)}
        >
          {p.renderPlasmicSlot({
            defaultContents: (
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__yp5Ot
                )}
              >
                {"Ep 66:"}
              </div>
            ),

            value: args.ep623,
            className: classNames(sty.slotTargetEp623)
          })}

          {p.renderPlasmicSlot({
            defaultContents:
              "Impacted by leading a conscious lifestyle, this sibling duo kickstarted a homegrown functional garment brand exclusively to create safe and organic clothing options for children. Leaving their cushy corporate jobs behind, Meghna and Barkha swore to make a conscious and healthy clothing alternative for infants and children. Making their organization a women-led enterprise, Meghna and Barkha are empowering a generation of women altogether. Listen to know more about their entrepreneurial journey and widen your Dhandho Ni Soch.",
            value: args.children,
            className: classNames(sty.slotTargetChildren)
          })}
        </p.Stack>

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
                    sty.link__tYDwT
                  )}
                  component={Link}
                  platform={"nextjs"}
                  target={"_blank" as const}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__ad59A
                    )}
                  >
                    {"Go to Episode"}
                  </div>
                </p.Stack>
              ),

              value: args.slot
            })}
          </div>
        ) : null}
      </p.Stack>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "frame280",
    "frame281",
    "frame282",
    "frame284",
    "frame283",
    "frame285",
    "freeBox"
  ],
  frame280: ["frame280", "frame281", "frame282"],
  frame281: ["frame281", "frame282"],
  frame282: ["frame282"],
  frame284: ["frame284", "frame283", "frame285", "freeBox"],
  frame283: ["frame283"],
  frame285: ["frame285"],
  freeBox: ["freeBox"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  frame280: "div";
  frame281: "div";
  frame282: "div";
  frame284: "div";
  frame283: "div";
  frame285: "div";
  freeBox: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicGuestShowcaseComp__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicGuestShowcaseComp__VariantsArgs;
    args?: PlasmicGuestShowcaseComp__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicGuestShowcaseComp__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicGuestShowcaseComp__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicGuestShowcaseComp__ArgProps,
          internalVariantPropNames: PlasmicGuestShowcaseComp__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicGuestShowcaseComp__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicGuestShowcaseComp";
  } else {
    func.displayName = `PlasmicGuestShowcaseComp.${nodeName}`;
  }
  return func;
}

export const PlasmicGuestShowcaseComp = Object.assign(
  // Top-level PlasmicGuestShowcaseComp renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    frame280: makeNodeComponent("frame280"),
    frame281: makeNodeComponent("frame281"),
    frame282: makeNodeComponent("frame282"),
    frame284: makeNodeComponent("frame284"),
    frame283: makeNodeComponent("frame283"),
    frame285: makeNodeComponent("frame285"),
    freeBox: makeNodeComponent("freeBox"),

    // Metadata about props expected for PlasmicGuestShowcaseComp
    internalVariantProps: PlasmicGuestShowcaseComp__VariantProps,
    internalArgProps: PlasmicGuestShowcaseComp__ArgProps
  }
);

export default PlasmicGuestShowcaseComp;
/* prettier-ignore-end */
