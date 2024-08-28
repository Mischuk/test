import { Root } from './VersionTag.styles';
import React from 'react';

function VersionTag() {
  const version = process.env.REACT_APP_VERSION;
  if (!version) {
    return null;
  }

  return <Root>Version: {version}</Root>;
}

export { VersionTag };
