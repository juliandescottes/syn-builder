syn-builder
===========

Package a standalone distribution of syn.js. 
Reuses the 5 basic files needed to load syn.js, cleaned from their steal dependency.

How to build ?
---------------
- run `npm install`
- run `grunt`
- fetch /build/syn.js or /build/syn-min.js (no reason to care about minification here though, since it's just for tests)

Why ?
--------
Not sure what is going on with https://github.com/bitovi/syn, but it's not updated anymore and I can't find a proper up-to-date packaged version.