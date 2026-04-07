"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TextAbout from '@/components/sections/about/TextAbout';

export default function LandingPage() {
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
              { name: "Home", id: "hero" },
              { name: "About", id: "about" },
              { name: "Services", id: "products" },
              { name: "Pricing", id: "pricing" },
              { name: "Contact", id: "contact" }
            ]}
            brandName="SILVERPATH SALES LTD"
          />
        </div>

        <div id="hero" data-section="hero">
          <HeroBillboardCarousel
            background={{ variant: "gradient-bars" }}
            title="Smart, Stylish Living – Delivered to Your Door"
            description="Premium home décor, smart accessories, and lifestyle essentials curated for modern UK households."
            buttons={[
              { text: "Shop Now", href: "#products" },
              { text: "Contact Us", href: "#contact" }
            ]}
            mediaItems={[
              { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C2COeKh3rQiUcxvp9BHPehNpzE/a-wide-professional-high-quality-shot-of-1775577231060-fd365cf2.png", imageAlt: "Modern stylish living room" },
              { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C2COeKh3rQiUcxvp9BHPehNpzE/a-selection-of-curated-minimalist-home-d-1775577227132-e2d89a39.png?_wi=1", imageAlt: "Home decor collection" },
              { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C2COeKh3rQiUcxvp9BHPehNpzE/smart-home-gadget-setup-on-a-sleek-moder-1775577229732-38454db5.png?_wi=1", imageAlt: "Smart home accessories" },
              { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C2COeKh3rQiUcxvp9BHPehNpzE/wellness-and-lifestyle-products-neatly-a-1775577231566-4c00001d.png?_wi=1", imageAlt: "Wellness lifestyle products" },
              { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C2COeKh3rQiUcxvp9BHPehNpzE/seasonal-home-trending-items-for-uk-livi-1775577228390-bc997b10.png?_wi=1", imageAlt: "Seasonal trending items" },
              { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C2COeKh3rQiUcxvp9BHPehNpzE/professional-team-working-in-a-modern-cl-1775577230901-c308507d.png", imageAlt: "Company team" }
            ]}
          />
        </div>

        <div id="about" data-section="about">
          <TextAbout
            useInvertedBackground={false}
            title="About SILVERPATH SALES LTD"
            buttons={[{ text: "Shop Now", href: "#products" }]}
          />
        </div>

        <div id="products" data-section="products">
          <ProductCardTwo
            animationType="slide-up"
            textboxLayout="split-description"
            gridVariant="four-items-2x2-equal-grid"
            useInvertedBackground={false}
            products={[
              { id: "p1", brand: "Lifestyle", name: "Home Décor Collection", price: "Modern & Stylish", rating: 5, reviewCount: "1.2k", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C2COeKh3rQiUcxvp9BHPehNpzE/a-selection-of-curated-minimalist-home-d-1775577227132-e2d89a39.png?_wi=2" },
              { id: "p2", brand: "Tech", name: "Smart Home Accessories", price: "Efficient & Convenient", rating: 5, reviewCount: "850", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C2COeKh3rQiUcxvp9BHPehNpzE/smart-home-gadget-setup-on-a-sleek-moder-1775577229732-38454db5.png?_wi=2" },
              { id: "p3", brand: "Wellness", name: "Wellness & Lifestyle", price: "Everyday Wellbeing", rating: 5, reviewCount: "920", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C2COeKh3rQiUcxvp9BHPehNpzE/wellness-and-lifestyle-products-neatly-a-1775577231566-4c00001d.png?_wi=2" },
              { id: "p4", brand: "Trending", name: "Seasonal Items", price: "Trending Essentials", rating: 5, reviewCount: "700", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C2COeKh3rQiUcxvp9BHPehNpzE/seasonal-home-trending-items-for-uk-livi-1775577228390-bc997b10.png?_wi=2" },
              { id: "p5", brand: "Home", name: "Luxury Textiles", price: "Comfort Assured", rating: 4, reviewCount: "600", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C2COeKh3rQiUcxvp9BHPehNpzE/a-selection-of-curated-minimalist-home-d-1775577227132-e2d89a39.png?_wi=3" },
              { id: "p6", brand: "Tech", name: "Advanced Lighting", price: "Efficient Design", rating: 5, reviewCount: "450", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C2COeKh3rQiUcxvp9BHPehNpzE/smart-home-gadget-setup-on-a-sleek-moder-1775577229732-38454db5.png?_wi=3" }
            ]}
            title="Our Product Categories"
            description="Premium selections curated for quality, practicality, and modern UK living."
            buttons={[{ text: "Request a Quote", href: "#contact" }]}
          />
        </div>

        <div id="pricing" data-section="pricing">
          <PricingCardTwo
            animationType="slide-up"
            textboxLayout="split-description"
            useInvertedBackground={false}
            plans={[
              { id: "basic", badge: "Entry", price: "£29", subtitle: "Basic Accessories", features: ["Small items", "Entry-level products", "Standard delivery"], buttons: [{ text: "Get Started", href: "#contact" }] },
              { id: "std", badge: "Popular", price: "£80", subtitle: "Standard Selection", features: ["Mid-range items", "Popular lifestyle", "Faster delivery"], buttons: [{ text: "Get Started", href: "#contact" }] },
              { id: "prem", badge: "Top", price: "£200+", subtitle: "Premium Choice", features: ["High-end décor", "Smart devices", "Priority shipping"], buttons: [{ text: "Get Started", href: "#contact" }] }
            ]}
            title="Pricing Examples"
            description="Choose the perfect package for your home lifestyle needs."
          />
        </div>

        <div id="contact" data-section="contact">
          <ContactText
            useInvertedBackground={false}
            background={{ variant: "gradient-bars" }}
            text="SILVERPATH SALES LTD\nOffice: 71-75 Shelton Street, Covent Garden, London | Email: info@silverpathsales.co.uk\nPhone: +44 20 7946 0857\nBusiness Hours: Mon-Fri: 09:00 - 17:30, Sat: 10:00 - 14:00"
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterBase
            columns={[
              { title: "Company", items: [{ label: "About Us", href: "#about" }, { label: "Services", href: "#products" }, { label: "Contact", href: "#contact" }] },
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
