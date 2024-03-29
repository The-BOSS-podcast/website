// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: sx3ERcdAG6itf9PoNvoQTY
// Component: XtniKcAigz7
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
import Showcase5Slots from "../../Showcase5Slots"; // plasmic-import: 6I24HxHuiGC/component

import { useScreenVariants as useScreenVariantsjp7EaCu1Pi8YJ } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: Jp7eaCu1Pi8yJ/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_the_boss_web_s.module.css"; // plasmic-import: sx3ERcdAG6itf9PoNvoQTY/projectcss
import sty from "./PlasmicAdvOnboard5.module.css"; // plasmic-import: XtniKcAigz7/css

import Emoji7Icon from "./icons/PlasmicIcon__Emoji7"; // plasmic-import: wo39UeYtK5z/icon
import CategoryIcon from "./icons/PlasmicIcon__Category"; // plasmic-import: UBgMQLpvULL/icon
import Emoji9Icon from "./icons/PlasmicIcon__Emoji9"; // plasmic-import: T9btll2y6_L/icon

export type PlasmicAdvOnboard5__VariantMembers = {};

export type PlasmicAdvOnboard5__VariantsArgs = {};
type VariantPropType = keyof PlasmicAdvOnboard5__VariantsArgs;
export const PlasmicAdvOnboard5__VariantProps = new Array<VariantPropType>();

export type PlasmicAdvOnboard5__ArgsType = {};
type ArgPropType = keyof PlasmicAdvOnboard5__ArgsType;
export const PlasmicAdvOnboard5__ArgProps = new Array<ArgPropType>();

export type PlasmicAdvOnboard5__OverridesType = {
  root?: p.Flex<"div">;
  sectionHeading?: p.Flex<typeof SectionHeading>;
  showcase5Slots?: p.Flex<typeof Showcase5Slots>;
  frame133?: p.Flex<"div">;
  group15?: p.Flex<"div">;
  frame77?: p.Flex<"div">;
  btnCtaPrimary?: p.Flex<"a"> & Partial<LinkProps>;
  frame43?: p.Flex<"div">;
  frame168?: p.Flex<"div">;
  frame171?: p.Flex<"div">;
  frame169?: p.Flex<"div">;
  frame170?: p.Flex<"div">;
  frame167?: p.Flex<"div">;
  frame172?: p.Flex<"div">;
  img?: p.Flex<typeof p.PlasmicImg>;
  frame166?: p.Flex<"div">;
  frame173?: p.Flex<"div">;
};

export interface DefaultAdvOnboard5Props {
  className?: string;
}

function PlasmicAdvOnboard5__RenderFunc(props: {
  variants: PlasmicAdvOnboard5__VariantsArgs;
  args: PlasmicAdvOnboard5__ArgsType;
  overrides: PlasmicAdvOnboard5__OverridesType;

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
            sty.text__wq7Q5
          )}
        >
          {"Podcasts On Board"}
        </div>
      </SectionHeading>

      {true ? (
        <div className={classNames(projectcss.all, sty.freeBox__kN1Ws)}>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__r26Fo
            )}
          >
            {"Top Podcasts Where You Can Advertise"}
          </div>
        </div>
      ) : null}

      <Showcase5Slots
        data-plasmic-name={"showcase5Slots"}
        data-plasmic-override={overrides.showcase5Slots}
        className={classNames("__wab_instance", sty.showcase5Slots)}
      />

      {true ? (
        <div className={classNames(projectcss.all, sty.freeBox__boc81)}>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__gZz4P
            )}
          >
            {"...and many more."}
          </div>
        </div>
      ) : null}

      <div
        data-plasmic-name={"frame133"}
        data-plasmic-override={overrides.frame133}
        className={classNames(projectcss.all, sty.frame133)}
      >
        <p.Stack
          as={"div"}
          data-plasmic-name={"group15"}
          data-plasmic-override={overrides.group15}
          hasGap={true}
          className={classNames(projectcss.all, sty.group15)}
        >
          <div
            data-plasmic-name={"frame77"}
            data-plasmic-override={overrides.frame77}
            className={classNames(projectcss.all, sty.frame77)}
          />

          {true ? (
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox___9Y3Af)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__fWlJz
                )}
              >
                {"The Balls Of Steel Show"}
              </div>

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__oGxhP
                )}
              >
                {"Sarthak Varshney"}
              </div>

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__rQPf2
                )}
              >
                {
                  "The Balls Of Steel Show is a celebration of unheard entrepreneurial journeys and unique business mindsets of every entrepreneur who took a leap of faith for their business idea."
                }
              </div>
            </p.Stack>
          ) : null}
        </p.Stack>

        {true ? (
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__kwFlq)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__zcrfy
              )}
            >
              {"The BOSS being one of them!"}
            </div>

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
                  sty.text__trat4
                )}
              >
                {"Go to Podcast"}
              </div>
            </p.Stack>
          </p.Stack>
        ) : null}
      </div>

      {true ? (
        <div className={classNames(projectcss.all, sty.freeBox__wK0U)}>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__sTfM0
            )}
            id={"boss-services" as const}
          >
            {"Choose Podcasts Based on Your Criteria"}
          </div>
        </div>
      ) : null}

      <p.Stack
        as={"div"}
        data-plasmic-name={"frame43"}
        data-plasmic-override={overrides.frame43}
        hasGap={true}
        className={classNames(projectcss.all, sty.frame43)}
      >
        <div className={classNames(projectcss.all, sty.column__m4StN)}>
          <p.Stack
            as={"div"}
            data-plasmic-name={"frame168"}
            data-plasmic-override={overrides.frame168}
            hasGap={true}
            className={classNames(projectcss.all, sty.frame168)}
          >
            <div className={classNames(projectcss.all, sty.freeBox__ntDjU)}>
              <div
                data-plasmic-name={"frame171"}
                data-plasmic-override={overrides.frame171}
                className={classNames(projectcss.all, sty.frame171)}
              >
                <Emoji7Icon
                  className={classNames(projectcss.all, sty.svg__at2In)}
                  role={"img"}
                />
              </div>
            </div>

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__ea0C
              )}
            >
              {"Pricing"}
            </div>
          </p.Stack>
        </div>

        <div className={classNames(projectcss.all, sty.column__otqlx)}>
          <p.Stack
            as={"div"}
            data-plasmic-name={"frame169"}
            data-plasmic-override={overrides.frame169}
            hasGap={true}
            className={classNames(projectcss.all, sty.frame169)}
          >
            <div className={classNames(projectcss.all, sty.freeBox__ef711)}>
              <div
                data-plasmic-name={"frame170"}
                data-plasmic-override={overrides.frame170}
                className={classNames(projectcss.all, sty.frame170)}
              >
                <CategoryIcon
                  className={classNames(projectcss.all, sty.svg__qLVxj)}
                  role={"img"}
                />
              </div>
            </div>

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__ifYlc
              )}
            >
              {"Genre"}
            </div>
          </p.Stack>
        </div>

        <div className={classNames(projectcss.all, sty.column__mXgR2)}>
          <p.Stack
            as={"div"}
            data-plasmic-name={"frame167"}
            data-plasmic-override={overrides.frame167}
            hasGap={true}
            className={classNames(projectcss.all, sty.frame167)}
          >
            <div className={classNames(projectcss.all, sty.freeBox__ly0Ip)}>
              <div
                data-plasmic-name={"frame172"}
                data-plasmic-override={overrides.frame172}
                className={classNames(projectcss.all, sty.frame172)}
              >
                <p.PlasmicImg
                  data-plasmic-name={"img"}
                  data-plasmic-override={overrides.img}
                  alt={""}
                  className={classNames(sty.img)}
                  displayHeight={"32.34px" as const}
                  displayMaxHeight={"none" as const}
                  displayMaxWidth={"100%" as const}
                  displayMinHeight={"0" as const}
                  displayMinWidth={"0" as const}
                  displayWidth={"32px" as const}
                  loading={"lazy" as const}
                  src={{
                    src: "/plasmic/the_boss_web_s/images/emoji8.svg",
                    fullWidth: 32,
                    fullHeight: 32.34,
                    aspectRatio: 0.969697
                  }}
                />
              </div>
            </div>

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__vbKK
              )}
            >
              {"Demographics"}
            </div>
          </p.Stack>
        </div>

        <div className={classNames(projectcss.all, sty.column___22QpN)}>
          <p.Stack
            as={"div"}
            data-plasmic-name={"frame166"}
            data-plasmic-override={overrides.frame166}
            hasGap={true}
            className={classNames(projectcss.all, sty.frame166)}
          >
            <div className={classNames(projectcss.all, sty.freeBox__d5NUf)}>
              <div
                data-plasmic-name={"frame173"}
                data-plasmic-override={overrides.frame173}
                className={classNames(projectcss.all, sty.frame173)}
              >
                <Emoji9Icon
                  className={classNames(projectcss.all, sty.svg__kHcl)}
                  role={"img"}
                />
              </div>
            </div>

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__hEoGo
              )}
            >
              {"User Interest"}
            </div>
          </p.Stack>
        </div>
      </p.Stack>
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "sectionHeading",
    "showcase5Slots",
    "frame133",
    "group15",
    "frame77",
    "btnCtaPrimary",
    "frame43",
    "frame168",
    "frame171",
    "frame169",
    "frame170",
    "frame167",
    "frame172",
    "img",
    "frame166",
    "frame173"
  ],
  sectionHeading: ["sectionHeading"],
  showcase5Slots: ["showcase5Slots"],
  frame133: ["frame133", "group15", "frame77", "btnCtaPrimary"],
  group15: ["group15", "frame77"],
  frame77: ["frame77"],
  btnCtaPrimary: ["btnCtaPrimary"],
  frame43: [
    "frame43",
    "frame168",
    "frame171",
    "frame169",
    "frame170",
    "frame167",
    "frame172",
    "img",
    "frame166",
    "frame173"
  ],
  frame168: ["frame168", "frame171"],
  frame171: ["frame171"],
  frame169: ["frame169", "frame170"],
  frame170: ["frame170"],
  frame167: ["frame167", "frame172", "img"],
  frame172: ["frame172", "img"],
  img: ["img"],
  frame166: ["frame166", "frame173"],
  frame173: ["frame173"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  sectionHeading: typeof SectionHeading;
  showcase5Slots: typeof Showcase5Slots;
  frame133: "div";
  group15: "div";
  frame77: "div";
  btnCtaPrimary: "a";
  frame43: "div";
  frame168: "div";
  frame171: "div";
  frame169: "div";
  frame170: "div";
  frame167: "div";
  frame172: "div";
  img: typeof p.PlasmicImg;
  frame166: "div";
  frame173: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicAdvOnboard5__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicAdvOnboard5__VariantsArgs;
    args?: PlasmicAdvOnboard5__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicAdvOnboard5__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicAdvOnboard5__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicAdvOnboard5__ArgProps,
          internalVariantPropNames: PlasmicAdvOnboard5__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicAdvOnboard5__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicAdvOnboard5";
  } else {
    func.displayName = `PlasmicAdvOnboard5.${nodeName}`;
  }
  return func;
}

export const PlasmicAdvOnboard5 = Object.assign(
  // Top-level PlasmicAdvOnboard5 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    sectionHeading: makeNodeComponent("sectionHeading"),
    showcase5Slots: makeNodeComponent("showcase5Slots"),
    frame133: makeNodeComponent("frame133"),
    group15: makeNodeComponent("group15"),
    frame77: makeNodeComponent("frame77"),
    btnCtaPrimary: makeNodeComponent("btnCtaPrimary"),
    frame43: makeNodeComponent("frame43"),
    frame168: makeNodeComponent("frame168"),
    frame171: makeNodeComponent("frame171"),
    frame169: makeNodeComponent("frame169"),
    frame170: makeNodeComponent("frame170"),
    frame167: makeNodeComponent("frame167"),
    frame172: makeNodeComponent("frame172"),
    img: makeNodeComponent("img"),
    frame166: makeNodeComponent("frame166"),
    frame173: makeNodeComponent("frame173"),

    // Metadata about props expected for PlasmicAdvOnboard5
    internalVariantProps: PlasmicAdvOnboard5__VariantProps,
    internalArgProps: PlasmicAdvOnboard5__ArgProps
  }
);

export default PlasmicAdvOnboard5;
/* prettier-ignore-end */
