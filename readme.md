htmlentities.js
===============

A minimal html entities decoder/encoder using DOM.

Disclaimer
----------

You shouldn't use this "library" for anything real, this is made purely for demonstrational purposes. For reasons why using the approach may be harmful, see [this issue](https://github.com/jussi-kalliokoski/htmlentities.js/issues/1) and the article it links to.

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
