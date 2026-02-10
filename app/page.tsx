import Header from "components/Header";
import Hero from "components/Hero";
import Features from "components/Features";
import Section from "components/Section";
import Footer from "components/Footer";
import Accordion from "components/Accordion";
import Link from "next/link";

const companyHighlights = [
  {
    title: "설립 및 성장",
    content: "영지하네스는 산업안전용품 전문 제조업체로서 꾸준한 성장을 이어오고 있습니다. NYLON원사, POLY원사를 활용한 고품질 제품을 생산하고 있습니다.",
  },
  {
    title: "기술력 확보",
    content: "특수 직물 및 세폭직물 직조 기술을 보유하고 있으며, 지속적인 연구개발을 통해 제품의 품질을 향상시키고 있습니다.",
  },
  {
    title: "비전",
    content: "산업 현장의 안전을 최우선으로 생각하며, 국내 최고의 산업안전용품 제조업체로 도약하는 것을 목표로 합니다.",
  },
];

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      <Header />
      <main>
        <Hero />
        <Features />
        <Section
          leftHalf={
            <>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">
                산업 현장의 안전을<br />책임지는 기업
              </h2>
              <p className="text-xl font-light text-gray-600 dark:text-gray-300 mb-6">
                영지하네스는 충북 음성에 위치한 산업안전용품 전문 제조업체입니다.
                특수 직물, 세폭직물, 기타 직물제품을 생산하며, NYLON원사와 POLY원사를 활용하여
                안전하고 내구성 높은 제품을 만들고 있습니다.
              </p>
              <Link
                href="/about"
                className="inline-block bg-brand-600 text-white px-5 py-2 rounded-md text-base font-semibold hover:bg-brand-700 transition duration-300"
              >
                회사소개 자세히 보기
              </Link>
            </>
          }
          rightHalf={
            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-8 w-full">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <p className="text-3xl font-bold text-brand-600 dark:text-brand-400">전문</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">산업안전용품 제조</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-brand-600 dark:text-brand-400">품질</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">엄격한 품질관리</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-brand-600 dark:text-brand-400">신뢰</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">고객 만족 실현</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-brand-600 dark:text-brand-400">기술</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">특수 직물 기술력</p>
                </div>
              </div>
            </div>
          }
        />
        <Section
          leftHalf={<Accordion items={companyHighlights} />}
          rightHalf={
            <div className="flex flex-col justify-end">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">
                영지하네스의 발자취
              </h2>
              <p className="text-xl font-light text-gray-600 dark:text-gray-300">
                끊임없는 기술 개발과 품질 향상으로 산업안전용품 분야에서 신뢰받는 기업으로 성장해 왔습니다.
                앞으로도 현장의 안전을 위해 최선을 다하겠습니다.
              </p>
            </div>
          }
        />
      </main>
      <Footer />
    </div>
  );
}
