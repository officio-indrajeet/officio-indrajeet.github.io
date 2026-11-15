import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "../src/index.css";
import { userData } from "../src/data/userData";

const siteTitle = `${userData.name} | ${userData.title}`;

export const metadata: Metadata = {
  metadataBase: new URL(userData.website),
  title: siteTitle,
  description: userData.bio,
  applicationName: "Indrajeet Kumar Portfolio",
  authors: [{ name: userData.name, url: userData.website }],
  creator: userData.name,
  publisher: userData.name,
  keywords: [
    "Indrajeet Kumar",
    "Senior Software Engineer",
    "Full Stack Development",
    "Java",
    "Spring Boot",
    "React",
    "Angular",
    "TypeScript",
    "Apache Kafka",
    "Distributed Systems",
    "AWS",
    "Kubernetes",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/profile.jpg",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: siteTitle,
    description: userData.bio,
    siteName: "Indrajeet Kumar",
    images: [
      {
        url: "/profile.jpg",
        alt: "Indrajeet Kumar — Senior Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: userData.bio,
    images: ["/profile.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#f5f5f7",
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: userData.name,
  jobTitle: userData.title,
  url: userData.website,
  image: new URL(userData.avatar, userData.website).toString(),
  email: `mailto:${userData.email}`,
  sameAs: [userData.github, userData.linkedin],
  knowsAbout: [
    "Java",
    "Spring Boot",
    "Distributed Systems",
    "Microservices",
    "Apache Kafka",
    "Kubernetes",
    "AWS",
    "Frontend Engineering",
    "React",
    "Angular",
    "Full-stack Development",
  ],
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}
