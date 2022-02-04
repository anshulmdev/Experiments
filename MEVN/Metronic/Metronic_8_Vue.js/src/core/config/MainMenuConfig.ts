const DocMenuConfig: object = [
  {
    pages: [
      {
        heading: "dashboard",
        route: "/dashboard",
        svgIcon: "media/icons/duotone/Design/PenAndRuller.svg",
        fontIcon: "bi-app-indicator"
      },
      {
        heading: "layoutBuilder",
        route: "/builder",
        svgIcon: "media/icons/duotone/Interface/Settings-02.svg",
        fontIcon: "bi-layers"
      }
    ]
  },
  {
    heading: "craft",
    route: "/crafted",
    pages: [
      {
        sectionTitle: "pages",
        route: "/pages",
        svgIcon: "media/icons/duotone/Code/Compiling.svg",
        fontIcon: "bi-archive",
        sub: [
          {
            sectionTitle: "profile",
            route: "/profile",
            sub: [
              {
                heading: "profileOverview",
                route: "/crafted/pages/profile/overview"
              },
              {
                heading: "projects",
                route: "/crafted/pages/profile/projects"
              },
              {
                heading: "campaigns",
                route: "/crafted/pages/profile/campaigns"
              },
              {
                heading: "documents",
                route: "/crafted/pages/profile/documents"
              },
              {
                heading: "connections",
                route: "/crafted/pages/profile/connections"
              }
            ]
          },
          {
            sectionTitle: "wizards",
            route: "/wizard",
            sub: [
              {
                heading: "horizontal",
                route: "/crafted/pages/wizards/horizontal"
              },
              {
                heading: "vertical",
                route: "/crafted/pages/wizards/vertical"
              }
            ]
          }
        ]
      },
      {
        sectionTitle: "account",
        route: "/account",
        svgIcon: "media/icons/duotone/General/User.svg",
        fontIcon: "bi-person",
        sub: [
          {
            heading: "accountOverview",
            route: "/crafted/account/overview"
          },
          {
            heading: "settings",
            route: "/crafted/account/settings"
          }
        ]
      },
      {
        sectionTitle: "authentication",
        svgIcon: "media/icons/duotone/Interface/Lock.svg",
        fontIcon: "bi-sticky",
        sub: [
          {
            sectionTitle: "basicFlow",
            sub: [
              {
                heading: "signIn",
                route: "/sign-in"
              },
              {
                heading: "signUp",
                route: "/sign-up"
              },
              {
                heading: "passwordReset",
                route: "/password-reset"
              }
            ]
          },
          {
            heading: "error404",
            route: "/404"
          },
          {
            heading: "error500",
            route: "/500"
          }
        ]
      }
    ]
  },
  {
    heading: "apps",
    route: "/apps",
    pages: [
      {
        sectionTitle: "chat",
        route: "/chat",
        svgIcon: "media/icons/duotone/Communication/Group-chat.svg",
        fontIcon: "bi-chat-left",
        sub: [
          {
            heading: "privateChat",
            route: "/apps/chat/private-chat"
          },
          {
            heading: "groupChat",
            route: "/apps/chat/group-chat"
          },
          {
            heading: "drawerChat",
            route: "/apps/chat/drawer-chat"
          }
        ]
      }
    ]
  }
];

export default DocMenuConfig;
