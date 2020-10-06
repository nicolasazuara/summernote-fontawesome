(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof module === 'object' && module.exports) {
        module.exports = factory(require('jquery'));
    } else {
        factory(window.jQuery);
    }
}(function ($) {

    $.extend($.summernote.plugins, {
        'summernote-fontawesome': function (context) {
            var self = this;
            self.$toolbar = context.layoutInfo.toolbar;

            var icons = {
                'note-icon-align': 'fas fa-align-left',
                'note-icon-align-center': 'fas fa-align-center',
                'note-icon-align-justify': 'fas fa-align-justify',
                'note-icon-align-left': 'fas fa-align-left',
                'note-icon-align-right': 'fas fa-align-right',
                'note-icon-align-indent': 'fas fa-indent',
                'note-icon-align-outdent': 'fas fa-outdent',
                'note-icon-arrows-alt': 'fas fa-expand-arrows-alt',
                'note-icon-bold': 'fas fa-bold',
                'note-icon-caret': 'fas fa-caret-down',
                'note-icon-circle': 'fas fa-circle',
                'note-icon-close': 'fas fa-times',
                'note-icon-code': 'fas fa-code',
                'note-icon-eraser': 'fas fa-eraser',
                'note-icon-font': 'fas fa-font',
                'note-icon-italic': 'fas fa-italic',
                'note-icon-link': 'fas fa-link',
                'note-icon-magic': 'fas fa-magic',
                'note-icon-menu-check': 'fas fa-check',
                'note-icon-minus': 'fas fa-minus',
                'note-icon-orderedlist': 'fas fa-list-ol',
                'note-icon-pencil': 'fas fa-pencil-alt',
                'note-icon-picture': 'fas fa-image',
                'note-icon-question': 'fas fa-question',
                'note-icon-redo': 'fas fa-redo',
                'note-icon-square': 'fas fa-square',
                'note-icon-strikethrough': 'fa-strikethrough',
                'note-icon-subscript': 'fas fa-subscript',
                'note-icon-superscript': 'fas fa-superscript',
                'note-icon-table': 'fas fa-table',
                'note-icon-text-height': 'fas fa-text-height',
                'note-icon-trash': 'fas fa-trash-alt',
                'note-icon-underline': 'fas fa-underline',
                'note-icon-undo': 'fas fa-undo',
                'note-icon-unorderedlist': 'fas fa-list-ul',
                'note-icon-video': 'fas fa-video',

            }

            this.initialize = function() {
                $.each(icons, function(key, value) {
                    self.$toolbar.find('i.' + key).removeClass(key).addClass('fa ' + value);
                });
            };
        }
    });
}));
