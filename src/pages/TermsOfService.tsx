
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const TermsOfService = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container px-4 md:px-6 py-12 mx-auto">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>
          
          <div className="prose max-w-none">
            <p className="mb-4">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Agreement to Terms</h2>
            <p className="mb-4">
              By accessing or using SquadAssist's services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing our services.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">2. Use License</h2>
            <p className="mb-4">
              Permission is granted to temporarily access the materials on SquadAssist's website or through our services for personal, non-commercial use only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to decompile or reverse engineer any software contained on SquadAssist's website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
              <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">3. Account Terms</h2>
            <p className="mb-4">
              To access certain features of our services, you may be required to register for an account. You must provide accurate, current, and complete information during the registration process and keep your account information up-to-date.
            </p>
            <p className="mb-4">
              You are responsible for safeguarding your password and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">4. User Content</h2>
            <p className="mb-4">
              Our services may allow you to post, link, store, share, and otherwise make available certain information, text, graphics, or other material. You are responsible for the content you post and its legality, reliability, and appropriateness.
            </p>
            <p className="mb-4">
              By posting content, you grant us the right to use, modify, publicly perform, publicly display, reproduce, and distribute such content on and through our services.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Intellectual Property</h2>
            <p className="mb-4">
              The SquadAssist name, logo, and all related names, logos, product and service names, designs, and slogans are trademarks of SquadAssist or its affiliates. You must not use such marks without our prior written permission.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Disclaimer</h2>
            <p className="mb-4">
              SquadAssist's services are provided on an "as is" and "as available" basis. SquadAssist makes no warranties, expressed or implied, and hereby disclaims all warranties, including without limitation, implied warranties of merchantability, fitness for a particular purpose, or non-infringement.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">7. Limitation of Liability</h2>
            <p className="mb-4">
              In no event shall SquadAssist be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use SquadAssist's services.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">8. Indemnification</h2>
            <p className="mb-4">
              You agree to indemnify and hold harmless SquadAssist and its affiliates from any claim or demand, including reasonable attorneys' fees, made by any third party due to or arising out of your use of our services, your violation of these Terms, or your violation of any rights of another.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">9. Governing Law</h2>
            <p className="mb-4">
              These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which SquadAssist is established, without regard to its conflict of law provisions.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">10. Changes to Terms</h2>
            <p className="mb-4">
              We reserve the right to modify these Terms at any time. We will notify you of any changes by posting the new Terms on our website and updating the "Last updated" date.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">11. Contact Us</h2>
            <p className="mb-4">
              If you have any questions about these Terms, please contact us at legal@squadassist.ai.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
