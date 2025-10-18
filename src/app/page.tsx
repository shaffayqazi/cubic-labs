import Header from "@/components/Header";
import AIAgentsCarousel from "@/components/AIAgentsCarousel";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans min-h-screen bg-gradient-to-br from-background via-background-secondary to-background text-foreground">
      <Header />
      <ThemeSwitcher />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-24">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-light/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-6xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-border bg-primary/5 backdrop-blur-sm">
            <span className="text-primary text-sm font-medium">Advanced AI Solutions</span>
            <Link href="/services" className="text-foreground text-sm hover:text-primary transition-colors flex items-center gap-1">
              Explore Services
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Transform Your Business with
            <span className="block mt-2 bg-gradient-to-r from-primary-light via-primary to-primary-dark bg-clip-text text-transparent">
              AI-Powered Solutions
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-foreground-muted max-w-3xl mx-auto mb-12 leading-relaxed">
            Partner with Cubic Labs to unlock the full potential of artificial intelligence. 
            We deliver cutting-edge AI products, intelligent automation systems, and advanced 
            analytics that drive measurable results and operational excellence for businesses 
            of all sizes.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link 
              href="/contact"
              className="group relative px-8 py-4 bg-gradient-to-r from-primary to-primary-light rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
            >
              Get Started Today
              <svg className="inline-block ml-2 group-hover:translate-x-1 transition-transform" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 14L11 10L7 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <Link 
              href="/case-studies"
              className="px-8 py-4 border border-border hover:border-border-hover rounded-lg font-semibold text-foreground hover:bg-primary/10 transition-all duration-300"
            >
              View Case Studies
            </Link>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* AI Products */}
            <div className="group p-6 rounded-xl border border-border bg-gradient-to-br from-primary/5 to-transparent hover:border-border-hover hover:bg-primary/10 transition-all duration-300">
              <div className="w-14 h-14 mb-4 rounded-lg bg-gradient-to-br from-primary/20 to-primary-light/10 flex items-center justify-center">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17L12 22L22 17" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-primary">AI Products</h3>
              <p className="text-foreground-dim text-sm leading-relaxed">
                Custom AI solutions tailored to your business needs, from machine learning models to intelligent chatbots.
              </p>
            </div>

            {/* Automation */}
            <div className="group p-6 rounded-xl border border-border bg-gradient-to-br from-primary/5 to-transparent hover:border-border-hover hover:bg-primary/10 transition-all duration-300">
              <div className="w-14 h-14 mb-4 rounded-lg bg-gradient-to-br from-primary/20 to-primary-light/10 flex items-center justify-center">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2V6M12 18V22M4.93 4.93L7.76 7.76M16.24 16.24L19.07 19.07M2 12H6M18 12H22M4.93 19.07L7.76 16.24M16.24 7.76L19.07 4.93" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="12" r="3" stroke="var(--primary)" strokeWidth="2"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-primary">Automation</h3>
              <p className="text-foreground-dim text-sm leading-relaxed">
                Streamline operations and reduce costs with intelligent process automation that works 24/7.
              </p>
            </div>

            {/* Analytics */}
            <div className="group p-6 rounded-xl border border-border bg-gradient-to-br from-primary/5 to-transparent hover:border-border-hover hover:bg-primary/10 transition-all duration-300">
              <div className="w-14 h-14 mb-4 rounded-lg bg-gradient-to-br from-primary/20 to-primary-light/10 flex items-center justify-center">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 3V21H21" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7 16L12 11L16 15L21 10" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 10H21V15" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-primary">Analytics</h3>
              <p className="text-foreground-dim text-sm leading-relaxed">
                Transform data into actionable insights with advanced analytics and predictive intelligence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Agents Carousel Section */}
      <AIAgentsCarousel />
    </div>
  );
}
