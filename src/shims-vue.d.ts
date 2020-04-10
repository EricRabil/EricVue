declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}

declare module 'gradstop' {
  export default function gradstop(options: {
    stops: number,
    inputFormat: 'hex' | 'rgb' | 'hsl',
    colorArray: [string] | [string, string] | [string, string, string] | [string, string, string, string];
  }): string[];
}