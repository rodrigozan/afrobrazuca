/** @type {import('next').NextConfig} */

import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

export function getRootDirectoryPath() {
    const __filename = fileURLToPath(import.meta.url);
    return dirname(__filename);
  }

  const rootDirectoryPath = getRootDirectoryPath(); 

  const nextConfig = {
    sassOptions: {
      includePaths: [path.join(rootDirectoryPath, 'styles')],
    },
  };

export default nextConfig;