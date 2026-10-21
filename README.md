# Sysnet-style IT services site — Next.js 16 + Tailwind CSS 4

    npm install
    npm run dev       # http://localhost:3000

Pages: `/`, `/services/[slug]` (6 pages), `/contact` (Techigent-style contact blocks + form + map).

- Content: `lib/data.ts` (brand, address, phones, services, leaders, stats).
- Colors/fonts: `@theme` in `app/globals.css`.
- Images: `public/images/*.svg` (custom illustrations). To use real photos, drop .jpg/.webp files in
  `public/images/` and change the file extension in the `<Image src>` paths (or the `img` field in `lib/data.ts`).
- Forms post to `app/api/contact/route.ts` (contact + subscribe). Connect to Resend/Nodemailer/CRM where the TODOs are.
