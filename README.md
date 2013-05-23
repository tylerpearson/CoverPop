# coverPop.js

coverPop.js is a jQuery plugin to set up a fullscreen popup overlay on a visitor's initial visit and hide for a set period of time.

Uses jQuery.

## Usage

Include the plugin css file:

```html
<link rel="stylesheet" href="css/coverPop.css">
```

Include jQuery and the plugin:

```html
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
<script src="js/jquery.coverPop.js"></script>
```

Start it with the default settings:

```javascript
$(document).ready(function() {
    $(document).coverPop();
});
```

Customize it:

```javascript
$(document).coverPop({
    coverClass:        'coverPop-cover',       // set default cover class
    contentClass:      'coverPop-content',     // set default content class
    fadeInDuration:    500,                    // time (in milliseconds) to fade in
    fadeOutDuration:   500,                    // time (in milliseconds) to fade out
    expires:           30,                     // hide for this # of days
    jsCenter:          false,                  // if we want the plugin to center the middle box with js (nasty and unrecommended)
    closeClass:        "coverPop-close",       // close if someone clicks an element with this class
    cookieName:        "coverPop",             // to change the plugin cookie name
    onPopUpOpen:       function() {},          // on popup open
    onPopUpClose:      function() {},          // on popup close
    info:              false                   // toggle console.log statements
});
```

### License

MIT