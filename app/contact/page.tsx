import type { Metadata } from "next";
import Header from "components/Header";
import Footer from "components/Footer";
import ContactForm from "components/ContactForm";
import { AiOutlineEnvironment, AiOutlineMail } from "react-icons/ai";
import { FaBuilding } from "react-icons/fa";

export const metadata: Metadata = {
  title: "문의하기 - 연락처 및 위치 안내",
  description:
    "영지하네스 문의하기. 충청북도 음성군 감곡면 오갑길192번길 11. 산업안전용품 관련 문의, 제품 상담, 맞춤 제작 문의를 받고 있습니다.",
  keywords: ["영지하네스 문의", "영지하네스 연락처", "영지하네스 위치", "산업안전용품 문의", "음성군 감곡면", "안전용품 상담"],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "문의하기 - 영지하네스",
    description: "영지하네스에 문의하세요. 충북 음성 소재. 제품 상담, 맞춤 제작 문의.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      <Header />
      <main>
        <section className="text-center my-20 mx-4 sm:mx-8 md:mx-16 lg:mx-24">
          <h1 className="font-sans text-3xl tracking-tighter sm:text-5xl md:text-6xl dark:text-white mb-6">
            문의하기
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 font-light max-w-3xl mx-auto">
            영지하네스에 대해 궁금한 점이 있으시면 언제든 문의해주세요.
          </p>
        </section>

        <section className="container mx-auto px-4 py-12 mb-16">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl sm:text-3xl text-gray-900 dark:text-white mb-8">
                연락처 정보
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-brand-100 dark:bg-brand-900 rounded-lg flex items-center justify-center">
                    <FaBuilding className="text-brand-600 dark:text-brand-400" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">회사명</h3>
                    <p className="text-gray-600 dark:text-gray-300">영지하네스</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">대표: 박준영</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-brand-100 dark:bg-brand-900 rounded-lg flex items-center justify-center">
                    <AiOutlineEnvironment className="text-brand-600 dark:text-brand-400" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">주소</h3>
                    <p className="text-gray-600 dark:text-gray-300">충청북도 음성군 감곡면 오갑길192번길 11</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-brand-100 dark:bg-brand-900 rounded-lg flex items-center justify-center">
                    <AiOutlineMail className="text-brand-600 dark:text-brand-400" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">사업자 정보</h3>
                    <p className="text-gray-600 dark:text-gray-300">사업자번호: 340-01-0187606</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">업종: 특수 직물 및 기타 직물 직조업</p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">찾아오시는 길</h3>
                <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6">
                  <p className="text-gray-600 dark:text-gray-300 mb-2">
                    <strong>주소:</strong> 충청북도 음성군 감곡면 오갑길192번길 11
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    감곡면 소재, 오갑길192번길 인근
                  </p>
                </div>
              </div>
            </div>

            <div>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
