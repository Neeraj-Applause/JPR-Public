import { useState } from "react";
import { Send, Loader2, Mail, User, MessageSquare } from "lucide-react";
import contactService from "../../services/contactService";

const emptyForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function ContactMainSection() {
  const [form, setForm] = useState(emptyForm);
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setSuccess(false);

    try {
      await contactService.submit(form);
      setSuccess(true);
      setForm(emptyForm);
    } catch (err) {
      console.error(err);
      alert("Failed to send message. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-14 grid lg:grid-cols-2 gap-12">
      {/* LEFT — Form */}
      <div className="rounded-3xl bg-white border border-slate-100 shadow-[0_20px_50px_rgba(15,23,42,0.08)] p-7 space-y-6">
        <div className="space-y-1">
          <h2 className="text-xl font-semibold text-slate-900">
            Get in touch
          </h2>
          <p className="text-sm text-slate-500">
            Share your enquiry and our team will respond shortly.
          </p>
        </div>

        {success && (
          <div className="rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm px-4 py-3">
            Message sent successfully. We’ll be in touch.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <InputField
            icon={User}
            label="Full name"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your full name"
            required
          />

          {/* Email */}
          <InputField
            icon={Mail}
            label="Email address"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
            required
          />

          {/* Subject */}
          <InputField
            label="Subject"
            name="subject"
            value={form.subject}
            onChange={handleChange}
            placeholder="Optional"
          />

          {/* Message */}
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-slate-700 flex items-center gap-2">
              <MessageSquare className="h-3.5 w-3.5 text-slate-400" />
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              required
              placeholder="Briefly describe your enquiry"
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm
                         bg-slate-50/50 focus:outline-none focus:ring-2
                         focus:ring-primary/50 transition"
            />
          </div>

          <button
            type="submit"
            disabled={sending}
            className="inline-flex items-center justify-center gap-2 rounded-xl
                       bg-primary px-5 py-2.5 text-sm font-semibold text-white
                       shadow-md hover:brightness-110 transition
                       disabled:opacity-60"
          >
            {sending ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Sending…
              </>
            ) : (
              <>
                <Send className="h-4 w-4" />
                Send message
              </>
            )}
          </button>
        </form>
      </div>

      {/* RIGHT — Info (Subtle) */}
      <div className="rounded-3xl bg-slate-50 border border-slate-100 p-7 space-y-5">
        <h3 className="text-base font-semibold text-slate-900">
          How we can help
        </h3>

        <ul className="space-y-3 text-sm text-slate-600">
          <li>• Road safety audits & crash investigation</li>
          <li>• Data-driven policy & analytics</li>
          <li>• Training & capacity building</li>
          <li>• Global research collaboration</li>
        </ul>

        <div className="pt-4 border-t text-sm text-slate-500">
          Prefer email? Reach us at{" "}
          <span className="font-medium text-slate-700">
            info@jpresearch.com
          </span>
        </div>
      </div>
    </section>
  );
}

/* Reusable input field */
function InputField({
  icon: Icon,
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  required,
}) {
  return (
    <div className="space-y-1.5">
      <label className="text-xs font-medium text-slate-700 flex items-center gap-2">
        {Icon && <Icon className="h-3.5 w-3.5 text-slate-400" />}
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm
                   bg-slate-50/50 focus:outline-none focus:ring-2
                   focus:ring-primary/50 transition"
      />
    </div>
  );
}
