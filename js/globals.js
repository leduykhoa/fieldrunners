let baseUrl = `${window.location.protocol}//${window.location.hostname}:${window.location.port}`;
let port = window.location.port;
if (port == 80 || port == 443) {
    baseUrl = `${window.location.protocol}//${window.location.hostname}`;
}
// console.log(baseUrl);