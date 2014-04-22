# CoverPop

CoverPop is modal splash page plugin with cookie integration. Style agnostic. Responsive friendly.

## Website

[View Website](http://coverpopjs.com)

## Demo

[View Demo](http://tylerpearson.github.io/CoverPop/)

## Usage

If you are trying to show up a lightbox popup similar first time visitors that is easily styleable and has cookie integration, this is for you.

If you are trying to show a colorbox image when someone clicks on an internal link, this isn't for you.

## Background

CoverPop is an extension of code that [we](http://newmediacampaigns.com "New Media Campaigns") frequently found ourselves using on political campaign websites for email signups with first time visitors. We needed something that was customizable to the point we could use it exactly how we wanted and didn't get in the way.

## Questions and feature requests

Please add an issue instead of sending me an email. It makes it easier to keep track and allows other people to participate in the discussion.

## Setup

### CSS

Include the plugin css file:

```html
<link rel="stylesheet" href="css/CoverPop.css">
```

### JS

CoverPop does not use jQuery.

Include the CoverPop.js file at the bottom of your markup.

```html
<script src="js/CoverPop.js"></script>
```

Start it with the default settings:

```javascript
CoverPop.start();
```

**CoverPop** can be customized:

```javascript
CoverPop.start({
    coverId:             'CoverPop-cover',       // set default cover id
    expires:             30,                     // duration (in days) before it pops up again
    closeClassNoDefault: 'CoverPop-close',       // close if someone clicks an element with this class and prevent default action
    closeClassDefault:   'CoverPop-close-go',    // close if someone clicks an element with this class and continue default action
    cookieName:          '_CoverPop',            // to change the plugin cookie name
    onPopUpOpen:         function() {},          // on popup open callback function
    onPopUpClose:        function() {},          // on popup close callback function
    forceHash:           'splash',               // hash to append to url to force display of popup (e.g. http://yourdomain.com/#splash)
    delayHash:           'go',                   // hash to append to url to delay popup for 1 day (e.g. http://yourdomain.com/#go)
    closeOnEscape:       true,                   // close if the user clicks escape
    debug:               false                   // toggle console.log statements
});
```

### HTML

`#CoverPop-cover` is used on the full window cover.

By default, a click on any element with `.CoverPop-close` will close the popup. The plugin uses `preventDefault` with elements with this class.

If you wish to continue with the default action, but also hide the popup, add `.CoverPop-close-go`. This is particularly useful for form submissions that are sent to another page.

```html
<body>


  <!-- your site's markup -->


  <!-- start popup -->
  <div id="CoverPop-cover" class="splash">
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

See all example uses at [www.coverpopjs.com](http://coverpopjs.com).

### Use a new cookie

*Example use:* You changed the popup, and want all new visitors to see the new one.

```js 
CoverPop.start({
    cookieName: 'CoverPop-new'   
});
```

### Hide popup to the visitor for a day

*Example use:* You are sending visitors to a page that already has a signup form, and don't want them to see the popup.

```js
http://www.example.com/#go
```

### Force popup

*Example use:* You are sending visitors to a page and want visitors who have already been to the site to see the popup again.

```js
http://www.example.com/#splash
```

### Change time before cookie expires

*Example use:* You want visitors to see the popup every 7 days, instead of 30.

```js
CoverPop.start({
    expires: 7
});
```

### Do something after the popup closes

*Example use:* You want to start a video after the popup is closed.

```js
CoverPop.start({
    onPopUpClose: function() {
        var player = document.getElementById('myVideo');
        player.play();
    }
});
```

### Hide the popup when someone clicks submit on a form and continue

*Example use:* You want to close the popup and set the cookie when a visitor clicks submit on a form in the popup.

```html
<input type="submit" value="Submit" class="CoverPop-close-go">
```

## Updates

* v2.0.2 - Tweak default CSS to allow scrolling on overflow
* v2.0.1 - Add underscore to cookie name to allow Varnish caching *7/27/2013*
* v2.1 *6/30/2013*
  * Ditch jQuery dependency
  * Switch to using an id instead of class for CoverPop-cover
  * Remove fadeIn/Out duration options because animations are now handled through CSS
  * Add CoverPop.start() alias for CoverPop.init()
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
