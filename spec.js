import 'angular-mocks/angular-mocks';

let testsContext = require.context('./client/', true, /\.spec\.js$/);
testsContext.keys().forEach(testsContext);
