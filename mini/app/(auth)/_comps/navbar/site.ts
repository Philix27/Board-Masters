"use client";

import { AppPages } from "../../../lib";

export interface MainNavProps {
  title: string;
  items?: NavItem[];
}

export interface NavItem {
  title: string;
  href?: string;
  disabled?: boolean;
  external?: boolean;
}

export const MarketingNavItems: NavItem[] = [
  { title: "Sign in", href: AppPages.auth.signIn },
  { title: "Sign up", href: AppPages.auth.signUp },
  { title: "Reset password", href: AppPages.auth.resetPassword },
  { title: "Terms of Service", href: AppPages.termsCondition },
  { title: "Privacy Policy", href: AppPages.privacyPolicy },
];
