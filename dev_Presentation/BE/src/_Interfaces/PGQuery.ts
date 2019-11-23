import { QueryConfig } from "pg";

export interface PGQuery {
    IsTransaction: boolean,
    Begin?: "Begin";
    DbActionSingle?: string | QueryConfig;
    DbActionTransaction?: string[];
    Commit?: "COMMMIT";
    Rollback?: "ROLLBACK";
}