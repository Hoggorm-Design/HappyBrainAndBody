declare module '../dist/server/entry-server.js' {
  export function render(url: string): Promise<string>;
}

declare module '/src/entry-server.tsx' {
  export function render(url: string): Promise<string>;
}