import styled from 'styled-components';

const Name = styled.div`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
`;

const List = styled.div`
  margin-top: 16px;
  margin-bottom: 16px;
`;

const ListTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 4px;
`;

const Cert = {
  Root: styled.div`
    margin-top: 10px;

    & + & {
      border-top: 1px solid #ccc;
      padding-top: 10px;
    }
  `,
  Item: styled.div`
    margin-bottom: 4px;
    font-weight: 600;
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  Label: styled.span`
    font-size: 14px;
    color: rgba(0, 0, 0, 0.5);
  `,
};

export { Name, List, ListTitle, Cert };
