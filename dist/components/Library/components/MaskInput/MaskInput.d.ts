import React from 'react';
type Props = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'>;
declare function MaskInput({ ...props }: Props): React.JSX.Element;
export default MaskInput;
