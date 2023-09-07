declare module '*.svg' {
  const src: string;
  export default src;

  import * as React from 'react';
  export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}
