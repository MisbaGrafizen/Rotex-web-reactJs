import React from 'react'
import Header from '../../component/Header'
import Footer from '../../component/Footer'

export default function PrivacyPolicy() {
  return (
  <>
  <Header />

         <div className=" pt-[110px] font-Poppins bg-white">
      {/* Header Section */}
      <div className="py-10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <div className="flex items-center justify-center space-x-2 mb-3">
            <div className="w-2 h-2 bg-[#025da8] rounded-full"></div>
            <div className="w-8 h-0.5 bg-gray-300"></div>
            <div className="w-2 h-2 bg-[#025da8] rounded-full"></div>
            <div className="w-8 h-0.5 bg-gray-300"></div>
            <div className="w-2 h-2 bg-[#025da8] rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className=" md11:w-[80%] 2xl:w-[1300px]  mx-auto px-[30px] md11:px-4 py">
        {/* Introduction */}
        <div className="mb-12">
          <p className="text-gray-700 leading-relaxed text-lg">
            <strong>Rotex Fan</strong> is committed to protecting and respecting your privacy. This Privacy Policy
            outlines how we collect, use, and protect your personal information when you interact with our website,
            purchase our products, or use our services. By accessing or using our services, you agree to the terms of
            this Privacy Policy.
          </p>
        </div>

        {/* Section 1 */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">1. Information We Collect</h2>
          <p className="text-gray-700 mb-4">We collect the following types of personal information:</p>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <div>
                <strong>Personal Identifiable Information (PII):</strong> This may include your name, address, phone
                number, email address, and payment information when you make a purchase.
              </div>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <div>
                <strong>Technical Data:</strong> We collect information about your device and how you interact with our
                website, including IP addresses, browser types, and usage patterns.
              </div>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <div>
                <strong>Cookies:</strong> We use cookies to track your activity on our website, enhance your experience,
                and gather analytical data.
              </div>
            </li>
          </ul>
        </div>

        {/* Section 2 */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">2. How We Use Your Information</h2>
          <p className="text-gray-700 mb-4">We use the information we collect for the following purposes:</p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>To process and fulfill orders for getting fans and related products</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>
                To communicate with you regarding your orders, customer service inquiries, and promotional offers
              </span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>To improve our website and services based on your preferences and behavior</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>To comply with legal obligations, such as taxes or fraud prevention</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>To send newsletters or marketing materials if you opt in</span>
            </li>
          </ul>
        </div>

        {/* Section 3 */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">3. Sharing Your Information</h2>
          <p className="text-gray-700 mb-4">
            We do not sell, rent, or trade your personal information to third parties. However, we may share your data
            with trusted third parties in the following situations:
          </p>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <div>
                <strong>Service Providers:</strong> We may share your information with third-party companies that assist
                us in processing payments, delivering products, or handling customer service.
              </div>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <div>
                <strong>Legal Requirements:</strong> We may disclose your information if required by law or in response
                to a legal request from authorities.
              </div>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <div>
                <strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your
                personal data may be transferred to the new owner.
              </div>
            </li>
          </ul>
        </div>

        {/* Section 4 */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">4. Data Security</h2>
          <p className="text-gray-700">
            We take the security of your personal information seriously and implement a variety of security measures to
            maintain the safety of your personal data. However, no method of transmission over the internet or
            electronic storage is completely secure, and we cannot guarantee absolute security.
          </p>
        </div>

        {/* Section 5 */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">5. Your Choices and Rights</h2>
          <p className="text-gray-700 mb-4">You have the following rights regarding your personal information:</p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <div>
                <strong>Access and Correct:</strong> You can access, update, or correct your personal information at any
                time.
              </div>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <div>
                <strong>Opt-Out of Marketing:</strong> You can opt-out of receiving marketing communications by
                following the unsubscribe instructions in our emails.
              </div>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <div>
                <strong>Delete Data:</strong> You may request that we delete your personal data, subject to certain
                legal exceptions.
              </div>
            </li>
          </ul>
        </div>

        {/* Section 6 */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">6. Cookies and Tracking Technologies</h2>
          <p className="text-gray-700">
            We use cookies and similar tracking technologies to enhance your browsing experience. Cookies help us
            analyze trends, administer the website, track users' movement, and gather demographic information. You can
            control the use of cookies through your browser settings.
          </p>
        </div>

        {/* Section 7 */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">7. International Data Transfers</h2>
          <p className="text-gray-700">
            If you are located outside of [Your Country], please note that your data may be transferred to and processed
            in [Country] where our servers are located.
          </p>
        </div>

        {/* Section 8 */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">8. Children's Privacy</h2>
          <p className="text-gray-700">
            Our services are not directed at children under the age of 13, and we do not knowingly collect personal
            information from children. If we learn that we have collected personal information from a child under 13, we
            will take steps to delete that information.
          </p>
        </div>

        {/* Section 9 */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">9. Changes to This Privacy Policy</h2>
          <p className="text-gray-700">
            We reserve the right to update this Privacy Policy from time to time. When we make changes, we will post the
            updated policy on our website with the new effective date.
          </p>
        </div>
      </div>
    </div>


    <Footer />
  </>
  )
}
