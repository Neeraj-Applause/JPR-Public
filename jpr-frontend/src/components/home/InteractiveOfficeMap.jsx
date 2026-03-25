import { useState, useEffect, useRef } from "react";
import { MapPin, Phone, Globe2, Mail, X } from "lucide-react";
import { motion } from "framer-motion";

const offices = [
  {
    id: "coimbatore",
    title: "India Head Office – Coimbatore",
    city: "Coimbatore",
    addressLines: [
      "No.95, 2nd Floor,",
      "Chinnasamy Road, New Siddapudur,",
      "Coimbatore - 641 044 India.",
    ],
    phones: ["0 422 352 9616", "+91 96 2636 2633"],
    website: "www.jpri.in",
    email: "contact@jpri.in",
    coordinates: { lat: 11.0168, lng: 76.9558 },
    mapPosition: { x: 48, y: 82 }, // South India, Tamil Nadu
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.123!2d76.9558!3d11.0168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859af2f971cb5%3A0x2fc1c81e183ed282!2sCoimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1647123456789!5m2!1sen!2sin"
  },
  {
    id: "pune",
    title: "Registered Office – Pune",
    city: "Pune",
    addressLines: [
      "Office No.504, S.No.128,",
      "Seasons Business Square, Seasons Road,",
      "Sanewadi, Aundh,",
      "Pune - 411 007 Maharashtra.",
    ],
    phones: ["+91 70 6602 7860", "+91 88 0694 3991"],
    website: "www.jpri.in",
    email: "contact@jpri.in",
    coordinates: { lat: 18.5679, lng: 73.8009 },
    mapPosition: { x: 38, y: 58 }, // Western India, Maharashtra
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15139.877504146183!2d73.80228024670305!3d18.43969952886181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc295b7e1e639cb%3A0x2cb093b65a83f42a!2sSai%20Shubham%20Heights!5e0!3m2!1sen!2sin!4v1753092314354!5m2!1sen!2sin"
  },
  {
    id: "ahmedabad",
    title: "Branch Office – Ahmedabad",
    city: "Ahmedabad",
    addressLines: [
      "33, Kalindi Complex, Nr. Old High Court,",
      "Near Income Tax Circle, Navrangpura,",
      "Ahmedabad - 380 014 India.",
    ],
    phones: ["+91 79 4007 7715 / 16"],
    website: "www.jpri.in",
    email: "contact@jpri.in",
    coordinates: { lat: 23.0225, lng: 72.5714 },
    mapPosition: { x: 36, y: 42 }, // Western India, Gujarat
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.123!2d72.5714!3d23.0225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1647123456789!5m2!1sen!2sin"
  },
  {
    id: "kolkata",
    title: "Branch Office – Kolkata",
    city: "Kolkata",
    addressLines: [
      "Corner Desk, Cabin #1,",
      "4th Floor, Premise no.10,",
      "Raja Subodh Mullick Square,",
      "Kolkata - 700 013 India.",
    ],
    phones: ["+91 70 4463 9376"],
    website: "www.jpri.in",
    email: "contact@jpri.in",
    coordinates: { lat: 22.5726, lng: 88.3639 },
    mapPosition: { x: 72, y: 44 }, // Eastern India, West Bengal
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.123!2d88.3639!3d22.5726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f882db4908f667%3A0x43e330e68f6c2cbc!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1647123456789!5m2!1sen!2sin"
  },
  {
    id: "jaipur",
    title: "Branch Office – Jaipur",
    city: "Jaipur",
    addressLines: [
      "Pheobusin, Crop's Arcade,",
      "K-12, Malviya Marg,",
      "C Scheme, Ashok Nagar,",
      "Jaipur - 302 001 Rajasthan.",
    ],
    phones: ["+91 96 3648 6449"],
    website: "www.jpri.in",
    email: "contact@jpri.in",
    coordinates: { lat: 26.9124, lng: 75.7873 },
    mapPosition: { x: 43, y: 32 }, // Northern India, Rajasthan
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.123!2d75.7873!3d26.9124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4adf4c57e281%3A0xce1c63a0cf22e09!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1647123456789!5m2!1sen!2sin"
  },
  {
    id: "nagpur",
    title: "Branch Office – Nagpur",
    city: "Nagpur",
    addressLines: [
      "157, 1st Floor, Shrija Enclave,",
      "Opp. Babhulkar Hospital,",
      "WHC Road, Shankar Nagar,",
      "Nagpur - 440 010 Maharashtra.",
    ],
    phones: ["+91 7066027007"],
    website: "www.jpri.in",
    email: "contact@jpri.in",
    coordinates: { lat: 21.1458, lng: 79.0882 },
    mapPosition: { x: 52, y: 48 }, // Central India, Maharashtra
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.123!2d79.0882!3d21.1458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c0a5a31faf13%3A0x19b37d06d0bb3e2b!2sNagpur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1647123456789!5m2!1sen!2sin"
  },
  {
    id: "dehradun",
    title: "Branch Office – Dehradun",
    city: "Dehradun",
    addressLines: [
      "Office no. 20, Ground floor,",
      "Transport Commissioner Office,",
      "Near Luther W. New Jr. Theological college,",
      "Sahastradhara road, Kulhan,",
      "Dehradun - 248 001 Uttarakhand.",
    ],
    phones: ["+91 9054514953"],
    website: "www.jpri.in",
    email: "contact@jpri.in",
    coordinates: { lat: 30.3165, lng: 78.0322 },
    mapPosition: { x: 49, y: 22 }, // Northern India, Uttarakhand
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.123!2d78.0322!3d30.3165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39093523cea4ac77%3A0x1b8876e4dee8c2b0!2sDehradun%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1647123456789!5m2!1sen!2sin"
  },
  {
    id: "dindigul",
    title: "Branch Office – Dindigul",
    city: "Dindigul",
    addressLines: [
      "No. 8, Malligai Nagar,",
      "Ayyappan temple back side,",
      "Seelapadi post,",
      "Dindigul - 624 005 Tamilnadu.",
    ],
    phones: ["+91 96 2636 2633"],
    website: "www.jpri.in",
    email: "contact@jpri.in",
    coordinates: { lat: 10.3673, lng: 77.9803 },
    mapPosition: { x: 50, y: 85 }, // Deep South India, Tamil Nadu
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3925.123!2d77.9803!3d10.3673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c582b1189633%3A0xdc955b7264f63933!2sDindigul%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1647123456789!5m2!1sen!2sin"
  },
];

export default function InteractiveOfficeMap() {
  const [selectedOffice, setSelectedOffice] = useState(null);
  const mapRef = useRef(null);

  const formatPhoneNumber = (phone) => phone.replace(/\s+/g, "");

  const closeModal = () => {
    setSelectedOffice(null);
  };

  // Create an OpenStreetMap embed with markers using uMap
  const createMapWithMarkers = () => {
    // Create a simple HTML string that will render a map with markers
    const mapHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>JP Research India Offices</title>
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
        <style>
          body { margin: 0; padding: 0; }
          #map { height: 100vh; width: 100%; }
          .custom-popup { font-family: Arial, sans-serif; }
          .popup-title { font-weight: bold; color: #1e40af; margin-bottom: 5px; }
          .popup-address { font-size: 12px; color: #666; }
        </style>
      </head>
      <body>
        <div id="map"></div>
        <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
        <script>
          var map = L.map('map').setView([20.5937, 78.9629], 5);
          
          L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
          }).addTo(map);

          var offices = ${JSON.stringify(offices)};
          
          var redIcon = L.icon({
            iconUrl: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDJDOC4xMyAyIDUgNS4xMyA1IDlDNSAxNC4yNSAxMiAyMiAxMiAyMkMxMiAyMiAxOSAxNC4yNSAxOSA5QzE5IDUuMTMgMTUuODcgMiAxMiAyWk0xMiAxMS41QzEwLjYyIDExLjUgOS41IDEwLjM4IDkuNSA5QzkuNSA3LjYyIDEwLjYyIDYuNSAxMiA2LjVDMTMuMzggNi41IDE0LjUgNy42MiAxNC41IDlDMTQuNSAxMC4zOCAxMy4zOCAxMS41IDEyIDExLjVaIiBmaWxsPSIjZGMyNjI2Ii8+Cjwvc3ZnPgo=',
            iconSize: [24, 24],
            iconAnchor: [12, 24],
            popupAnchor: [0, -24]
          });

          offices.forEach(function(office) {
            var marker = L.marker([office.coordinates.lat, office.coordinates.lng], {icon: redIcon}).addTo(map);
            
            var popupContent = '<div class="custom-popup">' +
              '<div class="popup-title">' + office.city + '</div>' +
              '<div class="popup-address">' + office.addressLines[0] + '</div>' +
              '</div>';
            
            marker.bindPopup(popupContent);
          });
        </script>
      </body>
      </html>
    `;
    
    return 'data:text/html;charset=utf-8,' + encodeURIComponent(mapHtml);
  };

  const mapUrl = createMapWithMarkers();

  return (
    <section className="w-full bg-[#f8f8f8] py-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-0">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary">
            Get in Touch with Us
          </h2>
          <div className="mt-3 mb-4 flex justify-center">
            <span className="h-[3px] w-24 bg-primary rounded-full" />
          </div>
          <div className="text-sm sm:text-base text-[#555]">
            Our offices across India
          </div>
        </div>

        {/* Google Maps Container */}
        <div className="bg-white rounded-2xl shadow-[0_16px_40px_rgba(0,0,0,0.02)] p-6 sm:p-8">
          <div className="relative w-full">
            {/* Interactive Map with embedded markers */}
            <div className="relative w-full h-[600px] rounded-lg overflow-hidden shadow-lg mb-6">
              <iframe
                ref={mapRef}
                title="JP Research India Office Locations"
                src={mapUrl}
                width="100%"
                height="100%"
                allowFullScreen=""
                loading="lazy"
                className="border-none"
                style={{ 
                  border: 0,
                  borderRadius: '8px'
                }}
              />
            </div>

            {/* Instructions */}
            <div className="flex items-center justify-center gap-4 text-sm text-slate-600 mb-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                <span>Office Locations</span>
              </div>
              <span className="text-slate-400">•</span>
              <span>Click on office cards below for details</span>
            </div>

            {/* Office Cards Grid - Interactive like your reference */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {offices.map((office) => (
                <div
                  key={office.id}
                  className="bg-slate-50 rounded-lg p-4 hover:bg-slate-100 transition-colors cursor-pointer border border-slate-200 hover:border-blue-300"
                  onClick={() => setSelectedOffice(office)}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      {office.city.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-slate-900 text-sm mb-1">
                        {office.city}
                      </h4>
                      <p className="text-xs text-slate-600 mb-2 line-clamp-2">
                        {office.addressLines[0]}
                      </p>
                      <div className="flex items-center gap-2 text-xs text-primary">
                        <Phone size={12} />
                        <span>{formatPhoneNumber(office.phones[0])}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Office Details Modal */}
        {selectedOffice && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-slate-900">
                  {selectedOffice.city}
                </h3>
                <button
                  onClick={closeModal}
                  className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X size={20} className="text-slate-500" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Left Column - Office Details */}
                  <div className="space-y-4">
                    <h4 className="font-medium text-slate-900 text-sm">
                      {selectedOffice.title}
                    </h4>

                    {/* Address */}
                    <div className="flex items-start gap-3">
                      <button
                        onClick={() => {
                          const googleMapsUrl = `https://www.google.com/maps?q=${selectedOffice.coordinates.lat},${selectedOffice.coordinates.lng}`;
                          window.open(googleMapsUrl, '_blank');
                        }}
                        className="mt-0.5 text-primary hover:text-primary/80 transition-colors cursor-pointer"
                        title="Open in Google Maps"
                      >
                        <MapPin size={18} />
                      </button>
                      <div className="text-sm text-slate-600 leading-relaxed">
                        {selectedOffice.addressLines.map((line, index) => (
                          <p key={index}>{line}</p>
                        ))}
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-start gap-3">
                      <Phone className="mt-0.5 text-primary" size={18} />
                      <div className="flex flex-col text-sm leading-relaxed">
                        {selectedOffice.phones?.map((ph, index) => (
                          <a
                            key={index}
                            href={`tel:${formatPhoneNumber(ph)}`}
                            className="text-primary hover:underline hover:text-primary/80 transition"
                          >
                            {formatPhoneNumber(ph)}
                          </a>
                        ))}
                      </div>
                    </div>

                    {/* Website */}
                    <div className="flex items-center gap-3">
                      <Globe2 className="text-primary" size={18} />
                      <a
                        href={`https://${selectedOffice.website}`}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm text-primary hover:underline"
                      >
                        {selectedOffice.website}
                      </a>
                    </div>

                    {/* Email */}
                    <div className="flex items-center gap-3">
                      <Mail className="text-primary" size={18} />
                      <a
                        href={`mailto:${selectedOffice.email}`}
                        className="text-sm text-primary hover:underline"
                      >
                        {selectedOffice.email}
                      </a>
                    </div>
                  </div>

                  {/* Right Column - Google Maps */}
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    className="w-full h-[400px] rounded-2xl overflow-hidden shadow-lg"
                  >
                    <iframe
                      title={`Google Map - ${selectedOffice.city}`}
                      src={selectedOffice.embedUrl}
                      width="100%"
                      height="100%"
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="border-none"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
