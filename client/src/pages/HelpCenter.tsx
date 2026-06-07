import {
  HelpCircle,
  ShoppingCart,
  Truck,
  CreditCard,
  ShieldCheck,
} from "lucide-react";

const HelpCenter = () => {
  const faqs = [
    {
      question: "How do I place an order?",
      answer:
        "Browse products, add items to your cart, proceed to checkout, select an address, and complete payment."
    },
    {
      question: "Can I track my order?",
      answer:
        "Yes. You can track your order in real time from the Orders section."
    },
    {
      question: "What payment methods are supported?",
      answer:
        "SwiftCart supports online card payments and other available payment methods."
    },
    {
      question: "How do I contact support?",
      answer:
        "You can contact our support team through email or phone."
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <HelpCircle className="mx-auto text-green-600 w-14 h-14 mb-4" />
        <h1 className="text-4xl font-bold text-green-700">
          Help Center
        </h1>
        <p className="text-gray-600 mt-3">
          We're here to help you with orders, payments, delivery, and account support.
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-6 mb-12">
        <div className="bg-white shadow rounded-xl p-6 text-center">
          <ShoppingCart className="mx-auto text-green-600 mb-3" />
          <h3 className="font-semibold">Orders</h3>
        </div>

        <div className="bg-white shadow rounded-xl p-6 text-center">
          <Truck className="mx-auto text-green-600 mb-3" />
          <h3 className="font-semibold">Delivery</h3>
        </div>

        <div className="bg-white shadow rounded-xl p-6 text-center">
          <CreditCard className="mx-auto text-green-600 mb-3" />
          <h3 className="font-semibold">Payments</h3>
        </div>

        <div className="bg-white shadow rounded-xl p-6 text-center">
          <ShieldCheck className="mx-auto text-green-600 mb-3" />
          <h3 className="font-semibold">Security</h3>
        </div>
      </div>

      <div className="bg-white shadow-lg rounded-2xl p-8">
        <h2 className="text-2xl font-bold mb-6">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b pb-4"
            >
              <h3 className="font-semibold text-lg">
                {faq.question}
              </h3>

              <p className="text-gray-600 mt-2">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 bg-green-50 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold text-green-700">
          Need More Help?
        </h2>

        <p className="text-gray-600 mt-3">
          Contact our support team anytime.
        </p>

        <div className="mt-5">
          <p>📧 support@swiftcart.com</p>
          <p>📞 +91 7277959834</p>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;