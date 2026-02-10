import type { Metadata } from "next";
import Header from "components/Header";
import Footer from "components/Footer";
import Section from "components/Section";
import { FaCogs, FaIndustry, FaCheckCircle, FaClipboardCheck } from "react-icons/fa";

export const metadata: Metadata = {
  title: "장비설비 - 생산설비 및 생산 공정 안내",
  description:
    "영지하네스 장비설비 안내. 직조기, 제직 설비, 품질검사 장비, 봉제 설비 등 현대화된 생산설비와 원사 준비부터 출하까지의 체계적인 생산 공정을 소개합니다.",
  keywords: ["직조기", "제직 설비", "품질검사 장비", "봉제 설비", "생산 공정", "산업안전용품 생산", "직물 생산설비"],
  alternates: {
    canonical: "/equipment",
  },
  openGraph: {
    title: "장비설비 - 영지하네스",
    description: "현대화된 생산설비와 체계적인 생산 공정을 소개합니다.",
    url: "/equipment",
  },
};

const equipmentList = [
  {
    icon: FaIndustry,
    title: "직조기",
    description: "고성능 직조기를 보유하여 특수 직물 및 세폭직물을 정밀하게 생산합니다. 다양한 폭과 규격의 직물 제작이 가능합니다.",
  },
  {
    icon: FaCogs,
    title: "제직 설비",
    description: "최신 제직 설비를 통해 NYLON원사와 POLY원사를 활용한 고품질 웨빙 및 직물을 생산합니다.",
  },
  {
    icon: FaCheckCircle,
    title: "품질검사 장비",
    description: "인장강도 시험기, 내마모성 시험기 등 품질검사 장비를 갖추고 모든 제품의 안전성을 검증합니다.",
  },
  {
    icon: FaClipboardCheck,
    title: "봉제 설비",
    description: "산업용 봉제 설비를 활용하여 안전 하네스, 안전 벨트 등 완제품을 제작합니다.",
  },
];

const processSteps = [
  { step: "01", title: "원사 준비", desc: "NYLON원사, POLY원사 입고 및 품질 검사" },
  { step: "02", title: "제직 공정", desc: "직조기를 통한 특수 직물 및 세폭직물 생산" },
  { step: "03", title: "가공 처리", desc: "재단, 봉제 등 후가공 처리" },
  { step: "04", title: "품질 검사", desc: "완제품 인장강도, 내구성 등 품질 검증" },
  { step: "05", title: "포장 및 출하", desc: "검수 완료 제품 포장 및 납품" },
];

export default function EquipmentPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      <Header />
      <main>
        <section className="text-center my-20 mx-4 sm:mx-8 md:mx-16 lg:mx-24">
          <h1 className="font-sans text-3xl tracking-tighter sm:text-5xl md:text-6xl dark:text-white mb-6">
            장비설비
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 font-light max-w-3xl mx-auto">
            영지하네스의 현대화된 생산설비와 체계적인 생산 공정을 소개합니다.
          </p>
        </section>

        <section className="container mx-auto px-4 py-12 bg-gray-50 dark:bg-gray-900 rounded-lg mb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-900 dark:text-white mb-10 text-center">
              보유 장비
            </h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              {equipmentList.map((item, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-colors duration-200">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-brand-100 dark:bg-brand-900 rounded-lg flex items-center justify-center">
                      <item.icon className="text-brand-600 dark:text-brand-400" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{item.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 font-light">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Section
          leftHalf={
            <>
              <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-900 dark:text-white mb-4">
                생산 공정
              </h2>
              <p className="text-xl font-light text-gray-600 dark:text-gray-300 mb-6">
                원자재 입고부터 완제품 출하까지 체계적인 공정 관리를 통해
                일관된 품질의 제품을 생산합니다.
              </p>
              <p className="text-gray-600 dark:text-gray-300 font-light">
                모든 생산 단계에서 품질 기준을 준수하며,
                최종 제품은 엄격한 검사를 거쳐 출하됩니다.
              </p>
            </>
          }
          rightHalf={
            <div className="w-full space-y-4">
              {processSteps.map((item) => (
                <div key={item.step} className="flex items-start gap-4 bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                  <span className="text-2xl font-bold text-brand-600 dark:text-brand-400 flex-shrink-0 w-10">
                    {item.step}
                  </span>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">{item.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 font-light">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          }
        />
      </main>
      <Footer />
    </div>
  );
}
