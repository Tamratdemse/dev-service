"use client";

import type React from "react";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { setTheme, theme } = useTheme();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold text-primary">DevMatrix</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Services
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={toggleTheme}>
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
            <Button asChild className="hidden md:inline-flex">
              <Link href="/contact">Get Started</Link>
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden container py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-sm font-medium"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                href="/services"
                className="text-sm font-medium"
                onClick={toggleMenu}
              >
                Services
              </Link>
              <Link
                href="/about"
                className="text-sm font-medium"
                onClick={toggleMenu}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-sm font-medium"
                onClick={toggleMenu}
              >
                Contact
              </Link>
              <Button asChild className="w-full">
                <Link href="/contact" onClick={toggleMenu}>
                  Get Started
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t bg-background">
        <div className="container py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <h3 className="text-lg font-bold text-primary">DevMatrix</h3>
              <p className="text-sm text-muted-foreground">
                Fresh ideas, modern solutions. Est. 2023
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-8">
              <Link
                href="/"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Home
              </Link>
              <Link
                href="/services"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Services
              </Link>
              <Link
                href="/about"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="mt-8 border-t pt-4 text-center text-sm text-muted-foreground">
            <p>
              &copy; {new Date().getFullYear()} DevMatrix. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
