import AppLogo from "./assets/icons/app-logo.svg";
import Official from "./assets/icons/official.svg";
import Twitter from "./assets/icons/twitter.svg";
import LinkedIn from "./assets/icons/linkedin.svg";
import Medium from "./assets/icons/medium.svg";
import GitHub from "./assets/icons/github.svg";

const config = {
  logoUrl: AppLogo,
  favicon: "../favicon.ico",
  title: "Intract",
  description:
    "A Comprehensive Suite of Web3 Marketing & Community Engagement Products",
  links: [
    {
      key: "official",
      label: "Official Website",
      iconUrl: Official,
      redirectUrl: "https://www.intract.io/",
    },
    {
      key: "twitter",
      label: "Twitter",
      iconUrl: Twitter,
      redirectUrl: "https://twitter.com/IntractBuzz",
    },
    {
      key: "linkedin",
      label: "LinkedIn",
      iconUrl: LinkedIn,
      redirectUrl: "https://www.linkedin.com/company/intract-buzz/",
    },
     {
       "key": "medium",
       "label": "Medium",
       "iconUrl": Medium,
       "redirectUrl": "https://medium.com/@intractweb3",
     },
    {
      key: "github",
      label: "GitHub",
      iconUrl: GitHub,
      redirectUrl: "https://github.com/intract-web3/",
    },
  ],
};


export default config;
