import Link from "next/link";

export default function Hero() {
  return (
    <section className="text-center my-32 mx-4 sm:mx-8 md:mx-16 lg:mx-24">
      <h1 className="font-sans text-3xl tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl dark:text-white mb-6">
        안전을 직조하는 기업,<br />
        <span className="text-brand-600 dark:text-brand-400">영지하네스</span>
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 font-light max-w-3xl mx-auto">
        NYLON원사와 POLY원사를 활용한 산업안전용품 전문 제조업체.<br className="hidden sm:block" />
        특수 직물 기술로 현장의 안전을 책임집니다.
      </p>
      <div className="flex justify-center space-x-6">
        <Link
          href="/products"
          className="bg-brand-600 text-white dark:bg-brand-500 dark:text-white px-6 py-3 rounded-md text-base font-semibold hover:bg-brand-700 dark:hover:bg-brand-600 transition duration-300"
        >
          제품 보기
        </Link>
        <Link
          href="/contact"
          className="bg-black text-white dark:bg-white dark:text-black px-6 py-3 rounded-md text-base font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition duration-300"
        >
          문의하기
        </Link>
      </div>
    </section>
  );
}
