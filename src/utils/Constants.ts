import { IToken, TokenStatus } from "../types/bee"

const beeActions = {
  CREATE: 'create',
  START: 'start',
  LOAD: 'load',
  SAVE: 'save',
  SEND: 'send',
  PREVIEW: 'preview',
  SAVE_AS_TEMPLATE: 'saveAsTemplate',
  TOGGLE_STRUCTURE: 'toggleStructure',
  TOGGLE_COMMENTS: 'toggleComments',
  TOGGLE_PREVIEW: 'togglePreview',
  TOGGLE_MERGETAGS_PREVIEW: 'toggleMergeTagsPreview',
  SHOW_COMMENT: 'showComment',
  JOIN: 'join',
  RELOAD: 'reload',
  LOAD_WORKSPACE: 'loadWorkspace',
  LOAD_STAGE_MODE: 'loadStageMode',
  LOAD_CONFIG: 'loadConfig',
  LOAD_ROWS: 'loadRows',
  UPDATE_TOKEN: 'updateToken'
}

export const mockedEmptyToken : IToken = {
  access_token: '', status: TokenStatus.OK, v2: true
}

export default beeActions
