import { Mail, User, Calendar } from "lucide-react";

const ContactView = ({ message }) => {
  if (!message) return null;

  return (
    <div className="max-w-4xl bg-white rounded-3xl border shadow p-6 space-y-4">
      <div>
        <h3 className="text-lg font-semibold">
          {message.subject || "No subject"}
        </h3>

        <div className="flex flex-wrap gap-4 text-xs text-slate-500 mt-1">
          <span className="flex items-center gap-1">
            <User className="h-4 w-4" /> {message.name}
          </span>
          <span className="flex items-center gap-1">
            <Mail className="h-4 w-4" /> {message.email}
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            {new Date(message.created_at).toLocaleString()}
          </span>
        </div>
      </div>

      <hr />

      <p className="text-sm text-slate-700 whitespace-pre-line">
        {message.message}
      </p>

      <a
        href={`mailto:${message.email}?subject=Re: ${message.subject || ""}`}
        className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-xs text-white font-semibold"
      >
        Reply via email
      </a>
    </div>
  );
};

export default ContactView;
