'use strict';
;(function($, PubSub) {
    var titleComponent = null;
    var init = function() {
        titleComponent = $('.root-container > .title');
        PubSub.subscribe(EVENT_KEYS.LIST_CLICK, function(message, data) {
            titleComponent.text(data.subject);
        });

        PubSub.subscribe(EVENT_KEYS.DATA_CHANGE, function(message, data) {
            titleComponent.text(data.subject);
        });
    }
    $(init)
})(jQuery, PubSub);
