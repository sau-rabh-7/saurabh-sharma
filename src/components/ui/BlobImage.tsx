// src/components/ui/BlobImage.tsx
import React from 'react';
import './BlobImage.css';

interface BlobImageProps {
  imageUrl: string;
  altText?: string;
}

const BlobImage: React.FC<BlobImageProps> = ({ imageUrl, altText = "Profile" }) => {
  return (
    <div className="blob-container">
      {/* The animation is now handled entirely by CSS */}
      <div 
        className="blob-image" 
        style={{ backgroundImage: `url(${imageUrl})` }}
        role="img"
        aria-label={altText}
      ></div>
    </div>
  );
};

export default BlobImage;
