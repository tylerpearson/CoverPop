# CoverPop

CoverPop is a lightweight lightbox popup plugin with cookie integration. 99.9% style agnostic. Responsive friendly.

## Example

![Example GIF](https://dl.dropboxusercontent.com/u/9008516/Screencast-2013.05.22-21.57.gif)

## Usage

If you are trying to show up a lightbox popup similar first time visitors that is easily styleable and has cookie integration, this is for you.

If you are trying to show a colorbox image when someone clicks on an internal link, this isn't for you.

## Background

CoverPop is a cleaned-up extrapolation of code we at [New Media Campaigns](http://newmediacampaigns.com) frequently found ourselves using on political campaign websites for email signups with first time visitors. We needed something that was customizable to the point we could use it exactly how we wanted and didn't get in the way.

## Setup

### CSS

Include the plugin css file:

```html
<link rel="stylesheet" href="css/CoverPop.css">
```

### JS

CoverPop does use some jQuery, so include it and the `CoverPop.js` file.

```html
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js"></script>
<script src="js/CoverPop.js"></script>
```

Start it with the default settings:

```javascript
CoverPop.init();
```

**CoverPop** can be to customized:

```javascript
CoverPop.init({
    coverClass:          'CoverPop-cover',       // set default cover class
    fadeInDuration:      500,                    // time (in milliseconds) to fade in
    fadeOutDuration:     500,                    // time (in milliseconds) to fade out
    expires:             30,                     // duration (in days) before it pops up again
    closeClassNoDefault: 'CoverPop-close',       // close if someone clicks an element with this class and prevent default action
    closeClassDefault:   'CoverPop-close-go',    // close if someone clicks an element with this class and continue default action
    cookieName:          'CoverPop',             // to change the plugin cookie name
    onPopUpOpen:         function() {},          // on popup open
    onPopUpClose:        function() {},          // on popup close
    forceHash:           'splash',               // hash to append to url to force display of popup (e.g. http://yourdomain.com/#splash)
    delayHash:           'go',                   // hash to append to url to delay popup for 1 day (e.g. http://yourdomain.com/#go)
    closeOnEscape:       true,                   // close if the user clicks escape
    info:                false                   // toggle console.log statements
});
```

### HTML

`.CoverPop-cover` is used on the full window cover.

By default, a click on any element with `.CoverPop-close` will close the popup. The plugin adds jQuery's `preventDefault()` to elements with this class.

If you wish to continue with the default action, but also hide the popup, add `.CoverPop-close-go`. This is particularly useful for form submissions that are sent to another page.

```html
<body>


  <!-- your site's markup -->


  <!-- start popup -->
  <div class="CoverPop-cover splash">
      <div class="CoverPop-content splash-center">

          <!-- the popup content (form, welcome message, etc.) -->

          <a class="CoverPop-close" href="#">or skip signup</a>

      </div><!--end .splash-center -->
  </div><!--end .splash -->
  <!-- end popup -->

  <!-- js, etc. -->

</body>
```

## Examples

See example uses at [www.coverpopjs.com](http://coverpopjs.com).


## Updates


* v2.0.0 - Major changes  *6/22/2013*
  * Major cleanup of the JS.
  * Removed the option to center with JS.
  * Namespace has been capitalized to CoverPop
  * Add [CoverPop site](http://coverpopjs.com) for better docs
* v1.0.4 - Add ability to delay popup by appending a hash to the url *6/13/2013*
* v1.0.3 - Add ability to set a class that still sets a cookie but continues with the default action (useful for submit buttons) *5/29/2013*
* v1.0.2 - Add option to close popup by hitting escape *5/23/2013*
* v1.0.1 - Add ability to force the popup by adding a hash to the url *5/22/2013*


## License

MIT
