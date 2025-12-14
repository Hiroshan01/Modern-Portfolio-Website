import { Helmet } from "react-helmet-async";
import img from "../assets/H.png";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  author?: string;
  ogImage?: string;
}

export const SEO = ({
  title = "Hiroshan - Full-Stack Web Developer",
  description = "Portfolio of Hiroshan, a passionate full-stack web developer specializing in React, Javascripts, and modern web technologies.",
  keywords = "web developer, full-stack developer, react developer, Python, Django, portfolio, web design",
  author = "Hiroshan Madusanka",
  ogImage = img,
}: SEOProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap"
        rel="stylesheet"
      />
    </Helmet>
  );
};
