export interface ModificationNote {
    modified_on: Date;
    modified_by: String;
    modification_note: String;
}

export const ModificationNote = {
    modified_on: Date,
    modified_by: String,
    modification_note: String
}

export enum response_status_codes {
    success = 200,
    bad_request = 400,
    internal_server_error = 500
}

export interface IBulkInsertedResults {
    ok: 1,
    writeErrors: any[],
    writeConcernErrors: any[],
    insertedIds: any[],
    nInserted: number,
    nUpserted: number,
    nMatched: number,
    nModified: number,
    nRemoved: number,
    upserted: { index: number, _id: string }[];
}