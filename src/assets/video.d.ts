declare module "*.mov" {
  const src: string;
  export default src;
}

declare module "*.MOV" {
  const src: string;
  export default src;
}

// Removed duplicate *.mp4 and *.png declarations to avoid "Duplicate identifier" errors
// These declarations are already defined in images.d.ts