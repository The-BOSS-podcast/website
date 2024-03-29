// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: sx3ERcdAG6itf9PoNvoQTY
// Component: Iseo-iegdL
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
import NavBarRes from "../../NavBarRes"; // plasmic-import: hi-mET-ngC/component
import PodcasterSplash1 from "../../PodcasterSplash1"; // plasmic-import: XbwfbuBKi4r/component
import PodcasterVideo2 from "../../PodcasterVideo2"; // plasmic-import: 9jxA25xft25/component
import PodcasterWhyboss3 from "../../PodcasterWhyboss3"; // plasmic-import: 640-i8hCUfy/component
import PodcasterBrandslist4 from "../../PodcasterBrandslist4"; // plasmic-import: yhB6jGyQZjp/component
import PodcasterPerks5 from "../../PodcasterPerks5"; // plasmic-import: ZMIVAnut5so/component
import PodcasterServices6 from "../../PodcasterServices6"; // plasmic-import: 9OtI7XNdEKm/component
import PodcasterForm from "../../PodcasterForm"; // plasmic-import: 4a5zClY4ZCw/component
import FooterComDesk from "../../FooterComDesk"; // plasmic-import: H9tCPDoO68/component

import { useScreenVariants as useScreenVariantsjp7EaCu1Pi8YJ } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: Jp7eaCu1Pi8yJ/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_the_boss_web_s.module.css"; // plasmic-import: sx3ERcdAG6itf9PoNvoQTY/projectcss
import sty from "./PlasmicPodcasters.module.css"; // plasmic-import: Iseo-iegdL/css

export type PlasmicPodcasters__VariantMembers = {};

export type PlasmicPodcasters__VariantsArgs = {};
type VariantPropType = keyof PlasmicPodcasters__VariantsArgs;
export const PlasmicPodcasters__VariantProps = new Array<VariantPropType>();

export type PlasmicPodcasters__ArgsType = {};
type ArgPropType = keyof PlasmicPodcasters__ArgsType;
export const PlasmicPodcasters__ArgProps = new Array<ArgPropType>();

export type PlasmicPodcasters__OverridesType = {
  root?: p.Flex<"div">;
  navBarRes?: p.Flex<typeof NavBarRes>;
  podcastersApproved?: p.Flex<"div">;
  podcasterSplash1?: p.Flex<typeof PodcasterSplash1>;
  podcasterVideo2?: p.Flex<typeof PodcasterVideo2>;
  podcasterWhyboss3?: p.Flex<typeof PodcasterWhyboss3>;
  podcasterBrandslist4?: p.Flex<typeof PodcasterBrandslist4>;
  podcasterPerks5?: p.Flex<typeof PodcasterPerks5>;
  podcasterServices6?: p.Flex<typeof PodcasterServices6>;
  podcasterForm?: p.Flex<typeof PodcasterForm>;
  footerComDesk?: p.Flex<typeof FooterComDesk>;
};

export interface DefaultPodcastersProps {}

function PlasmicPodcasters__RenderFunc(props: {
  variants: PlasmicPodcasters__VariantsArgs;
  args: PlasmicPodcasters__ArgsType;
  overrides: PlasmicPodcasters__OverridesType;

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
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
        <title key="title">{"Podcasters"}</title>
        <meta key="og:title" property="og:title" content={"Podcasters"} />
        <meta key="twitter:title" name="twitter:title" content={"Podcasters"} />
        <meta
          key="description"
          name="description"
          content={
            "The BOSS Media connects podcasters to advertisers and helps them to monetize their podcasts through advertisements"
          }
        />
        <meta
          key="og:description"
          property="og:description"
          content={
            "The BOSS Media connects podcasters to advertisers and helps them to monetize their podcasts through advertisements"
          }
        />
        <meta
          key="twitter:description"
          name="twitter:description"
          content={
            "The BOSS Media connects podcasters to advertisers and helps them to monetize their podcasts through advertisements"
          }
        />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
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
          <NavBarRes
            data-plasmic-name={"navBarRes"}
            data-plasmic-override={overrides.navBarRes}
            className={classNames("__wab_instance", sty.navBarRes)}
          />

          {(
            hasVariant(globalVariants, "screen", "mobileOnly") ? true : true
          ) ? (
            <div
              data-plasmic-name={"podcastersApproved"}
              data-plasmic-override={overrides.podcastersApproved}
              className={classNames(projectcss.all, sty.podcastersApproved)}
            >
              <PodcasterSplash1
                data-plasmic-name={"podcasterSplash1"}
                data-plasmic-override={overrides.podcasterSplash1}
                className={classNames("__wab_instance", sty.podcasterSplash1)}
              />

              <PodcasterVideo2
                data-plasmic-name={"podcasterVideo2"}
                data-plasmic-override={overrides.podcasterVideo2}
                className={classNames("__wab_instance", sty.podcasterVideo2)}
              />

              <PodcasterWhyboss3
                data-plasmic-name={"podcasterWhyboss3"}
                data-plasmic-override={overrides.podcasterWhyboss3}
                className={classNames("__wab_instance", sty.podcasterWhyboss3)}
              />

              <PodcasterBrandslist4
                data-plasmic-name={"podcasterBrandslist4"}
                data-plasmic-override={overrides.podcasterBrandslist4}
                className={classNames(
                  "__wab_instance",
                  sty.podcasterBrandslist4
                )}
              />

              <PodcasterPerks5
                data-plasmic-name={"podcasterPerks5"}
                data-plasmic-override={overrides.podcasterPerks5}
                className={classNames("__wab_instance", sty.podcasterPerks5)}
              />

              <PodcasterServices6
                data-plasmic-name={"podcasterServices6"}
                data-plasmic-override={overrides.podcasterServices6}
                className={classNames("__wab_instance", sty.podcasterServices6)}
              />

              <PodcasterForm
                data-plasmic-name={"podcasterForm"}
                data-plasmic-override={overrides.podcasterForm}
                className={classNames("__wab_instance", sty.podcasterForm)}
              />
            </div>
          ) : null}

          <FooterComDesk
            data-plasmic-name={"footerComDesk"}
            data-plasmic-override={overrides.footerComDesk}
            className={classNames("__wab_instance", sty.footerComDesk)}
          />
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "navBarRes",
    "podcastersApproved",
    "podcasterSplash1",
    "podcasterVideo2",
    "podcasterWhyboss3",
    "podcasterBrandslist4",
    "podcasterPerks5",
    "podcasterServices6",
    "podcasterForm",
    "footerComDesk"
  ],
  navBarRes: ["navBarRes"],
  podcastersApproved: [
    "podcastersApproved",
    "podcasterSplash1",
    "podcasterVideo2",
    "podcasterWhyboss3",
    "podcasterBrandslist4",
    "podcasterPerks5",
    "podcasterServices6",
    "podcasterForm"
  ],
  podcasterSplash1: ["podcasterSplash1"],
  podcasterVideo2: ["podcasterVideo2"],
  podcasterWhyboss3: ["podcasterWhyboss3"],
  podcasterBrandslist4: ["podcasterBrandslist4"],
  podcasterPerks5: ["podcasterPerks5"],
  podcasterServices6: ["podcasterServices6"],
  podcasterForm: ["podcasterForm"],
  footerComDesk: ["footerComDesk"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  navBarRes: typeof NavBarRes;
  podcastersApproved: "div";
  podcasterSplash1: typeof PodcasterSplash1;
  podcasterVideo2: typeof PodcasterVideo2;
  podcasterWhyboss3: typeof PodcasterWhyboss3;
  podcasterBrandslist4: typeof PodcasterBrandslist4;
  podcasterPerks5: typeof PodcasterPerks5;
  podcasterServices6: typeof PodcasterServices6;
  podcasterForm: typeof PodcasterForm;
  footerComDesk: typeof FooterComDesk;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicPodcasters__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicPodcasters__VariantsArgs;
    args?: PlasmicPodcasters__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicPodcasters__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicPodcasters__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicPodcasters__ArgProps,
          internalVariantPropNames: PlasmicPodcasters__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicPodcasters__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPodcasters";
  } else {
    func.displayName = `PlasmicPodcasters.${nodeName}`;
  }
  return func;
}

export const PlasmicPodcasters = Object.assign(
  // Top-level PlasmicPodcasters renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    navBarRes: makeNodeComponent("navBarRes"),
    podcastersApproved: makeNodeComponent("podcastersApproved"),
    podcasterSplash1: makeNodeComponent("podcasterSplash1"),
    podcasterVideo2: makeNodeComponent("podcasterVideo2"),
    podcasterWhyboss3: makeNodeComponent("podcasterWhyboss3"),
    podcasterBrandslist4: makeNodeComponent("podcasterBrandslist4"),
    podcasterPerks5: makeNodeComponent("podcasterPerks5"),
    podcasterServices6: makeNodeComponent("podcasterServices6"),
    podcasterForm: makeNodeComponent("podcasterForm"),
    footerComDesk: makeNodeComponent("footerComDesk"),

    // Metadata about props expected for PlasmicPodcasters
    internalVariantProps: PlasmicPodcasters__VariantProps,
    internalArgProps: PlasmicPodcasters__ArgProps
  }
);

export default PlasmicPodcasters;
/* prettier-ignore-end */
