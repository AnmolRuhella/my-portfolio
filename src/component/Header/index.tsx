"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#education", label: "Education" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ];

  const handleClick = (hash: string) => {

    router.push(hash);

    // Scroll to the section smoothly
    const section = document.querySelector(hash);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile menu
    setIsOpen(false);
  };

  // On initial load, scroll to hash if present
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const section = document.querySelector(hash);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <header className="fixed top-0 w-full bg-white shadow-md z-50">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <div className="text-xl font-bold text-black">Anmol Ruhella</div>

        {/* Desktop nav */}
        <div className="hidden md:flex space-x-4">
          {links.map(({ href, label }) => (
            <Button
              key={href}
              variant="ghost"
              onClick={() => handleClick(href)}
              className="text-sm text-gray-700 hover:text-blue-600"
            >
              {label}
            </Button>
          ))}
        </div>

        {/* Mobile menu toggle */}
        <div className="md:hidden">
          <Button onClick={() => setIsOpen(!isOpen)} variant="outline">
            ☰
          </Button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="md:hidden px-4 py-2 bg-white shadow space-y-2">
          {links.map(({ href, label }) => (
            <Button
              key={href}
              variant="ghost"
              onClick={() => handleClick(href)}
              className="w-full justify-start text-left pl-2 text-gray-700 hover:text-blue-600"
            >
              {label}
            </Button>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
