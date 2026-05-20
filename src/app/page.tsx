"use client";

import ReactLenis from "lenis/react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import HeroOverlay from "@/components/sections/hero/HeroOverlay";
import MetricSplitMediaAbout from "@/components/sections/about/MetricSplitMediaAbout";
import FeatureCardOne from "@/components/sections/feature/FeatureCardOne";
import FeatureBorderGlow from "@/components/sections/feature/featureBorderGlow/FeatureBorderGlow";
import FeatureCardEight from "@/components/sections/feature/FeatureCardEight";
import TestimonialCardThirteen from "@/components/sections/testimonial/TestimonialCardThirteen";
import FaqSplitText from "@/components/sections/faq/FaqSplitText";
import ContactCTA from "@/components/sections/contact/ContactCTA";
import FooterMedia from "@/components/sections/footer/FooterMedia";
import { ShieldCheck, Wrench, DollarSign, Phone } from "lucide-react";

export default function HvacPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="directional-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
      contentWidth="medium"
      sizing="medium"
      background="aurora"
      cardStyle="glass-elevated"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="glass"
      headingFontWeight="semibold"
    >
      <ReactLenis root>
        <div id="nav" data-section="nav">
          <NavbarLayoutFloatingInline
            brandName="All County HVAC"
            navItems={[
              { name: "Services", id: "services" },
              { name: "About", id: "about" },
              { name: "Testimonials", id: "testimonials" },
              { name: "Contact", id: "contact" },
            ]}
            button={{ text: "Schedule Service", href: "#contact" }}
            animateOnLoad={false}
          />
        </div>

        <div id="hero" data-section="hero">
          <HeroOverlay
            title="Honest HVAC Service: 30 Years, No Upselling"
            description="Expert heating, air conditioning, and refrigeration solutions for North DeKalb. Trust Mike Makhija's 30 years of hands-on expertise for reliable, transparent, and high-quality service."
            buttons={[
              { text: "Schedule Your Service Today", href: "#contact" },
            ]}
            buttonAnimation="slide-up"
            imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/hvac/img-1.jpg"
            imageAlt="All County HVAC technician"
            showDimOverlay={true}
          />
        </div>

        <div id="about" data-section="about">
          <MetricSplitMediaAbout
            tag="Our Legacy"
            title="30 Years of Expert HVAC Service in North DeKalb"
            description="Mike Makhija and the team at All County have set the standard for honest HVAC care in North DeKalb for three decades. We believe in providing real solutions without the pressure of unnecessary upselling, ensuring your home stays perfectly comfortable."
            metrics={[
              { value: "30+", title: "Years of Excellence" },
              { value: "100%", title: "Honest Service Guarantee" },
            ]}
            imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/hvac/img-2.jpg"
            imageAlt="Mike Makhija onsite"
            metricsAnimation="slide-up"
          />
        </div>

        <div id="services" data-section="services">
          <FeatureCardOne
            title="Our Services"
            description="Professional climate and refrigeration systems for local homes."
            features={[
              { title: "AC Installation", description: "High-efficiency cooling systems designed for North DeKalb homes.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/hvac/img-4.jpg" },
              { title: "Heating & Furnaces", description: "Stay warm with professional furnace installation and repair.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/hvac/img-5.jpg" },
              { title: "Refrigeration", description: "Reliable refrigeration services for local businesses and specialized homes.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/hvac/img-6.jpg" },
            ]}
            textboxLayout="default"
            animationType="slide-up"
            gridVariant="three-columns-all-equal-width"
          />
        </div>

        <div id="testimonials" data-section="testimonials">
          <TestimonialCardThirteen
            title="Hear from Our North DeKalb Clients"
            description="Trusted by homeowners for 30 years of honest expertise."
            testimonials={[
              { id: "1", name: "Robert S.", handle: "Homeowner", testimonial: "Mike's honesty is rare in this industry. He fixed our furnace when others said we needed a full replacement. True expert.", rating: 5 },
              { id: "2", name: "Sarah K.", handle: "North DeKalb Resident", testimonial: "30 years of experience shows. Fast, professional, and zero upselling. Exactly what I look for in a local company.", rating: 5 },
              { id: "3", name: "Thomas L.", handle: "Local Small Business", testimonial: "All County handles our refrigeration maintenance. Consistent, punctual, and extremely knowledgeable.", rating: 5 },
            ]}
            showRating={true}
            animationType="slide-up"
            textboxLayout="default"
          />
        </div>

        <div id="faq" data-section="faq">
          <FaqSplitText
            sideTitle="Frequently Asked Questions"
            faqs={[
              { id: "1", title: "Why Choose All County?", content: "With 30 years of experience, we provide honest HVAC solutions with zero pressure or upselling. Your satisfaction is our sole priority." },
              { id: "2", title: "Do you serve all of North DeKalb?", content: "Yes, we specialize in servicing residential and commercial properties throughout the entire North DeKalb area." },
            ]}
            faqsAnimation="slide-up"
          />
        </div>

        <div id="contact" data-section="contact">
          <ContactCTA
            tag="Schedule Service"
            title="Get Honest HVAC Service Today"
            description="Don't wait for your system to fail. Experience the All County difference in North DeKalb."
            buttons={[
              { text: "Schedule Your Service Today", href: "tel:5551234567" },
            ]}
            tagIcon={Phone}
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterMedia
            logoText="All County HVAC"
            columns={[
              { title: "Services", items: [{ label: "AC & Heating", href: "#services" }] },
              { title: "Contact", items: [{ label: "(555) 123-4567", href: "tel:5551234567" }] },
            ]}
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}