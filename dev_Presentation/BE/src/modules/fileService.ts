import * as fs from "fs";
import Express, { Application, Request, Response, NextFunction, response } from 'express';
import { CommunicationParams } from "../interfaces/communicationParams";

export class File {
    constructor(
        private url: string
    ) { }
    static stream(communicationParams: CommunicationParams) {
        const range = communicationParams.Request.query.range;
        if (range) {
            console.log("some other test")
        } else {

        }
    }
}