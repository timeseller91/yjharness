import Link from "next/link";
import { AiOutlinePhone, AiOutlineEnvironment } from "react-icons/ai";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100 dark:bg-black text-gray-500 dark:text-gray-400 py-8 dark:border-t dark:border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">영지하네스</h3>
            <p className="text-sm leading-relaxed">
              산업안전용품 전문 제조업체로서<br />
              최고 품질의 제품을 제공합니다.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">회사 정보</h4>
            <ul className="text-sm space-y-2">
              <li>대표자: 박준영</li>
              <li>사업자번호: 340-01-0187606</li>
              <li>업종: 특수 직물 및 기타 직물 직조업</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">연락처</h4>
            <ul className="text-sm space-y-2">
              <li className="flex items-start gap-2">
                <AiOutlineEnvironment className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>충청북도 음성군 감곡면 오갑길192번길 11</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-100 dark:border-gray-800 pt-6 flex flex-wrap justify-center sm:justify-between items-center text-sm">
          <p>&copy; {currentYear} 영지하네스. All rights reserved.</p>
          <div className="flex space-x-4 mt-2 sm:mt-0">
            <Link href="/about" className="hover:text-gray-300">회사소개</Link>
            <Link href="/products" className="hover:text-gray-300">제품</Link>
            <Link href="/contact" className="hover:text-gray-300">문의하기</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
