import styled from 'styled-components';

const common = {
  transition: '450ms cubic-bezier(.23,1,.32,1) 0ms',
  fontFamily: "'Open Sans', sans-serif",
  layout: {
    providers: '510px',
    readKey: '720px',
    verifyKey: '830px',
    fallback: '720px',
  },
  modal: {
    backgroundColor: '#fff',
    shadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  colors: {
    brand: '#1973e8',
    error: '#F84545',
    buttons: {
      regular: {
        backgroundColor: '#F6F7F8',
      },
      brand: {
        backgroundColor: '#1973e8',
        active: {
          backgroundColor: '#1e6ad0',
        },
      },
    },
    backdrop: 'rgb(57, 63, 70, 0.8)',
    border: {
      regular: 'rgba(0, 0, 0, 0.08)',
      active: '#1973e8',
    },
    errorMessage: {
      color: '#F84545',
      backgroundColor: '#FFF6F8',
    },
  },
};

const Wrapper = styled.div`
  &,
  & * {
    box-sizing: border-box;
  }

  & *::before,
  & *::after {
    box-sizing: border-box;
  }

  font-family: ${common.fontFamily};
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  font-variation-settings: 'wdth' 100;

  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  background-color: ${common.colors.backdrop};
  display: flex;
`;

const Modal = {
  Root: styled.div`
    position: relative;
    padding: 40px;
    background-color: ${common.modal.backgroundColor};
    box-shadow: ${common.modal.shadow};
    margin-left: auto;
    margin-right: auto;
  `,
  Wrapper: styled.div`
    width: 100%;
    overflow: auto;
    max-height: 100%;
    margin-top: auto;
    margin-bottom: auto;
    padding: 12px;
    display: flex;
    flex-direction: column;
  `,
  Close: styled.div`
    position: absolute;
    right: 0;
    top: 50%;
    width: 40px;
    height: 40px;
    margin-top: -20px;
    margin-right: -10px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-size: 36px;
    z-index: 1;
    transition: color ${common.transition};

    &:hover {
      color: ${common.colors.error};
    }
  `,
  Header: styled.div`
    position: relative;
    display: flex;
    align-items: center;
    margin-bottom: 36px;
  `,

  Title: styled.div`
    position: relative;
    font-size: 28px;
    font-weight: 700;
    line-height: 1.3;
    cursor: default;
    user-select: none;
  `,

  Backward: styled.div`
    font-size: 24px;
    cursor: pointer;
    margin-right: 8px;

    &:hover {
      color: #1973e8;
    }
  `,
};

const Layout = {
  Providers: styled.div`
    position: relative;
    width: ${common.layout.providers};
  `,

  ReadKey: styled.div`
    position: relative;
    width: ${common.layout.readKey};
  `,

  VerifyKey: styled.div`
    position: relative;
    width: ${common.layout.verifyKey};
  `,

  Fallback: styled.div`
    position: relative;
    width: ${common.layout.fallback};
  `,
};

const ErrorMessage = styled.div`
  background: ${common.colors.errorMessage.backgroundColor};
  color: ${common.colors.errorMessage.color};
  font-size: 14px;
  margin-bottom: 12px;
  padding: 12px;
  border-radius: 4px;
`;

const SignProvider = {
  Root: styled.div`
    display: flex;
    align-items: center;
    padding: 24px;
    border: 2px solid ${common.colors.border.regular};
    border-radius: 16px;
    font-size: 16px;
    font-weight: 600;
    cursor: default;
    user-select: none;
    transition: border-color ${common.transition};

    & + & {
      margin-top: 16px;
    }

    &:hover:not([data-disabled='true']) {
      cursor: pointer;
      border-color: ${common.colors.border.active};
    }

    &[data-disabled='true'] {
      opacity: 0.3;
      border-color: #ccc;
    }
  `,

  Icon: styled.div`
    width: 40px;
    height: 40px;
    margin-right: 12px;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center center;

    &[data-attr='diia'] {
      background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB3aWR0aD0iOTYiIGhlaWdodD0iOTYiIHZpZXdCb3g9IjAgMCA5NiA5NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik00OCA5NkMyMS4xMiA5NiAxMy44ODMxIDk0LjY0MTIgNy42MjA5MiA4OC4zNzkxQzEuMzI5MjMgODIuMDcyNiAwIDc0Ljg4IDAgNDhDMCAyMS4xMiAxLjM1ODc3IDEzLjkyNzQgNy42MjA5MiA3LjYyMDkyQzEzLjg4MzEgMS4zNTg3NyAyMS4xMiAwIDQ4IDBDNzQuODggMCA4Mi4xMTY5IDEuMzU4NzcgODguMzc5MSA3LjYyMDkyQzk0LjY3MDggMTMuOTI3NCA5NiAyMS4xMiA5NiA0OEM5NiA3NC44OCA5NC42NzA4IDgyLjA3MjYgODguMzc5MSA4OC4zNzkxQzgyLjExNjkgOTQuNjQxMiA3NC44OCA5NiA0OCA5NloiIGZpbGw9ImJsYWNrIiAvPgogICAgPHBhdGggZD0iTTY2LjgzMDggNDcuOTU1NkM2NC45OTk0IDQ3Ljk1NTYgNjMuODAzMSA0Ni43NDQ1IDYzLjgwMzEgNDQuOTU3NEM2My44MDMxIDQzLjE5OTkgNjUuMDE0MiA0Mi4wMDM2IDY2LjgzMDggNDIuMDAzNkg3MS42MTZWNDcuOTU1Nkg2Ni44MzA4Wk03NS42MTg1IDM4LjU0NzZINjYuMzU4MkM2Mi40Mjk2IDM4LjU0NzYgNTkuNzQxNiA0MS4xMTc0IDU5Ljc0MTYgNDQuODA5N0M1OS43NDE2IDQ3LjczNCA2MS40MTA1IDQ5Ljk0OTQgNjQuMDU0MiA1MC43MTc0TDU5LjAwMzEgNTguNDEyMkg2My40NzgyTDY4LjAyNzEgNTEuNDExNkg3MS42MDEzVjU4LjQxMjJINzUuNjE4NVYzOC41NDc2Wk0yNS41MjEzIDQzLjc2MTFWMzcuNzY0OEgzMy4zMDQ3VjU0Ljc2NDJIMjMuNTQyMkMyNC41OTA4IDUyLjkzMjggMjUuNTIxMyA0OC42OTQgMjUuNTIxMyA0My43NjExWk0zNy40MjUzIDMzLjkyNDhIMjEuNTQ4NFY0My45MjM2QzIxLjU0ODQgNDkuMDE5IDIwLjY0NzQgNTIuOTkxOSAxOS40NTExIDU0Ljc3OUgxNy41NDU5VjYzLjg0NzNIMjEuNDc0NVY1OC40ODZIMzYuMzMyNFY2My44NDczSDQwLjI2MVY1NC43NzlIMzcuNDI1M1YzMy45MjQ4Wk00OS40MDMxIDU1LjA0NDhMNDkuMDQ4NyA1NC44MDg1TDUzLjY4NjIgMzguNTQ3Nkg0NC4zMDc3TDQzLjMwMzQgNDIuMTY2TDQ4Ljc1MzMgNDIuMTIxN0w0NS4yMDg3IDU0LjUyNzlDNDQuNTg4NCA1Ni43ODc2IDQ2LjEwOTYgNTguODg0OCA0OC41OTA4IDU4Ljg4NDhDNDkuMzczNiA1OC44ODQ4IDUwLjE0MTYgNTguNjkyOCA1MC45OTgyIDU4LjE0NjRMNTcuMzc4NSA1My44MzM3TDU1LjQyOSA1MC45NTM3TDQ5LjQwMzEgNTUuMDQ0OFpNNTIuMTIwNyAzNC44MTFDNTQuMDk5NyAzNC44MTEgNTQuOTI2OCAzNC4wNzI1IDU0LjkyNjggMzIuMzE1QzU0LjkyNjggMzAuNDgzNiA1NC4wNzAyIDI5Ljc0NTEgNTIuMTIwNyAyOS43NDUxQzUwLjE3MTEgMjkuNzQ1MSA0OS4zMTQ1IDMwLjQ4MzYgNDkuMzE0NSAzMi4zMTVDNDkuMzI5MyAzNC4wNzI1IDUwLjE0MTYgMzQuODExIDUyLjEyMDcgMzQuODExWiIgZmlsbD0id2hpdGUiIC8+Cjwvc3ZnPg==');
    }

    &[data-attr='smartid'] {
      background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4gPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOTYiIGhlaWdodD0iMTk2IiB2aWV3Qm94PSIwIDAgMTk2IDE5NiIgZmlsbD0ibm9uZSI+IDxjaXJjbGUgY3g9Ijk4IiBjeT0iOTgiIHI9Ijk4IiBmaWxsPSIjOENDNTQxIj48L2NpcmNsZT4gPGNpcmNsZSBjeD0iOTgiIGN5PSI5OCIgcj0iODciIGZpbGw9IiMwMDAxMDAiPjwvY2lyY2xlPiA8cGF0aCBkPSJNNzAuMTY0MiAxMzNINTIuNjkwMVY2MC4zMDc3SDcwLjE2NDJWMTMzWk04NS40MTM2IDEzM1Y2MC4zMDc3SDEwOC44MjlDMTE1LjI1MyA2MC4zMDc3IDEyMS4wMjggNjEuNzcyMiAxMjYuMTUzIDY0LjcwMTJDMTMxLjI3OSA2Ny41OTY5IDEzNS4yNzMgNzEuNzA3NSAxMzguMTM2IDc3LjAzMjlDMTQxLjAzMSA4Mi4zMjUxIDE0Mi40OTYgODguMjY2MyAxNDIuNTI5IDk0Ljg1NjVWOTguMjAxNkMxNDIuNTI5IDEwNC44NTggMTQxLjExNCAxMTAuODMzIDEzOC4yODUgMTE2LjEyNUMxMzUuNDg5IDEyMS4zODQgMTMxLjUyOSAxMjUuNTExIDEyNi40MDMgMTI4LjUwN0MxMjEuMzEgMTMxLjQ2OSAxMTUuNjE5IDEzMi45NjcgMTA5LjMyOCAxMzNIODUuNDEzNlpNMTAyLjkzOCA3My44Mzc2VjExOS41MkgxMDkuMDI5QzExNC4wNTUgMTE5LjUyIDExNy45MTUgMTE3LjczOSAxMjAuNjExIDExNC4xNzhDMTIzLjMwNyAxMTAuNTgzIDEyNC42NTUgMTA1LjI1OCAxMjQuNjU1IDk4LjIwMTZWOTUuMDU2MkMxMjQuNjU1IDg4LjAzMzMgMTIzLjMwNyA4Mi43NDExIDEyMC42MTEgNzkuMTc5N0MxMTcuOTE1IDc1LjYxODMgMTEzLjk4OCA3My44Mzc2IDEwOC44MjkgNzMuODM3NkgxMDIuOTM4WiIgZmlsbD0id2hpdGUiPjwvcGF0aD4gPC9zdmc+IA==');
    }

    &[data-attr='key'] {
      background-color: ${common.colors.buttons.regular.backgroundColor};
      border: 1px solid ${common.colors.border.regular};
      border-radius: 12px;
      background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUiIGhlaWdodD0iMjUiIHZpZXdCb3g9IjAgMCAyNSAyNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIwLjM4NzYgNC45MzgwN0MxOS4xOTYzIDMuNzQ1MTEgMTcuNjM3OCAyLjk4ODMzIDE1Ljk2MzUgMi43ODk4NEMxNC4yODkzIDIuNTkxMzYgMTIuNTk3MSAyLjk2Mjc1IDExLjE1OTkgMy44NDQwOEM5LjcyMjY1IDQuNzI1NDIgOC42MjQyOSA2LjA2NTI5IDguMDQyMDQgNy42NDc0OEM3LjQ1OTc5IDkuMjI5NjggNy40Mjc2IDEwLjk2MTkgNy45NTA2OCAxMi41NjQ2TDIuNzczOCAxNy43NDE1QzIuNjMzOTEgMTcuODgwMyAyLjUyMyAxOC4wNDU1IDIuNDQ3NTEgMTguMjI3NUMyLjM3MjAzIDE4LjQwOTYgMi4zMzM0OCAxOC42MDQ4IDIuMzM0MTEgMTguODAxOFYyMS40OTE1QzIuMzM0MTEgMjEuODg5MyAyLjQ5MjE1IDIyLjI3MDkgMi43NzM0NSAyMi41NTIyQzMuMDU0NzYgMjIuODMzNSAzLjQzNjI5IDIyLjk5MTUgMy44MzQxMSAyMi45OTE1SDYuODM0MTFDNy4wMzMwMyAyMi45OTE1IDcuMjIzNzkgMjIuOTEyNSA3LjM2NDQ0IDIyLjc3MThDNy41MDUxIDIyLjYzMTIgNy41ODQxMSAyMi40NDA0IDcuNTg0MTEgMjIuMjQxNVYyMC43NDE1SDkuMDg0MTJDOS4yODMwMyAyMC43NDE1IDkuNDczNzkgMjAuNjYyNSA5LjYxNDQ0IDIwLjUyMThDOS43NTUxIDIwLjM4MTIgOS44MzQxMiAyMC4xOTA0IDkuODM0MTIgMTkuOTkxNVYxOC40OTE1SDExLjMzNDFDMTEuNDMyNiAxOC40OTE2IDExLjUzMDIgMTguNDcyMyAxMS42MjEzIDE4LjQzNDZDMTEuNzEyMyAxOC4zOTcgMTEuNzk1IDE4LjM0MTggMTEuODY0NyAxOC4yNzIxTDEyLjc2MSAxNy4zNzQ5QzEzLjUxMTIgMTcuNjE5IDE0LjI5NTIgMTcuNzQyNyAxNS4wODQxIDE3Ljc0MTVIMTUuMDkzNUMxNi41NzYxIDE3LjczOTcgMTguMDI0OSAxNy4yOTg1IDE5LjI1NjkgMTYuNDczN0MyMC40ODg5IDE1LjY0ODkgMjEuNDQ4NyAxNC40Nzc0IDIyLjAxNTMgMTMuMTA3M0MyMi41ODE4IDExLjczNzIgMjIuNzI5NSAxMC4yMyAyMi40Mzk4IDguNzc1OTZDMjIuMTUwMSA3LjMyMTk0IDIxLjQzNTkgNS45ODY0IDIwLjM4NzYgNC45MzgwN1pNMTYuOTU5MSA5Ljg2NjUxQzE2LjY2MjQgOS44NjY1MSAxNi4zNzI0IDkuNzc4NTMgMTYuMTI1OCA5LjYxMzcxQzE1Ljg3OTEgOS40NDg4OSAxNS42ODY4IDkuMjE0NjIgMTUuNTczMyA4Ljk0MDUzQzE1LjQ1OTggOC42NjY0NCAxNS40MzAxIDguMzY0ODQgMTUuNDg3OSA4LjA3Mzg3QzE1LjU0NTggNy43ODI5IDE1LjY4ODcgNy41MTU2MyAxNS44OTg1IDcuMzA1ODVDMTYuMTA4MiA3LjA5NjA3IDE2LjM3NTUgNi45NTMyMSAxNi42NjY1IDYuODk1MzNDMTYuOTU3NSA2LjgzNzQ1IDE3LjI1OTEgNi44NjcxNiAxNy41MzMxIDYuOTgwNjlDMTcuODA3MiA3LjA5NDIyIDE4LjA0MTUgNy4yODY0OCAxOC4yMDYzIDcuNTMzMTVDMTguMzcxMSA3Ljc3OTgzIDE4LjQ1OTEgOC4wNjk4NCAxOC40NTkxIDguMzY2NTFDMTguNDU5MSA4Ljc2NDMzIDE4LjMwMTEgOS4xNDU4NiAxOC4wMTk4IDkuNDI3MTdDMTcuNzM4NSA5LjcwODQ3IDE3LjM1NjkgOS44NjY1MSAxNi45NTkxIDkuODY2NTFaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K');
      background-size: 25px 25px;
    }
  `,

  Arrow: styled.div`
    margin-left: auto;
    font-size: 18px;
    &:before {
      content: '\\2192';
    }
  `,
};

const FileInputArea = {
  Root: styled.label`
    border: 2px dashed ${common.colors.border.regular};
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    cursor: pointer;
    user-select: none;
    margin-bottom: 16px;

    &:hover {
      border-color: ${common.colors.border.active};
    }
  `,
  Label: styled.div`
    font-weight: 600;
  `,
  LabelDesc: styled.div`
    font-weight: 300;
    font-size: 12px;
    margin-top: 8px;
  `,
};

const Button = styled.button`
  background-color: ${common.colors.buttons.brand.backgroundColor};
  color: #fff;
  border-radius: 4px;
  padding: 0 15px;
  height: 36px;
  outline: none;
  border: none;
  appearance: none;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  min-width: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color ${common.transition};
  white-space: nowrap;

  &[disabled],
  &:hover {
    background-color: ${common.colors.buttons.brand.active.backgroundColor};
  }

  &[disabled] {
    cursor: default;
    opacity: 0.5;
    pointer-events: none;
  }
`;

const GroupControl = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`;

export { Wrapper, Modal, Layout, ErrorMessage, SignProvider, FileInputArea, Button, GroupControl };
