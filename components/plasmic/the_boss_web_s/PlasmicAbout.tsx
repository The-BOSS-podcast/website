// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: sx3ERcdAG6itf9PoNvoQTY
// Component: eBaz0qDc0f
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
import FooterComDesk from "../../FooterComDesk"; // plasmic-import: H9tCPDoO68/component

import { useScreenVariants as useScreenVariantsjp7EaCu1Pi8YJ } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: Jp7eaCu1Pi8yJ/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_the_boss_web_s.module.css"; // plasmic-import: sx3ERcdAG6itf9PoNvoQTY/projectcss
import sty from "./PlasmicAbout.module.css"; // plasmic-import: eBaz0qDc0f/css

export type PlasmicAbout__VariantMembers = {};

export type PlasmicAbout__VariantsArgs = {};
type VariantPropType = keyof PlasmicAbout__VariantsArgs;
export const PlasmicAbout__VariantProps = new Array<VariantPropType>();

export type PlasmicAbout__ArgsType = {};
type ArgPropType = keyof PlasmicAbout__ArgsType;
export const PlasmicAbout__ArgProps = new Array<ArgPropType>();

export type PlasmicAbout__OverridesType = {
  root?: p.Flex<"div">;
  navBarRes?: p.Flex<typeof NavBarRes>;
  about?: p.Flex<"div">;
  h1?: p.Flex<"h1">;
  columns?: p.Flex<"div">;
  frame356?: p.Flex<"div">;
  podcast2?: p.Flex<"div">;
  frame357?: p.Flex<"div">;
  btn?: p.Flex<"a"> & Partial<LinkProps>;
  frame359?: p.Flex<"div">;
  _151?: p.Flex<"div">;
  frame360?: p.Flex<"div">;
  btn2?: p.Flex<"a"> & Partial<LinkProps>;
  whileRunningOurPodcastTheBallsOfSteelShowDhandhoNiSochWeEncounteredSeveralProblemsWithPodcastMonetizationAdvertisementAndSponsorshipsSoThereWeWereBuildingOurBridgeToConnectTwoExtremeEnds?: p.Flex<"div">;
  footerComDesk?: p.Flex<typeof FooterComDesk>;
};

export interface DefaultAboutProps {}

export const defaultAbout__Args: Partial<PlasmicAbout__ArgsType> = {};

function PlasmicAbout__RenderFunc(props: {
  variants: PlasmicAbout__VariantsArgs;
  args: PlasmicAbout__ArgsType;
  overrides: PlasmicAbout__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const args = Object.assign({}, defaultAbout__Args, props.args);
  const $props = args;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsjp7EaCu1Pi8YJ()
  });

  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
        <title key="title">{"About The BOSS"}</title>
        <meta key="og:title" property="og:title" content={"About The BOSS"} />
        <meta
          key="description"
          property="og:description"
          name="description"
          content={
            "The BOSS Media monetizes podcasts by connecting podcasters to advertisers. They run their own business podcast, The Balls Of Steel Show – Dhandho Ni Soch"
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
              data-plasmic-name={"about"}
              data-plasmic-override={overrides.about}
              className={classNames(projectcss.all, sty.about)}
            >
              {true ? (
                <div className={classNames(projectcss.all, sty.freeBox__j2089)}>
                  <h1
                    data-plasmic-name={"h1"}
                    data-plasmic-override={overrides.h1}
                    className={classNames(
                      projectcss.all,
                      projectcss.h1,
                      projectcss.__wab_text,
                      sty.h1
                    )}
                  >
                    {"About The BOSS"}
                  </h1>
                </div>
              ) : null}
              {true ? (
                <p.Stack
                  as={"div"}
                  data-plasmic-name={"columns"}
                  data-plasmic-override={overrides.columns}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.columns)}
                >
                  <div
                    className={classNames(projectcss.all, sty.column__hfsX0)}
                  >
                    <p.Stack
                      as={"div"}
                      data-plasmic-name={"frame356"}
                      data-plasmic-override={overrides.frame356}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.frame356)}
                    >
                      <div
                        data-plasmic-name={"podcast2"}
                        data-plasmic-override={overrides.podcast2}
                        className={classNames(projectcss.all, sty.podcast2)}
                      />

                      <p.Stack
                        as={"div"}
                        data-plasmic-name={"frame357"}
                        data-plasmic-override={overrides.frame357}
                        hasGap={true}
                        className={classNames(projectcss.all, sty.frame357)}
                      >
                        <h3
                          className={classNames(
                            projectcss.all,
                            projectcss.h3,
                            projectcss.__wab_text,
                            sty.h3__aoPmp
                          )}
                        >
                          {"Listen to our Podcast"}
                        </h3>

                        <p.Stack
                          as={p.PlasmicLink}
                          data-plasmic-name={"btn"}
                          data-plasmic-override={overrides.btn}
                          hasGap={true}
                          className={classNames(
                            projectcss.all,
                            projectcss.a,
                            sty.btn
                          )}
                          component={Link}
                          href={"/podcast" as const}
                          platform={"nextjs"}
                        >
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__kreP
                            )}
                          >
                            {"Go to Podcast"}
                          </div>
                        </p.Stack>
                      </p.Stack>
                    </p.Stack>
                  </div>

                  <div
                    className={classNames(projectcss.all, sty.column__ejaQt)}
                  >
                    <p.Stack
                      as={"div"}
                      data-plasmic-name={"frame359"}
                      data-plasmic-override={overrides.frame359}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.frame359)}
                    >
                      <div
                        data-plasmic-name={"_151"}
                        data-plasmic-override={overrides._151}
                        className={classNames(projectcss.all, sty._151)}
                      />

                      <p.Stack
                        as={"div"}
                        data-plasmic-name={"frame360"}
                        data-plasmic-override={overrides.frame360}
                        hasGap={true}
                        className={classNames(projectcss.all, sty.frame360)}
                      >
                        <h3
                          className={classNames(
                            projectcss.all,
                            projectcss.h3,
                            projectcss.__wab_text,
                            sty.h3__bUiVp
                          )}
                        >
                          {"Visit our Content House"}
                        </h3>

                        <p.Stack
                          as={p.PlasmicLink}
                          data-plasmic-name={"btn2"}
                          data-plasmic-override={overrides.btn2}
                          hasGap={true}
                          className={classNames(
                            projectcss.all,
                            projectcss.a,
                            sty.btn2
                          )}
                          component={Link}
                          href={
                            "https://contenthouse.ballsofsteelshow.com" as const
                          }
                          platform={"nextjs"}
                          target={"_blank" as const}
                        >
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__ybFoW
                            )}
                          >
                            {"Visit Content House"}
                          </div>
                        </p.Stack>
                      </p.Stack>
                    </p.Stack>
                  </div>
                </p.Stack>
              ) : null}
              {true ? (
                <div className={classNames(projectcss.all, sty.freeBox__pQRjm)}>
                  {true ? (
                    <p.Stack
                      as={"div"}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.freeBox__ag16E)}
                    >
                      <h2
                        className={classNames(
                          projectcss.all,
                          projectcss.h2,
                          projectcss.__wab_text,
                          sty.h2__lLvKl
                        )}
                      >
                        {"How BOSS started?"}
                      </h2>

                      <div
                        data-plasmic-name={
                          "whileRunningOurPodcastTheBallsOfSteelShowDhandhoNiSochWeEncounteredSeveralProblemsWithPodcastMonetizationAdvertisementAndSponsorshipsSoThereWeWereBuildingOurBridgeToConnectTwoExtremeEnds"
                        }
                        data-plasmic-override={
                          overrides.whileRunningOurPodcastTheBallsOfSteelShowDhandhoNiSochWeEncounteredSeveralProblemsWithPodcastMonetizationAdvertisementAndSponsorshipsSoThereWeWereBuildingOurBridgeToConnectTwoExtremeEnds
                        }
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.whileRunningOurPodcastTheBallsOfSteelShowDhandhoNiSochWeEncounteredSeveralProblemsWithPodcastMonetizationAdvertisementAndSponsorshipsSoThereWeWereBuildingOurBridgeToConnectTwoExtremeEnds
                        )}
                      >
                        {
                          "While running our podcast, The Balls Of Steel Show – Dhandho Ni Soch, we encountered several problems with podcast monetization, advertisement and sponsorships. So, there we were, building our bridge to connect two extreme ends. "
                        }
                      </div>
                    </p.Stack>
                  ) : null}
                  {true ? (
                    <p.Stack
                      as={"div"}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.freeBox__jWc1H)}
                    >
                      <h2
                        className={classNames(
                          projectcss.all,
                          projectcss.h2,
                          projectcss.__wab_text,
                          sty.h2__mYZqa
                        )}
                      >
                        {"What we do"}
                      </h2>

                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__g4Px8
                        )}
                      >
                        {
                          "Empowering Podcasters by connecting them with Brands, The BOSS is filling the gap between podcast monetization and advertisement. Podcasters monetize their content and brands advertise for relevant audiences through The BOSS Bridge. \n\nThe Balls Of Steel Show also provides end-to-end podcasting services, beginning from conceptualization to distribution of branded podcasts. Through our podcast 'The Balls Of Steel Show - Dhandho Ni Soch', we’re bringing out the unheard stories of Indian entrepreneurs and their business mindset."
                        }
                      </div>
                    </p.Stack>
                  ) : null}
                </div>
              ) : null}
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
    "about",
    "h1",
    "columns",
    "frame356",
    "podcast2",
    "frame357",
    "btn",
    "frame359",
    "_151",
    "frame360",
    "btn2",
    "whileRunningOurPodcastTheBallsOfSteelShowDhandhoNiSochWeEncounteredSeveralProblemsWithPodcastMonetizationAdvertisementAndSponsorshipsSoThereWeWereBuildingOurBridgeToConnectTwoExtremeEnds",
    "footerComDesk"
  ],
  navBarRes: ["navBarRes"],
  about: [
    "about",
    "h1",
    "columns",
    "frame356",
    "podcast2",
    "frame357",
    "btn",
    "frame359",
    "_151",
    "frame360",
    "btn2",
    "whileRunningOurPodcastTheBallsOfSteelShowDhandhoNiSochWeEncounteredSeveralProblemsWithPodcastMonetizationAdvertisementAndSponsorshipsSoThereWeWereBuildingOurBridgeToConnectTwoExtremeEnds"
  ],
  h1: ["h1"],
  columns: [
    "columns",
    "frame356",
    "podcast2",
    "frame357",
    "btn",
    "frame359",
    "_151",
    "frame360",
    "btn2"
  ],
  frame356: ["frame356", "podcast2", "frame357", "btn"],
  podcast2: ["podcast2"],
  frame357: ["frame357", "btn"],
  btn: ["btn"],
  frame359: ["frame359", "_151", "frame360", "btn2"],
  _151: ["_151"],
  frame360: ["frame360", "btn2"],
  btn2: ["btn2"],
  whileRunningOurPodcastTheBallsOfSteelShowDhandhoNiSochWeEncounteredSeveralProblemsWithPodcastMonetizationAdvertisementAndSponsorshipsSoThereWeWereBuildingOurBridgeToConnectTwoExtremeEnds:
    [
      "whileRunningOurPodcastTheBallsOfSteelShowDhandhoNiSochWeEncounteredSeveralProblemsWithPodcastMonetizationAdvertisementAndSponsorshipsSoThereWeWereBuildingOurBridgeToConnectTwoExtremeEnds"
    ],
  footerComDesk: ["footerComDesk"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  navBarRes: typeof NavBarRes;
  about: "div";
  h1: "h1";
  columns: "div";
  frame356: "div";
  podcast2: "div";
  frame357: "div";
  btn: "a";
  frame359: "div";
  _151: "div";
  frame360: "div";
  btn2: "a";
  whileRunningOurPodcastTheBallsOfSteelShowDhandhoNiSochWeEncounteredSeveralProblemsWithPodcastMonetizationAdvertisementAndSponsorshipsSoThereWeWereBuildingOurBridgeToConnectTwoExtremeEnds: "div";
  footerComDesk: typeof FooterComDesk;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicAbout__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicAbout__VariantsArgs;
    args?: PlasmicAbout__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicAbout__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicAbout__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicAbout__ArgProps,
      internalVariantPropNames: PlasmicAbout__VariantProps
    });

    return PlasmicAbout__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicAbout";
  } else {
    func.displayName = `PlasmicAbout.${nodeName}`;
  }
  return func;
}

export const PlasmicAbout = Object.assign(
  // Top-level PlasmicAbout renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    navBarRes: makeNodeComponent("navBarRes"),
    about: makeNodeComponent("about"),
    h1: makeNodeComponent("h1"),
    columns: makeNodeComponent("columns"),
    frame356: makeNodeComponent("frame356"),
    podcast2: makeNodeComponent("podcast2"),
    frame357: makeNodeComponent("frame357"),
    btn: makeNodeComponent("btn"),
    frame359: makeNodeComponent("frame359"),
    _151: makeNodeComponent("_151"),
    frame360: makeNodeComponent("frame360"),
    btn2: makeNodeComponent("btn2"),
    whileRunningOurPodcastTheBallsOfSteelShowDhandhoNiSochWeEncounteredSeveralProblemsWithPodcastMonetizationAdvertisementAndSponsorshipsSoThereWeWereBuildingOurBridgeToConnectTwoExtremeEnds:
      makeNodeComponent(
        "whileRunningOurPodcastTheBallsOfSteelShowDhandhoNiSochWeEncounteredSeveralProblemsWithPodcastMonetizationAdvertisementAndSponsorshipsSoThereWeWereBuildingOurBridgeToConnectTwoExtremeEnds"
      ),
    footerComDesk: makeNodeComponent("footerComDesk"),

    // Metadata about props expected for PlasmicAbout
    internalVariantProps: PlasmicAbout__VariantProps,
    internalArgProps: PlasmicAbout__ArgProps
  }
);

export default PlasmicAbout;
/* prettier-ignore-end */
