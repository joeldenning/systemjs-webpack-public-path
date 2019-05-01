// What I wish I could do via SystemJS synchronously
// This doesn't work though when webpack code splits start downloading
// immediately, because public path is set too late.
System.resolve('main').then(path => {
  __webpack_public_path__ = path.slice(0, path.lastIndexOf('/') + 1)
})

// This is hard coded, but works. Uncomment to see how this fixes things
// __webpack_public_path__ = 'http://localhost:8081/'