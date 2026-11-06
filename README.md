# Developer Portfolio (React + Vite)

React, Vite, Tailwind CSS and shadcn/ui-style components. Fonts: Inter and JetBrains Mono (bundled via Fontsource).

## Run
    npm install
    npm run dev        # http://localhost:5173
    npm run build      # production build in /dist

## Make it yours
- `src/data/site.js`: profile, about, skills, experience, contact and footer text.
- `src/data/projects.js`: projects. Add `links: { live, repo }` for buttons and `image: "/projects/x.png"` for screenshots (put files in `public/projects/`). Buttons only appear when a link exists.
- `public/resume.pdf`: replace with your resume.
- The contact form opens the visitor's email app addressed to `site.email`.

## Structure
    src/components/ui       shadcn/ui-style primitives
    src/components/common   Section, Reveal, ProjectPreview
    src/components/layout   Navbar, Footer
    src/sections            Hero, About, Skills, Projects, Experience, Resume, Contact
    src/data                editable content

## Project screenshots
Place approved screenshots in `public/projects/` with the filenames used in `src/data/projects.js`
(life-saver.png, inventory-management.png, erp-payroll.png, erp-business.png, otantik.png,
herbal-one-customer.png, herbal-one-staff.png). Until a file exists, the card shows a labelled illustrative preview.
Do not publish company screenshots, URLs or code without permission.
