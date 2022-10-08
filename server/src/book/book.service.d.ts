import { type AxiosRequestConfig } from 'axios';
export declare class BookService {
    private _CharsetReg;
    private getCharset;
    request(config: AxiosRequestConfig): Promise<string>;
}
