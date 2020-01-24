import { Request, Response } from 'express';

export interface CommunicationParams {
    Request: Request;
    Response: Response;
    Source?: string
}