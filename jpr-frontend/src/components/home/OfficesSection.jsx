import { useState, useEffect } from "react";
import {
  MapPin,
  Phone,
  Globe2,
  Mail,
  ChevronDown,
  ChevronUp,
  X,
  Map,
} from "lucide-react";
import { motion } from "framer-motion";

const offices = [
  {
    id: "coimbatore",
    title: "India Head Office – Coimbatore",
    addressLines: [
      "No.95, 2nd Floor,",
      "Chinnasamy Road, New Siddapudur,",
      "Coimbatore - 641 044 India.",
    ],
    phones: ["0 422 352 9616", "+91 96 2636 2633"],
    website: "www.jpri.in",
    email: "contact@jpri.in",
    coordinates: { lat: 11.0168, lng: 76.9558 },
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d244.76482388372378!2d76.97351385980627!3d11.020835361378001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8585199e12897%3A0x3d8e3d74efcbc2a0!2s95%2C%20Chinnasamy%20Naidu%20Rd%2C%20Siddhapudur%2C%20New%20Siddhapudur%2C%20Coimbatore%2C%20Tamil%20Nadu%20641044!5e0!3m2!1sen!2sin!4v1773999450135!5m2!1sen!2sin"
  },
  {
    id: "pune",
    title: "Registered Office – Pune",
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
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.429800582023!2d73.80207872496383!3d18.55465198254548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b1c9e770a7ef%3A0x891998608228d3b3!2sJP%20Research%20India%20Pvt%20Ltd%20-%20Registered%20Office!5e0!3m2!1sen!2sin!4v1773999558723!5m2!1sen!2sin"
  },
  {
    id: "ahmedabad",
    title: "Branch Office – Ahmedabad",
    addressLines: [
      "33, Kalindi Complex, Nr. Old High Court,",
      "Near Income Tax Circle, Navrangpura,",
      "Ahmedabad - 380 014 India.",
    ],
    phones: ["+91 79 4007 7715 / 16"],
    website: "www.jpri.in",
    email: "contact@jpri.in",
    coordinates: { lat: 23.0225, lng: 72.5714 },
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3489.9332084436296!2d72.567546!3d23.038419200000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b537a6c0ccb%3A0xecfe0b6b4fa6e0eb!2sJP%20Research%20India%20Pvt%20Ltd!5e1!3m2!1sen!2sin!4v1774585183776!5m2!1sen!2sin"
  },
  {
    id: "kolkata",
    title: "Branch Office – Kolkata",
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
    embedUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7004.208556396003!2d88.3591743!3d22.5639287!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277199b47f6eb%3A0xa6657b24351560b8!2sJP%20Research%20India%20Pvt%20Ltd!5e1!3m2!1sen!2sin!4v1774585261267!5m2!1sen!2sin"
  },
  {
    id: "jaipur",
    title: "Branch Office – Jaipur",
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
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3381.6164763410384!2d75.8019439!3d26.914733199999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db427b161f277%3A0x8e4b77e89c22be7c!2sJP%20Research%20India%20Pvt.%20Ltd.!5e1!3m2!1sen!2sin!4v1774585224699!5m2!1sen!2sin"
  },
  {
    id: "nagpur",
    title: "Branch Office – Nagpur",
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
    embedUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3537.3669558679558!2d79.058107!3d21.1323372!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c1507ea27423%3A0x73425b76a200288b!2sJP%20Research%20India%20Pvt.%20Ltd.!5e1!3m2!1sen!2sin!4v1774585125754!5m2!1sen!2sin"
  },
  {
    id: "dehradun",
    title: "Branch Office – Dehradun",
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
    embedUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d817.943385269647!2d78.1003753!3d30.376943!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3908d78d9546f921%3A0x4ba198b9fcf58bdf!2sTransport%20Commissioner%20Office%2C%20Uttarakhand!5e1!3m2!1sen!2sin!4v1774585302947!5m2!1sen!2sin"
  },
  {
    id: "dindigul",
    title: "Branch Office – Dindigul",
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
    embedUrl: "https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d245.27729710340478!2d77.98513204717364!3d10.38684355940107!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sin!4v1774590757057!5m2!1sen!2sin"
  },
];

export default function OfficesSection() {
  const [openId, setOpenId] = useState("coimbatore");
  const [selectedOffice, setSelectedOffice] = useState(null);

  const formatPhoneNumber = (phone) => phone.replace(/\s+/g, "");

  // Function to get correct Google Maps URL for each office
  const getCorrectMapsUrl = (office) => {
    // For offices with specific place IDs or known locations, use direct search
    const officeSearchQueries = {
      'coimbatore': 'JP Research India Pvt Ltd, 95, Chinnasamy Road, New Siddapudur, Coimbatore',
      'pune': 'JP Research India Pvt Ltd, Office No.504, Seasons Business Square, Aundh, Pune',
      'ahmedabad': 'JP Research India Pvt Ltd, 33, Kalindi Complex, Navrangpura, Ahmedabad',
      'kolkata': 'Corner Desk, Raja Subodh Mullick Square, Kolkata',
      'jaipur': 'JP Research India Pvt Ltd, Malviya Marg, C Scheme, Jaipur',
      'nagpur': 'JP Research India Pvt Ltd, Shrija Enclave, Shankar Nagar, Nagpur',
      'dehradun': 'Transport Commissioner Office, Sahastradhara road, Dehradun',
      'dindigul': 'Malligai Nagar, Dindigul'
    };

    const searchQuery = officeSearchQueries[office.id];
    if (searchQuery) {
      return `https://www.google.com/maps/search/${encodeURIComponent(searchQuery)}`;
    }
    
    // Fallback to coordinates if no specific search query
    return `https://www.google.com/maps?q=${office.coordinates.lat},${office.coordinates.lng}`;
  };

  const toggleOffice = (id) => {
    setOpenId((current) => (current === id ? null : id));
  };

  const closeModal = () => {
    setSelectedOffice(null);
  };

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (selectedOffice) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedOffice]);

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

        {/* Panel */}
        <div className="bg-white rounded-2xl shadow-[0_16px_40px_rgba(0,0,0,0.02)] p-6 sm:p-6 lg:p-8">
          <div className="space-y-4">
            {offices.map((office) => {
              const isOpen = openId === office.id;

              return (
                <div
                  key={office.id}
                  className="bg-[#f5f5f5] rounded-2xl overflow-hidden"
                >
                  {/* Header row */}
                  <button
                    type="button"
                    onClick={() => toggleOffice(office.id)}
                    aria-expanded={isOpen}
                    className="
                      w-full flex items-center justify-between
                      px-10 py-4 text-left
                      text-sm sm:text-base font-medium
                      text-[#222]
                    "
                  >
                    <span>{office.title}</span>
                    {isOpen ? (
                      <ChevronUp className="text-[#444]" size={18} />
                    ) : (
                      <ChevronDown className="text-[#444]" size={18} />
                    )}
                  </button>

                  {/* Details row – animated expand / collapse */}
                  {office.addressLines && (
                    <div
                      className={`
                        border-t border-[#e4e4e4] px-6
                        overflow-hidden
                        transition-all duration-300 ease-in-out
                        ${isOpen ? "py-4 max-h-[350px] opacity-100" : "py-0 max-h-0 opacity-0"}
                      `}
                    >
                      <div
                        className="
                          flex flex-col gap-4
                          lg:flex-row lg:items-center lg:justify-between
                          text-sm text-primary
                        "
                      >
                        {/* Address */}
                        <div className="flex items-start gap-2 max-w-md lg:max-w-lg">
                          <MapPin className="mt-0.5 text-primary" size={18} />
                          <div className="leading-relaxed">
                            {office.addressLines.map((line) => (
                              <p key={line} className="text-justify">{line}</p>
                            ))}
                          </div>
                        </div>

                        {/* Phone */}
                        <div className="flex items-start gap-2 min-w-[170px]">
                          <Phone className="mt-0.5 text-primary" size={18} />
                          <div className="flex flex-col leading-relaxed">
                            {office.phones?.map((ph) => (
                              <a
                                key={ph}
                                href={`tel:${formatPhoneNumber(ph)}`}
                                className="
                                  text-primary
                                  hover:underline
                                  hover:text-primary/80
                                  transition
                                "
                              >
                                {formatPhoneNumber(ph)}
                              </a>
                            ))}
                          </div>
                        </div>

                        {/* Website */}
                        <div className="flex items-center gap-2 min-w-[140px]">
                          <Globe2 className="text-primary" size={18} />
                          <a
                            href={`https://${office.website}`}
                            target="_blank"
                            rel="noreferrer"
                            className="hover:underline"
                          >
                            {office.website}
                          </a>
                        </div>

                        {/* Email */}
                        <div className="flex items-center gap-2 min-w-[180px]">
                          <Mail className="text-primary" size={18} />
                          <a
                            href={`mailto:${office.email}`}
                            className="hover:underline"
                          >
                            {office.email}
                          </a>
                        </div>

                        {/* Map Button */}
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => setSelectedOffice(office)}
                            className="
                              flex items-center gap-2 px-4 py-2 
                              bg-primary text-white rounded-lg 
                              hover:bg-primary/90 hover:scale-105 hover:shadow-lg
                              active:scale-95
                              transition-all duration-200 ease-in-out
                              text-sm font-medium
                              animate-pulse hover:animate-none
                              shadow-md hover:shadow-xl
                              relative overflow-hidden
                              group
                            "
                            title="View on Map"
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                            <Map size={16} className="relative z-10" />
                            <span className="relative z-10">Map</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Office Map Modal */}
        {selectedOffice && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 backdrop-blur-sm bg-white/10 flex items-center justify-center z-50 p-4"
            onClick={closeModal}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-slate-900">
                  {selectedOffice.title.split(' – ')[1] || selectedOffice.title}
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
                          const googleMapsUrl = getCorrectMapsUrl(selectedOffice);
                          window.open(googleMapsUrl, '_blank');
                        }}
                        className="mt-0.5 text-primary hover:text-primary/80 transition-colors cursor-pointer"
                        title="Open in Google Maps"
                      >
                        <MapPin size={18} />
                      </button>
                      <div className="text-sm text-slate-600 leading-relaxed">
                        {selectedOffice.addressLines.map((line, index) => (
                          <p key={index} className="text-justify">{line}</p>
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
                      title={`Google Map - ${selectedOffice.title.split(' – ')[1] || selectedOffice.title}`}
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
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
