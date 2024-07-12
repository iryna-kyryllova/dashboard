export type Mode = "development" | "production";

export interface Paths {
  entry: string;
  build: string;
  html: string;
  src: string;
}

export interface Env {
  mode: Mode;
  port: number;
}

export interface BuildOptions {
  mode: Mode;
  paths: Paths;
  isDevelopment: boolean;
  port: number;
}