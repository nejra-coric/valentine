import Image from "next/image";
import Link from "next/link";
import LoveCards from "./LoveCards";

export default function ValentinePage() {
  return (
    <div className="min-h-screen min-h-[100dvh] bg-gradient-to-br from-[#fff5f7] via-[#fce7f3] to-[#fef7f0] pb-[env(safe-area-inset-bottom)]">
      {/* Hero */}
      <section className="relative overflow-hidden px-4 py-12 sm:px-6 sm:py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 font-[family-name:var(--font-cormorant)] text-base tracking-wide text-rose-600 sm:mb-4 sm:text-lg">
            You said yes ♥
          </p>
          <h1 className="font-[family-name:var(--font-great-vibes)] text-4xl text-rose-700 sm:text-5xl md:text-6xl lg:text-7xl">
            My Valentine
          </h1>
          <p className="mt-4 font-[family-name:var(--font-cormorant)] text-base leading-relaxed text-rose-600/90 sm:mt-6 sm:text-lg md:text-xl">
            Evo nešto što sam pripremila samo za tebe — naše trenutke i priču koju pišemo zajedno.
          </p>
          <Link
            href="#cards"
            className="mt-6 inline-flex min-h-[44px] items-center justify-center py-3 font-[family-name:var(--font-cormorant)] text-rose-600 underline decoration-rose-300 underline-offset-4 transition hover:decoration-rose-500 sm:mt-8"
          >
            Pogledaj ispod ↓
          </Link>
        </div>
      </section>

      {/* Love cards */}
      <section id="cards" className="px-4 py-10 sm:px-6 sm:py-12 md:py-16">
        <h2 className="mb-8 text-center font-[family-name:var(--font-great-vibes)] text-3xl text-rose-700 sm:mb-10 sm:text-4xl md:text-5xl">
          Naše kartice
        </h2>
        <LoveCards />
      </section>

      {/* Naša priča - How we met */}
      <section id="story" className="px-4 py-10 sm:px-6 sm:py-12 md:py-16">
        <h2 className="mb-8 text-center font-[family-name:var(--font-great-vibes)] text-3xl text-rose-700 sm:mb-10 sm:text-4xl md:text-5xl">
          Naša priča
        </h2>
        <div className="mx-auto max-w-3xl space-y-6 sm:space-y-8">
          <div className="glow-rose rounded-2xl border border-rose-200/60 bg-white/80 p-5 shadow-lg backdrop-blur-sm sm:p-8">
            <h3 className="font-[family-name:var(--font-cormorant)] text-lg font-semibold text-rose-700 sm:text-xl">
              Da li se sjećaš kako smo se upoznali?
            </h3>
            <div className="mt-3 space-y-4 font-[family-name:var(--font-cormorant)] text-base leading-relaxed text-rose-600/90 sm:mt-4 sm:text-lg">
              <p>
                Snap, pa Instagram, pa kada smo krenuli ozbiljnije — prešli smo na WhatsApp. Sjećaš li se našeg prvog poziva, prije kojeg si rekao da se nadaš da sam pričljiva osoba? Bila sam u Jajcu, bio je Bajram. Htio si da se čujemo.
              </p>
              <p>
                To je bilo par dana prije našeg izlaska. Uhvatila sam trenutak kada su moji izašli iz dedine kuće — sad znaš i koja je i kako izgleda ta soba gdje sam se zaključala da se prvi put čujem s tobom.
              </p>
              <p>
                Rekla sam ti da ako izađemo, da si moj i da te više ne dam nikome.
              </p>
              <p>
                Više puta sam pomislila kako sam se zeznula što sam to odradila, koliko me iznerviraš i povrijediš… ali — zavoljela sam te. Postao si cijeli moj svijet i nikad ne bih podnijela ni oprostila sebi da dopustim da te izgubim. Ovo je slika našeg prvog izlaska.
              </p>
            </div>
          </div>

          {/* Slika — prvo upoznavanje (kocka, samo vi u kadru) */}
          <div className="flex justify-center">
            <div className="relative aspect-square w-full max-w-sm overflow-hidden rounded-2xl shadow-lg sm:max-w-md">
              <Image
                src="/prvo-upoznavanje.jpg"
                alt="Prvo upoznavanje"
                width={448}
                height={448}
                className="h-full w-full object-cover object-[center_35%]"
                sizes="(max-width: 448px) 100vw, 448px"
                priority
              />
            </div>
          </div>

          <div className="glow-rose rounded-2xl border border-rose-200/60 bg-white/80 p-5 shadow-lg backdrop-blur-sm sm:p-8">
            <h3 className="font-[family-name:var(--font-cormorant)] text-lg font-semibold text-rose-700 sm:text-xl">
              Od tada do danas
            </h3>
            <div className="mt-3 space-y-3 font-[family-name:var(--font-cormorant)] text-base leading-relaxed text-rose-600/90 sm:mt-4 sm:text-lg">
              <p>
                Obišli smo dosta mjesta, imali prve zajedničke noćenja, prošli kroz dosta teških trenutaka zajedno.
              </p>
              <p>
                Nakon svega — na kraju dana ostali smo zajedno. Jači nego ikad.
              </p>
            </div>
          </div>

          {/* Slika 2 & 3 */}
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="/slika2.jpg"
                alt="Naše uspomene"
                width={448}
                height={336}
                className="h-full w-full object-cover"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="/slika3.jpg"
                alt="Naše uspomene"
                width={448}
                height={336}
                className="h-full w-full object-cover"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
          </div>

          <div className="glow-rose rounded-2xl border border-rose-200/60 bg-white/80 p-5 shadow-lg backdrop-blur-sm sm:p-8">
            <p className="font-[family-name:var(--font-cormorant)] text-base italic leading-relaxed text-rose-600/90 sm:text-lg">
              Volim te i hvala što si u mom životu. Sretno Valentinovo!
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-rose-200/60 px-4 py-8 sm:px-6 sm:py-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-[family-name:var(--font-great-vibes)] text-2xl text-rose-600 sm:text-3xl">
            Volim te ♥
          </p>
          <p className="mt-2 font-[family-name:var(--font-cormorant)] text-sm text-rose-500/80">
            Sretno Valentinovo — samo za tebe
          </p>
          <Link
            href="/"
            className="mt-6 inline-flex min-h-[44px] items-center justify-center py-3 font-[family-name:var(--font-cormorant)] text-rose-600 underline decoration-rose-300 underline-offset-4 hover:decoration-rose-500"
          >
            ← Natrag na početak
          </Link>
        </div>
      </footer>
    </div>
  );
}
