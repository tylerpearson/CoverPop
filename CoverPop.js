/**
*
* CoverPop.js
* License: MIT
*
*/


(function ($, CoverPop, undefined) {

    'use strict';

    // set default settings
    var settings = {

            // set default cover id
            coverId: 'CoverPop-cover',

            // time (in milliseconds) to fade in
            fadeInDuration: 500,

            // time (in milliseconds) to fade out
            fadeOutDuration: 500,

            // duration (in days) before it pops up again
            expires: 30,

            // close if someone clicks an element with this class and prevent default action
            closeClassNoDefault: 'CoverPop-close',

            // close if someone clicks an element with this class and continue default action
            closeClassDefault: 'CoverPop-close-go',

            // change the cookie name
            cookieName: 'CoverPop',

            // on popup open function callback
            onPopUpOpen: null,

            // on popup close function callback
            onPopUpClose: null,

            // hash to append to url to force display of popup
            forceHash: 'splash',

            // hash to append to url to delay popup for 1 day
            delayHash: 'go',

            // close if the user clicks escape
            closeOnEscape: true,

            // toggle console.log statements
            info: false
        },


        el = {
            $html:  document.getElementsByTagName('html')[0],
            $cover: document.getElementById(settings.coverId)
        },


        /**
         * Helper methods
         */

        // check if a function
        isFunction = function(functionToCheck) {
            var getType = {};
            return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
        },


        // for info and debugging
        shareInfo = function(message) {
            if (window.console && window.console.log && settings.info) {
                window.console.log(message);
            }
        },


        setCookie = function(name, days) {
            var date = new Date();
            date.setTime(+ date + (days * 86400000));
            document.cookie = name + '=true; expires=' + date.toGMTString() + '; path=/';
            shareInfo('Cookie ' + name + ' set for ' + days + ' days away.');
        },


        // check cookie exists and isn't expired
        checkCookie = function(name) {
            if (document.cookie.indexOf(name) !== -1) {
                return true;
            }
            return false;
        },


        // check if there is a hash in the url
        hashExists = function(hash) {
            if (window.location.hash.indexOf(hash) !== -1) {
                return true;
            }
            return false;
        },



        /**
         * Private Methods
         */

        // close popup when user hits escape button
        onDocUp = function(e) {
            if (settings.closeOnEscape) {
                if (e.keyCode === 27) {
                    closePopUp();
                }
            }
        },

        openCallback = function() {

            // if not the default setting
            if (settings.onPopUpClose !== null) {

                // make sure the callback is a function
                if (isFunction(settings.onPopUpOpen)) {
                    settings.onPopUpOpen.call();
                    shareInfo('CoverPop is open.');
                } else {
                    throw new Error("CoverPop open callback must be a function.");
                }
            }
        },

        closeCallback = function() {

            // if not the default setting
            if (settings.onPopUpClose !== null) {

                // make sure the callback is a function
                if (isFunction(settings.onPopUpClose)) {
                    settings.onPopUpClose.call();
                    shareInfo('CoverPop is closed.');
                } else {
                    throw new Error("CoverPop close callback must be a function.");
                }
            }
        };




    /**
     * Public methods
     */

    CoverPop.openPopUp = function() {

        if (hashExists(settings.delayHash)) {
            setCookie(settings.cookieName, 1);
            return;
        }

        el.$html.addClass('coverPop-open');
        el.$cover.fadeIn(settings.fadeInDuration, openCallback);

        // bind close events and prevent default event
        if ($('.' + settings.closeClassNoDefault).length) {
            $(document).on('click', '.' + settings.closeClassNoDefault, function(e) {
                e.preventDefault();
                CoverPop.closePopUp();
            });
        }

        // bind close events and continue with default event
        if ($('.' + settings.closeClassDefault).length) {
            $(document).on('click', '.' + settings.closeClassDefault, function() {
                CoverPop.closePopUp();
            });
        }

        // bind escape detection to document
        $(document).bind('keyup', onDocUp);
    };


    CoverPop.closePopUp = function() {

        el.$html.removeClass('CoverPop-open');
        el.$cover.fadeOut(settings.fadeOutDuration, closeCallback);

        setCookie(settings.cookieName, settings.expires);

        // unbind escape detection to document
        $(document).unbind('keyup', onDocUp);
    };


    CoverPop.init = function(options) {
        settings = $.extend(settings, options);

        // check if there is a cookie or hash before proceeding
        if (checkCookie(settings.cookieName) === false || hashExists(settings.forceHash) === true) {
            CoverPop.openPopUp();
        }

    };



}(jQuery, window.CoverPop = window.CoverPop || {}));
