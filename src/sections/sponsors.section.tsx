import Image from "next/image";

type Sponsor = {
  name: string;
  logo: string;
};

const sponsors: Sponsor[] = [
  { name: "Sponsor 1", logo: "Logo 1" },
  { name: "Sponsor 2", logo: "Logo 2" },
  { name: "Sponsor 3", logo: "Logo 3" },
  { name: "Sponsor 4", logo: "Logo 4" },
  { name: "Sponsor 5", logo: "Logo 5" },
  { name: "Sponsor 6", logo: "Logo 6" },
  { name: "Sponsor 7", logo: "Logo 7" },
  { name: "Sponsor 8", logo: "Logo 8" },
  { name: "Sponsor 9", logo: "Logo 9" },
  { name: "Sponsor 10", logo: "Logo 10" },
  { name: "Sponsor 11", logo: "Logo 11" },
  { name: "Sponsor 12", logo: "Logo 12" },
];

export const SponsorsSection = () => {
  return (
    <section id="#sponsors" className="h-[8dvh] border-b">
      <div className="relative flex overflow-hidden">
        <div className="flex animate-marquee gap-8 h-full">
          {sponsors.map((sponsor) => (
            <div key={sponsor.name} className="flex h-[6dvh] w-40 shrink-0 items-center justify-center grayscale transition-all hover:grayscale-0">
              <Image src="/icon/icon.png" alt="icon of the website" width={160} height={80} className="h-full w-full object-contain" />
            </div>
          ))}
        </div>

        <div className="flex animate-marquee gap-8 h-full" aria-hidden="true">
          {sponsors.map((sponsor) => (
            <div key={sponsor.name} className="flex h-[6dvh] w-40 shrink-0 items-center justify-center grayscale transition-all hover:grayscale-0">
              <Image src="/icon/icon.png" alt="icon of the website" width={160} height={80} className="h-full w-full object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
