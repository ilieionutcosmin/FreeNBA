"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pagination = /** @class */ (function () {
    function Pagination(current_page, per_page, next_page, total_count, total_pages) {
        if (current_page === void 0) { current_page = 1; }
        if (per_page === void 0) { per_page = 25; }
        this.current_page = current_page;
        this.per_page = per_page;
        this.next_page = next_page;
        this.total_count = total_count;
        this.total_pages = total_pages;
    }
    return Pagination;
}());
exports.Pagination = Pagination;
//# sourceMappingURL=pagination.model.js.map