import React from "react";

/**
 * ResponsiveImage component with lazy loading, WebP support, and proper attributes
 * Usage: <ResponsiveImage src="image.png" alt="description" width={800} height={600} />
 */
const ResponsiveImage = ({
  src,
  alt,
  width,
  height,
  className = "",
  loading = "lazy",
  decoding = "async",
}) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading={loading}
      decoding={decoding}
    />
  );
};

export default ResponsiveImage;
