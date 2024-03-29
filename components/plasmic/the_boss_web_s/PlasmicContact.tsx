// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: sx3ERcdAG6itf9PoNvoQTY
// Component: 3MgMg6duLd
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
import ContactForm from "../../ContactForm"; // plasmic-import: ddBSeZgqRjx/component
import FooterComDesk from "../../FooterComDesk"; // plasmic-import: H9tCPDoO68/component

import { useScreenVariants as useScreenVariantsjp7EaCu1Pi8YJ } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: Jp7eaCu1Pi8yJ/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_the_boss_web_s.module.css"; // plasmic-import: sx3ERcdAG6itf9PoNvoQTY/projectcss
import sty from "./PlasmicContact.module.css"; // plasmic-import: 3MgMg6duLd/css

import Linkedin2Icon from "./icons/PlasmicIcon__Linkedin2"; // plasmic-import: B4AUiPndJ/icon
import InstagramIcon from "./icons/PlasmicIcon__Instagram"; // plasmic-import: mDJiLuH7jC/icon
import Youtube2Icon from "./icons/PlasmicIcon__Youtube2"; // plasmic-import: Fiy4K4JX4j/icon
import Twitter2Icon from "./icons/PlasmicIcon__Twitter2"; // plasmic-import: efHAuvjeBd/icon
import Facebook2Icon from "./icons/PlasmicIcon__Facebook2"; // plasmic-import: cTWyBErGxn/icon

export type PlasmicContact__VariantMembers = {};

export type PlasmicContact__VariantsArgs = {};
type VariantPropType = keyof PlasmicContact__VariantsArgs;
export const PlasmicContact__VariantProps = new Array<VariantPropType>();

export type PlasmicContact__ArgsType = {};
type ArgPropType = keyof PlasmicContact__ArgsType;
export const PlasmicContact__ArgProps = new Array<ArgPropType>();

export type PlasmicContact__OverridesType = {
  root?: p.Flex<"div">;
  navBarRes?: p.Flex<typeof NavBarRes>;
  contactApproved?: p.Flex<"div">;
  frame310?: p.Flex<"div">;
  group43?: p.Flex<"div">;
  frame29?: p.Flex<"div">;
  group44?: p.Flex<"div">;
  contactForm?: p.Flex<typeof ContactForm>;
  footerComDesk?: p.Flex<typeof FooterComDesk>;
};

export interface DefaultContactProps {}

function PlasmicContact__RenderFunc(props: {
  variants: PlasmicContact__VariantsArgs;
  args: PlasmicContact__ArgsType;
  overrides: PlasmicContact__OverridesType;

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
        <title key="title">{"Contact The BOSS"}</title>
        <meta key="og:title" property="og:title" content={"Contact The BOSS"} />
        <meta
          key="twitter:title"
          name="twitter:title"
          content={"Contact The BOSS"}
        />
        <meta
          key="description"
          name="description"
          content={
            "Want to monetize your podcast or want to advertise your brand on podcasts? Connect with us to fulfil all your podcast monetization needs.\n"
          }
        />
        <meta
          key="og:description"
          property="og:description"
          content={
            "Want to monetize your podcast or want to advertise your brand on podcasts? Connect with us to fulfil all your podcast monetization needs.\n"
          }
        />
        <meta
          key="twitter:description"
          name="twitter:description"
          content={
            "Want to monetize your podcast or want to advertise your brand on podcasts? Connect with us to fulfil all your podcast monetization needs.\n"
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
              data-plasmic-name={"contactApproved"}
              data-plasmic-override={overrides.contactApproved}
              className={classNames(projectcss.all, sty.contactApproved)}
            >
              {true ? (
                <div className={classNames(projectcss.all, sty.freeBox__m1B4Z)}>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__iDdK6
                    )}
                  >
                    {"contact the BOSS"}
                  </div>
                </div>
              ) : null}
              {true ? (
                <div className={classNames(projectcss.all, sty.freeBox___4TBG)}>
                  {true ? (
                    <p.Stack
                      as={"div"}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.freeBox__xa9K6)}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__tzRw7
                        )}
                      >
                        {"getting in touch is easy"}
                      </div>

                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__w5DhE
                        )}
                      >
                        {
                          "Kindly fill the given form and we’ll get back to you super quick!"
                        }
                      </div>

                      <p.Stack
                        as={"div"}
                        data-plasmic-name={"frame310"}
                        data-plasmic-override={overrides.frame310}
                        hasGap={true}
                        className={classNames(projectcss.all, sty.frame310)}
                      >
                        <p.Stack
                          as={"div"}
                          data-plasmic-name={"group43"}
                          data-plasmic-override={overrides.group43}
                          hasGap={true}
                          className={classNames(projectcss.all, sty.group43)}
                        >
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__sD5EE
                            )}
                          >
                            {"social links"}
                          </div>

                          <p.Stack
                            as={"div"}
                            data-plasmic-name={"frame29"}
                            data-plasmic-override={overrides.frame29}
                            hasGap={true}
                            className={classNames(projectcss.all, sty.frame29)}
                          >
                            {true ? (
                              <p.PlasmicLink
                                className={classNames(
                                  projectcss.all,
                                  projectcss.a,
                                  sty.link__hvnlE
                                )}
                                component={Link}
                                href={
                                  "https://www.linkedin.com/company/the-balls-of-steel-show/" as const
                                }
                                platform={"nextjs"}
                                target={"_blank" as const}
                              >
                                <Linkedin2Icon
                                  className={classNames(
                                    projectcss.all,
                                    sty.svg___8MsU
                                  )}
                                  role={"img"}
                                />
                              </p.PlasmicLink>
                            ) : null}
                            {true ? (
                              <p.PlasmicLink
                                className={classNames(
                                  projectcss.all,
                                  projectcss.a,
                                  sty.link__kMlr6
                                )}
                                component={Link}
                                href={
                                  "https://www.instagram.com/theballsofsteelshow/" as const
                                }
                                platform={"nextjs"}
                                target={"_blank" as const}
                              >
                                <InstagramIcon
                                  className={classNames(
                                    projectcss.all,
                                    sty.svg__tgXq4
                                  )}
                                  role={"img"}
                                />
                              </p.PlasmicLink>
                            ) : null}
                            {true ? (
                              <p.PlasmicLink
                                className={classNames(
                                  projectcss.all,
                                  projectcss.a,
                                  sty.link__p2Zc
                                )}
                                component={Link}
                                href={
                                  "https://www.youtube.com/channel/UCbg7GVJBxYvxPbIIHzGsSVg" as const
                                }
                                platform={"nextjs"}
                                target={"_blank" as const}
                              >
                                <Youtube2Icon
                                  className={classNames(
                                    projectcss.all,
                                    sty.svg__qIg9F
                                  )}
                                  role={"img"}
                                />
                              </p.PlasmicLink>
                            ) : null}
                            {true ? (
                              <p.PlasmicLink
                                className={classNames(
                                  projectcss.all,
                                  projectcss.a,
                                  sty.link__dwZYl
                                )}
                                component={Link}
                                href={
                                  "https://twitter.com/VarshneySaheb" as const
                                }
                                platform={"nextjs"}
                                target={"_blank" as const}
                              >
                                <Twitter2Icon
                                  className={classNames(
                                    projectcss.all,
                                    sty.svg__wSiIz
                                  )}
                                  role={"img"}
                                />
                              </p.PlasmicLink>
                            ) : null}
                            {true ? (
                              <p.PlasmicLink
                                className={classNames(
                                  projectcss.all,
                                  projectcss.a,
                                  sty.link__bK6Re
                                )}
                                component={Link}
                                href={
                                  "https://www.facebook.com/theballsofsteelshow/" as const
                                }
                                platform={"nextjs"}
                                target={"_blank" as const}
                              >
                                <Facebook2Icon
                                  className={classNames(
                                    projectcss.all,
                                    sty.svg__t273L
                                  )}
                                  role={"img"}
                                />
                              </p.PlasmicLink>
                            ) : null}
                          </p.Stack>
                        </p.Stack>

                        <p.Stack
                          as={"div"}
                          data-plasmic-name={"group44"}
                          data-plasmic-override={overrides.group44}
                          hasGap={true}
                          className={classNames(projectcss.all, sty.group44)}
                        >
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__en442
                            )}
                          >
                            {"mail us at"}
                          </div>

                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__khRRz
                            )}
                          >
                            {"contact@svclicks.in"}
                          </div>
                        </p.Stack>
                      </p.Stack>
                    </p.Stack>
                  ) : null}
                  {true ? (
                    <ContactForm
                      data-plasmic-name={"contactForm"}
                      data-plasmic-override={overrides.contactForm}
                      className={classNames("__wab_instance", sty.contactForm)}
                    />
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
    "contactApproved",
    "frame310",
    "group43",
    "frame29",
    "group44",
    "contactForm",
    "footerComDesk"
  ],
  navBarRes: ["navBarRes"],
  contactApproved: [
    "contactApproved",
    "frame310",
    "group43",
    "frame29",
    "group44",
    "contactForm"
  ],
  frame310: ["frame310", "group43", "frame29", "group44"],
  group43: ["group43", "frame29"],
  frame29: ["frame29"],
  group44: ["group44"],
  contactForm: ["contactForm"],
  footerComDesk: ["footerComDesk"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  navBarRes: typeof NavBarRes;
  contactApproved: "div";
  frame310: "div";
  group43: "div";
  frame29: "div";
  group44: "div";
  contactForm: typeof ContactForm;
  footerComDesk: typeof FooterComDesk;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicContact__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicContact__VariantsArgs;
    args?: PlasmicContact__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicContact__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicContact__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicContact__ArgProps,
          internalVariantPropNames: PlasmicContact__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicContact__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicContact";
  } else {
    func.displayName = `PlasmicContact.${nodeName}`;
  }
  return func;
}

export const PlasmicContact = Object.assign(
  // Top-level PlasmicContact renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    navBarRes: makeNodeComponent("navBarRes"),
    contactApproved: makeNodeComponent("contactApproved"),
    frame310: makeNodeComponent("frame310"),
    group43: makeNodeComponent("group43"),
    frame29: makeNodeComponent("frame29"),
    group44: makeNodeComponent("group44"),
    contactForm: makeNodeComponent("contactForm"),
    footerComDesk: makeNodeComponent("footerComDesk"),

    // Metadata about props expected for PlasmicContact
    internalVariantProps: PlasmicContact__VariantProps,
    internalArgProps: PlasmicContact__ArgProps
  }
);

export default PlasmicContact;
/* prettier-ignore-end */
