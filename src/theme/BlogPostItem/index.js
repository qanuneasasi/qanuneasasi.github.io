import React from 'react';
import OriginalBlogPostItem from '@theme-original/BlogPostItem';

export default function BlogPostItem(props) {
  return (
    <div style={{direction: 'rtl', textAlign: 'right'}}>
      <OriginalBlogPostItem {...props} />
    </div>
  );
}
