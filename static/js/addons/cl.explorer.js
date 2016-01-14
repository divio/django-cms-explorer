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

    Cl.explorer = {

        /**
         * Loads sub elements
         * @constructor init
         */
        init: function () {
            this._navigation();
        },

        /**
         * Handles navigation size
         * @method _navigation
         * @private
         */
         _navigation: function () {
            var header = $('.js-navbar-head');
            var bound = $('.js-feature-wrapper').height() - header.height();
            var narrowClass = 'navbar-head-narrow';

            $(window).on('scroll.explorer', function () {
                if ($(window).scrollTop() >= bound) {
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
