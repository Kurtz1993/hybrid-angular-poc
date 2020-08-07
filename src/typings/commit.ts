export interface Commit {
  sha: string;
  commit: CommitDetails;
}

export interface CommitDetails {
  author: CommitAuthor;
  commiter: CommitAuthor;
  message: string;
  url: string;
}

export interface CommitAuthor {
  name: string;
  date: string;
}
