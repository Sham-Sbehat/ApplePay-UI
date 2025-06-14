import type { ReactNode } from "react";

export interface StyleMode {
  bg?: string;
  text?: string;
  subtitle?: string;
  iconColor?: string;
  cardIconBg?: string;
  display?: string;
}

export interface CardProps {
  cardTitle: string;
  items: {
    miniCard: ReactNode;
    caption: string;
  }[];
}

export interface MiniCardProps {
  miniCardTitle: string;
  miniCardSubtitle1?: string;
  miniCardSubtitle2?: string;
  miniCardSubtitle3?: string;
  miniCardPrice?: string;
  miniCardIcon: ReactNode;
  miniCardModeColor: "light" | "dark";
}

export interface PayCardProps {
  cardMode: "light" | "dark";
  children?: ReactNode;
  cardImg?: string;
  cardText?: string;
  cardLine?: string;
}

export interface CardData {
  title: string;
  subtitle1?: string;
  subtitle2?: string;
  subtitle3?: string;
  price?: string;
  icon: ReactNode;
  mode: "light" | "dark";
  caption: string;
}

export interface PaymentData {
  img: string;
  text: string;
  line: boolean;
  mode: "light" | "dark";
  caption: string;
} 