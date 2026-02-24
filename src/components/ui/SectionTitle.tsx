interface Props {
  label: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionTitle({
  label,
  title,
  highlight,
  subtitle,
  align = "left",
}: Props) {
  const centered = align === "center";
  return (
    <div className={centered ? "text-center" : "text-left"}>
      <p className="text-brand-green text-sm font-bold tracking-[0.2em] uppercase mb-4 opacity-90">
        {label}
      </p>
      <h2 className="font-heading text-4xl md:text-5xl font-black text-text-1 mb-6 leading-[1.2] tracking-tight">
        {title}
        {highlight && (
          <>
            <br className="md:hidden" />
            <span className="text-gradient-green ml-0 md:ml-3">{highlight}</span>
          </>
        )}
      </h2>
      <div
        className={`w-16 h-1 bg-gradient-to-r from-brand-green to-brand-blue mb-8 rounded-full ${centered ? "mx-auto" : ""}`}
      />
      {subtitle && (
        <p
          className={`text-text-2 text-lg md:text-xl leading-relaxed max-w-3xl opacity-80 ${centered ? "mx-auto" : ""}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
