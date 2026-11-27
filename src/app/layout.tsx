import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { MouseGlow } from "@/components/mouse-glow";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lakshmi Priya A — Artificial Intelligence Engineer | Generative AI & LLM Systems",
  description:
    "Portfolio of Lakshmi Priya A, Artificial Intelligence Engineer specializing in Generative AI, RAG pipelines, MCP-based and LangGraph AI agents, and prompt-engineered chatbots.",
  keywords: [
    "Lakshmi Priya A",
    "Artificial Intelligence Engineer",
    "Generative AI",
    "LangGraph",
    "LangChain",
    "RAG",
    "FastMCP",
    "Python AI Developer",
    "Infosys Springboard AI Intern",
  ],
  authors: [{ name: "Lakshmi Priya A" }],
  openGraph: {
    title: "Lakshmi Priya A — Artificial Intelligence Engineer",
    description: "Building Generative AI applications, RAG pipelines, and autonomous AI agents.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-white text-black flex flex-col">
        <MouseGlow />
        {children}
      </body>
    </html>
  );
}
