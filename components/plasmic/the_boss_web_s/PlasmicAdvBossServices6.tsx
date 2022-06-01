// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: sx3ERcdAG6itf9PoNvoQTY
// Component: OtHg8lnc482
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

import { useScreenVariants as useScreenVariantsjp7EaCu1Pi8YJ } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: Jp7eaCu1Pi8yJ/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_the_boss_web_s.module.css"; // plasmic-import: sx3ERcdAG6itf9PoNvoQTY/projectcss
import sty from "./PlasmicAdvBossServices6.module.css"; // plasmic-import: OtHg8lnc482/css

import _26MixerIcon from "./icons/PlasmicIcon___26Mixer"; // plasmic-import: 5bgq_DZLf/icon
import Group3Icon from "./icons/PlasmicIcon__Group3"; // plasmic-import: f6fO5QmWCe/icon
import _28PodcastIcon from "./icons/PlasmicIcon___28Podcast"; // plasmic-import: Keook0Tn5ZA/icon
import Group4Icon from "./icons/PlasmicIcon__Group4"; // plasmic-import: jL3qpsJfhll/icon
import Ellipse1Icon from "./icons/PlasmicIcon__Ellipse1"; // plasmic-import: peyoGk09smg/icon

export type PlasmicAdvBossServices6__VariantMembers = {};

export type PlasmicAdvBossServices6__VariantsArgs = {};
type VariantPropType = keyof PlasmicAdvBossServices6__VariantsArgs;
export const PlasmicAdvBossServices6__VariantProps =
  new Array<VariantPropType>();

export type PlasmicAdvBossServices6__ArgsType = {};
type ArgPropType = keyof PlasmicAdvBossServices6__ArgsType;
export const PlasmicAdvBossServices6__ArgProps = new Array<ArgPropType>();

export type PlasmicAdvBossServices6__OverridesType = {
  root?: p.Flex<"div">;
  sectionHeading?: p.Flex<typeof SectionHeading>;
  frame85?: p.Flex<"div">;
  frame86?: p.Flex<"div">;
  frame83?: p.Flex<"div">;
  nounMixerPodcastProd?: p.Flex<"div">;
  frame84?: p.Flex<"div">;
  frame87?: p.Flex<"div">;
  frame88?: p.Flex<"div">;
  nounPodcastPodcastAdv?: p.Flex<"div">;
  frame89?: p.Flex<"div">;
  frame90?: p.Flex<"div">;
  frame91?: p.Flex<"div">;
  nounPodcastGuestFeature?: p.Flex<"div">;
  frame92?: p.Flex<"div">;
  frame93?: p.Flex<"div">;
  frame94?: p.Flex<"div">;
  nounCustomizeCustomService1?: p.Flex<"div">;
  frame95?: p.Flex<"div">;
  columns?: p.Flex<"div">;
  frame12?: p.Flex<"div">;
  frame281?: p.Flex<"div">;
  frame96?: p.Flex<"div">;
  frame283?: p.Flex<"div">;
  frame97?: p.Flex<"div">;
  frame284?: p.Flex<"div">;
  frame14?: p.Flex<"div">;
  frame282?: p.Flex<"div">;
  btn5?: p.Flex<"a"> & Partial<LinkProps>;
};

export interface DefaultAdvBossServices6Props {
  className?: string;
}

export const defaultAdvBossServices6__Args: Partial<PlasmicAdvBossServices6__ArgsType> =
  {};

function PlasmicAdvBossServices6__RenderFunc(props: {
  variants: PlasmicAdvBossServices6__VariantsArgs;
  args: PlasmicAdvBossServices6__ArgsType;
  overrides: PlasmicAdvBossServices6__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const args = Object.assign({}, defaultAdvBossServices6__Args, props.args);
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
        {hasVariant(globalVariants, "screen", "mobileOnly")
          ? "What BOSS offers"
          : "What BOSS Offers"}
      </SectionHeading>

      {true ? (
        <div className={classNames(projectcss.all, sty.freeBox___49Czf)}>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text___2ElZm
            )}
          >
            {"The BOSS is your one-stop podcasting solution"}
          </div>
        </div>
      ) : null}

      <p.Stack
        as={"div"}
        data-plasmic-name={"frame85"}
        data-plasmic-override={overrides.frame85}
        hasGap={true}
        className={classNames(projectcss.all, sty.frame85)}
      >
        <div className={classNames(projectcss.all, sty.column__fq6ZC)}>
          <p.Stack
            as={"div"}
            data-plasmic-name={"frame86"}
            data-plasmic-override={overrides.frame86}
            hasGap={true}
            className={classNames(projectcss.all, sty.frame86)}
          >
            <div
              data-plasmic-name={"frame83"}
              data-plasmic-override={overrides.frame83}
              className={classNames(projectcss.all, sty.frame83)}
            >
              <div
                data-plasmic-name={"nounMixerPodcastProd"}
                data-plasmic-override={overrides.nounMixerPodcastProd}
                className={classNames(projectcss.all, sty.nounMixerPodcastProd)}
              >
                <_26MixerIcon
                  className={classNames(projectcss.all, sty.svg___1ERzU)}
                  role={"img"}
                />
              </div>
            </div>

            <p.Stack
              as={"div"}
              data-plasmic-name={"frame84"}
              data-plasmic-override={overrides.frame84}
              hasGap={true}
              className={classNames(projectcss.all, sty.frame84)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__pqNzm
                )}
              >
                {"Podcast Production"}
              </div>

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___3XWjG
                )}
              >
                {
                  "The BOSS Media renders an end-to-end podcast production service beginning from concept conceptualizing to distributing and marketing content."
                }
              </div>
            </p.Stack>
          </p.Stack>
        </div>

        <div className={classNames(projectcss.all, sty.column__aMpQx)}>
          <p.Stack
            as={"div"}
            data-plasmic-name={"frame87"}
            data-plasmic-override={overrides.frame87}
            hasGap={true}
            className={classNames(projectcss.all, sty.frame87)}
          >
            <div
              data-plasmic-name={"frame88"}
              data-plasmic-override={overrides.frame88}
              className={classNames(projectcss.all, sty.frame88)}
            >
              <div
                data-plasmic-name={"nounPodcastPodcastAdv"}
                data-plasmic-override={overrides.nounPodcastPodcastAdv}
                className={classNames(
                  projectcss.all,
                  sty.nounPodcastPodcastAdv
                )}
              >
                <Group3Icon
                  className={classNames(projectcss.all, sty.svg___9DekT)}
                  role={"img"}
                />
              </div>
            </div>

            <p.Stack
              as={"div"}
              data-plasmic-name={"frame89"}
              data-plasmic-override={overrides.frame89}
              hasGap={true}
              className={classNames(projectcss.all, sty.frame89)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__s73
                )}
              >
                {"Podcast Advertising & Marketing"}
              </div>

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__s2GfP
                )}
              >
                {
                  "The BOSS Media helps podcasters to reach the right advertisers to monetize their podcasts"
                }
              </div>
            </p.Stack>
          </p.Stack>
        </div>

        <div className={classNames(projectcss.all, sty.column__oPdPq)}>
          <p.Stack
            as={"div"}
            data-plasmic-name={"frame90"}
            data-plasmic-override={overrides.frame90}
            hasGap={true}
            className={classNames(projectcss.all, sty.frame90)}
          >
            <div
              data-plasmic-name={"frame91"}
              data-plasmic-override={overrides.frame91}
              className={classNames(projectcss.all, sty.frame91)}
            >
              <div
                data-plasmic-name={"nounPodcastGuestFeature"}
                data-plasmic-override={overrides.nounPodcastGuestFeature}
                className={classNames(
                  projectcss.all,
                  sty.nounPodcastGuestFeature
                )}
              >
                <_28PodcastIcon
                  className={classNames(projectcss.all, sty.svg__vOgKz)}
                  role={"img"}
                />
              </div>
            </div>

            <p.Stack
              as={"div"}
              data-plasmic-name={"frame92"}
              data-plasmic-override={overrides.frame92}
              hasGap={true}
              className={classNames(projectcss.all, sty.frame92)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___7N28K
                )}
              >
                {"Guest Featuring"}
              </div>

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__mlay6
                )}
              >
                {
                  "The BOSS Media caters to guest acquisition, guest management and handling in different domains"
                }
              </div>
            </p.Stack>
          </p.Stack>
        </div>

        <div className={classNames(projectcss.all, sty.column__hkNus)}>
          <p.Stack
            as={"div"}
            data-plasmic-name={"frame93"}
            data-plasmic-override={overrides.frame93}
            hasGap={true}
            className={classNames(projectcss.all, sty.frame93)}
          >
            <div
              data-plasmic-name={"frame94"}
              data-plasmic-override={overrides.frame94}
              className={classNames(projectcss.all, sty.frame94)}
            >
              <div
                data-plasmic-name={"nounCustomizeCustomService1"}
                data-plasmic-override={overrides.nounCustomizeCustomService1}
                className={classNames(
                  projectcss.all,
                  sty.nounCustomizeCustomService1
                )}
              >
                <Group4Icon
                  className={classNames(projectcss.all, sty.svg__nkdm9)}
                  role={"img"}
                />
              </div>
            </div>

            <p.Stack
              as={"div"}
              data-plasmic-name={"frame95"}
              data-plasmic-override={overrides.frame95}
              hasGap={true}
              className={classNames(projectcss.all, sty.frame95)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__tCxK
                )}
              >
                {"Custom Podcast Service"}
              </div>

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___1GhCt
                )}
              >
                {
                  "The BOSS Media has specialized tailor cut custom podcast service that caters to the specific podcasting needs including seasonal and special edition episodes."
                }
              </div>
            </p.Stack>
          </p.Stack>
        </div>
      </p.Stack>

      {true ? (
        <div className={classNames(projectcss.all, sty.freeBox__quLnP)}>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__ojP2J
            )}
          >
            {"The BOSS Benefits"}
          </div>
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
          <div className={classNames(projectcss.all, sty.column___0DeSo)}>
            <p.Stack
              as={"div"}
              data-plasmic-name={"frame12"}
              data-plasmic-override={overrides.frame12}
              hasGap={true}
              className={classNames(projectcss.all, sty.frame12)}
            >
              <div
                data-plasmic-name={"frame281"}
                data-plasmic-override={overrides.frame281}
                className={classNames(projectcss.all, sty.frame281)}
              >
                <Ellipse1Icon
                  className={classNames(projectcss.all, sty.svg__m7ShR)}
                  role={"img"}
                />

                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__sFyEs)}
                  displayHeight={"36px" as const}
                  displayMaxHeight={"none" as const}
                  displayMaxWidth={"100%" as const}
                  displayMinHeight={"0" as const}
                  displayMinWidth={"0" as const}
                  displayWidth={"26px" as const}
                  loading={"lazy" as const}
                  src={{
                    src: "/plasmic/the_boss_web_s/images/emoji5.svg",
                    fullWidth: 26,
                    fullHeight: 36,
                    aspectRatio: 0.722222
                  }}
                />
              </div>

              {true ? (
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__abKmB)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___1S37R
                    )}
                  >
                    {"BOSS Certified"}
                  </div>

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___4LNZi
                    )}
                  >
                    {"Advertise only on authentic\nBOSS-certified podcasts"}
                  </div>
                </p.Stack>
              ) : null}
            </p.Stack>
          </div>

          <div className={classNames(projectcss.all, sty.column___4YFsF)}>
            <p.Stack
              as={"div"}
              data-plasmic-name={"frame96"}
              data-plasmic-override={overrides.frame96}
              hasGap={true}
              className={classNames(projectcss.all, sty.frame96)}
            >
              <div
                data-plasmic-name={"frame283"}
                data-plasmic-override={overrides.frame283}
                className={classNames(projectcss.all, sty.frame283)}
              >
                <Ellipse1Icon
                  className={classNames(projectcss.all, sty.svg__pbr27)}
                  role={"img"}
                />

                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img___9OP0)}
                  displayHeight={"36px" as const}
                  displayMaxHeight={"none" as const}
                  displayMaxWidth={"100%" as const}
                  displayMinHeight={"0" as const}
                  displayMinWidth={"0" as const}
                  displayWidth={"26px" as const}
                  loading={"lazy" as const}
                  src={{
                    src: "/plasmic/the_boss_web_s/images/emoji5.svg",
                    fullWidth: 26,
                    fullHeight: 36,
                    aspectRatio: 0.722222
                  }}
                />
              </div>

              {true ? (
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__epQDf)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__q6H8A
                    )}
                  >
                    {"150,000+ Downloads"}
                  </div>

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__zy9Ar
                    )}
                  >
                    {
                      "Our listeners love us as evident\nfrom our monthly downloads"
                    }
                  </div>
                </p.Stack>
              ) : null}
            </p.Stack>
          </div>

          <div className={classNames(projectcss.all, sty.column__mjRIw)}>
            <p.Stack
              as={"div"}
              data-plasmic-name={"frame97"}
              data-plasmic-override={overrides.frame97}
              hasGap={true}
              className={classNames(projectcss.all, sty.frame97)}
            >
              <div
                data-plasmic-name={"frame284"}
                data-plasmic-override={overrides.frame284}
                className={classNames(projectcss.all, sty.frame284)}
              >
                <Ellipse1Icon
                  className={classNames(projectcss.all, sty.svg___22R4E)}
                  role={"img"}
                />

                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__mkjuK)}
                  displayHeight={"36px" as const}
                  displayMaxHeight={"none" as const}
                  displayMaxWidth={"100%" as const}
                  displayMinHeight={"0" as const}
                  displayMinWidth={"0" as const}
                  displayWidth={"26px" as const}
                  loading={"lazy" as const}
                  src={{
                    src: "/plasmic/the_boss_web_s/images/emoji5.svg",
                    fullWidth: 26,
                    fullHeight: 36,
                    aspectRatio: 0.722222
                  }}
                />
              </div>

              {true ? (
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__y6AnM)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__tFsKv
                    )}
                  >
                    {"Cross Platform Ads"}
                  </div>

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__wSj8Z
                    )}
                  >
                    {"Spread your business across\nseveral channels"}
                  </div>
                </p.Stack>
              ) : null}
            </p.Stack>
          </div>

          <div className={classNames(projectcss.all, sty.column__tmJy1)}>
            <p.Stack
              as={"div"}
              data-plasmic-name={"frame14"}
              data-plasmic-override={overrides.frame14}
              hasGap={true}
              className={classNames(projectcss.all, sty.frame14)}
            >
              <div
                data-plasmic-name={"frame282"}
                data-plasmic-override={overrides.frame282}
                className={classNames(projectcss.all, sty.frame282)}
              >
                <Ellipse1Icon
                  className={classNames(projectcss.all, sty.svg__ztTu)}
                  role={"img"}
                />

                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__t660A)}
                  displayHeight={"36px" as const}
                  displayMaxHeight={"none" as const}
                  displayMaxWidth={"100%" as const}
                  displayMinHeight={"0" as const}
                  displayMinWidth={"0" as const}
                  displayWidth={"26px" as const}
                  loading={"lazy" as const}
                  src={{
                    src: "/plasmic/the_boss_web_s/images/emoji5.svg",
                    fullWidth: 26,
                    fullHeight: 36,
                    aspectRatio: 0.722222
                  }}
                />
              </div>

              {true ? (
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__y6Px7)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___6HScC
                    )}
                  >
                    {"50+ Podcasts"}
                  </div>

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___44NzK
                    )}
                  >
                    {
                      "With over 50 podcasts on board,\nBOSS is set to help you grow"
                    }
                  </div>
                </p.Stack>
              ) : null}
            </p.Stack>
          </div>
        </p.Stack>
      ) : null}

      <p.Stack
        as={p.PlasmicLink}
        data-plasmic-name={"btn5"}
        data-plasmic-override={overrides.btn5}
        hasGap={true}
        className={classNames(projectcss.all, projectcss.a, sty.btn5)}
        component={Link}
        href={"#advertiser-form" as const}
        platform={"nextjs"}
      >
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__gucKe
          )}
        >
          {"Start Advertising"}
        </div>
      </p.Stack>
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "sectionHeading",
    "frame85",
    "frame86",
    "frame83",
    "nounMixerPodcastProd",
    "frame84",
    "frame87",
    "frame88",
    "nounPodcastPodcastAdv",
    "frame89",
    "frame90",
    "frame91",
    "nounPodcastGuestFeature",
    "frame92",
    "frame93",
    "frame94",
    "nounCustomizeCustomService1",
    "frame95",
    "columns",
    "frame12",
    "frame281",
    "frame96",
    "frame283",
    "frame97",
    "frame284",
    "frame14",
    "frame282",
    "btn5"
  ],
  sectionHeading: ["sectionHeading"],
  frame85: [
    "frame85",
    "frame86",
    "frame83",
    "nounMixerPodcastProd",
    "frame84",
    "frame87",
    "frame88",
    "nounPodcastPodcastAdv",
    "frame89",
    "frame90",
    "frame91",
    "nounPodcastGuestFeature",
    "frame92",
    "frame93",
    "frame94",
    "nounCustomizeCustomService1",
    "frame95"
  ],
  frame86: ["frame86", "frame83", "nounMixerPodcastProd", "frame84"],
  frame83: ["frame83", "nounMixerPodcastProd"],
  nounMixerPodcastProd: ["nounMixerPodcastProd"],
  frame84: ["frame84"],
  frame87: ["frame87", "frame88", "nounPodcastPodcastAdv", "frame89"],
  frame88: ["frame88", "nounPodcastPodcastAdv"],
  nounPodcastPodcastAdv: ["nounPodcastPodcastAdv"],
  frame89: ["frame89"],
  frame90: ["frame90", "frame91", "nounPodcastGuestFeature", "frame92"],
  frame91: ["frame91", "nounPodcastGuestFeature"],
  nounPodcastGuestFeature: ["nounPodcastGuestFeature"],
  frame92: ["frame92"],
  frame93: ["frame93", "frame94", "nounCustomizeCustomService1", "frame95"],
  frame94: ["frame94", "nounCustomizeCustomService1"],
  nounCustomizeCustomService1: ["nounCustomizeCustomService1"],
  frame95: ["frame95"],
  columns: [
    "columns",
    "frame12",
    "frame281",
    "frame96",
    "frame283",
    "frame97",
    "frame284",
    "frame14",
    "frame282"
  ],
  frame12: ["frame12", "frame281"],
  frame281: ["frame281"],
  frame96: ["frame96", "frame283"],
  frame283: ["frame283"],
  frame97: ["frame97", "frame284"],
  frame284: ["frame284"],
  frame14: ["frame14", "frame282"],
  frame282: ["frame282"],
  btn5: ["btn5"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  sectionHeading: typeof SectionHeading;
  frame85: "div";
  frame86: "div";
  frame83: "div";
  nounMixerPodcastProd: "div";
  frame84: "div";
  frame87: "div";
  frame88: "div";
  nounPodcastPodcastAdv: "div";
  frame89: "div";
  frame90: "div";
  frame91: "div";
  nounPodcastGuestFeature: "div";
  frame92: "div";
  frame93: "div";
  frame94: "div";
  nounCustomizeCustomService1: "div";
  frame95: "div";
  columns: "div";
  frame12: "div";
  frame281: "div";
  frame96: "div";
  frame283: "div";
  frame97: "div";
  frame284: "div";
  frame14: "div";
  frame282: "div";
  btn5: "a";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicAdvBossServices6__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicAdvBossServices6__VariantsArgs;
    args?: PlasmicAdvBossServices6__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicAdvBossServices6__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicAdvBossServices6__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicAdvBossServices6__ArgProps,
      internalVariantPropNames: PlasmicAdvBossServices6__VariantProps
    });

    return PlasmicAdvBossServices6__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicAdvBossServices6";
  } else {
    func.displayName = `PlasmicAdvBossServices6.${nodeName}`;
  }
  return func;
}

export const PlasmicAdvBossServices6 = Object.assign(
  // Top-level PlasmicAdvBossServices6 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    sectionHeading: makeNodeComponent("sectionHeading"),
    frame85: makeNodeComponent("frame85"),
    frame86: makeNodeComponent("frame86"),
    frame83: makeNodeComponent("frame83"),
    nounMixerPodcastProd: makeNodeComponent("nounMixerPodcastProd"),
    frame84: makeNodeComponent("frame84"),
    frame87: makeNodeComponent("frame87"),
    frame88: makeNodeComponent("frame88"),
    nounPodcastPodcastAdv: makeNodeComponent("nounPodcastPodcastAdv"),
    frame89: makeNodeComponent("frame89"),
    frame90: makeNodeComponent("frame90"),
    frame91: makeNodeComponent("frame91"),
    nounPodcastGuestFeature: makeNodeComponent("nounPodcastGuestFeature"),
    frame92: makeNodeComponent("frame92"),
    frame93: makeNodeComponent("frame93"),
    frame94: makeNodeComponent("frame94"),
    nounCustomizeCustomService1: makeNodeComponent(
      "nounCustomizeCustomService1"
    ),
    frame95: makeNodeComponent("frame95"),
    columns: makeNodeComponent("columns"),
    frame12: makeNodeComponent("frame12"),
    frame281: makeNodeComponent("frame281"),
    frame96: makeNodeComponent("frame96"),
    frame283: makeNodeComponent("frame283"),
    frame97: makeNodeComponent("frame97"),
    frame284: makeNodeComponent("frame284"),
    frame14: makeNodeComponent("frame14"),
    frame282: makeNodeComponent("frame282"),
    btn5: makeNodeComponent("btn5"),

    // Metadata about props expected for PlasmicAdvBossServices6
    internalVariantProps: PlasmicAdvBossServices6__VariantProps,
    internalArgProps: PlasmicAdvBossServices6__ArgProps
  }
);

export default PlasmicAdvBossServices6;
/* prettier-ignore-end */