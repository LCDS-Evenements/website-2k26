import Image from "next/image";
import Link from "next/link";

export const TimeTableSection = () => {
  return (
    <section className="bg-[#EDB2D0] h-dvh flex items-center flex-col gap-20 relative overflow-hidden py-26">
      <div className="flex items-center flex-col gap-20 text-[#FDFCEB]">
        <h2 className="font-light tracking-wider text-5xl flex items-center gap-8">
          VENDREDI

          <span className="font-bold">12 JUIN</span>
        </h2>

        <div className="flex items-center gap-2 flex-col">
          <div className="flex items-center gap-24 text-4xl">
            <p className="font-salted mb-4">MAINSTAGE</p>

            <span className="font-mono tracking-widest">19:00 &gt; 03:00</span>
          </div>

          <div className="flex items-center gap-12 text-4xl">
            <p className="font-salted mb-4">BIVOUAC STAGE</p>

            <span className="font-mono tracking-widest">03:00 &gt; 05:00</span>
          </div>
        </div>
      </div>

      <div className="flex items-center flex-col gap-12 text-[#FDFCEB]">
        <h2 className="font-light tracking-wider text-5xl flex items-center gap-8">
          SAMEDI

          <span className="font-bold">13 JUIN</span>
        </h2>

        <div className="flex items-center gap-2 flex-col">
          <div className="flex items-center gap-24 text-4xl">
            <p className="font-salted mb-4">MAINSTAGE</p>

            <span className="font-mono tracking-widest">19:00 &gt; 03:00</span>
          </div>

          <div className="flex items-center gap-12 text-4xl">
            <p className="font-salted mb-4">BIVOUAC STAGE</p>

            <span className="font-mono tracking-widest">03:00 &gt; 05:00</span>
          </div>
        </div>
      </div>

      <Link
        href="https://link.cuicuitedays.fr/tickets-website-2k26"
        target="_blank"
        className="px-4 pt-2 pb-4 border-2 border-[#000000] rounded-2xl bg-[#FFDD93] hover:bg-[#f8d17d] transition font-salted text-2xl align-middle"
      >
        JE VEUX MON TICKEEEEEET
      </Link>

      <Image
        src="/image/plant-left.svg"
        alt="Illustration d'une plante dans la direction artistique du festival Les CuicuiteDays"
        width={340}
        height={750}
        className="absolute -bottom-20 left-0"
      />

      <Image
        src="/image/plant-right.svg"
        alt="Illustration d'une plante dans la direction artistique du festival Les CuicuiteDays"
        width={315}
        height={450}
        className="absolute bottom-0 right-0"
      />
    </section>
  );
};
