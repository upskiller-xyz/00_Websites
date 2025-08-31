import React from 'react';
import { NewsPanelTitle } from './NewsPanelTitle';
import { NewsPanelDescription } from './NewsPanelDescription';

interface NewsPanelHeadingProps {
  title: string;
  description: string;
}

export const NewsPanelHeading: React.FC<NewsPanelHeadingProps> = ({
  title,
  description
}) => (
  <div className="space-y-4 mb-8">
    <NewsPanelTitle title={title} />
    <NewsPanelDescription description={description} />
  </div>
);
