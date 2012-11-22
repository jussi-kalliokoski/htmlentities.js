htmlentities.js
===============

A minimal html entities decoder/encoder using string replacement.  Should scrub an input string of any XSS attempts or other HTML constructs.


Usage
-----

```javascript

//Encode string
htmlentities.encode('<&>'); // returns '&lt;&amp;&gt;';

//Decode string
htmlentities.decode('&lt;&amp;&gt;'); // returns '<&>';

```

MIT license
