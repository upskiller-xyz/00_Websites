import React from 'react';

interface TeamContentProps {
  children: React.ReactNode;
  socials: Record<string, string> | string;
}

const TeamContent: React.FC<TeamContentProps> = ({ children, socials }) => {
  const renderSocials = () => {
    if (typeof socials === 'string') {
      return <div dangerouslySetInnerHTML={{ __html: socials }} />;
    }
    
    if (typeof socials === 'object' && socials) {
      return (
        <div>
          {Object.entries(socials).map(([platform, url]) => (
            <div key={platform}>
              <strong>{platform}:</strong>{' '}
              <a 
                href={url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="primary-link"
              >
                {url.replace(/^mailto:/, '').replace(/^https?:\/\/(www\.)?/, '')}
              </a>
            </div>
          ))}
        </div>
      );
    }
    
    return null;
  };

  return (
    <div className="team-content">
      <div className="team-content-inner">
        <div className="team-text-area">
          <div className="flex-grow">
            {children}
          </div>
          <div className="team-socials">
            {renderSocials()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamContent;