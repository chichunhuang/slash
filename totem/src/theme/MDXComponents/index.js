import React from 'react';
// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
import { Icon } from '@iconify/react'; // Import the entire Iconify library.

export default {
  ...MDXComponents,
  
  IconifyIcon: Icon, // Make the iconify Icon component available in MDX as <icon />.
};