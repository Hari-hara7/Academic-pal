'use client';

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import {
  Mail,
  Phone,
  Github,
  Linkedin,
  ShieldCheck,
  FileText,
  Home,
  BookOpen,
  Users,
  ChevronRight,
} from "lucide-react";

import { GitStarButton } from "@/components/eldoraui/gitstarbutton";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 px-6 lg:px-12 xl:px-24">
      <div className="max-w-[1600px] mx-auto">
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12">
          {/* Logo + Highlights */}
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/academicpal.jpg"
                alt="Academic Pal Logo"
                width={50}
                height={50}
                className="rounded"
              />
              <h2 className="text-xl lg:text-2xl font-bold font-poppins">Academic Pal</h2>
            </div>
            <p className="text-gray-400 text-sm lg:text-base leading-relaxed mb-4">
              Your all-in-one academic resource platform for B.Tech students. Notes, question banks, syllabus & more!
            </p>
            <ul className="text-gray-300 text-sm lg:text-base space-y-2">
              <li className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-blue-400" />
                Student-first, always free.
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-blue-400" />
                Covers all branches & semesters.
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-blue-400" />
                Supports all branches & semesters
              </li>
            </ul>

            {/* GitHub Star Button */}
            <div className="mt-6">
              <GitStarButton />
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Explore</h3>
            <ul className="space-y-3 text-gray-400 text-sm lg:text-base">
              <li>
                <Link href="/home" className="hover:text-white flex items-center gap-2">
                  <Home className="w-4 h-4" /> Home
                </Link>
              </li>
              <li>
                <Link href="/upload" className="hover:text-white flex items-center gap-2">
                  <BookOpen className="w-4 h-4" /> Notes
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white flex items-center gap-2">
                  <Users className="w-4 h-4" /> About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-3 text-gray-400 text-sm lg:text-base">
              <li>
                <Link href="/privacy-policy" className="hover:text-white flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4" /> Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" className="hover:text-white flex items-center gap-2">
                  <FileText className="w-4 h-4" /> Terms & Conditions
                </Link>
              </li>
              <li>
                <a
                  href="https://opensource.org/licenses/MIT"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white flex items-center gap-2"
                >
                  <FileText className="w-4 h-4" /> MIT License
                </a>
              </li>
            </ul>
          </div>

       {/* Contact + Socials */}
<div>
  <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Connect</h3>
  
  {/* Contact Info */}
  <div className="text-sm sm:text-base text-gray-400 space-y-3 mb-4">
    <div className="flex items-start gap-2">
      <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" /> 
      <a 
        href="mailto:Hariharanath247@gmail.com"
        className="hover:text-white transition-colors break-words leading-relaxed"
      >
        Hariharanath247@gmail.com
      </a>
    </div>
    <div className="flex items-start gap-2">
      <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
      <a 
        href="tel:+917989777877" 
        className="hover:text-white hover:underline focus:underline outline-none transition-colors"
      >
        7989777877
      </a>
    </div>
  </div>

  {/* Social Links */}
  <div className="flex flex-col gap-3 text-gray-400">
    <a
      href="https://github.com/Academic-pal"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-white flex items-center gap-2 py-1 transition-colors group"
    >
      <Github className="w-4 h-4 flex-shrink-0 group-hover:scale-110 transition-transform" /> 
      <span>GitHub</span>
    </a>
    <a
      href="https://www.linkedin.com/company/102724699/admin/dashboard/"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-white flex items-center gap-2 py-1 transition-colors group"
    >
      <Linkedin className="w-4 h-4 flex-shrink-0 group-hover:scale-110 transition-transform" /> 
      <span>LinkedIn</span>
    </a>
  </div>
</div>
</div>


        {/* Bottom */}
        <Separator className="my-10 bg-gray-700" />
        <div className="flex flex-col lg:flex-row justify-between items-center text-xs lg:text-sm text-gray-500 gap-2">
          <span>© 2025 Academic Pal. All rights reserved.</span>
          <span>Made in India 🇮🇳 | Built with ❤️ | MIT Licensed</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
