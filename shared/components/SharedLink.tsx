import React from 'react';

interface SharedLinkProps {
  href: string;
  title?: string;
  className?: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
  rel?: string;
  children: React.ReactNode;
}

const SharedLink: React.FC<SharedLinkProps> = ({ 
  href, 
  title, 
  className = '', 
  target = '_self',
  rel,
  children 
}) => {
  const isExternal = target === '_blank';
  const linkRel = rel || (isExternal ? 'noopener noreferrer' : undefined);

  return (
    <a 
      href={href}
      title={title}
      className={className}
      target={target}
      rel={linkRel}
    >
      {children}
    </a>
  );
};

export default SharedLink;