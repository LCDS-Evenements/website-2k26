import Link from "next/link";

export const Navbar = () => {
  return (
    <header className="fixed top-8 left-1/2 -translate-x-1/2 z-50 bg-[#6784BE]/40 border border-[#FDFCEB36] shadow backdrop-blur-lg rounded-2xl py-2 px-28">
      <nav className="flex items-center gap-10 text-[#FDFCEB]">
        <Link className="hover:scale-110 tracking-widest transition-transform inline-block" href="#line-up">Line up</Link>

        <Link className="hover:scale-110 tracking-widest transition-transform inline-block" href="#story">Histoire</Link>

        <Link className="hover:scale-110 tracking-widest transition-transform inline-block" href="#sponsors">Sponsors</Link>

        <Link className="hover:scale-110 tracking-widest transition-transform inline-block" href="#merchandising">Merchandising</Link>

        <Link
          className="hover:scale-110 tracking-widest transition-transform inline-block font-bold"
          target="_blank"
          href="https://link.cuicuitedays.fr/tickets-website-2k26"
        >
          Billetterie
        </Link>
      </nav>
    </header>
  );
};
