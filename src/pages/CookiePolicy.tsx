
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const CookiePolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container px-4 md:px-6 py-12 mx-auto">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Cookie Policy</h1>
          
          <div className="prose max-w-none">
            <p className="mb-4">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
            <p className="mb-4">
              This Cookie Policy explains how SquadAssist ("we," "us," or "our") uses cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are and why we use them, as well as your rights to control our use of them.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">2. What are cookies?</h2>
            <p className="mb-4">
              Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.
            </p>
            <p className="mb-4">
              Cookies set by the website owner (in this case, SquadAssist) are called "first-party cookies." Cookies set by parties other than the website owner are called "third-party cookies." Third-party cookies enable third-party features or functionality to be provided on or through the website (e.g., advertising, interactive content, and analytics). The parties that set these third-party cookies can recognize your computer both when it visits the website in question and also when it visits certain other websites.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">3. Types of cookies we use</h2>
            <p className="mb-4">We use the following types of cookies:</p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Essential cookies:</strong> These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website. The website cannot function properly without these cookies.</li>
              <li><strong>Analytics cookies:</strong> These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. They help us improve the website.</li>
              <li><strong>Marketing cookies:</strong> These cookies are used to track visitors across websites. The intention is to display ads that are relevant and engaging for the individual user.</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Specific cookies we use</h2>
            <p className="mb-4">Our website uses the following cookies:</p>
            <div className="overflow-x-auto">
              <table className="min-w-full mb-6">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="px-4 py-2 text-left">Name</th>
                    <th className="px-4 py-2 text-left">Provider</th>
                    <th className="px-4 py-2 text-left">Purpose</th>
                    <th className="px-4 py-2 text-left">Expiry</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="px-4 py-2">_salesflare_session</td>
                    <td className="px-4 py-2">Salesflare</td>
                    <td className="px-4 py-2">Tracks visitor activity for marketing purposes</td>
                    <td className="px-4 py-2">1 year</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="px-4 py-2">cookie_preferences</td>
                    <td className="px-4 py-2">SquadAssist</td>
                    <td className="px-4 py-2">Stores your cookie consent preferences</td>
                    <td className="px-4 py-2">1 year</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">5. How to control cookies</h2>
            <p className="mb-4">
              You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted. As the means by which you can refuse cookies through your web browser controls vary from browser-to-browser, you should visit your browser's help menu for more information.
            </p>
            <p className="mb-4">
              In addition, you can manage your cookie preferences through our Cookie Consent Banner that appears when you first visit our website. You can also change these preferences at any time by clicking on the "Cookie Preferences" link in the footer of our website.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">6. How often will we update this Cookie Policy?</h2>
            <p className="mb-4">
              We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal, or regulatory reasons. We will notify you of any changes by posting the new Cookie Policy on this page and updating the "Last updated" date.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">7. Contact us</h2>
            <p className="mb-4">
              If you have any questions about our use of cookies, please contact us at privacy@squadassist.ai.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CookiePolicy;
