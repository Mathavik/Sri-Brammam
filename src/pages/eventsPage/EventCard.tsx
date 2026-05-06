import React from "react";

type EventCardProps = {
  image: string;
  title: string;
  category: string;
  description: string;
  date: string;
  location: string;
};

const EventCard: React.FC<EventCardProps> = ({
  image,
  title,
  category,
  description,
  date,
  location,
}) => {
  // நீங்கள் குறிப்பிட்ட ஸ்டைல்கள்
  const muktaStyle: React.CSSProperties = {
    fontFamily: "'Mukta Malar', sans-serif",
    fontWeight: 400,
    fontSize: "18px",
    lineHeight: "24px",
    textTransform: "capitalize",
    letterSpacing: "0%",
  };

  return (
    <article className="group overflow-hidden rounded-[28px] border border-slate-200" style={muktaStyle}>
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="px-6 py-5">
        <div className="mb-3 inline-flex rounded-full bg-[#F8EDE3] px-3 py-1 text-xs font-semibold text-[#B12A1C]">
          {category}
        </div>

        <h3 className="mb-3 text-lg font-semibold text-slate-900">
          {title}
        </h3>

        <p className="mb-4 text-slate-600">
          {description}
        </p>

        <div className="grid gap-2 border-t border-slate-200 pt-4 text-slate-600">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#FBE9E7] text-sm text-[#B12A1C]">📅</span>
            <span>
              <span className="font-semibold text-slate-900">தேதி:</span> {date}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#F8F1E7] text-sm text-[#B12A1C]">📍</span>
            <span>
              <span className="font-semibold text-slate-900">இடம்:</span> {location}
            </span>
          </div>
        </div>

        <button className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-[#B12A1C] px-5 py-3 font-semibold text-white transition hover:bg-[#8e2218]">
          மேலும் அறிந்து கொள்
        </button>
      </div>
    </article>
  );
};

export default EventCard;