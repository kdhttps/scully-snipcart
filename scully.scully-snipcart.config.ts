import { ScullyConfig } from '@scullyio/scully';
export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "scully-snipcart",
  outDir: './dist/static',
  routes: {
    "/user/:userId": {
      type: 'json',
      userId: {
        url: 'https://jsonplaceholder.typicode.com/users',
        property: 'id',
      }
    }
  }
};
