import { PoSyncSchema } from '@po-ui/ng-sync';

export const conferenceSchema: PoSyncSchema = {
  getUrlApi: 'http://localhost:8080/conference-api/api/v1/conferences',
  diffUrlApi: 'http://localhost:8080/conference-api/api/v1/conferences/diff',
  deletedField: 'isdeleted',
  fields: [ 'id', 'title', 'location', 'description' ],
  idField: 'id',
  name: 'Conference',
  pageSize: 1
};
