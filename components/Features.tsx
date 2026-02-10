import React from "react";
import FeatureCard from "./FeatureCard";
import { FaShieldAlt, FaIndustry, FaCogs, FaCertificate, FaHandshake, FaTruck } from "react-icons/fa";

const Features = () => {
  const features = [
    {
      icon: FaShieldAlt,
      title: "산업안전 전문",
      description: "산업 현장의 안전을 최우선으로 생각하며, 고품질 안전용품을 제조합니다.",
    },
    {
      icon: FaIndustry,
      title: "특수 직물 기술",
      description: "특수 직물 및 세폭직물 직조 기술로 다양한 산업용 제품을 생산합니다.",
    },
    {
      icon: FaCogs,
      title: "최신 생산설비",
      description: "현대화된 생산설비를 갖추어 일관된 품질과 효율적인 생산을 보장합니다.",
    },
    {
      icon: FaCertificate,
      title: "품질 보증",
      description: "엄격한 품질 관리 시스템을 통해 모든 제품의 안전성과 내구성을 보증합니다.",
    },
    {
      icon: FaHandshake,
      title: "맞춤형 생산",
      description: "고객의 요구사항에 맞춘 맞춤형 제품 생산으로 최적의 솔루션을 제공합니다.",
    },
    {
      icon: FaTruck,
      title: "신속한 납품",
      description: "체계적인 생산 관리로 약속된 납기를 준수하며 신뢰를 쌓아갑니다.",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-12 bg-gray-50 dark:bg-gray-900 transition-colors duration-200 rounded-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">
            영지하네스의 강점
          </h2>
          <p className="mt-8 text-xl text-gray-600 dark:text-gray-300 font-light">
            오랜 경험과 기술력으로 산업 현장의 안전을 책임지는 영지하네스의 핵심 역량을 소개합니다.
          </p>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
