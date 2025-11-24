import { useState } from "react";
import {
  MapPin,
  Phone,
  Globe2,
  Mail,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const offices = [
  {
    id: "coimbatore",
    title: "India Head Office – Coimbatore",
    addressLines: [
      "No.95, 2nd Floor,",
      "Chinnasamy Road, New Siddapudur,",
      "Coimbatore - 641 044 India.",
    ],
    phones: ["+91 422 352 9616", "+91 96 2636 2633"],
    website: "www.jpri.in",
    email: "contact@jpri.in",
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
  },
];


export default function OfficesSection() {
  const [openId, setOpenId] = useState("coimbatore");

  const toggleOffice = (id) => {
    setOpenId((current) => (current === id ? null : id));
  };

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
          <p className="text-sm sm:text-base text-[#555]">
            Our offices across India
          </p>
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

                  {/* Details row – single line on desktop */}
                  {isOpen && office.addressLines && (
                    <div className="border-t border-[#e4e4e4] px-6 py-4">
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
                              <p key={line}>{line}</p>
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
                                href={`tel:${ph.replace(/\s+/g, "")}`}
                                className="
          text-primary
          hover:underline
          hover:text-primary/80
          transition
        "
                              >
                                {ph}
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
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
