// coverPop v1.0.4 - jQuery Plugin
// License: http://www.opensource.org/licenses/mit-license.php
// To use: $(document).coverPop()
// Will set up a full page popup cover overlay and hide for a set period of time

(function($) {

    'use strict';

    $.fn.coverPop = function(options) {

        // set default plugin settings
        var settings = {
            coverClass:          'coverPop-cover'       // set default cover class
        ,   contentClass:        'coverPop-content'     // set default content class
        ,   fadeInDuration:      500                    // time (in milliseconds) to fade in
        ,   fadeOutDuration:     500                    // time (in milliseconds) to fade out
        ,   expires:             30                     // duration (in days) before it pops up again
        ,   jsCenter:            false                  // if we want the plugin to center the middle box with js (nasty and unrecommended)
        ,   closeClassNoDefault: "coverPop-close"       // close if someone clicks an element with this class and prevent default action
        ,   closeClassDefault:   "coverPop-close-go"    // close if someone clicks an element with this class and continue default action
        ,   cookieName:          "coverPop"             // to change the plugin cookie name
        ,   onPopUpOpen:         function() {}          // on popup open / default is nothing
        ,   onPopUpClose:        function() {}          // on popup close / default is nothing
        ,   forceHash:           'splash'               // hash to append to url to force display of popup
        ,   delayHash:           'go'                   // hash to append to url to delay popup for 1 day
        ,   closeOnEscape:       true                   // close if the user clicks escape
        ,   info:                false                  // toggle console.log statements
        };

        $.extend(settings, options);

        // cache elements we will use
        var html    = $('html')
        ,   body    = $('body')
        ,   cover   = $('.' + settings.coverClass)
        ,   content = $('.' + settings.contentClass)


        return this.each(function() {

            var self = $(this);

            // js centering of element (if not set in css)
            function centerize(element){

                var contentHeight  = element.height()
                ,   contentWidth   = element.width()
                ,   windowWidth    = $(window).width()
                ,   windowHeight   = $(window).height();

                shareInfo("content height: " + contentHeight + ", content width: " + contentWidth);

                element.css({
                    "position" : "absolute",
                    "left"     : Math.round(windowWidth  / 2 - contentWidth / 2),
                    "top"      : Math.round((windowHeight / 2 - contentHeight / 2) - ((windowHeight / 100) * 5)),
                    "margin"   : 0
                });

                shareInfo("centered");
            }

            // open cover popup
            function openPopUp() {

                if (hashExists(delayHash)) {
                    // set the cookie for a day
                    setCookie(1);
                    return;
                }

                // when the popup opens
                function openCallback() {

                    // if there is a function callback on open
                    if (isFunction(settings.onPopUpOpen)) {
                        settings.onPopUpOpen.call(self);

                        shareInfo("CoverPop is open.");  // say it's open
                    }

                    // if js is centering
                    if (settings.jsCenter) {
                        // initial centering
                        centerize(settings.content);

                        // if the window moves centering
                        $(window).on('resize', function(){
                            centerize(settings.content);
                        });
                    }

                }


                // add open class to html
                html.addClass("coverPop-open");
                cover.fadeIn(settings.fadeInDuration, openCallback);

                // bind close events and prevent default event
                if (settings.closeClassNoDefault.length) {
                    $(document).on('click', '.' + settings.closeClassNoDefault, function(e) {
                        e.preventDefault();
                        closePopUp();
                    });
                }

                // bind close events and continue with default event
                if (settings.closeClassDefault.length) {
                    $(document).on('click', '.' + settings.closeClassDefault, function(e) {
                        closePopUp();
                    });
                }

                // bind escape detection to document
                $(document).bind('keyup', onDocUp);
            }

            // close the cover popup
            function closePopUp() {

                // add open class to html
                html.removeClass("coverPop-open");

                // when the popup closes
                function closeCallback() {
                    // if there is a function callback on close
                    if (isFunction(settings.onPopUpClose)) {
                        settings.onPopUpClose.call(self);

                        shareInfo("CoverPop is closed.");  // say it's closed
                    }
                }

                // add open class to html
                html.removeClass("coverPop-open");
                cover.fadeOut(settings.fadeOutDuration, closeCallback);

                // set the cookie so we don't keep seeing the popup
                setCookie(settings.expires);

                // unbind escape detection to document
                $(document).unbind('keyup', onDocUp);
            }

            // check if there is a cookie or hash before proceeding
            if (checkCookie() === false || hashExists(settings.forceHash) === true) {
                openPopUp();
            }

            // close popup when user hits escape button
            function onDocUp(e) {
                if (settings.closeOnEscape) {
                    if (e.keyCode === 27) {
                        closePopUp();
                    }
                }
            }


        });


        // test if it's a function
        function isFunction(functionToCheck) {
            var getType = {};
            return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';

        }


        // for info and debugging
        function shareInfo(message) {
            if (window.console && window.console.log && settings.info) {
                window.console.log(message);
            }
        }


        // function for setting cookie
        function setCookie(days) {
            var date = new Date();

            // get milliseconds at current time plus number of days
            date.setTime(+ date + (days * 86400000)); //24 * 60 * 60 * 1000
            document.cookie = settings.cookieName + "=true; expires=" + date.toGMTString() + "; path=/";

            shareInfo("Cookie " + settings.cookieName + " set for " + days + " days away.");
        }


        // check cookie exists and isn't expired
        function checkCookie() {
            // check that the cookie exists
            if (document.cookie.indexOf(settings.cookieName) !== -1) return true;

            // if the cookie doesn't exist
            return false;
        }


        // check if there is a hash in the url
        function hashExists(hash) {
            // check for hash
            if (window.location.hash.indexOf(hash) !== -1) return true;

            // if there isn't a hash
            return false;
        }

    };

}(jQuery));