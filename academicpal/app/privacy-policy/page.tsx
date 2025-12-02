"use client";

import { ShieldCheck, Lock, Eye, Database, Globe, UserCheck, FileText, Mail, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";
import Image from "next/image";


export default function PrivacyPolicyPage() {
  const lastUpdated = "December 1, 2025";

  const sections = [
    {
      icon: Database,
      title: "Information We Collect",
      content: [
        {
          subtitle: "Personal Information",
          text: "We collect information that you voluntarily provide when creating an account or using our services, including your name, email address, university/school name, and profile information."
        },
        {
          subtitle: "Usage Data",
          text: "We automatically collect information about your interactions with our platform, including pages visited, features used, study materials accessed, and time spent on the platform."
        },
        {
          subtitle: "Device Information",
          text: "We collect information about the device you use to access Academic Pal, including IP address, browser type, operating system, and device identifiers."
        },
        {
          subtitle: "Cookies and Tracking Technologies",
          text: "We use cookies, local storage, and similar technologies to enhance your experience, remember your preferences, and analyze platform usage."
        }
      ]
    },
    {
      icon: Eye,
      title: "How We Use Your Information",
      content: [
        {
          subtitle: "Service Delivery",
          text: "To provide, maintain, and improve Academic Pal's features including AI assistance, study materials, chat functionality, and personalized learning experiences."
        },
        {
          subtitle: "Communication",
          text: "To send you service-related notifications, updates, study reminders, and respond to your inquiries and support requests."
        },
        {
          subtitle: "Personalization",
          text: "To customize your experience, recommend relevant study materials, and adapt our AI assistance to your learning patterns and preferences."
        },
        {
          subtitle: "Analytics and Improvement",
          text: "To analyze usage patterns, understand user behavior, identify technical issues, and continuously improve our platform's performance and features."
        },
        {
          subtitle: "Security and Fraud Prevention",
          text: "To protect the platform and our users from unauthorized access, fraudulent activities, and security threats."
        }
      ]
    },
    {
      icon: Globe,
      title: "Third-Party Services and Integrations",
      content: [
        {
          subtitle: "Authentication Services",
          text: "We use Firebase Authentication and other secure authentication providers to manage user accounts and ensure platform security."
        },
        {
          subtitle: "AI Services",
          text: "We integrate with Google's Gemini AI to provide intelligent study assistance. Your queries are processed according to Google's privacy policies."
        },
        {
          subtitle: "Cloud Storage and Database",
          text: "We use secure cloud infrastructure (including Supabase and Firebase) to store and manage your data with industry-standard security measures."
        },
        {
          subtitle: "Analytics Tools",
          text: "We may use analytics services to understand platform usage and improve our services. These providers are bound by strict data protection agreements."
        },
        {
          subtitle: "Third-Party Commitments",
          text: "All third-party service providers are carefully vetted and contractually obligated to maintain the confidentiality and security of your data."
        }
      ]
    },
    {
      icon: UserCheck,
      title: "Your Rights and Choices",
      content: [
        {
          subtitle: "Access and Correction",
          text: "You have the right to access, review, and update your personal information at any time through your account settings."
        },
        {
          subtitle: "Data Deletion",
          text: "You can request complete deletion of your account and associated data by contacting us. We will process your request within 30 days."
        },
        {
          subtitle: "Data Portability",
          text: "You have the right to receive a copy of your data in a structured, commonly used, and machine-readable format."
        },
        {
          subtitle: "Opt-Out Options",
          text: "You can opt out of non-essential communications, disable cookies (though this may affect functionality), and control your privacy settings."
        },
        {
          subtitle: "Complaint Rights",
          text: "If you believe your privacy rights have been violated, you have the right to file a complaint with relevant data protection authorities."
        }
      ]
    },
    {
      icon: Lock,
      title: "Data Security and Protection",
      content: [
        {
          subtitle: "Security Measures",
          text: "We implement industry-standard security measures including encryption in transit (HTTPS/SSL), secure authentication, access controls, and regular security audits."
        },
        {
          subtitle: "Data Encryption",
          text: "Sensitive data is encrypted both in transit and at rest using advanced encryption standards to prevent unauthorized access."
        },
        {
          subtitle: "Access Controls",
          text: "We maintain strict access controls ensuring that only authorized personnel can access user data, and only when necessary for service operations."
        },
        {
          subtitle: "Regular Monitoring",
          text: "We continuously monitor our systems for potential security threats and vulnerabilities, implementing immediate patches and updates as needed."
        },
        {
          subtitle: "Limitations",
          text: "While we implement robust security measures, no system is 100% secure. We cannot guarantee absolute security but commit to industry-best practices."
        }
      ]
    },
    {
      icon: FileText,
      title: "Data Retention and Deletion",
      content: [
        {
          subtitle: "Retention Period",
          text: "We retain your personal data only as long as necessary to provide our services, comply with legal obligations, and resolve disputes."
        },
        {
          subtitle: "Active Accounts",
          text: "Data associated with active accounts is retained for the duration of your use of Academic Pal and a reasonable period thereafter."
        },
        {
          subtitle: "Inactive Accounts",
          text: "Accounts inactive for more than 2 years may be subject to data deletion after appropriate notice to the registered email address."
        },
        {
          subtitle: "Deletion Requests",
          text: "Upon your request, we will delete your personal data within 30 days, except where retention is required by law or for legitimate business purposes."
        },
        {
          subtitle: "Backup Systems",
          text: "Deleted data may persist in backup systems for up to 90 days before being permanently removed from all systems."
        }
      ]
    },
    {
      icon: Globe,
      title: "International Data Transfers",
      content: [
        {
          subtitle: "Global Operations",
          text: "Academic Pal operates globally and may transfer your data to servers located in different countries to provide our services efficiently."
        },
        {
          subtitle: "Data Protection Standards",
          text: "We ensure that all international data transfers comply with applicable data protection laws and are protected by appropriate safeguards."
        },
        {
          subtitle: "Your Consent",
          text: "By using Academic Pal, you consent to the transfer of your information to countries outside your country of residence, which may have different data protection standards."
        }
      ]
    },
    {
      icon: UserCheck,
      title: "Children's Privacy",
      content: [
        {
          subtitle: "Age Restrictions",
          text: "Academic Pal is intended for users aged 13 and above. We do not knowingly collect personal information from children under 13."
        },
        {
          subtitle: "Parental Consent",
          text: "If you are between 13-18 years old, please ensure you have parental or guardian consent before using our services."
        },
        {
          subtitle: "Discovery of Underage Users",
          text: "If we discover that we have collected information from a child under 13, we will promptly delete such information from our systems."
        }
      ]
    },
    {
      icon: FileText,
      title: "Changes to This Privacy Policy",
      content: [
        {
          subtitle: "Policy Updates",
          text: "We may update this Privacy Policy periodically to reflect changes in our practices, services, or legal requirements."
        },
        {
          subtitle: "Notification of Changes",
          text: "Significant changes will be communicated via email, platform notifications, or prominent notices on our website at least 30 days before taking effect."
        },
        {
          subtitle: "Continued Use",
          text: "Your continued use of Academic Pal after policy changes constitutes acceptance of the updated terms. If you disagree, please discontinue use."
        },
        {
          subtitle: "Review Recommendation",
          text: "We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information."
        }
      ]
    },
    {
      icon: Mail,
      title: "Contact Us",
      content: [
        {
          subtitle: "Privacy Inquiries",
          text: "For any questions, concerns, or requests regarding this Privacy Policy or your personal data, please contact us."
        },
        {
          subtitle: "Email",
          text: "Hariharanath247@gmail.com"
        },
        {
          subtitle: "Response Time",
          text: "We aim to respond to all privacy-related inquiries within 5 business days. Complex requests may require additional time."
        },
        {
          subtitle: "Data Protection Officer",
          text: "For GDPR-related inquiries or concerns, you may request to speak with our Data Protection Officer."
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 mb-6">
            <ShieldCheck className="w-5 h-5 text-blue-400" />
            <span className="text-sm font-medium text-blue-400">Legal Document</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
            Privacy Policy
          </h1>
          
          <p className="text-lg text-gray-400 mb-4 leading-relaxed max-w-3xl">
            At Academic Pal, we take your privacy seriously. This comprehensive Privacy Policy explains how we collect, use, protect, and share your personal information when you use our platform and services.
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
          <h2 className="text-2xl font-bold text-white mb-4">Introduction</h2>
          <p className="text-gray-400 leading-relaxed mb-4">
            This Privacy Policy ("Policy") describes how Academic Pal ("we", "our", "us", or the "Platform") collects, uses, stores, protects, and discloses your personal information. 
            By accessing or using Academic Pal, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy and our Terms and Conditions.
          </p>
          <p className="text-gray-400 leading-relaxed">
            If you do not agree with any part of this Policy, please do not use our services. We reserve the right to update this Policy at any time, 
            and continued use after changes constitutes acceptance of the revised Policy.
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
                    <h2 className="text-2xl font-bold text-white mb-2">
                      {index + 1}. {section.title}
                    </h2>
                  </div>
                </div>

                <div className="space-y-6 ml-0 sm:ml-16">
                  {section.content.map((item, idx) => (
                    <div key={idx}>
                      <h3 className="text-lg font-semibold text-blue-400 mb-2">
                        {item.subtitle}
                      </h3>
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
          <h3 className="text-xl font-bold text-white mb-4">Questions or Concerns?</h3>
          <p className="text-gray-400 mb-6 leading-relaxed">
            If you have any questions about this Privacy Policy, need clarification on any section, 
            or wish to exercise your data rights, please don't hesitate to contact us at{" "}
            <a href="mailto:Hariharanath247@gmail.com" className="text-blue-400 hover:text-blue-300 underline">
              Hariharanath247@gmail.com
            </a>
          </p>
          
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-semibold transition-all duration-300 hover:scale-105"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-8 text-center text-sm text-gray-500"
        >
          <p>
            By using Academic Pal, you acknowledge that you have read and understood this Privacy Policy 
            and agree to its terms and conditions.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

