"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-background-secondary/80 backdrop-blur-md border-b border-border-hover" 
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo/Name */}
        <Link href="/" className="flex items-center gap-3 text-foreground hover:opacity-80 transition-opacity">
          <div className="flex items-center gap-3">
            {/* Cubic Labs 3D Cube Logo */}
            <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Cube outline */}
              <path d="M50 15 L80 30 L80 60 L50 75 L20 60 L20 30 Z" stroke="var(--primary)" strokeWidth="2" fill="none"/>
              
              {/* Front left face - Analytics */}
              <path d="M50 45 L50 75 L20 60 L20 30 Z" stroke="var(--primary)" strokeWidth="1.5" fill="rgba(0, 212, 255, 0.05)"/>
              {/* Bar chart icon */}
              <rect x="28" y="50" width="3" height="8" fill="var(--primary)" opacity="0.6"/>
              <rect x="32" y="46" width="3" height="12" fill="var(--primary)" opacity="0.6"/>
              <rect x="36" y="48" width="3" height="10" fill="var(--primary)" opacity="0.6"/>
              <rect x="40" y="44" width="3" height="14" fill="var(--primary)" opacity="0.6"/>
              
              {/* Right face - Automation */}
              <path d="M50 45 L50 75 L80 60 L80 30 Z" stroke="var(--primary)" strokeWidth="1.5" fill="rgba(0, 212, 255, 0.08)"/>
              {/* Circuit lines */}
              <path d="M56 52 L72 52 M58 56 L70 56 M60 60 L68 60" stroke="var(--primary)" strokeWidth="1.2" opacity="0.6"/>
              <circle cx="56" cy="52" r="1.5" fill="var(--primary)"/>
              <circle cx="72" cy="52" r="1.5" fill="var(--primary)"/>
              <circle cx="58" cy="56" r="1.5" fill="var(--primary)"/>
              <circle cx="70" cy="56" r="1.5" fill="var(--primary)"/>
              <circle cx="60" cy="60" r="1.5" fill="var(--primary)"/>
              <circle cx="68" cy="60" r="1.5" fill="var(--primary)"/>
              
              {/* Top face - AI */}
              <path d="M50 15 L80 30 L50 45 L20 30 Z" stroke="var(--primary)" strokeWidth="1.5" fill="rgba(0, 212, 255, 0.1)"/>
              {/* Circuit pattern on top */}
              <path d="M32 28 L38 28 L38 32 M42 28 L46 28 M54 28 L58 28 L58 32 M50 32 L50 36" stroke="var(--primary)" strokeWidth="1" opacity="0.5"/>
              <circle cx="32" cy="28" r="1.2" fill="var(--primary)" opacity="0.7"/>
              <circle cx="42" cy="28" r="1.2" fill="var(--primary)" opacity="0.7"/>
              <circle cx="54" cy="28" r="1.2" fill="var(--primary)" opacity="0.7"/>
              <circle cx="50" cy="36" r="1.2" fill="var(--primary)" opacity="0.7"/>
            </svg>
            <span className="text-xl font-bold bg-gradient-to-r from-primary-light to-primary bg-clip-text text-transparent">
              Cubic Labs
            </span>
          </div>
        </Link>

        {/* Navigation Links */}
        <ul className="flex items-center gap-8 text-sm font-medium">
          <li>
            <Link 
              href="/platform" 
              className="text-foreground-muted hover:text-primary transition-colors"
            >
              Platform
            </Link>
          </li>
          <li>
            <Link 
              href="/ai-agents" 
              className="text-foreground-muted hover:text-primary transition-colors"
            >
              AI Agents
            </Link>
          </li>
          <li>
            <Link 
              href="/solutions" 
              className="text-foreground-muted hover:text-primary transition-colors"
            >
              Solutions
            </Link>
          </li>
          <li>
            <Link 
              href="/resources" 
              className="text-foreground-muted hover:text-primary transition-colors"
            >
              Resources
            </Link>
          </li>
          <li>
            <Link 
              href="/about" 
              className="text-foreground-muted hover:text-primary transition-colors"
            >
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
