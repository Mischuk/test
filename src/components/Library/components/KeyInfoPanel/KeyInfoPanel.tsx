import React from 'react';
import * as Styled from './KeyInfoPanel.styles';
import { useTranslation } from '../../../../services/i18n';

const KeyInfoPanel = ({ data }: any) => {
  const { t } = useTranslation();

  return (
    <div>
      <Styled.Name>{data.name}</Styled.Name>
      <div>
        {t('organization')}: {data.organization}
      </div>
      <div>
        {t('tin')}: {data.rnokpp}
      </div>
      <Styled.List>
        <Styled.ListTitle>{t('certificates')}:</Styled.ListTitle>
        <div>
          {data.certicates.map((certificate: any, index: number) => {
            return (
              <Styled.Cert.Root key={index}>
                <Styled.Cert.Item>
                  <Styled.Cert.Label>{t('type')}:</Styled.Cert.Label> {certificate.title}
                </Styled.Cert.Item>
                <Styled.Cert.Item>
                  <Styled.Cert.Label>{t('issuer')}:</Styled.Cert.Label> {certificate.issuerCN}
                </Styled.Cert.Item>
                <Styled.Cert.Item>
                  <Styled.Cert.Label>{t('serial_number')}:</Styled.Cert.Label> {certificate.serial}
                </Styled.Cert.Item>
                <Styled.Cert.Item>
                  <Styled.Cert.Label>{t('start_date')}:</Styled.Cert.Label>{' '}
                  {new Date(certificate.startDate).toLocaleDateString()}
                </Styled.Cert.Item>
                <Styled.Cert.Item>
                  <Styled.Cert.Label>{t('end_date')}:</Styled.Cert.Label>{' '}
                  {new Date(certificate.endDate).toLocaleDateString()}
                </Styled.Cert.Item>
              </Styled.Cert.Root>
            );
          })}
        </div>
      </Styled.List>
    </div>
  );
};

export default KeyInfoPanel;
