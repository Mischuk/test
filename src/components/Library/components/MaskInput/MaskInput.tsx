import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

type Props = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'>;

function MaskInput({ ...props }: Props) {
  const [mask, setMask] = useState(true);

  useEffect(() => {
    const isWebkitTextSecuritySupported = () => {
      const testElement: any = document.createElement('input');
      testElement.style.webkitTextSecurity = 'disc';
      return testElement.style.webkitTextSecurity === 'disc';
    };

    setMask(isWebkitTextSecuritySupported());
  }, []);

  return <Input type={mask ? 'text' : 'password'} {...props} />;
}

const Input = styled.input`
  -webkit-text-security: disc;
  border: 1px solid #dde0e5;
  border-radius: 4px;
  padding: 7px 12px;
  outline: none;
  font-size: 14px;
  line-height: 1.4;
  width: 100%;
  height: 36px;
  background-color: #f6f7f8;

  &[data-error='true'] {
    border-color: #ff4d4f;
  }

  &:hover,
  &:focus {
    border-color: #1973e8;
  }
`;

export default MaskInput;
