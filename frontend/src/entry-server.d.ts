declare module '*entry-server.js' {
  export function render(url: string): Promise<string>;
}