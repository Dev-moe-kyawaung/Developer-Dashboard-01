type Props = {
  src: string;
  type: "video" | "image";
  caption: string;
};

export default function PhoneFrame({ src, type, caption }: Props) {
  return (
    <div className="relative mx-auto w-[200px] sm:w-[220px]">
      <div className="relative overflow-hidden rounded-[1.75rem] border-[10px] border-[#1c1f28] bg-black shadow-[0_24px_50px_-20px_rgba(0,0,0,0.85)]">
        <div className="absolute left-1/2 top-0 z-20 h-4 w-20 -translate-x-1/2 rounded-b-xl bg-[#1c1f28]" />
        <div className="aspect-[9/18] w-full overflow-hidden bg-[#0a0b0f]">
          {type === "video" ? (
            <video
              key={src}
              className="h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src={src} type="video/mp4" />
            </video>
          ) : (
            <img src={src} alt={caption} className="h-full w-full object-cover" loading="lazy" />
          )}
        </div>
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-3 pt-10">
          <p className="mono text-[9px] uppercase tracking-[0.16em] text-[#3ddc84]">Live preview</p>
          <p className="truncate text-[11px] font-semibold text-white">{caption}</p>
        </div>
      </div>
    </div>
  );
}
