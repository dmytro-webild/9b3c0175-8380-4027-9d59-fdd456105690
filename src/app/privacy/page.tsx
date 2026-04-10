"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import LegalSection from "@/components/legal/LegalSection";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import FooterBase from '@/components/sections/footer/FooterBase';

export default function PrivacyPolicyPage() {
  return (
    <ThemeProvider defaultButtonVariant="text-stagger" defaultTextAnimation="entrance-slide" borderRadius="rounded" contentWidth="medium" sizing="medium" background="circleGradient" cardStyle="glass-elevated" primaryButtonStyle="gradient" secondaryButtonStyle="glass" headingFontWeight="normal">
      <ReactLenis root>
        <NavbarStyleCentered
          navItems={[
            { name: "Home", id: "/" },
            { name: "Shop", id: "/#products" },
            { name: "About", id: "/about" },
            { name: "Contact", id: "/contact" }
          ]}
          brandName="SILVERPATH SALES LTD"
        />
        <LegalSection
          layout="page"
          title="Privacy Policy"
          sections={[
            { heading: "Introduction", content: { type: "paragraph", text: "At SILVERPATH SALES LTD, we take your privacy seriously. This policy explains how we collect and use your data." } },
            { heading: "Data Collection", content: { type: "list", items: ["Contact information provided during checkout", "Analytics data regarding site usage", "Communication history"] } }
          ]}
        />
        <FooterBase
          columns={[
            { title: "Company", items: [{ label: "About Us", href: "/about" }, { label: "Contact", href: "/contact" }] },
            { title: "Support", items: [{ label: "Privacy Policy", href: "/privacy" }, { label: "Terms & Conditions", href: "/terms" }] }
          ]}
          logoText="SILVERPATH SALES LTD"
        />
      </ReactLenis>
    </ThemeProvider>
  );
}