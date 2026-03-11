import { useEffect, useState } from "react";
import { Languages, X } from "lucide-react";

const languages = [
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "hi", name: "हिंदी", flag: "🇮🇳" },
  { code: "kn", name: "ಕನ್ನಡ", flag: "🇮🇳" },
  { code: "ta", name: "தமிழ்", flag: "🇮🇳" },
];

export default function GoogleTranslate() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("en");

  useEffect(() => {
    // Detect current language from URL hash or cookie
    const detectCurrentLanguage = () => {
      // Check URL hash
      const hash = window.location.hash;
      const hashMatch = hash.match(/googtrans\(en\|(\w+)\)/);
      if (hashMatch) {
        setCurrentLang(hashMatch[1]);
        return;
      }

      // Check cookie
      const cookies = document.cookie.split(";");
      for (let cookie of cookies) {
        const [name, value] = cookie.trim().split("=");
        if (name === "googtrans") {
          const langMatch = value.match(/\/en\/(\w+)/);
          if (langMatch) {
            setCurrentLang(langMatch[1]);
            return;
          }
        }
      }

      // Default to English
      setCurrentLang("en");
    };

    detectCurrentLanguage();

    // Add Google Translate script
    if (!document.getElementById("google-translate-script")) {
      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.type = "text/javascript";
      script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      document.body.appendChild(script);
    }

    // Initialize Google Translate
    window.googleTranslateElementInit = () => {
      if (window.google && window.google.translate) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,hi,kn,ta",
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          },
          "google_translate_element"
        );
      }
    };

    // If Google Translate is already loaded, initialize it
    if (window.google && window.google.translate) {
      window.googleTranslateElementInit();
    }
  }, []);

  const changeLanguage = (langCode) => {
    // Method 1: Try using the select element
    const selectElement = document.querySelector(".goog-te-combo");
    if (selectElement) {
      selectElement.value = langCode;
      selectElement.dispatchEvent(new Event("change", { bubbles: true }));
      setCurrentLang(langCode);
      setIsOpen(false);
      return;
    }

    // Method 2: Try clicking the language link directly
    const iframe = document.querySelector(".goog-te-menu-frame");
    if (iframe) {
      const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
      const langLink = iframeDoc.querySelector(`a[data-value="${langCode}"]`);
      if (langLink) {
        langLink.click();
        setCurrentLang(langCode);
        setIsOpen(false);
        return;
      }
    }

    // Method 3: Use URL hash method
    if (langCode === "en") {
      // Remove translation - clear hash and cookies
      document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=" + window.location.hostname;
      window.location.hash = "";
      window.location.reload();
    } else {
      // Add translation
      document.cookie = `googtrans=/en/${langCode}; path=/`;
      window.location.hash = `googtrans(en|${langCode})`;
      window.location.reload();
    }
    
    setCurrentLang(langCode);
    setIsOpen(false);
  };

  return (
    <>
      {/* Hidden Google Translate Element */}
      <div id="google_translate_element" style={{ display: "none" }}></div>

      {/* Floating Button */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-[9999]">
        {/* Language Menu */}
        {isOpen && (
          <div className="absolute right-16 top-1/2 -translate-y-1/2 bg-white rounded-xl shadow-2xl border border-slate-200 p-3 min-w-[180px]">
            <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-200">
              <span className="text-sm font-semibold text-slate-700">
                Select Language
              </span>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-slate-600 transition"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="flex flex-col gap-1">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  type="button"
                  onClick={() => changeLanguage(lang.code)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                    currentLang === lang.code
                      ? "bg-primary text-white"
                      : "text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  <span className="text-lg">{lang.flag}</span>
                  <span>{lang.name}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Toggle Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-center w-14 h-14 bg-primary text-white rounded-full shadow-lg hover:bg-primary/90 hover:scale-110 transition-all duration-200 group cursor-pointer"
          aria-label="Change Language"
        >
          <Languages className="w-6 h-6 group-hover:rotate-12 transition-transform" />
        </button>
      </div>

      {/* Hide Google Translate Banner and UI */}
      <style>{`
        .goog-te-banner-frame.skiptranslate {
          display: none !important;
        }
        body {
          top: 0px !important;
        }
        #google_translate_element {
          display: none !important;
        }
        .goog-te-gadget {
          display: none !important;
        }
        .goog-te-combo {
          display: none !important;
        }
        .skiptranslate {
          display: none !important;
        }
        .goog-logo-link {
          display: none !important;
        }
        .goog-te-gadget span {
          display: none !important;
        }
        #goog-gt-tt {
          display: none !important;
        }
        .goog-te-balloon-frame {
          display: none !important;
        }
      `}</style>
    </>
  );
}
