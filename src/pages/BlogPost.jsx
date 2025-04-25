import React from "react";
import { useParams, Navigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Helmet } from "react-helmet-async";
import { posts } from "../data/posts";

const BlogPost = () => {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);
  if (!post) return <Navigate to="/blog" replace />;

  const { title, date, excerpt, image, content } = post;

  return (
    <>
      <Helmet>
        <title>{title} | Tech Spot</title>
        <meta name="description" content={excerpt} />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "${title}",
            "image": ["https://techspotlk.com${image}"],
            "datePublished": "${date}",
            "author": {
              "@type": "Organization",
              "name": "Tech Spot"
            },
            "description": "${excerpt}",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://techspotlk.com/blog/${slug}"
            }
          }
        `}</script>
      </Helmet>

      <article className="max-w-3xl mx-auto py-16 px-6 prose prose-invert">
        <h1>{title}</h1>
        <time className="text-gray-400">{date}</time>
        <img src={image} alt={title} className="w-full rounded-lg my-6" />
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
      </article>
    </>
  );
};

export default BlogPost;
