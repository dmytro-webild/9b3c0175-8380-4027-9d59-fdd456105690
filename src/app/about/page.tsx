"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import MediaAbout from '@/components/sections/about/MediaAbout';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import FooterBase from '@/components/sections/footer/FooterBase';

export default function AboutPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-shift"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
      contentWidth="medium"
      sizing="medium"
      background="circleGradient"
      cardStyle="glass-elevated"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="glass"
      headingFontWeight="normal"
    >
      <ReactLenis root>
        <div id="nav" data-section="nav">
          <NavbarStyleCentered
            navItems={[
              { name: "Home", id: "/" },
              { name: "About Us", id: "/about" },
              { name: "Contact Us", id: "/contact" },
              { name: "Services", id: "/#products" },
              { name: "Pricing", id: "/#pricing" }
            ]}
            brandName="SILVERPATH SALES LTD"
          />
        </div>

        <div id="about" data-section="about">
          <MediaAbout
            title="About SILVERPATH SALES LTD"
            description="Silverpath Sales Ltd is a leading UK-based retailer dedicated to bringing quality, innovation, and style into modern households. We specialize in curating an exceptional range of home lifestyle products, smart gadgets, and décor essentials designed to improve convenience and aesthetic appeal. Our commitment is to provide premium products through seamless service, ensuring every customer enjoys a better living experience. We prioritize quality assurance and customer satisfaction, keeping pace with contemporary trends to ensure our inventory meets the evolving needs of UK homes."
            useInvertedBackground={false}
            buttons={[{ text: "Return Home", href: "/" }, { text: "Contact", href: "/contact" }]}
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterBase
            columns={[
              { title: "Company", items: [{ label: "About Us", href: "/about" }, { label: "Services", href: "/#products" }, { label: "Contact", href: "/contact" }] },
              { title: "Support", items: [{ label: "Privacy Policy", href: "#" }, { label: "Terms & Conditions", href: "#" }] },
              { title: "Contact Details", items: [{ label: "020 7946 0857", href: "tel:+442079460857" }, { label: "info@silverpathsales.co.uk", href: "mailto:info@silverpathsales.co.uk" }] }
            ]}
            logoText="SILVERPATH SALES LTD"
            copyrightText="© 2026 SILVERPATH SALES LTD. All rights reserved."
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}