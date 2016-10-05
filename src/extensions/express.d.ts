/* tslint:disable:interface-name */

declare module 'express-serve-static-core' {
  export interface Express {
     start: (port?: number) => Promise<void>
  }
}


