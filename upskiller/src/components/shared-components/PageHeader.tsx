import React from 'react';
import { Link } from 'react-router-dom';

interface PageHeaderProps {
  className?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ className = "" }) => {
  return (
    <header className={`privacy-header ${className}`}>
      <div className="max-w-6xl mx-auto px-6 py-4">
        <Link to="/" className="inline-block">
          <img
            src="https://upskiller-website.s3.fr-par.scw.cloud/upskiller/logo/upskiller_logo_RGB.svg"
            alt="Upskiller"
            className="h-8 w-auto"
          />
        </Link>
      </div>
    </header>
  );
};

export default PageHeader;