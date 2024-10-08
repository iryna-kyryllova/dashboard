declare const __IS_DEVELOPMENT__: boolean;

declare module '*.scss' {
  const classes: Record<string, string>;
  export = classes;
}

declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}

declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.gif";

declare module '*.svg?url' {
  const content: string;
  export default content;
}