import {
  DynamicFormRounded,
  GppGoodRounded,
  SupportAgentRounded,
} from "@mui/icons-material";

export const PATHS_DATA = [
  {
    id: 0,
    path: "/",
    title: "Dashboard",
  },
  {
    id: 1,
    path: "/",
    title: "Login",
  },
  {
    id: 2,
    path: "/",
    title: "Wallet",
  },
  {
    id: 3,
    path: "/",
    title: "Exchange",
  },
  {
    id: 4,
    path: "/",
    title: "About Us",
  },
];
export const SERVICES_INFOS = [
  {
    id: 0,
    title: "Security & Privacy Guarantee",
    description:
      "We are committed to protecting your privacy and security. We use the latest technologies in web3.0 with the blockchain to ensure that your data is safe and secure.",
    icon: <GppGoodRounded color="primary" fontSize="large" />,
  },
  {
    id: 3,
    title: "Fast & Reliable",
    description:
      "Offering a fast and reliable service, we will provide you with the best experience possible.",
    icon: <DynamicFormRounded color="primary" fontSize="large" />,
  },
  {
    id: 1,
    title: "24/7 Support",
    description:
      "Our support team is always ready to help you with any questions you may have. We are available 24/7.",
    icon: <SupportAgentRounded color="primary" fontSize="large" />,
  },
];
