declare module "*.jpg" {
  const path: string;
  export default path;
}
declare module "*.png" {
  const value: import("react-native").ImageSourcePropType;
  export default value;
}
declare module "*.png" {
  const value: any;
  export = value;
}
