import path from "path";
import { Configuration } from "webpack";
import { buildWebpackConfig } from "./config/webpack/buildWebpackConfig";
import { Env, Paths } from "./config/webpack/types";

export default (env: Env) => {
  const paths: Paths = {
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
  };
  
  const mode = env.mode || 'development';
  const PORT = env.port || 3000;
  const isDevelopment = mode === 'development';
  
  const config: Configuration = buildWebpackConfig({
    paths,
    mode,
    port: PORT,
    isDevelopment
  });

  return config;
}