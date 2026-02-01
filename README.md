# Valentine — Will you be my Valentine?

Romantična Next.js stranica: pitanje "Do you want to be my Valentine?" i, ako klikne **Yes**, ljubavne kartice i predložak za priču (gdje ste se upoznali + slike).

## Pokretanje

```bash
npm install
npm run dev
```

Otvori [http://localhost:3000](http://localhost:3000).

## Što je uključeno

- **Početna stranica** (`/`) — pitanje "Do you want to be my Valentine?" s dugmadima **Yes, always** i **Hmm...** (romantični stil, srca, blagi animacije).
- **Stranica "Da"** (`/valentine`) — nakon klika na Yes:
  - **Naše kartice** — 6 kartica (Prvi susret, Omiljeni trenutak, Zašto si poseban, Zajednički san, Mala poruka, Valentine 2025). Tekst možeš dopuniti u `src/app/valentine/page.tsx`.
  - **Naša priča** — odjeljci "Kako smo se upoznali" i "Od tada do danas" s placeholder tekstom koji možeš zamijeniti svojom pričom.
  - **Mjesta za slike** — 3 placeholder bloka (jedna velika, dvije manje). Kasnije možeš dodati slike preko `<Image>` komponente ili `<img>` i slike u `public/`.

## Kako dopuniti sadržaj

1. **Tekst na karticama i u priči** — uredi `src/app/valentine/page.tsx`: zamijeni `[dopuni...]` i `[Ovdje napiši...]` svojim tekstom.
2. **Slike** — stavi slike u `public/` (npr. `public/photo1.jpg`), pa u komponenti zamijeni placeholder `<div>` s:
   ```tsx
   <Image src="/photo1.jpg" alt="Opis" width={600} height={400} className="rounded-2xl" />
   ```
   (dodaj `import Image from "next/image";` na vrh ako ga već nema).

## GitHub Pages — link koji se otvara u browseru

1. **Gurni kod na GitHub** (ako već nisi):
   ```bash
   git init
   git add .
   git commit -m "Valentine stranica"
   git remote add origin https://github.com/TVOJ_USERNAME/valentine.git
   git branch -M main
   git push -u origin main
   ```

2. **Uključi GitHub Pages** u repozitoriju:
   - Otvori repozitorij na GitHubu → **Settings** → **Pages**
   - Kod **Build and deployment** → **Source** izaberi **GitHub Actions**

3. **Deploy**: svaki put kad gurnes na `main`, workflow će sam napraviti build i objaviti stranicu.

4. **Link**: nakon prvog uspješnog deploya bit će dostupan na:
   ```
   https://TVOJ_USERNAME.github.io/valentine/
   ```
   Taj link možeš poslati — kad netko klikne, otvori se stranica u browseru.

Sretno Valentinovo ♥
