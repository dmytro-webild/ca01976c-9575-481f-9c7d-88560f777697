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
            brandName="AirPro HVAC"
            navItems={[
              { name: "Services", id: "services" },
              { name: "About", id: "about" },
              { name: "Testimonials", id: "testimonials" },
              { name: "Contact", id: "contact" },
            ]}
            button={{ text: "Get a Quote", href: "#contact" }}
            animateOnLoad={false}
          />
        </div>

        <div id="hero" data-section="hero">
          <HeroOverlay
            title="Your Comfort Is Our Priority"
            description="Professional heating, ventilation, and air conditioning services for homes and businesses. From installations to emergency repairs, we keep your climate perfect year-round."
            avatars={[
              { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/team-1.jpg", alt: "Client" },
              { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/team-2.jpg", alt: "Client" },
              { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/team-3.jpg", alt: "Client" },
            ]}
            avatarText="Trusted by 500+ clients"
            buttons={[
              { text: "Schedule Service", href: "#contact" },
              { text: "Our Services", href: "#services" },
            ]}
            buttonAnimation="slide-up"
            imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/hvac/img-1.jpg"
            imageAlt="HVAC technician performing system maintenance"
            showDimOverlay={true}
          />
        </div>

        <div id="about" data-section="about">
          <MetricSplitMediaAbout
            tag="About Us"
            title="Reliable Climate Solutions Since 2005"
            description="AirPro HVAC has been keeping homes and businesses comfortable for nearly two decades. Our certified technicians deliver expert installations, maintenance, and repairs — backed by transparent pricing and a commitment to getting the job done right the first time."
            metrics={[
              {
                value: "2,500+",
                title: "Systems installed and serviced",
              },
              {
                value: "98%",
                title: "Customer satisfaction rate",
              },
            ]}
            imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/hvac/img-2.jpg"
            imageAlt="Commercial HVAC units on rooftop"
            mediaBadge={{
              text: "Active Now",
              avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/hvac/img-3.jpg",
              avatarAlt: "Technician"
            }}
            mediaAnimation="slide-up"
            metricsAnimation="slide-up"
            useInvertedBackground={false}
          />
        </div>
        <div id="services" data-section="services">
          <FeatureCardOne
            title="Our Services"
            description="From installations to emergency repairs, we have your comfort covered."
            buttons={[{ text: "Get a Quote", href: "#contact" }]}
            buttonAnimation="slide-up"
            features={[
              {
                title: "AC Installation",
                description: "Expert installation of high-efficiency air conditioning systems for homes and commercial spaces.",
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/hvac/img-4.jpg",
                imageAlt: "AC installation service",
              },
              {
                title: "Heating Systems",
                description: "Complete furnace and heat pump installations to keep you warm through every winter.",
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/hvac/img-5.jpg",
                imageAlt: "Heating system service",
              },
              {
                title: "Maintenance Plans",
                description: "Preventative maintenance programs that extend the life of your system and reduce energy costs.",
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/hvac/img-6.jpg",
                imageAlt: "HVAC maintenance",
              },
              {
                title: "Emergency Repairs",
                description: "24/7 emergency repair service — we respond fast when your system breaks down unexpectedly.",
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/hvac/img-7.jpg",
                imageAlt: "Emergency HVAC repair",
              },
              {
                title: "Duct Cleaning",
                description: "Professional duct cleaning to improve air quality and system efficiency throughout your property.",
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/hvac/img-8.jpg",
                imageAlt: "Duct cleaning service",
              },
              {
                title: "System Inspections",
                description: "Thorough inspections with detailed reports and transparent recommendations — no hidden fees.",
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/hvac/img-9.jpg",
                imageAlt: "HVAC system inspection",
              },
            ]}
            gridVariant="uniform-all-items-equal"
            uniformGridCustomHeightClasses="aspect-square"
            gridClassName="md:!grid-cols-3"
            carouselThreshold={7}
            animationType="slide-up"
            textboxLayout="default"
            useInvertedBackground={false}
          />
        </div>
        <FeatureBorderGlow
          title="Why Choose AirPro"
          description="What sets us apart from the rest"
          features={[
            {
              icon: ShieldCheck,
              title: "Reliability & Trust",
              description: "Looking for a dependable HVAC company? We arrive on time and do the job right.",
            },
            {
              icon: Wrench,
              title: "Quality Workmanship",
              description: "Our skilled technicians excel in various HVAC repairs, using only top-quality materials.",
            },
            {
              icon: DollarSign,
              title: "Fair & Transparent Pricing",
              description: "No surprises here! We offer clear quotes and fair pricing for quality work.",
            },
          ]}
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground={false}
        />

        <FeatureCardEight
          title="How It Works"
          description="Our simple process from first call to finished job"
          features={[
            {
              title: "Schedule a Call",
              description: "Contact us by phone or online to describe your HVAC issue. We'll find a time that works for you.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/hvac/img-6.jpg",
              imageAlt: "Scheduling a service call",
            },
            {
              title: "On-Site Diagnosis",
              description: "A certified technician arrives on time, inspects your system, and explains the issue with a clear quote.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/hvac/img-7.jpg",
              imageAlt: "Technician diagnosing HVAC system",
            },
            {
              title: "Expert Repair or Install",
              description: "We complete the work using premium parts and proven techniques — most jobs done same day.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/hvac/img-4.jpg",
              imageAlt: "HVAC repair in progress",
            },
            {
              title: "Quality Guarantee",
              description: "We test everything before we leave and back all work with our satisfaction guarantee.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/hvac/img-8.jpg",
              imageAlt: "Final quality check",
            },
          ]}
          textboxLayout="default"
          useInvertedBackground={false}
        />
        <div id="testimonials" data-section="testimonials">
          <TestimonialCardThirteen
            title="What Our Clients Say"
            description="Hear from homeowners and businesses who trust AirPro HVAC."
            testimonials={[
              {
                id: "1",
                name: "James R.",
                handle: "Homeowner, Austin TX",
                testimonial: "AirPro replaced our entire AC system in one day. The crew was professional, clean, and the new unit runs quieter than anything we've had before. Highly recommend.",
                rating: 5,
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/team-1.jpg",
                imageAlt: "James R.",
              },
              {
                id: "2",
                name: "Linda M.",
                handle: "Business Owner, Dallas TX",
                testimonial: "We use AirPro for all three of our office locations. Their maintenance plans have saved us thousands in emergency repairs. Always on time, always honest.",
                rating: 5,
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/team-2.jpg",
                imageAlt: "Linda M.",
              },
              {
                id: "3",
                name: "Carlos D.",
                handle: "Homeowner, Houston TX",
                testimonial: "Our furnace broke down on the coldest night of the year. AirPro had someone at our door within two hours. Fixed it on the spot. Can't thank them enough.",
                rating: 5,
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/team-3.jpg",
                imageAlt: "Carlos D.",
              },
            ]}
            showRating={true}
            animationType="slide-up"
            textboxLayout="default"
            useInvertedBackground={false}
          />
        </div>
        <div id="faq" data-section="faq">
          <FaqSplitText
            sideTitle="Frequently Asked Questions"
            buttons={[{ text: "Contact Us", href: "#contact" }]}
            buttonAnimation="slide-up"
            faqsAnimation="slide-up"
            textPosition="left"
            useInvertedBackground={false}
            faqs={[
              {
                id: "1",
                title: "Do you offer 24/7 emergency service?",
                content: "Yes! We provide round-the-clock emergency HVAC service. If your system breaks down in the middle of the night or on a weekend, call us and a technician will be at your door as soon as possible.",
              },
              {
                id: "2",
                title: "How often should I service my HVAC system?",
                content: "We recommend servicing your system at least twice a year — once before summer for cooling and once before winter for heating. Regular maintenance extends your system's life and keeps energy bills low.",
              },
              {
                id: "3",
                title: "What brands do you install and repair?",
                content: "We work with all major HVAC brands including Carrier, Trane, Lennox, Daikin, Rheem, and more. Our technicians are trained and certified across multiple manufacturers.",
              },
              {
                id: "4",
                title: "Do you offer financing options?",
                content: "Yes, we offer flexible financing plans for new installations and major repairs. Ask about our 0% interest options so you can stay comfortable without straining your budget.",
              },
              {
                id: "5",
                title: "How long does a typical installation take?",
                content: "Most residential HVAC installations are completed in one day. Larger commercial projects may take 2-3 days depending on the scope. We'll give you an accurate timeline during your consultation.",
              },
            ]}
          />
        </div>

        <div id="contact" data-section="contact">
          <ContactCTA
            tag="Get in Touch"
            tagIcon={Phone}
            title="Ready to Stay Comfortable Year-Round?"
            description="Whether you need a new installation, emergency repair, or routine maintenance — our team is ready to help. Call us today or request a free quote."
            buttons={[
              { text: "Get a Free Quote", href: "#contact" },
              { text: "Call (555) 987-6543", href: "tel:5559876543" },
            ]}
            background={{ variant: "plain" }}
            useInvertedBackground={false}
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterMedia
            logoText="AirPro HVAC"
            imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/hvac/img-10.jpg"
            imageAlt="HVAC technician inspecting equipment"
            columns={[
              {
                title: "Services",
                items: [
                  { label: "AC Installation", href: "#services" },
                  { label: "Heating Systems", href: "#services" },
                  { label: "Maintenance Plans", href: "#services" },
                  { label: "Emergency Repairs", href: "#services" },
                ],
              },
              {
                title: "Company",
                items: [
                  { label: "About Us", href: "#about" },
                  { label: "Testimonials", href: "#testimonials" },
                  { label: "FAQ", href: "#faq" },
                  { label: "Contact", href: "#contact" },
                ],
              },
              {
                title: "Contact",
                items: [
                  { label: "(555) 987-6543", href: "tel:5559876543" },
                  { label: "info@airprohvac.com", href: "mailto:info@airprohvac.com" },
                  { label: "Austin, TX" },
                ],
              },
            ]}
            copyrightText="© 2026 | AirPro HVAC"
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
