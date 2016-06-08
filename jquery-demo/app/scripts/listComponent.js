'use strict';
;(function($, PubSub) {
    var listComponent = null,
        addArticleBtn = null,
        articleListComponent = null;
    var init = function() {
        listComponent = $('.root-container > .row > .list-component');
        addArticleBtn = $('#add-article-btn', listComponent);
        addArticleBtn.on('click', function(event) {
            PubSub.publish(EVENT_KEYS.LIST_CLICK, {});
        });
        articleListComponent = $('#article-list', listComponent);
        PubSub.subscribe(EVENT_KEYS.DATA_CHANGE, function(message, data) {
            if (data.id) {
                article_data.forEach(function(item) {
                    if (data.id === item.id) {
                        item.subject = data.subject;
                        item.memo = data.memo;
                    }
                });
            } else {
                data.id = (new Date()).valueOf();//模拟ID
                article_data.push(data);
            }
            render();
        });
        render();
    }

    function render() {
        articleListComponent.html('');
        var listRoot = $('<ul></ul>');
        listRoot.on('click', function(event) {
            var item = $(event.target);
            PubSub.publish(EVENT_KEYS.LIST_CLICK, item.data('article'));
        });
        if (article_data && article_data.length > 0) {
            article_data.forEach(function(item) {
                var listItem = $('<li></li>');
                listItem.text(item.subject);
                listItem.data('article', item);
                listRoot.append(listItem);
            });
            articleListComponent.append(listRoot);
        }
    }
    $(init)
})(jQuery, PubSub);
