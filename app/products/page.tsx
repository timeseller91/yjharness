import Header from "components/Header";
import Footer from "components/Footer";
import FeatureCard from "components/FeatureCard";
import { FaShieldAlt, FaLink, FaHardHat, FaVest, FaRulerCombined, FaProjectDiagram } from "react-icons/fa";

const products = [
  {
    icon: FaShieldAlt,
    title: "안전 하네스",
    description: "고강도 NYLON원사와 POLY원사로 제작된 산업용 안전 하네스. 작업자의 추락을 방지하며 높은 내구성을 자랑합니다.",
  },
  {
    icon: FaLink,
    title: "안전 벨트",
    description: "다양한 산업 현장에서 사용 가능한 안전 벨트. 인체공학적 설계로 착용감이 우수합니다.",
  },
  {
    icon: FaRulerCombined,
    title: "세폭직물 제품",
    description: "정밀한 세폭직물 기술로 생산된 다양한 폭의 웨빙(Webbing) 제품. 안전 장비의 핵심 소재입니다.",
  },
  {
    icon: FaVest,
    title: "특수 직물 제품",
    description: "특수 직물 직조 기술로 제작된 고기능성 직물 제품. 산업용 특수 목적에 최적화되어 있습니다.",
  },
  {
    icon: FaProjectDiagram,
    title: "기타 직물제품",
    description: "산업 현장에서 필요한 다양한 직물 기반 제품을 생산합니다. 고객 요구에 맞춘 맞춤 생산이 가능합니다.",
  },
  {
    icon: FaHardHat,
    title: "맞춤형 안전용품",
    description: "고객사의 특수 요구사항에 맞춘 맞춤형 산업안전용품을 설계하고 제작합니다.",
  },
];

export default function ProductsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      <Header />
      <main>
        <section className="text-center my-20 mx-4 sm:mx-8 md:mx-16 lg:mx-24">
          <h1 className="font-sans text-3xl tracking-tighter sm:text-5xl md:text-6xl dark:text-white mb-6">
            제품 소개
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 font-light max-w-3xl mx-auto">
            NYLON원사와 POLY원사를 활용하여 제조하는 영지하네스의 산업안전용품을 소개합니다.
          </p>
        </section>

        <section className="container mx-auto px-4 py-12 bg-gray-50 dark:bg-gray-900 rounded-lg mb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-900 dark:text-white mb-4">
                제품 카테고리
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 font-light">
                특수 직물, 기타 직물제품, 세폭직물 기술을 기반으로 한 다양한 제품을 제공합니다.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((product, index) => (
                <FeatureCard key={index} {...product} />
              ))}
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-900 dark:text-white mb-6">
              원자재 안내
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-brand-600 dark:text-brand-400 mb-3">NYLON원사</h3>
                <p className="text-gray-600 dark:text-gray-300 font-light">
                  뛰어난 인장 강도와 내마모성을 갖춘 나일론 원사입니다.
                  충격 흡수 능력이 우수하여 안전 하네스, 안전 벨트 등
                  핵심 안전용품의 주요 소재로 사용됩니다.
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-brand-600 dark:text-brand-400 mb-3">POLY원사</h3>
                <p className="text-gray-600 dark:text-gray-300 font-light">
                  내화학성과 내후성이 뛰어난 폴리에스터 원사입니다.
                  가볍고 건조가 빠르며 자외선에 강해
                  야외 작업 환경에서의 안전용품에 적합합니다.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
