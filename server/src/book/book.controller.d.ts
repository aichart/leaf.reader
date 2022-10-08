import { BookService } from './book.service';
import { type AxiosRequestConfig } from 'axios';
export declare class BookController {
    private readonly booService;
    constructor(booService: BookService);
    request(body: AxiosRequestConfig): Promise<string>;
}
