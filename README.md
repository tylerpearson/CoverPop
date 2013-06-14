# coverPop

**coverPop** is a JS plugin to set a lightbox-esque fullscreen popup overlay with cookie integration. Uses no images and is almost 100% style agnostic.

Since styling is handled through easily customizable CSS, **coverPop** integrates well with responsive sites because it gets out of the way and you can do as you please.

## Example

![Example GIF](https://dl.dropboxusercontent.com/u/9008516/Screencast-2013.05.22-21.57.gif)

## Usage

### CSS

Include the plugin css file:

```html
<link rel="stylesheet" href="css/coverPop.css">
```

### JS

Include jQuery and the plugin js:

```html
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
<script src="js/jquery.coverPop.js"></script>
```

Start it with the default settings:

```javascript
$(document).coverPop();
```

**coverPop** can has the ability to customized:

```javascript
$(document).coverPop({
    coverClass:          'coverPop-cover',       // set default cover class
    contentClass:        'coverPop-content',     // set default content class
    fadeInDuration:      500,                    // time (in milliseconds) to fade in
    fadeOutDuration:     500,                    // time (in milliseconds) to fade out
    expires:             30,                     // duration (in days) before it pops up again
    jsCenter:            false,                  // if we want the plugin to center the middle box with js (nasty and unrecommended)
    closeClassNoDefault: "coverPop-close",       // close if someone clicks an element with this class and prevent default action
    closeClassDefault:   "coverPop-close-go",    // close if someone clicks an element with this class and continue default action
    cookieName:          "coverPop",             // to change the plugin cookie name
    onPopUpOpen:         function() {},          // on popup open
    onPopUpClose:        function() {},          // on popup close
    forceHash:           'splash',               // hash to append to url to force display of popup (e.g. http://yourdomain.com/#splash)
    delayHash:           'go',                   // hash to append to url to delay popup for 1 day (e.g. http://yourdomain.com/#go)
    closeOnEscape:       true,                   // close if the user clicks escape
    info:                false                   // toggle console.log statements
});
```

### HTML

`.coverPop-cover` is used on the full window cover. `.coverPop-content` is used for the content of the popup.

By default, a click on any element with `.coverPop-close` will close the popup. The plugin adds `preventDefault()` to elements with this class.

If you wish to continue with the default action, but also hide the popup, add `.coverPop-close-go`. This is particularly useful for form submissions that are sent to another page.

```html
<body>


  <!-- your site's markup -->


  <!-- start popup -->
  <div class="coverPop-cover splash">
      <div class="coverPop-content splash-center">

          <!-- the popup content (form, welcome message, etc.) -->

          <a class="coverPop-close" href="#">or skip signup</a>

      </div><!--end .splash-center -->
  </div><!--end .splash -->
  <!-- end popup -->

  <!-- js, etc. -->

</body>
```

## Updates

* v1.0.4 - Add ability to delay popup by appending a hash to the url *6/13/2013*
* v1.0.3 - Add ability to set a class that still sets a cookie but continues with the default action (useful for submit buttons) *5/29/2013*
* v1.0.2 - Add option to close popup by hitting escape *5/23/2013*
* v1.0.1 - Add ability to force the popup by adding a hash to the url *5/22/2013*


## License

MIT
