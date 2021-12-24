export interface IDetail {
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
