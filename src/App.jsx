import React from "react";
import logoBuraq from "../src/assets/logoBuraq.png";
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Globe2,
  LayoutTemplate,
  Menu,
  MonitorSmartphone,
  PenTool,
  Settings2,
  ShieldCheck,
  X,
} from "lucide-react";

const services = [
  {
    icon: <Code2 size={28} />,
    title: "Website Development",
    description:
      "Modern, responsive and professional websites built around your business requirements.",
  },
  {
    icon: <Globe2 size={28} />,
    title: "Business Websites",
    description:
      "Build a strong digital presence for your company, startup, clinic, school or organization.",
  },
  {
    icon: <PenTool size={28} />,
    title: "UI/UX & Web Design",
    description:
      "Clean and user-friendly interfaces designed to make your business look professional online.",
  },
  {
    icon: <LayoutTemplate size={28} />,
    title: "Landing Pages",
    description:
      "Focused landing pages that clearly present your services and help convert visitors into customers.",
  },
  {
    icon: <MonitorSmartphone size={28} />,
    title: "Custom Web Solutions",
    description:
      "Tailored web solutions developed according to your business goals and specific requirements.",
  },
  {
    icon: <Settings2 size={28} />,
    title: "Website Maintenance",
    description:
      "Regular updates, improvements, bug fixes and ongoing support for your website.",
  },
];

const benefits = [
  "Modern & Responsive Designs",
  "Business-Focused Solutions",
  "Affordable Pricing",
  "Clean & Professional Development",
  "Mobile-Friendly Websites",
  "Reliable Support",
  "Backed by BWS Experience",
];

const process = [
  {
    number: "01",
    title: "Understand",
    description:
      "We understand your business, requirements, audience and project goals.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "We create a clean visual direction that represents your business professionally.",
  },
  {
    number: "03",
    title: "Develop",
    description:
      "Our team transforms the design into a responsive and functional website.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "We test your website and make it ready for your customers and visitors.",
  },
  {
    number: "05",
    title: "Support",
    description:
      "We continue helping with updates, maintenance and improvements when required.",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Navbar */}
      <nav className="fixed left-0 top-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <a href="#home" className="flex items-center gap-3">
            <img
              src={logoBuraq}
              alt="Al Buraq Web Solution"
              className="h-11 w-11 object-contain"
            />

            <div>
              <h1 className="text-base font-bold leading-none">Al Buraq</h1>
              <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                Web Solution
              </p>
            </div>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            <a
              href="#home"
              className="text-sm font-medium text-slate-600 transition hover:text-[#7FC331]"
            >
              Home
            </a>

            <a
              href="#about"
              className="text-sm font-medium text-slate-600 transition hover:text-[#7FC331]"
            >
              About
            </a>

            <a
              href="#services"
              className="text-sm font-medium text-slate-600 transition hover:text-[#7FC331]"
            >
              Services
            </a>

            <a
              href="#process"
              className="text-sm font-medium text-slate-600 transition hover:text-[#7FC331]"
            >
              Process
            </a>

            <a
              href="#contact"
              className="rounded-full bg-[#7FC331] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#7FC331]"
            >
              Start a Project
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg border border-slate-200 p-2 md:hidden"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-slate-200 bg-white px-5 py-5 md:hidden">
            <div className="flex flex-col gap-4">
              {["home", "about", "services", "process", "contact"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item}`}
                    onClick={() => setMenuOpen(false)}
                    className="capitalize text-slate-600"
                  >
                    {item}
                  </a>
                ),
              )}
            </div>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section
        id="home"
        className="relative overflow-hidden bg-slate-950 pt-32 text-white"
      >
        <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-[#7FC331]/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="relative mx-auto grid min-h-180 max-w-7xl items-center gap-14 px-5 py-20 md:px-8 lg:grid-cols-2">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
              <ShieldCheck size={16} className="text-[#7FC331]" />A Digital
              Brand of Bharat Web Services
            </div>

            <h1 className="max-w-3xl text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Digital Solutions That
              <span className="block text-[#7FC331]">Help You Grow.</span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300">
              Al Buraq Web Solution helps businesses, startups and organizations
              build modern websites and reliable digital experiences.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="flex items-center gap-2 rounded-full bg-[#7FC331] px-7 py-3.5 font-semibold text-slate-950 transition hover:bg-[#7FC331]"
              >
                Start Your Project
                <ArrowRight size={18} />
              </a>

              <a
                href="#services"
                className="rounded-full border border-white/20 px-7 py-3.5 font-semibold transition hover:bg-white hover:text-slate-950"
              >
                Explore Services
              </a>
            </div>

            <div className="mt-12 flex items-center gap-4 border-t border-white/10 pt-7">
              <span className="text-sm text-slate-400">Powered by</span>

              <span className="font-bold tracking-wide">
                BHARAT WEB SERVICES
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-4xl border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur">
              <div className="rounded-[26px] bg-white p-7 text-slate-900 sm:p-10">
                <div className="mb-10 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#7FC331]">
                      Digital Solutions
                    </p>
                    <h3 className="mt-2 text-2xl font-black">
                      Al Buraq Web Solution
                    </h3>
                  </div>

                  <div className="rounded-2xl bg-emerald-100 p-4 text-[#7FC331]">
                    <Globe2 size={30} />
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    "Professional Websites",
                    "Responsive UI",
                    "Business Solutions",
                    "Reliable Support",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-xl bg-slate-50 p-4"
                    >
                      <CheckCircle2 className="text-[#7FC331]" size={21} />
                      <span className="font-semibold">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 rounded-2xl bg-slate-950 p-5 text-white">
                  <p className="text-xs uppercase tracking-widest text-slate-400">
                    Parent Company
                  </p>
                  <p className="mt-2 text-xl font-bold">Bharat Web Services</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 md:px-8 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#7FC331]">
              About Al Buraq
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
              Inspired by a Journey.
              <br />
              Built for the Digital World.
            </h2>

            <p className="mt-6 max-w-lg text-lg leading-8 text-slate-600">
              The name Al Buraq is inspired by Al-Burāq, associated in Islamic
              tradition with the extraordinary journey of Isra and Mi'raj. The
              name represents the idea of swift movement and reaching a
              destination. We bring this inspiration into the digital world.
              Just as a journey is about moving forward and reaching new
              heights, Al Buraq helps businesses move forward, grow, and reach
              more people through technology.
            </p>

            <div className="mt-8 rounded-2xl border border-[#7FC331]/20 bg-[#7FC331]/5 p-6">
              <p className="text-sm font-bold uppercase tracking-wider text-[#7FC331]">
                Our Inspiration
              </p>

              <p className="mt-3 leading-7 text-slate-600">
                Just as Al Buraq represents a remarkable journey, we believe
                technology should help businesses move faster, reach further,
                and turn ideas into meaningful digital experiences.
              </p>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            {/* Founder */}
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#7FC331]">
                Founder
              </p>

              <h3 className="mt-3 text-3xl font-black text-slate-900">
                Syed Faizan
              </h3>

              <p className="mt-1 font-medium text-slate-500">
                Founder · Al Buraq Web Solution
              </p>

              <p className="mt-5 text-base leading-7 text-slate-600">
                Syed Faizan is a Computer Science graduate and web developer
                passionate about technology, design, and building practical
                digital solutions. With Al Buraq Web Solution, his vision is to
                help businesses, startups, institutions, and organizations build
                a strong and professional presence on the web.
              </p>
            </div>

            {/* Company Story */}
            <div className="rounded-3xl bg-slate-950 p-7 text-white">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#7FC331]">
                Our Story
              </p>

              <h3 className="mt-3 text-2xl font-bold">
                A New Brand. Backed by BWS.
              </h3>

              <p className="mt-4 leading-7 text-slate-300">
                Al Buraq Web Solution is a specialized digital brand operating
                under Bharat Web Services. It was created with a focused vision
                to provide modern, reliable, and affordable web solutions.
              </p>

              <p className="mt-4 leading-7 text-slate-300">
                While Bharat Web Services continues as the parent company, Al
                Buraq focuses on website development, business websites, UI/UX
                design, and digital solutions for growing businesses.
              </p>
            </div>

            {/* Company Structure */}
            <div className="grid gap-4 pt-2 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 p-5">
                <p className="text-sm text-slate-500">Parent Company</p>

                <p className="mt-1 font-bold text-slate-900">
                  Bharat Web Services
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 p-5">
                <p className="text-sm text-slate-500">Digital Brand</p>

                <p className="mt-1 font-bold text-slate-900">
                  Al Buraq Web Solution
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#7FC331]">
              Our Services
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
              Digital Solutions For Modern Businesses
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Everything you need to build and improve your digital presence.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="group rounded-3xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-2 hover:border-emerald-300 hover:shadow-xl"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-[#7FC331] transition group-hover:bg-[#7FC331] group-hover:text-white">
                  {service.icon}
                </div>

                <h3 className="text-xl font-bold">{service.title}</h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 md:px-8 lg:grid-cols-2">
          <div className="rounded-4xl bg-slate-950 p-8 text-white sm:p-12">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#7FC331]">
              Why Al Buraq
            </p>

            <h2 className="mt-4 text-4xl font-black">
              Built with purpose.
              <br />
              Delivered with quality.
            </h2>

            <p className="mt-6 max-w-lg leading-7 text-slate-300">
              Our approach focuses on clean design, reliable development and
              practical digital solutions that help businesses grow.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-center gap-3 rounded-2xl border border-slate-200 p-5"
              >
                <CheckCircle2 size={20} className="shrink-0 text-[#7FC331]" />
                <span className="font-semibold">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="bg-slate-950 py-24 text-white">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="mb-14 max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#7FC331]">
              Our Process
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
              From Idea To Online.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {process.map((step) => (
              <div
                key={step.number}
                className="rounded-3xl border border-white/10 bg-white/5 p-6"
              >
                <span className="text-3xl font-black text-[#7FC331]">
                  {step.number}
                </span>

                <h3 className="mt-8 text-xl font-bold">{step.title}</h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-5 text-center md:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#7FC331]">
            Who We Serve
          </p>

          <h2 className="mt-4 text-4xl font-black sm:text-5xl">
            Solutions For Every Business
          </h2>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            {[
              "Startups",
              "Small Businesses",
              "Hospitals",
              "Clinics",
              "Schools",
              "Institutions",
              "Organizations",
              "Professionals",
              "Local Businesses",
            ].map((industry) => (
              <span
                key={industry}
                className="rounded-full border border-slate-200 bg-white px-6 py-3 font-semibold shadow-sm"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* BWS */}
      <section className="bg-emerald-50 py-24">
        <div className="mx-auto max-w-5xl px-5 text-center md:px-8">
          <div className="mx-auto mb-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#7FC331] text-white">
            <ShieldCheck size={32} />
          </div>

          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#7FC331]">
            Powered By BWS
          </p>

          <h2 className="mt-4 text-4xl font-black sm:text-5xl">
            Bharat Web Services
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Al Buraq Web Solution operates under Bharat Web Services, the parent
            brand behind our digital initiatives and technology services.
          </p>

          {/* Replace # with your BWS official website URL */}
          <a
            href="https://bharatwebservices.live/"
            target="_blank"
            rel="noreferrer"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-slate-950 px-7 py-3.5 font-semibold text-white transition hover:bg-[#7FC331]"
          >
            Visit Bharat Web Services
            <ArrowRight size={18} />
          </a>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="px-5 py-24 md:px-8">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[36px] bg-slate-950 px-7 py-16 text-center text-white sm:px-12 lg:px-20">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#7FC331]">
            Let's Work Together
          </p>

          <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
            Let's Build Your Digital Presence.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Have an idea, business or project that needs a professional website?
            Let's turn it into something people can see, use and remember.
          </p>

          {/* Replace with WhatsApp or contact page link */}
          <a
            href="https://wa.me/7408780796"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#7FC331] px-8 py-4 font-bold text-slate-950 transition hover:bg-[#3c7100] hover:text-white"
          >
            Ravi Madarchod
            <ArrowRight size={19} />
          </a>
          <p className="mt-5 text-sm text-slate-400">
            Or email us at{" "}
            <a
              href="mailto:thefzan06@gmail.com"
              className="font-semibold text-[#7FC331] hover:underline"
            >
              thefzan06@gmail.com
            </a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-3 md:px-8">
          <div>
            <div className="flex items-center gap-3">
              <img
                src={logoBuraq}
                alt="Al Buraq Web Solution"
                className="h-11 w-11 object-contain"
              />

              <div>
                <h3 className="font-bold">Al Buraq</h3>
                <p className="text-xs uppercase tracking-widest text-slate-500">
                  Web Solution
                </p>
              </div>
            </div>

            <p className="mt-5 max-w-sm text-sm leading-6 text-slate-500">
              A digital solutions brand under Bharat Web Services helping
              businesses build their online presence.
            </p>
          </div>

          <div>
            <h4 className="font-bold">Quick Links</h4>

            <div className="mt-5 flex flex-col gap-3 text-sm text-slate-500">
              <a href="#home" className="hover:text-[#7FC331]">
                Home
              </a>
              <a href="#about" className="hover:text-[#7FC331]">
                About
              </a>
              <a href="#services" className="hover:text-[#7FC331]">
                Services
              </a>
              <a href="#process" className="hover:text-[#7FC331]">
                Process
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold">Parent Company</h4>

            <p className="mt-5 text-sm text-slate-500">Bharat Web Services</p>

            <p className="mt-2 text-xs text-slate-400">
              Al Buraq Web Solution is a digital brand operating under BWS.
            </p>
          </div>
        </div>

        <div className="border-t border-slate-200">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 px-5 py-5 text-sm text-slate-500 sm:flex-row md:px-8">
            <p>© 2026 Al Buraq Web Solution. All Rights Reserved.</p>

            <p>
              A <span className="font-semibold text-slate-800">BWS</span>{" "}
              Company
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
