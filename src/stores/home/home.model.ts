export interface Posts {
  content: Content[];
  pageable: Pageable;
  last: boolean;
  totalElements: number;
  totalPages: number;
  sort: Sort;
  first: boolean;
  numberOfElements: number;
  size: number;
  number: number;
  empty: boolean;
}

export interface Content {
  id: number;
  siteIdx: number;
  title: string;
  content: string;
  contentURL: string;
  isDelete: number;
  files: File[];
}

export interface File {
  id: number;
  contentId: number;
  filePath: string;
}

export interface Pageable {
  sort: Sort;
  pageNumber: number;
  pageSize: number;
  offset: number;
  paged: boolean;
  unpaged: boolean;
}

export interface Sort {
  sorted: boolean;
  unsorted: boolean;
  empty: boolean;
}
