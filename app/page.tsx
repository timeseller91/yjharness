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
    content:
      "영지하네스는 산업안전용품 전문 제조업체로서 꾸준한 성장을 이어오고 있습니다. NYLON원사, POLY원사를 활용한 고품질 제품을 생산하고 있습니다.",
  },
  {
    title: "기술력 확보",
    content:
      "특수 직물 및 세폭직물 직조 기술을 보유하고 있으며, 지속적인 연구개발을 통해 제품의 품질을 향상시키고 있습니다.",
  },
  {
    title: "비전",
    content:
      "산업 현장의 안전을 최우선으로 생각하며, 국내 최고의 산업안전용품 제조업체로 도약하는 것을 목표로 합니다.",
  },
];

const faqItems = [
  {
    question: "영지하네스는 어떤 제품을 생산하나요?",
    answer:
      "영지하네스는 산업안전용품 전문 제조업체로, NYLON원사와 POLY원사를 활용하여 안전 하네스, 안전 벨트, 세폭직물(웨빙), 특수 직물 제품 등을 생산합니다. 고객 요구에 맞춘 맞춤형 제작도 가능합니다.",
  },
  {
    question: "영지하네스 제품의 원자재는 무엇인가요?",
    answer:
      "주요 원자재는 NYLON원사와 POLY원사입니다. NYLON원사는 높은 인장 강도와 내마모성으로 안전 하네스 등 핵심 안전용품에 사용되며, POLY원사는 내화학성과 내후성이 뛰어나 야외 작업 환경의 안전용품에 적합합니다.",
  },
];

export default function Page() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Header />
      <main>
        <Hero />
        <Features />
        <Section
          leftHalf={
            <>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">
                산업 현장의 안전을
                <br />
                책임지는 기업
              </h2>
              <p className="text-xl font-light text-gray-600 dark:text-gray-300 mb-6">
                영지하네스는 충북 음성에 위치한 산업안전용품 전문 제조업체입니다. 특수 직물, 세폭직물, 기타 직물제품을
                생산하며, NYLON원사와 POLY원사를 활용하여 안전하고 내구성 높은 제품을 만들고 있습니다.
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
                끊임없는 기술 개발과 품질 향상으로 산업안전용품 분야에서 신뢰받는 기업으로 성장해 왔습니다. 앞으로도
                현장의 안전을 위해 최선을 다하겠습니다.
              </p>
            </div>
          }
        />

        {/* FAQ 섹션 - SEO 최적화 */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-900 dark:text-white mb-10 text-center">
              자주 묻는 질문
            </h2>
            <div className="space-y-6">
              {faqItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6"
                >
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Q. {item.question}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 font-light leading-relaxed">
                    A. {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
