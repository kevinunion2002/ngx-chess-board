// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
  firebase: {
    projectId: 'chess-app-1d85f',
    appId: '1:703159870855:web:eeeca1e993138ffa2e5f22',
    databaseURL: 'https://chess-app-1d85f-default-rtdb.firebaseio.com',
    storageBucket: 'chess-app-1d85f.appspot.com',
    locationId: 'us-central',
    apiKey: 'AIzaSyAlgE8lJP_JZMJv1n5KSSaE0JT6UHscMy8',
    authDomain: 'chess-app-1d85f.firebaseapp.com',
    messagingSenderId: '703159870855',
    measurementId: 'G-V7N4KS1XXC',
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
