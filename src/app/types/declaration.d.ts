// Source - https://stackoverflow.com/a/41946697
// Posted by Kalle, modified by community. See post 'Timeline' for change history
// Retrieved 2026-04-07, License - CC BY-SA 4.0

// declaration.d.ts
declare module "*.scss" {
  const content: Record<string, string>;
  export default content;
}
