import path from "path";
import { Configuration } from "webpack";
import { buildWebpackConfig } from "./config/webpack/buildWebpackConfig";
import { Paths } from "./config/webpack/types";

const paths: Paths = {
  entry: path.resolve(__dirname, 'src', 'index.ts'),
  build: path.resolve(__dirname, 'build'),
  html: path.resolve(__dirname, 'public', 'index.html'),
};

const mode = 'development';
const isDevelopment = mode === 'development';

const config: Configuration = buildWebpackConfig({
  mode,
  paths,
  isDevelopment,
});

export default config;