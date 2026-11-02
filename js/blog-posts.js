/*
    Blog posts. Newest first.

    Copy an object, change the fields, and save. The Blog page picks it up.

    slug        address after the hash, e.g. blog.html#my-note
    title       post title
    date        YYYY-MM-DD
    tags        optional list of short labels
    excerpt     one or two sentences shown on the list
    paragraphs  array of plain-text paragraphs

    For a post that needs links or other HTML, use html instead of paragraphs.
*/
window.BLOG_POSTS = [
    {
        slug: "writing-here",
        title: "Writing here",
        date: "2026-11-02",
        tags: ["notes"],
        excerpt: "How posts land on this page, and the fields each one needs.",
        paragraphs: [
            "Posts live in js/blog-posts.js. Copy an existing entry, put it at the top of the list, and fill in the slug, title, date, excerpt, and paragraphs.",
            "The slug becomes the link. This note is at blog.html#writing-here. Use lowercase words separated by hyphens, and keep each slug unique.",
            "Paragraphs are plain text. If a post needs a link or a list, replace paragraphs with an html string."
        ]
    }
];
