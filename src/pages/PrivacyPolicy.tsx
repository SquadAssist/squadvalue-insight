
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container px-4 md:px-6 py-12 mx-auto">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
          
          <div className="prose max-w-none">
            <p className="mb-4">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
            <p className="mb-4">
              Welcome to SquadAssist ("we," "our," or "us"). We are committed to protecting your privacy and handling your data with transparency. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our service.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">2. Information We Collect</h2>
            <p className="mb-4">We collect information that you provide directly to us when using our services:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Account information: name, email address, password, and profile information</li>
              <li>Service usage data: how you interact with our services, features you use, and other actions taken within our platform</li>
              <li>Device information: hardware model, operating system, unique device identifiers, and network information</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">3. How We Use Your Information</h2>
            <p className="mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Provide, maintain, and improve our services</li>
              <li>Communicate with you about our services, including updates and promotional content</li>
              <li>Personalize your experience and provide content relevant to your interests</li>
              <li>Monitor and analyze trends, usage, and activities in connection with our services</li>
              <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Data Sharing and Disclosure</h2>
            <p className="mb-4">We may share your information with:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Service providers who perform services on our behalf</li>
              <li>Business partners with whom we jointly offer products or services</li>
              <li>Legal authorities when required by law or in response to legal process</li>
              <li>Other parties in connection with a company transaction, such as a merger or sale of assets</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Your Rights and Choices</h2>
            <p className="mb-4">
              You have certain rights regarding your personal information, including the right to access, correct, or delete the personal information we have about you. You can also object to or restrict certain processing of your data.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Data Security</h2>
            <p className="mb-4">
              We implement appropriate technical and organizational measures to protect the security of your personal information from unauthorized access, disclosure, alteration, and destruction.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">7. International Data Transfers</h2>
            <p className="mb-4">
              Your information may be transferred to, and processed in, countries other than the country in which you reside. These countries may have data protection laws that are different from the laws of your country.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">8. Changes to This Privacy Policy</h2>
            <p className="mb-4">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">9. Contact Us</h2>
            <p className="mb-4">
              If you have any questions about this Privacy Policy, please contact us at privacy@squadassist.ai.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
