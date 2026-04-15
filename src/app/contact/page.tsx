"use client";

import { useState } from "react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import FooterBase from '@/components/sections/footer/FooterBase';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
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
        <div className="flex flex-col items-center justify-center min-h-[60vh] px-6 py-20">
            <div className="w-full max-w-xl text-center space-y-4 mb-12">
                <h1 className="text-4xl font-bold">Contact Us</h1>
                <p className="text-lg">Address: 20 Lavington St, London SE1 0NZ, United Kingdom</p>
                <p className="text-lg">Email: globalnovacommerceltd@gmail.com</p>
                <p className="text-lg">Phone: +44 7451 263255</p>
            </div>
            {submitted ? (
                <div className="p-8 bg-card rounded-xl text-center font-bold text-xl">Message Sent Successfully!</div>
            ) : (
                <form className="w-full max-w-sm flex flex-col gap-4" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
                    <input type="email" placeholder="Your email address" className="p-3 border rounded-full w-full" required />
                    <button type="submit" className="px-8 py-3 bg-primary-cta text-primary-cta-text rounded-full">Send Message</button>
                </form>
            )}
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