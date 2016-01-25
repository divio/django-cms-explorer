/*
 * Copyright (c) 2013, Divio AG
 * Licensed under BSD
 * http://github.com/aldryn/aldryn-boilerplate-bootstrap3
 */

// #############################################################################
// NAMESPACES
/**
 * @module Cl
 */
// istanbul ignore next
var Cl = window.Cl || {};

//##############################################################################
// EXPLORER
(function ($) {
    'use strict';

    var win = $(window);

    Cl.explorer = {

        /**
         * Loads sub elements
         * @constructor init
         */
        init: function () {
            // Have to wait till images are loaded.
            // While not required for explorer theme specifically,
            // beacuse there is a set height on the "feature" by default
            // it would avoid problems if a normal image would be used.
            win.on('load', this._navigation);
        },

        /**
         * Handles header size. When you scroll past the "Feature" placeholder
         * it adds a `navbar-head-narrow` class to the header to slim it down.
         *
         * @method _navigation
         * @private
         */
         _navigation: function () {
            var header = $('.js-navbar-head');
            var bound = $('.js-feature-wrapper').height() - header.height();
            var narrowClass = 'navbar-head-narrow';

            win.on('scroll.explorer resize.explorer', function () {
                if (win.scrollTop() >= bound) {
                    header.addClass(narrowClass);
                } else {
                    header.removeClass(narrowClass);
                }
            }).trigger('scroll.explorer');
        },

        /**
         * Equalizes height of given elements
         * @method equalHeight
         * @param elements {jQuery} jQuery elements
         */
        equalHeight: function (elements) {
            var height = null;

            elements.each(function (index, item) {
                if ($(item).height() > height) {
                    height = $(item).height();
                }
            });

            // set equal height
            elements.height(height);
        }

    };

    // autoload
    Cl.explorer.init();
    // load equalHeight
    Cl.explorer.equalHeight($('.tpl-home .aldryn-newsblog-articles article .lead'));
    Cl.explorer.equalHeight($('.tpl-home .aldryn-newsblog-articles article h2'));

})(jQuery);
