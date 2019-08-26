export class Pagination {
  constructor(
    public current_page: number = 1,
    public per_page: number = 25,
    public next_page?: number,
    public total_count?: number,
    public total_pages?: number

  ) {
  }
}
