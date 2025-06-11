import type { ReactNode } from "react";

export type ThemeMode = "light" | "dark";

export interface ThemeStyles {
  bg: string;
  text: string;
  subtitle: string;
  iconColor?: string;
  cardIconBg?: string;
}

export interface PaymentCardProps {
  mode?: ThemeMode;
  children: ReactNode;
}

export interface PaymentItemProps {
  title: string;
  subtitle1: string;
  subtitle2?: string;
  subtitle3?: string;
  price?: string;
  icon: string | React.ReactNode;
  mode: "light" | "dark";
  isSummaryItem?: boolean;
}

export interface PaymentMethodProps {
  mode?: ThemeMode;
  icon: ReactNode | string;
  text: string;
  showDivider?: boolean;
}

export interface PaymentSectionProps {
  title: string;
  items: Array<{
    content: ReactNode;
    caption: string;
  }>;
} 