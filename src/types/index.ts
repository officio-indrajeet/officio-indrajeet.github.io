export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  topics: string[];
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
}

export interface UserData {
  name: string;
  bio: string;
  location: string;
  company: string;
  blog: string;
  avatar_url: string;
  html_url: string;
  public_repos: number;
  followers: number;
}
