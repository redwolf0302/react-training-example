'use strict';
;(function($, PubSub) {
    var formComponent = null,
        memoComponent = null,
        subjectComponent = null,
        saveBtnComponent = null;
    var init = function() {
        formComponent = $('.root-container > .row > .form-component');
        memoComponent = $('#memo', formComponent);
        subjectComponent = $('#subject', formComponent);
        $.valHooks.textarea = {
            get: function(elem) {
                return elem.value.replace(/\r?\n/g, "\r\n");
            }
        };
        saveBtnComponent = $('#save-article-btn', formComponent);
        saveBtnComponent.on('click', function(event) {
          var articleData = formComponent.data('article') || {};
          articleData.subject = subjectComponent.val();
          articleData.memo = memoComponent.val();
          PubSub.publish(EVENT_KEYS.DATA_CHANGE, articleData);
        });
        PubSub.subscribe(EVENT_KEYS.LIST_CLICK, function(message, data) {
            formComponent.data('article', data);
            render();
        });
    };

    function render() {
        var articleData = formComponent.data('article');
        subjectComponent.val(articleData.subject);
        memoComponent.val(articleData.memo);
    }
    $(init)
})(jQuery, PubSub);
