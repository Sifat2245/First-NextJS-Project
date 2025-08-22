"use client";
import { CheckCircle } from "lucide-react";

const features = [
  {
    title: "Fast & Reliable",
    description:
      "Our product is optimized for performance and reliability to give you the best experience.",
  },
  {
    title: "Easy to Use",
    description:
      "A simple and intuitive interface that anyone can start using without a learning curve.",
  },
  {
    title: "Secure",
    description:
      "We take security seriously and protect your data with enterprise-grade measures.",
  },
  {
    title: "24/7 Support",
    description:
      "Our dedicated support team is always available to assist you whenever you need help.",
  },
];

export default function ServicesPage() {
  return (
    <section className="py-16 px-6 container mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">Features & Services</h1>
        <p className="mt-3 text-gray-600 max-w-xl mx-auto">
          Discover the key benefits of using our product and how it helps you
          achieve more with less effort.
        </p>
      </div>

      {/* Features List */}
      <div className="max-w-3xl mx-auto grid gap-8">
        {features.map((feature, i) => (
          <div
            key={i}
            className="flex items-start gap-4 bg-white shadow-md p-6 rounded-xl hover:shadow-lg transition"
          >
            <CheckCircle className="w-7 h-7 text-blue-600 flex-shrink-0" />
            <div>
              <h2 className="text-lg font-semibold text-gray-800">
                {feature.title}
              </h2>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
