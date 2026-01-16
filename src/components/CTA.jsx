import React from 'react'

const CTA = () => {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-3xl mx-auto text-center bg-white p-10 rounded-2xl shadow-lg">
        
        <h2 className="text-3xl font-bold text-gray-900">
          Grow Your Business with Experts
        </h2>

        <p className="mt-4 text-gray-600">
          Get a clear strategy and actionable insights for your website.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#"
            className="px-8 py-4 rounded-full bg-indigo-600 text-white font-semibold
                       hover:bg-indigo-700 transition"
          >
            Book a Free Strategy Call
          </a>

          <a
            href="#"
            className="px-8 py-4 rounded-full border-2 border-indigo-600
                       text-indigo-600 font-semibold hover:bg-indigo-600
                       hover:text-white transition"
          >
            Get a Free Website Audit
          </a>
        </div>

        {/* Trust Line */}
        <p className="mt-6 text-sm text-gray-500">
          ⭐ 7+ Years Experience &nbsp;|&nbsp; 🌍 Global Delivery &nbsp;|&nbsp; 💎 Transparent Pricing
        </p>

      </div>
    </section>
  );
}

export default CTA
