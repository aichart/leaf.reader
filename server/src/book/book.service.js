"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
let BookService = class BookService {
    _CharsetReg = /charset=([\w\d-]+)/i;
    getCharset(headers) {
        const contentType = headers['content-type'];
        if (contentType?.length > 0) {
            const charsetResult = this._CharsetReg.exec(contentType);
            if (charsetResult !== null) {
                const [, _charset] = charsetResult;
                return _charset;
            }
        }
        return 'utf-8';
    }
    async request(config) {
        config.method = 'POST';
        config.data ??= config.params;
        config.headers ??= {};
        config.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
        config.responseType = 'arraybuffer';
        const result = await axios_1.default.request(config);
        const charset = this.getCharset(result.headers);
        const decoder = new TextDecoder(charset);
        const responseData = decoder.decode(result.data);
        return responseData;
    }
};
BookService = __decorate([
    (0, common_1.Injectable)()
], BookService);
exports.BookService = BookService;
//# sourceMappingURL=book.service.js.map