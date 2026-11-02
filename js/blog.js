(function () {
    var posts = window.BLOG_POSTS || [];
    var blog = document.getElementById("blog");
    var listEl = document.getElementById("blog-list");
    var postEl = document.getElementById("blog-post");

    if (!blog || !listEl || !postEl) return;

    function escapeHtml(value) {
        return String(value)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;");
    }

    function formatDate(iso) {
        var parts = String(iso).split("-");
        if (parts.length !== 3) return iso;
        var date = new Date(Date.UTC(Number(parts[0]), Number(parts[1]) - 1, Number(parts[2])));
        return date.toLocaleDateString("en-GB", {
            day: "numeric",
            month: "short",
            year: "numeric",
            timeZone: "UTC"
        });
    }

    function tagsHtml(post) {
        return (post.tags || []).map(function (tag) {
            return '<span class="blog-tag">' + escapeHtml(tag) + "</span>";
        }).join("");
    }

    function findPost(slug) {
        for (var i = 0; i < posts.length; i++) {
            if (posts[i].slug === slug) return posts[i];
        }
        return null;
    }

    function renderList() {
        blog.classList.remove("is-post");
        postEl.hidden = true;
        postEl.innerHTML = "";
        listEl.hidden = false;

        if (!posts.length) {
            listEl.innerHTML = '<p class="blog-empty">No posts yet.</p>';
            return;
        }

        listEl.innerHTML = posts.map(function (post) {
            var tags = tagsHtml(post);
            return (
                '<a class="blog-card" href="blog.html#' + encodeURIComponent(post.slug) + '">' +
                    '<p class="blog-meta">' + escapeHtml(formatDate(post.date)) + "</p>" +
                    "<h3>" + escapeHtml(post.title) + "</h3>" +
                    '<p class="blog-excerpt">' + escapeHtml(post.excerpt || "") + "</p>" +
                    (tags ? '<p class="blog-tags">' + tags + "</p>" : "") +
                "</a>"
            );
        }).join("");
    }

    function renderPost(slug) {
        var post = findPost(slug);
        blog.classList.add("is-post");
        listEl.hidden = true;
        postEl.hidden = false;

        if (!post) {
            postEl.innerHTML =
                '<p class="blog-back"><a href="blog.html">All posts</a></p>' +
                "<h2>This post is not here.</h2>";
            return;
        }

        var body = post.html
            ? post.html
            : (post.paragraphs || []).map(function (paragraph) {
                return "<p>" + escapeHtml(paragraph) + "</p>";
            }).join("");
        var tags = tagsHtml(post);

        postEl.innerHTML =
            '<p class="blog-back"><a href="blog.html">All posts</a></p>' +
            "<h2>" + escapeHtml(post.title) + "</h2>" +
            '<p class="blog-meta">' + escapeHtml(formatDate(post.date)) + "</p>" +
            (tags ? '<p class="blog-tags">' + tags + "</p>" : "") +
            '<div class="blog-body">' + body + "</div>";

        window.scrollTo(0, 0);
    }

    function route() {
        var slug = decodeURIComponent(location.hash.replace(/^#/, ""));
        if (slug) renderPost(slug);
        else renderList();
    }

    window.addEventListener("hashchange", route);
    route();
})();
