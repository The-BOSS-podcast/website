// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: sx3ERcdAG6itf9PoNvoQTY
// Component: BhtAgFo43V
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
import HomeSplash1 from "../../HomeSplash1"; // plasmic-import: RjiAS_vB3Q/component
import HomeVideo2 from "../../HomeVideo2"; // plasmic-import: 6a0Fa8t-p98/component
import HomeBrands3 from "../../HomeBrands3"; // plasmic-import: gFaoKwtgdUx/component
import HomeBlog4 from "../../HomeBlog4"; // plasmic-import: bBxIZnMVjAi/component
import HomeValue5 from "../../HomeValue5"; // plasmic-import: fuEyF9DLZnO/component
import FooterComDesk from "../../FooterComDesk"; // plasmic-import: H9tCPDoO68/component

import { useScreenVariants as useScreenVariantsjp7EaCu1Pi8YJ } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: Jp7eaCu1Pi8yJ/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_the_boss_web_s.module.css"; // plasmic-import: sx3ERcdAG6itf9PoNvoQTY/projectcss
import sty from "./PlasmicHome.module.css"; // plasmic-import: BhtAgFo43V/css

export type PlasmicHome__VariantMembers = {};

export type PlasmicHome__VariantsArgs = {};
type VariantPropType = keyof PlasmicHome__VariantsArgs;
export const PlasmicHome__VariantProps = new Array<VariantPropType>();

export type PlasmicHome__ArgsType = {};
type ArgPropType = keyof PlasmicHome__ArgsType;
export const PlasmicHome__ArgProps = new Array<ArgPropType>();

export type PlasmicHome__OverridesType = {
  root?: p.Flex<"div">;
  navBarRes?: p.Flex<typeof NavBarRes>;
  landingLatest?: p.Flex<"div">;
  homeSplash1?: p.Flex<typeof HomeSplash1>;
  homeVideo2?: p.Flex<typeof HomeVideo2>;
  homeBrands3?: p.Flex<typeof HomeBrands3>;
  homeBlog4?: p.Flex<typeof HomeBlog4>;
  homeValue5?: p.Flex<typeof HomeValue5>;
  freeBox?: p.Flex<"div">;
  group14?: p.Flex<"div">;
  btn10?: p.Flex<"a"> & Partial<LinkProps>;
  footerComDesk?: p.Flex<typeof FooterComDesk>;
};

export interface DefaultHomeProps {}

export const defaultHome__Args: Partial<PlasmicHome__ArgsType> = {};

function PlasmicHome__RenderFunc(props: {
  variants: PlasmicHome__VariantsArgs;
  args: PlasmicHome__ArgsType;
  overrides: PlasmicHome__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const args = Object.assign({}, defaultHome__Args, props.args);
  const $props = args;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsjp7EaCu1Pi8YJ()
  });

  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
        <title key="title">{"The Balls of Steel Show"}</title>
        <meta
          key="og:title"
          property="og:title"
          content={"The Balls of Steel Show"}
        />
        <meta
          key="description"
          property="og:description"
          name="description"
          content={
            "The BOSS Media is a new age platform that connects podcasters and advertisers"
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
              data-plasmic-name={"landingLatest"}
              data-plasmic-override={overrides.landingLatest}
              className={classNames(projectcss.all, sty.landingLatest)}
            >
              <HomeSplash1
                data-plasmic-name={"homeSplash1"}
                data-plasmic-override={overrides.homeSplash1}
                className={classNames("__wab_instance", sty.homeSplash1)}
              />

              <HomeVideo2
                data-plasmic-name={"homeVideo2"}
                data-plasmic-override={overrides.homeVideo2}
                className={classNames("__wab_instance", sty.homeVideo2)}
              />

              <HomeBrands3
                data-plasmic-name={"homeBrands3"}
                data-plasmic-override={overrides.homeBrands3}
                className={classNames("__wab_instance", sty.homeBrands3)}
              />

              <HomeBlog4
                data-plasmic-name={"homeBlog4"}
                data-plasmic-override={overrides.homeBlog4}
                className={classNames("__wab_instance", sty.homeBlog4)}
              />

              <HomeValue5
                data-plasmic-name={"homeValue5"}
                data-plasmic-override={overrides.homeValue5}
                className={classNames("__wab_instance", sty.homeValue5)}
              />

              <div
                data-plasmic-name={"freeBox"}
                data-plasmic-override={overrides.freeBox}
                className={classNames(projectcss.all, sty.freeBox)}
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
                      sty.text__vwJnB
                    )}
                  >
                    {"Do you want to create your own podcast show?"}
                  </div>

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__kpOrL
                    )}
                  >
                    {"We make the best of them. We can help you too."}
                  </div>

                  <p.Stack
                    as={p.PlasmicLink}
                    data-plasmic-name={"btn10"}
                    data-plasmic-override={overrides.btn10}
                    hasGap={true}
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      sty.btn10
                    )}
                    component={Link}
                    href={"/production" as const}
                    platform={"nextjs"}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__rAkuz
                      )}
                    >
                      <React.Fragment>
                        <React.Fragment>{""}</React.Fragment>
                        <span
                          className={
                            "plasmic_default__all plasmic_default__span"
                          }
                          style={{ fontWeight: 700 }}
                        >
                          {"See How"}
                        </span>
                        <React.Fragment>{""}</React.Fragment>
                      </React.Fragment>
                    </div>
                  </p.Stack>
                </p.Stack>
              </div>
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
    "landingLatest",
    "homeSplash1",
    "homeVideo2",
    "homeBrands3",
    "homeBlog4",
    "homeValue5",
    "freeBox",
    "group14",
    "btn10",
    "footerComDesk"
  ],
  navBarRes: ["navBarRes"],
  landingLatest: [
    "landingLatest",
    "homeSplash1",
    "homeVideo2",
    "homeBrands3",
    "homeBlog4",
    "homeValue5",
    "freeBox",
    "group14",
    "btn10"
  ],
  homeSplash1: ["homeSplash1"],
  homeVideo2: ["homeVideo2"],
  homeBrands3: ["homeBrands3"],
  homeBlog4: ["homeBlog4"],
  homeValue5: ["homeValue5"],
  freeBox: ["freeBox", "group14", "btn10"],
  group14: ["group14", "btn10"],
  btn10: ["btn10"],
  footerComDesk: ["footerComDesk"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  navBarRes: typeof NavBarRes;
  landingLatest: "div";
  homeSplash1: typeof HomeSplash1;
  homeVideo2: typeof HomeVideo2;
  homeBrands3: typeof HomeBrands3;
  homeBlog4: typeof HomeBlog4;
  homeValue5: typeof HomeValue5;
  freeBox: "div";
  group14: "div";
  btn10: "a";
  footerComDesk: typeof FooterComDesk;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHome__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHome__VariantsArgs;
    args?: PlasmicHome__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHome__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicHome__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicHome__ArgProps,
      internalVariantPropNames: PlasmicHome__VariantProps
    });

    return PlasmicHome__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHome";
  } else {
    func.displayName = `PlasmicHome.${nodeName}`;
  }
  return func;
}

export const PlasmicHome = Object.assign(
  // Top-level PlasmicHome renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    navBarRes: makeNodeComponent("navBarRes"),
    landingLatest: makeNodeComponent("landingLatest"),
    homeSplash1: makeNodeComponent("homeSplash1"),
    homeVideo2: makeNodeComponent("homeVideo2"),
    homeBrands3: makeNodeComponent("homeBrands3"),
    homeBlog4: makeNodeComponent("homeBlog4"),
    homeValue5: makeNodeComponent("homeValue5"),
    freeBox: makeNodeComponent("freeBox"),
    group14: makeNodeComponent("group14"),
    btn10: makeNodeComponent("btn10"),
    footerComDesk: makeNodeComponent("footerComDesk"),

    // Metadata about props expected for PlasmicHome
    internalVariantProps: PlasmicHome__VariantProps,
    internalArgProps: PlasmicHome__ArgProps
  }
);

export default PlasmicHome;
/* prettier-ignore-end */