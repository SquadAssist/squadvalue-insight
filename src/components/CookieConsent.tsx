
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

  return (
    <>
      {/* Cookie Banner */}
      {showBanner && (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white shadow-lg border-t border-gray-200">
          <div className="container mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex-1">
              <h3 className="font-semibold text-lg">Cookie Consent</h3>
              <p className="text-gray-600 text-sm mt-1">
                We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic.
                By clicking "Accept All", you consent to our use of cookies. Read our{' '}
                <Link to="/cookie-policy" className="text-blue-600 hover:underline">Cookie Policy</Link> for more information.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 shrink-0">
              <Button variant="outline" onClick={handleRejectAll}>
                Reject All
              </Button>
              <Button variant="outline" onClick={openPreferences}>
                Preferences
              </Button>
              <Button onClick={handleAcceptAll}>
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
            <DialogTitle>Cookie Preferences</DialogTitle>
            <DialogDescription>
              Customize your cookie preferences. Essential cookies cannot be disabled as they are necessary for the website to function properly.
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4 py-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Essential Cookies</p>
                <p className="text-sm text-gray-500">Required for the website to function</p>
              </div>
              <Switch checked={true} disabled />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Analytics Cookies</p>
                <p className="text-sm text-gray-500">Help us improve our website</p>
              </div>
              <Switch 
                checked={preferences.analytics} 
                onCheckedChange={() => handleToggleChange('analytics')} 
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Marketing Cookies</p>
                <p className="text-sm text-gray-500">Personalized ads and content</p>
              </div>
              <Switch 
                checked={preferences.marketing} 
                onCheckedChange={() => handleToggleChange('marketing')} 
              />
            </div>
            
            <div className="pt-4 text-sm text-gray-500">
              For more details, please read our{' '}
              <Link to="/cookie-policy" className="text-blue-600 hover:underline" onClick={() => setOpen(false)}>
                Cookie Policy
              </Link>
              .
            </div>
          </div>
          
          <DialogFooter className="flex flex-col-reverse sm:flex-row sm:space-x-2">
            <Button variant="outline" onClick={handleRejectAll}>Reject All</Button>
            <Button onClick={handleAcceptSelected}>Save Preferences</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CookieConsent;
