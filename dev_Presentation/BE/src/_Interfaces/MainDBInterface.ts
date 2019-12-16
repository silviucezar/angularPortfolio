export interface SelectQuery {
    Table: string;
    Columns: string;
    Where?: string;
    OrderBy?: string;
    Params?: string[];
}