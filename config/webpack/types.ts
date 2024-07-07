export type Mode = "development" | "production";

export interface Paths {
  entry: string;
  build: string;
  html: string;
}

export interface BuildOptions {
  mode: Mode;
  paths: Paths;
  isDevelopment: boolean;
  port: number;
}