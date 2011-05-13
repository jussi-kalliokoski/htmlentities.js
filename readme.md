htmlentities.js
===============

A minimal html entities decoder/encoder using DOM.

Usage
-----

```javascript

//Encode string
htmlentities.encode('<&>'); // returns '&lt;&amp;&gt;';

//Decode string
htmlentities.decode('&lt;&amp;&gt;'); // returns '<&>';

//Also, htmlentities() is a shorthand for encode
htmlentities === htmlentities.encode; // true

```

MIT license
