import React, { useEffect, useState } from 'react';
import Library from '../Library/Library';
import styled from 'styled-components';
import { Language } from '../../types';
import { useTranslation } from '../../services/i18n';

function lockRootScrollbar(state: 'auto' | 'hidden') {
  const rootElement = document.documentElement;
  rootElement.style.overflow = state;
}

function Develop() {
  const [showWidget, setShowWidget] = useState(false);
  const { setLanguage } = useTranslation();

  const [form, setForm] = useState({
    documentURL:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Public_speaking.jpg/1598px-Public_speaking.jpg',
    callbackURL: 'https://callback.url',
    documentData: '',
    lang: Language.EN,
    redirectURL: '',
    actorId: new Date().getTime().toString(),
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleStart = () => {
    if (!form.actorId) {
      alert('actorId is required');
      return;
    }

    if (!form.callbackURL) {
      alert('callbackURL is required');
      return;
    }

    if (!form.documentURL && !form.documentData) {
      alert('documentURL or documentData are required');
      return;
    }

    lockRootScrollbar('hidden');
    setShowWidget(true);
  };

  const handleStop = (redirectURL?: string) => {
    setShowWidget(false);
    lockRootScrollbar('auto');

    if (redirectURL) {
      window.location.href = redirectURL;
    }
  };

  useEffect(() => {
    setLanguage(form.lang);
  }, [form.lang, setLanguage]);

  return (
    <Wrapper>
      <Container>
        <InputGroup>
          <label>
            documentURL<span style={{ color: 'red' }}>*</span>
            <input
              type="text"
              value={form.documentURL}
              name="documentURL"
              onChange={onChange}
              required
            />
          </label>
        </InputGroup>
        <InputGroup>
          <label>
            documentData
            <input type="text" value={form.documentData} name="documentData" onChange={onChange} />
          </label>
        </InputGroup>
        <InputGroup>
          <label>
            callbackURL<span style={{ color: 'red' }}>*</span>
            <input
              type="text"
              value={form.callbackURL}
              name="callbackURL"
              onChange={onChange}
              required
            />
          </label>
        </InputGroup>

        <InputGroup>
          <label>
            actorId<span style={{ color: 'red' }}>*</span>
            <input type="text" value={form.actorId} name="actorId" onChange={onChange} required />
          </label>
        </InputGroup>

        <InputGroup>
          <label>
            lang
            <select onChange={onChange} name="lang" value={form.lang}>
              <option value={Language.EN}>EN</option>
              <option value={Language.UA}>UA</option>
            </select>
          </label>
        </InputGroup>
        <InputGroup>
          <label>
            redirectURL
            <input type="text" name="redirectURL" value={form.redirectURL} onChange={onChange} />
          </label>
        </InputGroup>

        <Button onClick={handleStart}>Sign document</Button>
        {showWidget && <Library unmount={handleStop} {...(form as any)} />}
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 97vh;
  margin: 0;
  box-sizing: border-box;
  padding: 24px;
`;

const Button = styled.button`
  padding: 12px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;

  &:hover {
    background-color: #0056b3;
  }
`;

const Container = styled.div`
  max-width: 400px;
  width: 100%;
  margin: 0 auto;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;

  label {
    margin-bottom: 8px;
  }

  input {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: #f8f8f8;
    color: #333;
    font-size: 14px;
    outline: none;
    transition: border-color 0.3s ease;

    &:focus {
      border-color: #007bff;
    }
  }

  select {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: #f8f8f8;
    color: #333;
    font-size: 14px;
    outline: none;
    transition: border-color 0.3s ease;

    &:focus {
      border-color: #007bff;
    }
  }
`;

export default Develop;
