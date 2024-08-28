import { EndUser, EndUserConstants } from 'euscp';

const euSignFile = new EndUser(
  process.env.REACT_APP_EUSCP_WORKER,
  EndUserConstants.EndUserLibraryType.JS
);

export default euSignFile;
