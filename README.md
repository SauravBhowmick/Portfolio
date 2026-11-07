# Portfolio

Personal site for Saurav Bhowmick. Each section is its own page, and posts are added from a single file.

Based on [Ryan Fitzgerald's devportfolio template](https://github.com/RyanFitzgerald/devportfolio).

## Pages

| Page | File |
| --- | --- |
| About | `index.html` |
| Experience | `experience.html` |
| Education | `education.html` |
| Publications | `publications.html` |
| Projects | `projects.html` |
| Skills | `skills.html` |
| Awards | `awards.html` |
| Volunteer | `volunteer.html` |
| Blog | `blog.html` |
| Contact | `contact.html` |

The menu links to these files. About stays on the home page, under the hero.

## Add a blog post

Posts live in `js/blog-posts.js`, newest first. Copy an existing entry and change the fields:

- `slug` becomes the address, so `writing-here` is `blog.html#writing-here`
- `title`, `date` (`YYYY-MM-DD`), and `excerpt` show on the list
- `tags` is optional
- `paragraphs` is plain text

Use an `html` string instead of `paragraphs` when a post needs links or a list.

## Preview locally

From this folder:

```bash
python3 -m http.server
```

Then open `http://127.0.0.1:8000`.

Styles are in `scss/styles.scss` and compile to `css/styles.css`. Scripts are in `js/scripts.js` and minify to `js/scripts.min.js`. Run `npm install`, then `npm run watch`, while editing those sources.

## License

MIT. See [LICENSE.md](LICENSE.md).
