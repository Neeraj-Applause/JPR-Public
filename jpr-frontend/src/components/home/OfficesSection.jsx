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
      "No.95, 2nd Floor, Chinnasamy Road,",
      "New Siddapudur, Coimbatore – 641 044",
      "India.",
    ],
    phones: ["+91 422 352 9616", "+91 96263 62633"],
    website: "www.jpri.in",
    email: "contact@jpri.in",
  },
  {
    id: "pune",
    title: "Registered Office – Pune",
  },
  {
    id: "ahmedabad",
    title: "Branch Office – Ahmedabad",
  },
  {
    id: "kolkata",
    title: "Branch Office – Kolkata",
  },
  {
    id: "jaipur",
    title: "Branch Office – Jaipur",
  },
  {
    id: "nagpur",
    title: "Branch Office – Nagpur",
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
