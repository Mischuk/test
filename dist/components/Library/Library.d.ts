import React from 'react';
import { Open } from '../../types';
type LibraryProps = Open & {
    unmount: (redirectUrl?: string) => void;
};
declare function Widget({ unmount, documentURL, redirectURL, documentData, callbackURL, actorId, lang, }: LibraryProps): React.JSX.Element;
export default Widget;
