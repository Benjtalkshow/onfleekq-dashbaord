import {
  CirclePlay,
  Clock2,
  Home,
  MessagesSquare,
  PieChart,
  Star,
  Wallet,
} from "lucide-react";

export const links = [
  { link: "Home", path: "/", icons: Home },
  { link: "Charts", path: "/chart", icons: PieChart },
  { link: "Feedback", path: "/feedback", icons: MessagesSquare },
  { link: "Wallet", path: "/wallet", icons: Wallet },
];

export const dashboardHeaderLinks = [
  { link: "Feedback", path: "/feedback" },
  { link: "Contact" },
  { link: "Help" },
];

export const littleCardData = [
  { title: "visitors", stat: "10,320" },
  { title: "customers", stat: "4,628" },
  { title: "orders", stat: "2,980" },
];

export const exploreData = [
  {
    icon: CirclePlay,
    color: "text-primary",
    text: "Video",
  },
  {
    icon: Clock2,
    color: "text-info",
    text: "15 mins",
  },
  {
    icon: Star,
    color: "text-secondary",
    text: "12 likes",
  },
];

export const tailwindEffect = `transition-all duration-500 ease-in-out transform`;
export const tailwindPadding = `w-full px-4 sm:px-6 lg:px-[8rem]`;
export const tailwindMargin = `mx-0 sm:max-6 lg:mx-[8rem]`;
export const tailwindFeatureMargin = `mx-4 sm:max-6 lg:mx-[8rem]`;
