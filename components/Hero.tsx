import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full aspect-video overflow-hidden">
      <Image
        src="/hero-bg.png"
        alt="영지하네스 공장 전경"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h1 className="font-sans text-3xl tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-white mb-6">
          안전을 직조하는 기업,<br />
          <span className="text-brand-300">영지하네스</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-200 mb-10 font-light max-w-3xl mx-auto">
          NYLON원사와 POLY원사를 활용한 산업안전용품 전문 제조업체.<br className="hidden sm:block" />
          특수 직물 기술로 현장의 안전을 책임집니다.
        </p>
        <div className="flex justify-center space-x-6">
          <Link
            href="/products"
            className="bg-brand-600 text-white px-6 py-3 rounded-md text-base font-semibold hover:bg-brand-700 transition duration-300"
          >
            제품 보기
          </Link>
          <Link
            href="/contact"
            className="bg-white text-black px-6 py-3 rounded-md text-base font-semibold hover:bg-gray-200 transition duration-300"
          >
            문의하기
          </Link>
        </div>
      </div>
    </section>
  );
}
