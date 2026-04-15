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
              { name: "Shop Now", id: "/#products" },
              { name: "About Us", id: "/about" },
              { name: "Contact Us", id: "/contact" }
            ]}
            brandName="GLOBAL NOVA COMMERCE LTD"
          />
        </div>

        <div id="about" data-section="about">
          <MediaAbout
            title="About GLOBAL NOVA COMMERCE LTD"
            description="Global Nova Commerce Ltd is a premier UK-based retailer dedicated to excellence, innovation, and quality. We specialize in curating an exceptional range of home lifestyle products, smart gadgets, and décor essentials designed to enhance modern living. Our commitment is to provide premium products through seamless service, ensuring every customer enjoys a superior experience. With our operational headquarters at 20 Lavington St, London, we prioritize quality assurance and customer satisfaction, consistently adapting to the evolving needs of the UK market."
            useInvertedBackground={false}
            buttons={[{ text: "Return Home", href: "/" }, { text: "Contact", href: "/contact" }]}
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterBase
            columns={[
              { title: "Company", items: [{ label: "About Us", href: "/about" }, { label: "Shop", href: "/#products" }, { label: "Contact", href: "/contact" }] },
              { title: "Support", items: [{ label: "Privacy Policy", href: "#" }, { label: "Terms & Conditions", href: "#" }] },
              { title: "Contact Details", items: [{ label: "+447451263255", href: "tel:+447451263255" }, { label: "globalnovacommerceltd@gmail.com", href: "mailto:globalnovacommerceltd@gmail.com" }] }
            ]}
            logoText="GLOBAL NOVA COMMERCE LTD"
            copyrightText="© 2025 | GLOBAL NOVA COMMERCE LTD. Company Number: 17131176. 20 Lavington St, London SE1 0NZ, UK. All rights reserved."
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}