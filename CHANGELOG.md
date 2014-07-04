## Updates

* v2.4.1 - Prevent child elements from inherting parent's events
* v2.4.0 - Added the ability to delay showing the popup
* v2.3.0 - Remove console.log debugging option
* v2.2.1 - Add fix for open callback check
* v2.2 - Add check to ensure cookies are enabled
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