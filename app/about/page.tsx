import type { Metadata } from "next";
import Header from "components/Header";
import Footer from "components/Footer";
import Section from "components/Section";
import Accordion from "components/Accordion";

export const metadata: Metadata = {
  title: "회사소개 - 산업안전용품 전문 제조업체",
  description:
    "영지하네스 회사소개. 대표 박준영, 사업자번호 340-01-0187606. 충북 음성 소재 산업안전용품 전문 제조업체. 특수 직물, 세폭직물, NYLON원사, POLY원사 활용 제품 생산.",
  keywords: ["영지하네스 회사소개", "산업안전용품 제조업체", "충북 음성", "박준영", "특수 직물 직조업", "안전용품 공장"],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "회사소개 - 영지하네스",
    description: "산업안전용품 전문 제조업체 영지하네스를 소개합니다. 대표 박준영, 충북 음성 소재.",
    url: "/about",
  },
};

const historyItems = [
  {
    title: "사업 개시",
    content: "산업안전용품 전문 제조업체 영지하네스를 설립하고, 특수 직물 및 세폭직물 생산을 시작했습니다.",
  },
  {
    title: "생산설비 확충",
    content: "최신 직조 설비를 도입하고 생산 라인을 확충하여 다양한 산업안전용품 생산 역량을 강화했습니다.",
  },
  {
    title: "품질관리 시스템 구축",
    content: "엄격한 품질관리 시스템을 도입하여 모든 제품의 안전성과 내구성을 보증하는 체계를 확립했습니다.",
  },
  {
    title: "사업 영역 확대",
    content: "기타 직물제품, 세폭직물 등 다양한 제품군으로 사업 영역을 확대하며 성장을 이어가고 있습니다.",
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      <Header />
      <main>
        <section className="text-center my-20 mx-4 sm:mx-8 md:mx-16 lg:mx-24">
          <h1 className="font-sans text-3xl tracking-tighter sm:text-5xl md:text-6xl dark:text-white mb-6">
            회사소개
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 font-light max-w-3xl mx-auto">
            안전을 직조하는 기업, 영지하네스를 소개합니다.
          </p>
        </section>

        <section className="container mx-auto px-4 py-12 bg-gray-50 dark:bg-gray-900 rounded-lg">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-900 dark:text-white mb-8 text-center">
              회사 개요
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-1">상호</h3>
                <p className="text-lg text-gray-900 dark:text-white">영지하네스</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-1">대표자</h3>
                <p className="text-lg text-gray-900 dark:text-white">박준영</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-1">사업자번호</h3>
                <p className="text-lg text-gray-900 dark:text-white">340-01-0187606</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-1">소재지</h3>
                <p className="text-lg text-gray-900 dark:text-white">충청북도 음성군 감곡면 오갑길192번길 11</p>
              </div>
            </div>
          </div>
        </section>

        <Section
          leftHalf={
            <>
              <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-900 dark:text-white mb-4">
                사업 분야
              </h2>
              <p className="text-xl font-light text-gray-600 dark:text-gray-300 mb-6">
                영지하네스는 산업안전용품 제조 전문 기업으로, 다양한 직물 제품을 생산하고 있습니다.
              </p>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-brand-600 dark:text-brand-400 font-bold">01</span>
                  <span>특수 직물 및 기타 직물 직조업</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-600 dark:text-brand-400 font-bold">02</span>
                  <span>기타 직물제품 제조</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-600 dark:text-brand-400 font-bold">03</span>
                  <span>세폭직물 생산</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-600 dark:text-brand-400 font-bold">04</span>
                  <span>산업안전용품 제조</span>
                </li>
              </ul>
            </>
          }
          rightHalf={
            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-8 w-full">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">원자재</h3>
              <div className="space-y-4">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-semibold text-brand-600 dark:text-brand-400">NYLON원사</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                    높은 강도와 내마모성을 갖춘 나일론 원사를 사용하여 안전용품의 내구성을 확보합니다.
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-semibold text-brand-600 dark:text-brand-400">POLY원사</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                    우수한 내화학성과 경량성을 가진 폴리에스터 원사로 다양한 환경에서의 안전성을 보장합니다.
                  </p>
                </div>
              </div>
            </div>
          }
        />

        <section className="container mx-auto py-16 px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-900 dark:text-white mb-8 text-center">
            회사 연혁 및 비전
          </h2>
          <div className="max-w-3xl mx-auto">
            <Accordion items={historyItems} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
