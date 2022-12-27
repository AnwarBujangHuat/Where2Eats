declare module "*.jpg" {
  const path: string;
  export default path;
}

declare module "*.png" {
  const value: any;
  export = value;
}
