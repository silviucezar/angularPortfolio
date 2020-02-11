export interface Query {
    Table: string;
    Columns: string;
    Where?: string;
    OrderBy?: string;
    Params?: string[];
    RowData?:string
}