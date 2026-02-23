interface BeforeAfterProps {
  beforeLabel?: string;
  afterLabel?: string;
  beforeColor?: string;
  afterColor?: string;
}

export default function BeforeAfter({
  beforeLabel = "Before",
  afterLabel = "After",
  beforeColor = "bg-brand-gray/10",
  afterColor = "bg-brand-gold/10",
}: BeforeAfterProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
      <div className={`${beforeColor} rounded-xl p-6 text-center`}>
        <span className="text-xs font-semibold uppercase tracking-wider text-brand-gray mb-4 block">
          {beforeLabel}
        </span>
        <div className="h-48 flex items-center justify-center">
          <span className="text-brand-gray/40 text-sm">이미지</span>
        </div>
      </div>
      <div className={`${afterColor} rounded-xl p-6 text-center`}>
        <span className="text-xs font-semibold uppercase tracking-wider text-brand-gold mb-4 block">
          {afterLabel}
        </span>
        <div className="h-48 flex items-center justify-center">
          <span className="text-brand-gray/40 text-sm">이미지</span>
        </div>
      </div>
    </div>
  );
}
