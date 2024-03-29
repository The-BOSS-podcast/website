// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: sx3ERcdAG6itf9PoNvoQTY
// Component: wVcmaRVYZ7_
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
import Forbes30U3 from "../../Forbes30U3"; // plasmic-import: xWD27F545h/component

import { useScreenVariants as useScreenVariantsjp7EaCu1Pi8YJ } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: Jp7eaCu1Pi8yJ/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_the_boss_web_s.module.css"; // plasmic-import: sx3ERcdAG6itf9PoNvoQTY/projectcss
import sty from "./PlasmicGuestsForbes2.module.css"; // plasmic-import: wVcmaRVYZ7_/css

export type PlasmicGuestsForbes2__VariantMembers = {};

export type PlasmicGuestsForbes2__VariantsArgs = {};
type VariantPropType = keyof PlasmicGuestsForbes2__VariantsArgs;
export const PlasmicGuestsForbes2__VariantProps = new Array<VariantPropType>();

export type PlasmicGuestsForbes2__ArgsType = {};
type ArgPropType = keyof PlasmicGuestsForbes2__ArgsType;
export const PlasmicGuestsForbes2__ArgProps = new Array<ArgPropType>();

export type PlasmicGuestsForbes2__OverridesType = {
  root?: p.Flex<"div">;
  sectionHeading?: p.Flex<typeof SectionHeading>;
  freeBox?: p.Flex<"div">;
  frame266?: p.Flex<"div">;
  kuku?: p.Flex<typeof Forbes30U3>;
};

export interface DefaultGuestsForbes2Props {
  className?: string;
}

function PlasmicGuestsForbes2__RenderFunc(props: {
  variants: PlasmicGuestsForbes2__VariantsArgs;
  args: PlasmicGuestsForbes2__ArgsType;
  overrides: PlasmicGuestsForbes2__OverridesType;

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
            sty.text___631Hh
          )}
        >
          {"Forbes 30 Under 30"}
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
              sty.text__uvFuz
            )}
          >
            {"Our Forbes 30 Under 30 Guests"}
          </div>
        </div>
      ) : null}

      <p.Stack
        as={"div"}
        data-plasmic-name={"frame266"}
        data-plasmic-override={overrides.frame266}
        hasGap={true}
        className={classNames(projectcss.all, sty.frame266)}
      >
        <Forbes30U3
          data-plasmic-name={"kuku"}
          data-plasmic-override={overrides.kuku}
          bg={
            <p.PlasmicImg
              alt={""}
              className={classNames(sty.img__kTyqn)}
              displayHeight={"auto" as const}
              displayMaxHeight={"none" as const}
              displayMaxWidth={"105%" as const}
              displayMinHeight={"0" as const}
              displayMinWidth={"0" as const}
              displayWidth={"auto" as const}
              loading={"lazy" as const}
              src={{
                src: "/plasmic/the_boss_web_s/images/lalChandBisuKukuFMjpg2.jpeg",
                fullWidth: 1065,
                fullHeight: 1902,
                aspectRatio: undefined
              }}
            />
          }
          brand={"Kuku FM"}
          brandLogo={
            <p.PlasmicImg
              alt={""}
              className={classNames(sty.img__vuTl1)}
              displayHeight={"4rem" as const}
              displayMaxHeight={"none" as const}
              displayMaxWidth={"100%" as const}
              displayMinHeight={"0" as const}
              displayMinWidth={"0" as const}
              displayWidth={"auto" as const}
              loading={"lazy" as const}
              src={{
                src: "/plasmic/the_boss_web_s/images/kukujpg.jpeg",
                fullWidth: 3000,
                fullHeight: 3000,
                aspectRatio: undefined
              }}
            />
          }
          className={classNames("__wab_instance", sty.kuku)}
          name={"Lal Chand Bisu"}
        >
          <p.Stack
            as={p.PlasmicLink}
            hasGap={true}
            className={classNames(
              projectcss.all,
              projectcss.a,
              sty.link__dso2Y
            )}
            component={Link}
            href={
              "https://open.spotify.com/episode/0pGJWVLqmCBGmQhvFmhTso?si=cgk7Ifs2SRyX7Vr0gF6uAA" as const
            }
            platform={"nextjs"}
            target={"_blank" as const}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__jpL15
              )}
            >
              {"Go to Episode"}
            </div>
          </p.Stack>
        </Forbes30U3>

        <Forbes30U3
          bg={
            <p.PlasmicImg
              alt={""}
              className={classNames(sty.img___2036)}
              displayHeight={"auto" as const}
              displayMaxHeight={"none" as const}
              displayMaxWidth={"105%" as const}
              displayMinHeight={"0" as const}
              displayMinWidth={"0" as const}
              displayWidth={"auto" as const}
              loading={"lazy" as const}
              src={{
                src: "/plasmic/the_boss_web_s/images/chiragDeyoRjpg.jpeg",
                fullWidth: 1065,
                fullHeight: 1902,
                aspectRatio: undefined
              }}
            />
          }
          brand={
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__snOqm
              )}
            >
              {"Deyor Camps"}
            </div>
          }
          brandLogo={
            <p.PlasmicImg
              alt={""}
              className={classNames(sty.img__fP4Q)}
              displayHeight={"4rem" as const}
              displayMaxHeight={"none" as const}
              displayMaxWidth={"100%" as const}
              displayMinHeight={"0" as const}
              displayMinWidth={"0" as const}
              displayWidth={"auto" as const}
              loading={"lazy" as const}
              src={{
                src: "/plasmic/the_boss_web_s/images/deyorjpg.jpeg",
                fullWidth: 360,
                fullHeight: 360,
                aspectRatio: undefined
              }}
            />
          }
          className={classNames("__wab_instance", sty.forbes30U3___24J1J)}
          name={"Chirag"}
        >
          <p.Stack
            as={p.PlasmicLink}
            hasGap={true}
            className={classNames(projectcss.all, projectcss.a, sty.link__lWGK)}
            component={Link}
            href={
              "https://open.spotify.com/episode/1X2fFZ2LDP0djWCpriXGI9?si=rJABLNX-T46XKQ26YStoKQ" as const
            }
            platform={"nextjs"}
            target={"_blank" as const}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__yBflz
              )}
            >
              {"Go to Episode"}
            </div>
          </p.Stack>
        </Forbes30U3>

        <Forbes30U3
          brand={"HXKart"}
          brandLogo={
            <p.PlasmicImg
              alt={""}
              className={classNames(sty.img__w9ZtC)}
              displayHeight={"4rem" as const}
              displayMaxHeight={"none" as const}
              displayMaxWidth={"100%" as const}
              displayMinHeight={"0" as const}
              displayMinWidth={"0" as const}
              displayWidth={"auto" as const}
              loading={"lazy" as const}
              src={{
                src: "/plasmic/the_boss_web_s/images/hxkartpng.png",
                fullWidth: 225,
                fullHeight: 225,
                aspectRatio: undefined
              }}
            />
          }
          className={classNames("__wab_instance", sty.forbes30U3__wmAod)}
          name={"Satanik"}
        >
          <p.Stack
            as={p.PlasmicLink}
            hasGap={true}
            className={classNames(
              projectcss.all,
              projectcss.a,
              sty.link__spesl
            )}
            component={Link}
            href={
              "https://open.spotify.com/episode/7m8J95TXUbqmRnpIj7kWWl?si=ixdy7WiXTvu8MpgCtYSOvA" as const
            }
            platform={"nextjs"}
            target={"_blank" as const}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__lf7Ke
              )}
            >
              {"Go to Episode"}
            </div>
          </p.Stack>
        </Forbes30U3>

        <Forbes30U3
          bg={
            <p.PlasmicImg
              alt={""}
              className={classNames(sty.img__vmVPk)}
              displayHeight={"auto" as const}
              displayMaxHeight={"none" as const}
              displayMaxWidth={"105%" as const}
              displayMinHeight={"0" as const}
              displayMinWidth={"0" as const}
              displayWidth={"auto" as const}
              loading={"lazy" as const}
              src={{
                src: "/plasmic/the_boss_web_s/images/nidhiPantS4Sjpg.jpeg",
                fullWidth: 1065,
                fullHeight: 1902,
                aspectRatio: undefined
              }}
            />
          }
          brand={"S4S Technologies"}
          brandLogo={
            <p.PlasmicImg
              alt={""}
              className={classNames(sty.img__nxEOj)}
              displayHeight={"4rem" as const}
              displayMaxHeight={"none" as const}
              displayMaxWidth={"100%" as const}
              displayMinHeight={"0" as const}
              displayMinWidth={"0" as const}
              displayWidth={"auto" as const}
              loading={"lazy" as const}
              src={{
                src: "/plasmic/the_boss_web_s/images/s4Sjpg.jpeg",
                fullWidth: 197,
                fullHeight: 197,
                aspectRatio: undefined
              }}
            />
          }
          className={classNames("__wab_instance", sty.forbes30U3__qpzjl)}
          name={
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__ouX2S
              )}
            >
              {"Nidhi Pant"}
            </div>
          }
        >
          <p.Stack
            as={p.PlasmicLink}
            hasGap={true}
            className={classNames(
              projectcss.all,
              projectcss.a,
              sty.link__tuRgr
            )}
            component={Link}
            href={
              "https://open.spotify.com/episode/2zdxIXhpAbZLSbZJVxtBgt?si=0k_QkZd1SF6nrYcYzIS5zA" as const
            }
            platform={"nextjs"}
            target={"_blank" as const}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__rw1Vc
              )}
            >
              {"Go to Episode"}
            </div>
          </p.Stack>
        </Forbes30U3>

        <Forbes30U3
          bg={
            <p.PlasmicImg
              alt={""}
              className={classNames(sty.img__vZVjl)}
              displayHeight={"auto" as const}
              displayMaxHeight={"none" as const}
              displayMaxWidth={"105%" as const}
              displayMinHeight={"0" as const}
              displayMinWidth={"0" as const}
              displayWidth={"auto" as const}
              loading={"lazy" as const}
              src={{
                src: "/plasmic/the_boss_web_s/images/sudarshanRaviLetsTransporTjpg.jpeg",
                fullWidth: 1065,
                fullHeight: 1902,
                aspectRatio: undefined
              }}
            />
          }
          brand={"Let's Transport"}
          brandLogo={
            <p.PlasmicImg
              alt={""}
              className={classNames(sty.img__c8DGq)}
              displayHeight={"4rem" as const}
              displayMaxHeight={"none" as const}
              displayMaxWidth={"100%" as const}
              displayMinHeight={"0" as const}
              displayMinWidth={"0" as const}
              displayWidth={"auto" as const}
              loading={"lazy" as const}
              src={{
                src: "/plasmic/the_boss_web_s/images/letstransportpng2.png",
                fullWidth: 292,
                fullHeight: 292,
                aspectRatio: undefined
              }}
            />
          }
          className={classNames("__wab_instance", sty.forbes30U3___7CSsl)}
          name={"Sudarshan Ravi"}
        >
          <p.Stack
            as={p.PlasmicLink}
            hasGap={true}
            className={classNames(
              projectcss.all,
              projectcss.a,
              sty.link__jjTn0
            )}
            component={Link}
            href={
              "https://open.spotify.com/episode/3qOCfjq0jD7rkS958HGgJa?si=b67KJOqiR4qXaqYvqa4vWA" as const
            }
            platform={"nextjs"}
            target={"_blank" as const}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__mU0XX
              )}
            >
              {"Go to Episode"}
            </div>
          </p.Stack>
        </Forbes30U3>
      </p.Stack>
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "sectionHeading", "freeBox", "frame266", "kuku"],
  sectionHeading: ["sectionHeading"],
  freeBox: ["freeBox"],
  frame266: ["frame266", "kuku"],
  kuku: ["kuku"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  sectionHeading: typeof SectionHeading;
  freeBox: "div";
  frame266: "div";
  kuku: typeof Forbes30U3;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicGuestsForbes2__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicGuestsForbes2__VariantsArgs;
    args?: PlasmicGuestsForbes2__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicGuestsForbes2__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicGuestsForbes2__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicGuestsForbes2__ArgProps,
          internalVariantPropNames: PlasmicGuestsForbes2__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicGuestsForbes2__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicGuestsForbes2";
  } else {
    func.displayName = `PlasmicGuestsForbes2.${nodeName}`;
  }
  return func;
}

export const PlasmicGuestsForbes2 = Object.assign(
  // Top-level PlasmicGuestsForbes2 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    sectionHeading: makeNodeComponent("sectionHeading"),
    freeBox: makeNodeComponent("freeBox"),
    frame266: makeNodeComponent("frame266"),
    kuku: makeNodeComponent("kuku"),

    // Metadata about props expected for PlasmicGuestsForbes2
    internalVariantProps: PlasmicGuestsForbes2__VariantProps,
    internalArgProps: PlasmicGuestsForbes2__ArgProps
  }
);

export default PlasmicGuestsForbes2;
/* prettier-ignore-end */
