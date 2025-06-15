import type { ReactNode } from "react";
export interface ApplePaySummaryCardProps {
  children?: React.ReactNode;
  mode?: "light" | "dark";
}
export interface ApplePayCardProps {
  mode: "light" | "dark";
  face: boolean;
}
export interface PaymentItemProps {
  title: string;
  subtitle1: string;
  subtitle2?: string;
  subtitle3?: string;
  price?: string;
  icon: string | ReactNode;
  mode: "light" | "dark";
  isSummaryItem?: boolean;
}
export interface PaymentSectionProps {
  title: string;
  items: {
    content: ReactNode;
    caption: string;
  }[];
}
export interface ApplePayColumnProps {
  mode: "light" | "dark";
  face: boolean;
  height?: number;
  instructionHeight?: number;
}
