'use client';

import { FileText, Scale, UserCheck, Shield, AlertCircle, BookOpen, Lock, Ban, Gavel, RefreshCw, Mail, ArrowLeft, FileCheck } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";

export default function TermsAndConditionsPage() {
  const lastUpdated = "December 1, 2025";

  const sections = [
    {
      icon: FileCheck,
      title: "Acceptance of Terms",
      content: [
        {
          subtitle: "Agreement to Terms",
          text: "By accessing, browsing, or using Academic Pal, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions and all applicable laws and regulations."
        },
        {
          subtitle: "Legal Capacity",
          text: "You represent that you are at least 13 years of age and have the legal capacity to enter into these Terms. If you are under 18, you confirm that you have obtained parental or guardian consent."
        },
        {
          subtitle: "Modification of Agreement",
          text: "We reserve the right to modify these Terms at any time. Continued use of the platform after changes constitutes acceptance of the modified Terms."
        },
        {
          subtitle: "Entire Agreement",
          text: "These Terms, together with our Privacy Policy, constitute the entire agreement between you and Academic Pal regarding the use of our services."
        }
      ]
    },
    {
      icon: BookOpen,
      title: "Platform Usage and Services",
      content: [
        {
          subtitle: "Educational Purpose",
          text: "Academic Pal is an educational platform designed to support students by providing study materials, notes, past papers, AI assistance, collaborative tools, and academic resources."
        },
        {
          subtitle: "Service Availability",
          text: "We strive to provide uninterrupted access to our services but do not guarantee that the platform will be available at all times. We may suspend or discontinue services for maintenance, updates, or other reasons."
        },
        {
          subtitle: "Platform Features",
          text: "Our platform includes but is not limited to: comprehensive notes, past question papers, AI study assistant, real-time chat, study groups, flashcards, mind maps, timetable generators, and performance analytics."
        },
        {
          subtitle: "No Official Affiliation",
          text: "Academic Pal is an independent platform and is not affiliated with, endorsed by, or officially connected to any educational institution, including but not limited to NMAMIT or any university."
        },
        {
          subtitle: "Content Accuracy",
          text: "While we strive for accuracy and quality, we do not guarantee the correctness, completeness, or reliability of any content or materials provided on the platform."
        }
      ]
    },
    {
      icon: UserCheck,
      title: "User Account and Registration",
      content: [
        {
          subtitle: "Account Creation",
          text: "To access certain features, you must create an account by providing accurate, complete, and current information including name, email, and institution details."
        },
        {
          subtitle: "Account Security",
          text: "You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. Notify us immediately of any unauthorized access."
        },
        {
          subtitle: "Account Accuracy",
          text: "You agree to provide truthful information and to update your account information promptly if any changes occur."
        },
        {
          subtitle: "One Account Per User",
          text: "Each user is permitted one account. Creating multiple accounts may result in suspension or termination of all associated accounts."
        },
        {
          subtitle: "Account Termination Rights",
          text: "We reserve the right to suspend or terminate your account at any time if you violate these Terms or engage in activities harmful to the platform or other users."
        }
      ]
    },
    {
      icon: Shield,
      title: "User Responsibilities and Conduct",
      content: [
        {
          subtitle: "Lawful Use",
          text: "You agree to use Academic Pal only for lawful purposes and in accordance with these Terms. You must not use the platform in any way that violates applicable laws or regulations."
        },
        {
          subtitle: "Respectful Behavior",
          text: "You must treat all users, moderators, and staff with respect. Harassment, bullying, hate speech, or discriminatory behavior of any kind is strictly prohibited."
        },
        {
          subtitle: "Appropriate Content",
          text: "You must not upload, post, or share content that is offensive, obscene, defamatory, threatening, or violates the rights of others."
        },
        {
          subtitle: "No Cheating or Plagiarism",
          text: "Academic Pal is designed to support learning, not to facilitate academic dishonesty. You must not use the platform to cheat, plagiarize, or violate academic integrity policies."
        },
        {
          subtitle: "System Integrity",
          text: "You must not attempt to hack, reverse engineer, or exploit the platform's security features. You must not use automated tools, bots, or scripts without authorization."
        },
        {
          subtitle: "Reporting Violations",
          text: "If you encounter content or behavior that violates these Terms, you should report it to us immediately through our contact channels."
        }
      ]
    },
    {
      icon: Scale,
      title: "Intellectual Property and Content Ownership",
      content: [
        {
          subtitle: "Platform Ownership",
          text: "All content, features, functionality, designs, logos, trademarks, and software of Academic Pal are owned by us or our licensors and are protected by copyright, trademark, and other intellectual property laws."
        },
        {
          subtitle: "User-Generated Content",
          text: "When you upload or post content on Academic Pal, you retain ownership of your content but grant us a worldwide, non-exclusive, royalty-free license to use, display, and distribute your content on the platform."
        },
        {
          subtitle: "Third-Party Content",
          text: "Study materials, notes, and resources may be owned by their respective creators or institutions. You must not reproduce, distribute, or modify such content without proper authorization."
        },
        {
          subtitle: "Copyright Compliance",
          text: "We respect intellectual property rights. If you believe your copyright has been infringed, please contact us with detailed information, and we will investigate promptly."
        },
        {
          subtitle: "License to Use",
          text: "We grant you a limited, non-exclusive, non-transferable license to access and use Academic Pal for personal, educational purposes only."
        },
        {
          subtitle: "Restrictions",
          text: "You may not copy, modify, distribute, sell, or lease any part of our services or software without explicit written permission."
        }
      ]
    },
    {
      icon: Ban,
      title: "Prohibited Activities",
      content: [
        {
          subtitle: "Unauthorized Access",
          text: "Attempting to access areas of the platform or systems that you are not authorized to access, including other users' accounts or administrative areas."
        },
        {
          subtitle: "Malicious Software",
          text: "Uploading or distributing viruses, malware, trojans, or any other malicious code that could harm the platform, users, or our systems."
        },
        {
          subtitle: "Data Mining",
          text: "Using automated tools, scrapers, or bots to extract data from the platform without authorization."
        },
        {
          subtitle: "Commercial Exploitation",
          text: "Using Academic Pal for commercial purposes, advertising, or promoting products/services without our explicit written consent."
        },
        {
          subtitle: "False Information",
          text: "Providing false, misleading, or fraudulent information when creating an account or using our services."
        },
        {
          subtitle: "Service Interference",
          text: "Interfering with or disrupting the platform's operation, servers, networks, or other users' experience."
        }
      ]
    },
    {
      icon: Lock,
      title: "Privacy and Data Protection",
      content: [
        {
          subtitle: "Privacy Policy",
          text: "Your use of Academic Pal is also governed by our Privacy Policy, which explains how we collect, use, and protect your personal information."
        },
        {
          subtitle: "Data Collection",
          text: "We collect information necessary to provide our services, including account information, usage data, and device information as detailed in our Privacy Policy."
        },
        {
          subtitle: "Data Security",
          text: "We implement industry-standard security measures to protect your data, but we cannot guarantee absolute security due to the inherent nature of internet transmissions."
        },
        {
          subtitle: "User Consent",
          text: "By using Academic Pal, you consent to the collection, use, and processing of your information as described in our Privacy Policy."
        }
      ]
    },
    {
      icon: AlertCircle,
      title: "Disclaimers and Limitations",
      content: [
        {
          subtitle: "No Warranties",
          text: "Academic Pal is provided 'as is' and 'as available' without any warranties of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement."
        },
        {
          subtitle: "Content Accuracy",
          text: "We do not warrant that the content, materials, or information provided on the platform are accurate, complete, reliable, current, or error-free."
        },
        {
          subtitle: "Educational Supplement",
          text: "Academic Pal is intended as a supplementary educational tool and should not replace official textbooks, lectures, or institutional resources."
        },
        {
          subtitle: "Third-Party Links",
          text: "Our platform may contain links to third-party websites or services. We are not responsible for the content, privacy practices, or terms of these external sites."
        },
        {
          subtitle: "AI-Generated Content",
          text: "AI assistance features may produce inaccurate or incomplete responses. Users should verify information independently and use AI features as a supplementary tool."
        }
      ]
    },
    {
      icon: Gavel,
      title: "Limitation of Liability",
      content: [
        {
          subtitle: "Damages Limitation",
          text: "To the maximum extent permitted by law, Academic Pal and its owners, employees, and partners shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the platform."
        },
        {
          subtitle: "Direct Damages Cap",
          text: "Our total liability for any claims arising from your use of Academic Pal shall not exceed the amount you paid us (if any) in the 12 months preceding the claim."
        },
        {
          subtitle: "User Responsibility",
          text: "You acknowledge that you use Academic Pal at your own risk and are responsible for any consequences resulting from your use of the platform."
        },
        {
          subtitle: "Academic Performance",
          text: "We are not liable for any academic outcomes, grades, examination results, or institutional consequences resulting from your use of our platform."
        },
        {
          subtitle: "Data Loss",
          text: "We are not liable for any loss of data, content, or information that you upload or store on the platform. You are responsible for maintaining backups."
        }
      ]
    },
    {
      icon: RefreshCw,
      title: "Modifications and Termination",
      content: [
        {
          subtitle: "Service Modifications",
          text: "We reserve the right to modify, suspend, or discontinue any aspect of Academic Pal at any time without prior notice or liability."
        },
        {
          subtitle: "Feature Changes",
          text: "We may add, remove, or modify features, functionality, or pricing without notice. Continued use after changes constitutes acceptance."
        },
        {
          subtitle: "Account Termination by User",
          text: "You may terminate your account at any time by contacting us or using account deletion features. Certain data may be retained as required by law."
        },
        {
          subtitle: "Account Termination by Us",
          text: "We may suspend or terminate your account immediately without notice if you violate these Terms, engage in prohibited activities, or for any other reason at our sole discretion."
        },
        {
          subtitle: "Effect of Termination",
          text: "Upon termination, your right to access and use Academic Pal will immediately cease. Provisions that by their nature should survive termination will remain in effect."
        }
      ]
    },
    {
      icon: FileText,
      title: "Governing Law and Dispute Resolution",
      content: [
        {
          subtitle: "Applicable Law",
          text: "These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions."
        },
        {
          subtitle: "Jurisdiction",
          text: "Any disputes arising from these Terms or your use of Academic Pal shall be subject to the exclusive jurisdiction of the courts located in Karnataka, India."
        },
        {
          subtitle: "Informal Resolution",
          text: "Before initiating legal proceedings, you agree to attempt to resolve disputes informally by contacting us and providing detailed information about the issue."
        },
        {
          subtitle: "Arbitration",
          text: "If informal resolution fails, disputes may be resolved through binding arbitration in accordance with applicable arbitration rules and procedures."
        }
      ]
    },
    {
      icon: FileText,
      title: "Miscellaneous Provisions",
      content: [
        {
          subtitle: "Severability",
          text: "If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions will remain in full force and effect."
        },
        {
          subtitle: "No Waiver",
          text: "Our failure to enforce any right or provision of these Terms shall not constitute a waiver of such right or provision."
        },
        {
          subtitle: "Assignment",
          text: "You may not assign or transfer these Terms or your account without our written consent. We may assign these Terms without restriction."
        },
        {
          subtitle: "Force Majeure",
          text: "We shall not be liable for any failure to perform our obligations due to circumstances beyond our reasonable control, including natural disasters, wars, or technical failures."
        },
        {
          subtitle: "Independent Contractors",
          text: "Nothing in these Terms creates any agency, partnership, joint venture, or employment relationship between you and Academic Pal."
        }
      ]
    },
    {
      icon: Mail,
      title: "Contact Information",
      content: [
        {
          subtitle: "Questions and Support",
          text: "For any questions, concerns, or support requests regarding these Terms and Conditions or the Academic Pal platform, please contact us."
        },
        {
          subtitle: "Email",
          text: "hariharanath247@gmail.com"
        },
        {
          subtitle: "Response Time",
          text: "We strive to respond to all inquiries within 5 business days. Complex legal matters may require additional time for proper review."
        },
        {
          subtitle: "Legal Notices",
          text: "Any legal notices or formal communications should be sent to the email address above with 'Legal Notice' in the subject line."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-black text-white">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400/3 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16"
        >
       
          <div className="flex items-center gap-4 mb-8">
            <div className="relative w-16 h-16 sm:w-20 sm:h-20">
              <Image
                src="/academicpal.jpg"
                alt="Academic Pal Logo"
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-black text-white">Academic Pal</h1>
              <p className="text-sm text-gray-400">Educational Platform</p>
            </div>
          </div>

          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 mb-6">
            <FileText className="w-5 h-5 text-blue-400" />
            <span className="text-sm font-medium text-blue-400">Legal Agreement</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
            Terms & Conditions
          </h2>
          
          <p className="text-lg text-gray-400 mb-4 leading-relaxed max-w-3xl">
            Welcome to Academic Pal! These Terms and Conditions (&quot;Terms&quot;) govern your access to and use of our educational platform and services. 
            Please read them carefully before using Academic Pal.
          </p>

          <p className="text-sm text-gray-500">
            <strong>Last Updated:</strong> {lastUpdated}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12 p-6 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-sm"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Important Notice</h3>
          <p className="text-gray-400 leading-relaxed mb-4">
            By accessing, browsing, or using Academic Pal (&quot;Platform&quot;, &quot;Service&quot;, &quot;Website&quot;), you (&quot;User&quot;, &quot;You&quot;) acknowledge that you have read, 
            understood, and agree to be legally bound by these Terms and Conditions and our Privacy Policy.
          </p>
          <p className="text-gray-400 leading-relaxed">
            <strong className="text-white">If you do not agree with any part of these Terms, you must immediately discontinue use of Academic Pal.</strong> Continued use 
            of the platform after changes to these Terms constitutes your acceptance of such changes.
          </p>
        </motion.div>

        <div className="space-y-8">
          {sections.map((section, index) => {
            const IconComponent = section.icon;
            return (
              <motion.section
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.05 }}
                className="p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-sm hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/30">
                    <IconComponent className="w-6 h-6 text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {index + 1}. {section.title}
                    </h3>
                  </div>
                </div>

                <div className="space-y-6 ml-0 sm:ml-16">
                  {section.content.map((item, idx) => (
                    <div key={idx}>
                      <h4 className="text-lg font-semibold text-blue-400 mb-2">
                        {item.subtitle}
                      </h4>
                      <p className="text-gray-400 leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.section>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-blue-500/10 to-blue-600/10 border border-blue-500/30"
        >
          <div className="flex items-start gap-4 mb-4">
            <AlertCircle className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold text-white mb-3">Important Disclaimer</h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                <strong className="text-white">Academic Pal is an independent educational platform</strong> created to support students in their academic journey. 
                We are not affiliated with, endorsed by, or officially connected to NMAMIT, any university, or any educational institution.
              </p>
              <p className="text-gray-400 leading-relaxed">
                All study materials, notes, and resources provided on this platform are intended for supplementary educational purposes only. 
                They should not be considered official replacements for institutional materials, lectures, or textbooks. Users are responsible 
                for verifying the accuracy of information and complying with their institution&apos;s academic policies.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-12 p-8 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-sm"
        >
          <h3 className="text-xl font-bold text-white mb-4">Questions or Concerns?</h3>
          <p className="text-gray-400 mb-6 leading-relaxed">
            If you have any questions about these Terms and Conditions, need clarification on any section, 
            or have legal inquiries, please contact us at{" "}
            <a href="mailto:hariharanath247@gmail.com" className="text-blue-400 hover:text-blue-300 underline">
              hariharanath247@gmail.com
            </a>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/" 
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-semibold transition-all duration-300 hover:scale-105"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Home
            </Link>
            
            <Link 
              href="/privacy-policy" 
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-500/30 text-white font-semibold transition-all duration-300"
            >
              <Shield className="w-5 h-5" />
              Privacy Policy
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-8 text-center text-sm text-gray-500"
        >
          <p>
            By using Academic Pal, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
          </p>
          <p className="mt-2">
            © {new Date().getFullYear()} Academic Pal. All rights reserved.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

