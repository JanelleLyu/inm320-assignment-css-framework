# INM320 - CSS Framework Assignment

A recreation of the "Dashboard" page from the INM 320 CSS Framework Figma
design, built with **Bootstrap 5.3** and the **Sass** CSS precompiler.

## Assignment changes applied

- `Sales overview` and `Active Users` are **switched**: Sales overview is now
  the first block on the left, Active Users is the second block on the right.
- Both blocks are **50% wide each** from the large breakpoint
  (`col-12 col-lg-6`, stacked on mobile).

## Marks covered

| Requirement | Where |
| --- | --- |
| Consistent code style | 2-space indentation, lowercase file names, English comments |
| Bootstrap framework | Grid, cards, table, progress bars, modal, form, offcanvas |
| Modifying default Bootstrap design | `src/assets/scss/main.scss` overrides colours, radius, buttons, sidebar |
| Mobile first responsive | Base rules target small screens, `@media (min-width: 992px)` adds the desktop layout |
| CSS precompiler | Sass source in `src/assets/scss/`, compiled to `src/assets/css/main.css` |
| Advanced Bootstrap components | Modal + form (`Add project`), offcanvas sidebar on mobile |
| Remote repo | `https://github.com/JanelleLyu/inm320-assignment-css-framework` |

## How to run

```bash
npm install
npm start
```

`npm start` runs `lite-server` with `--baseDir="src"`, so the page opens at
`http://localhost:3000`.

## How to rebuild the CSS

```bash
npm run sass
```

The Sass entry point is `src/assets/scss/main.scss` and the compiled file is
`src/assets/css/main.css`.

## Structure

```
src/
├── index.html
└── assets/
    ├── css/
    │   └── main.css
    ├── img/
    ├── js/
    │   └── main.js
    └── scss/
        └── main.scss
```

## Notes

- Icons are inline SVG from Ionicons, the same set the Figma comp uses. The typeface is Helvetica.
- Charts are drawn with plain CSS and inline SVG, so no chart library is
  required.
