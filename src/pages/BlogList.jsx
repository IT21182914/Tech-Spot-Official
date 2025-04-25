import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { posts } from "../data/posts";

const BlogList = () => (
  <>
    <Helmet>
      <title>Blog | Tech Spot</title>
      <meta
        name="description"
        content="Read the Tech Spot blog for repair tips, accessory reviews, and shop news."
      />
      <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "Blog",
          "name": "Tech Spot Blog",
          "description": "Repair tips, reviews & news from Tech Spot.",
          "url": "https://techspotlk.com/blog"
        }
      `}</script>
    </Helmet>

    <div className="max-w-4xl mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold mb-8 text-white">Our Blog</h1>

      <div className="grid gap-12">
        {posts.map(({ slug, title, date, excerpt, image }) => (
          <article
            key={slug}
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
          >
            <img src={image} alt={title} className="w-full h-60 object-cover" />
            <div className="p-6">
              <time className="text-gray-400 text-sm">{date}</time>
              <h2 className="text-2xl font-semibold mt-2 text-white">
                {title}
              </h2>
              <p className="text-gray-300 mt-2">{excerpt}</p>
              <Link
                to={`/blog/${slug}`}
                className="inline-block mt-4 text-blue-500 hover:underline"
              >
                Read more →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  </>
);

export default BlogList;
