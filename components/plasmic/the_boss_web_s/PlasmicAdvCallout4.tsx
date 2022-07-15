// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: sx3ERcdAG6itf9PoNvoQTY
// Component: N7nf-2FNTT
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
import sty from "./PlasmicAdvCallout4.module.css"; // plasmic-import: N7nf-2FNTT/css

export type PlasmicAdvCallout4__VariantMembers = {};

export type PlasmicAdvCallout4__VariantsArgs = {};
type VariantPropType = keyof PlasmicAdvCallout4__VariantsArgs;
export const PlasmicAdvCallout4__VariantProps = new Array<VariantPropType>();

export type PlasmicAdvCallout4__ArgsType = {};
type ArgPropType = keyof PlasmicAdvCallout4__ArgsType;
export const PlasmicAdvCallout4__ArgProps = new Array<ArgPropType>();

export type PlasmicAdvCallout4__OverridesType = {
  root?: p.Flex<"div">;
  group14?: p.Flex<"div">;
  btn8?: p.Flex<"a"> & Partial<LinkProps>;
  freeBox?: p.Flex<"div">;
  btn9?: p.Flex<"a"> & Partial<LinkProps>;
};

export interface DefaultAdvCallout4Props {
  className?: string;
}

function PlasmicAdvCallout4__RenderFunc(props: {
  variants: PlasmicAdvCallout4__VariantsArgs;
  args: PlasmicAdvCallout4__ArgsType;
  overrides: PlasmicAdvCallout4__OverridesType;

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
      <p.Stack
        as={"div"}
        data-plasmic-name={"group14"}
        data-plasmic-override={overrides.group14}
        hasGap={true}
        className={classNames(projectcss.all, sty.group14)}
      >
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__dNWp
          )}
        >
          {"Leverage the power of podcasts"}
        </div>

        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__mQgSl
          )}
        >
          {"Connect with your potential customers now!"}
        </div>

        <p.Stack
          as={p.PlasmicLink}
          data-plasmic-name={"btn8"}
          data-plasmic-override={overrides.btn8}
          hasGap={true}
          className={classNames(projectcss.all, projectcss.a, sty.btn8)}
          component={Link}
          href={"#advertiser-form" as const}
          platform={"nextjs"}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text___3B7Mq
            )}
          >
            {"Start Advertising"}
          </div>
        </p.Stack>
      </p.Stack>

      {true ? (
        <p.Stack
          as={"div"}
          data-plasmic-name={"freeBox"}
          data-plasmic-override={overrides.freeBox}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox)}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__awrWl
            )}
          >
            {"Have a question or\nneed more clarity?"}
          </div>

          <p.Stack
            as={p.PlasmicLink}
            data-plasmic-name={"btn9"}
            data-plasmic-override={overrides.btn9}
            hasGap={true}
            className={classNames(projectcss.all, projectcss.a, sty.btn9)}
            component={Link}
            href={"https://www.calendar.com/the-balls-of-steel-show/" as const}
            platform={"nextjs"}
            target={"_blank" as const}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__bYvCg
              )}
            >
              {"Free Consultation Call"}
            </div>
          </p.Stack>
        </p.Stack>
      ) : null}
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "group14", "btn8", "freeBox", "btn9"],
  group14: ["group14", "btn8"],
  btn8: ["btn8"],
  freeBox: ["freeBox", "btn9"],
  btn9: ["btn9"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  group14: "div";
  btn8: "a";
  freeBox: "div";
  btn9: "a";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicAdvCallout4__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicAdvCallout4__VariantsArgs;
    args?: PlasmicAdvCallout4__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicAdvCallout4__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicAdvCallout4__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicAdvCallout4__ArgProps,
          internalVariantPropNames: PlasmicAdvCallout4__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicAdvCallout4__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicAdvCallout4";
  } else {
    func.displayName = `PlasmicAdvCallout4.${nodeName}`;
  }
  return func;
}

export const PlasmicAdvCallout4 = Object.assign(
  // Top-level PlasmicAdvCallout4 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    group14: makeNodeComponent("group14"),
    btn8: makeNodeComponent("btn8"),
    freeBox: makeNodeComponent("freeBox"),
    btn9: makeNodeComponent("btn9"),

    // Metadata about props expected for PlasmicAdvCallout4
    internalVariantProps: PlasmicAdvCallout4__VariantProps,
    internalArgProps: PlasmicAdvCallout4__ArgProps
  }
);

export default PlasmicAdvCallout4;
/* prettier-ignore-end */
