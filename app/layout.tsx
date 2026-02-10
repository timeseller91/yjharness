import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";

import "styles/globals.css";

const SITE_URL = "https://yjharness.com";

export const metadata: Metadata = {
  title: {
    default: "영지하네스 - 산업안전용품 전문 제조 | 안전 하네스, 특수 직물",
    template: "%s | 영지하네스",
  },
  description:
    "영지하네스는 충북 음성 소재 산업안전용품 전문 제조업체입니다. NYLON원사·POLY원사를 활용한 안전 하네스, 안전 벨트, 특수 직물, 세폭직물을 생산합니다. 대표 박준영 | 사업자번호 340-01-0187606",
  keywords: [
    "영지하네스",
    "산업안전용품",
    "안전 하네스",
    "안전 벨트",
    "특수 직물",
    "세폭직물",
    "NYLON원사",
    "POLY원사",
    "직물 직조",
    "산업용 웨빙",
    "안전용품 제조",
    "충북 음성",
    "감곡면",
    "안전장비",
    "추락방지",
    "산업안전",
    "직물제품",
    "하네스 제조",
    "안전벨트 제조",
    "특수직물 제조업체",
  ],
  authors: [{ name: "영지하네스" }],
  creator: "영지하네스",
  publisher: "영지하네스",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: SITE_URL,
    siteName: "영지하네스",
    title: "영지하네스 - 산업안전용품 전문 제조 | 안전 하네스, 특수 직물",
    description:
      "NYLON원사·POLY원사를 활용한 산업안전용품 전문 제조업체. 안전 하네스, 안전 벨트, 특수 직물, 세폭직물 생산. 충북 음성 소재.",
  },
  twitter: {
    card: "summary",
    title: "영지하네스 - 산업안전용품 전문 제조",
    description:
      "NYLON원사·POLY원사를 활용한 산업안전용품 전문 제조업체. 안전 하네스, 안전 벨트, 특수 직물 생산.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    other: {
      "naver-site-verification": "69fa14cfe40ce373bf6186a3ebccd827379b2b84",
    },
  },
  category: "manufacturing",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "영지하네스",
    url: SITE_URL,
    logo: `${SITE_URL}/favicon.svg`,
    description:
      "NYLON원사, POLY원사를 활용한 산업안전용품 전문 제조업체. 특수 직물, 세폭직물, 안전 하네스, 안전 벨트 생산.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "감곡면 오갑길192번길 11",
      addressLocality: "음성군",
      addressRegion: "충청북도",
      addressCountry: "KR",
    },
    founder: {
      "@type": "Person",
      name: "박준영",
    },
    taxID: "340-01-0187606",
    industry: "특수 직물 및 기타 직물 직조업",
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "산업안전용품",
          category: "안전 하네스, 안전 벨트, 특수 직물, 세폭직물",
        },
      },
    ],
  };

  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "영지하네스",
    description: "산업안전용품 전문 제조업체",
    url: SITE_URL,
    address: {
      "@type": "PostalAddress",
      streetAddress: "감곡면 오갑길192번길 11",
      addressLocality: "음성군",
      addressRegion: "충청북도",
      postalCode: "27646",
      addressCountry: "KR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "36.9438",
      longitude: "127.5833",
    },
    priceRange: "$$",
  };

  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100..900&family=Inter+Tight:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </head>
      <body className="bg-white dark:bg-black min-h-screen">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
