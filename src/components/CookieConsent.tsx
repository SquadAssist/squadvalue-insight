
import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Switch } from '@/components/ui/switch';

type CookiePreferences = {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
};

const CookieConsent = () => {
  const [open, setOpen] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true, // Essential cookies cannot be disabled
    analytics: false,
    marketing: false
  });

  // Check if user has already set cookie preferences
  useEffect(() => {
    const storedPreferences = localStorage.getItem('cookie_preferences');
    if (storedPreferences) {
      setPreferences(JSON.parse(storedPreferences));
      // Consent already given, don't show banner
    } else {
      // No consent yet, show banner after a short delay
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  // Listen for the custom event to open cookie preferences
  useEffect(() => {
    const handleOpenPreferences = () => {
      setOpen(true);
    };
    
    window.addEventListener('openCookiePreferences', handleOpenPreferences);
    
    return () => {
      window.removeEventListener('openCookiePreferences', handleOpenPreferences);
    };
  }, []);

  const handleAcceptAll = () => {
    const newPreferences = {
      essential: true,
      analytics: true,
      marketing: true
    };
    setPreferences(newPreferences);
    savePreferences(newPreferences);
    setShowBanner(false);
    setOpen(false);
  };

  const handleAcceptSelected = () => {
    savePreferences(preferences);
    setShowBanner(false);
    setOpen(false);
  };

  const handleRejectAll = () => {
    const newPreferences = {
      essential: true, // Essential cookies always enabled
      analytics: false,
      marketing: false
    };
    setPreferences(newPreferences);
    savePreferences(newPreferences);
    setShowBanner(false);
    setOpen(false);
  };

  const savePreferences = (prefs: CookiePreferences) => {
    localStorage.setItem('cookie_preferences', JSON.stringify(prefs));
    
    // Apply cookie preferences
    if (prefs.marketing) {
      // Enable Salesflare tracking if marketing cookies are accepted
      try {
        if (typeof window !== 'undefined' && (window as any).flare) {
          console.log('Enabling Salesflare tracking');
        }
      } catch (error) {
        console.error('Error initializing marketing cookies:', error);
      }
    } else {
      // Disable or clean up marketing cookies if rejected
      try {
        // Code to disable tracking would go here
        console.log('Disabling marketing cookies');
      } catch (error) {
        console.error('Error cleaning up marketing cookies:', error);
      }
    }
  };

  const handleToggleChange = (type: keyof CookiePreferences) => {
    if (type === 'essential') return; // Cannot toggle essential cookies
    
    setPreferences(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  const openPreferences = () => {
    setShowBanner(false);
    setOpen(true);
  };

  // For testing/debugging purposes, let's force show the banner if no preferences exist
  const hasPreferences = localStorage.getItem('cookie_preferences');

  return (
    <>
      {/* Cookie Banner */}
      {(showBanner || !hasPreferences) && (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white shadow-2xl border-t-2 border-blue-600">
          <div className="container mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <h3 className="font-semibold text-lg text-gray-900">We Value Your Privacy</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                We use cookies to enhance your browsing experience, provide personalized content, and analyze our traffic.
                By clicking "Accept All", you consent to our use of cookies. Read our{' '}
                <Link to="/cookie-policy" className="text-blue-600 hover:text-blue-800 font-medium underline">Cookie Policy</Link>{' '}
                for more information.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 shrink-0">
              <Button 
                variant="outline" 
                onClick={handleRejectAll}
                className="border-gray-300 text-gray-700 hover:bg-gray-50"
              >
                Reject All
              </Button>
              <Button 
                variant="outline" 
                onClick={openPreferences}
                className="border-blue-600 text-blue-600 hover:bg-blue-50"
              >
                Customize
              </Button>
              <Button 
                onClick={handleAcceptAll}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                Accept All
              </Button>
            </div>
          </div>
        </div>
      )}
      
      {/* Cookie Preferences Dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold text-gray-900">Cookie Preferences</DialogTitle>
            <DialogDescription className="text-gray-600">
              Customize your cookie settings. Essential cookies are required for the website to function properly and cannot be disabled.
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4 py-4">
            <div className="flex items-center justify-between p-3 rounded-lg border border-gray-200 bg-gray-50">
              <div>
                <p className="font-medium text-gray-900">Essential Cookies</p>
                <p className="text-sm text-gray-600">Required for website functionality</p>
              </div>
              <Switch checked={true} disabled className="data-[state=checked]:bg-blue-600" />
            </div>
            
            <div className="flex items-center justify-between p-3 rounded-lg border border-gray-200">
              <div>
                <p className="font-medium text-gray-900">Analytics Cookies</p>
                <p className="text-sm text-gray-600">Help us improve our website performance</p>
              </div>
              <Switch 
                checked={preferences.analytics} 
                onCheckedChange={() => handleToggleChange('analytics')}
                className="data-[state=checked]:bg-blue-600"
              />
            </div>
            
            <div className="flex items-center justify-between p-3 rounded-lg border border-gray-200">
              <div>
                <p className="font-medium text-gray-900">Marketing Cookies</p>
                <p className="text-sm text-gray-600">Enable personalized content and ads</p>
              </div>
              <Switch 
                checked={preferences.marketing} 
                onCheckedChange={() => handleToggleChange('marketing')}
                className="data-[state=checked]:bg-blue-600"
              />
            </div>
            
            <div className="pt-4 text-sm text-gray-500 bg-gray-50 p-3 rounded-lg">
              For detailed information about our data practices, please read our{' '}
              <Link to="/cookie-policy" className="text-blue-600 hover:text-blue-800 font-medium underline" onClick={() => setOpen(false)}>
                Cookie Policy
              </Link>
              .
            </div>
          </div>
          
          <DialogFooter className="flex flex-col-reverse sm:flex-row sm:space-x-2">
            <Button 
              variant="outline" 
              onClick={handleRejectAll}
              className="border-gray-300 text-gray-700 hover:bg-gray-50"
            >
              Reject All
            </Button>
            <Button 
              onClick={handleAcceptSelected}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Save Preferences
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CookieConsent;
