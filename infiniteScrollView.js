define(function(require, exports, module) {
    var ScrollView = require('famous/views/Scrollview');

    function InfiniteScrollView(options) {
        ScrollView.apply(this, arguments);

        if (this.options.offset)
            this.setOffset(this.options.offset);

        _monitor.call(this);
    }

    InfiniteScrollView.prototype = Object.create(ScrollView.prototype);
    InfiniteScrollView.prototype.constructor = InfiniteScrollView;

    InfiniteScrollView.DEFAULT_OPTIONS = {};

    InfiniteScrollView.prototype.setOffset = function(o) {
        this.offset = o;
    }

    InfiniteScrollView.prototype._setContentSize = function() {
        var node = this._node;
        this.contentSize = 0;
        for(var i in node._.array) {
            this.contentSize += node._.array[i].getSize()[1];
        }
    }

    function _monitor() {
        this.sync.on('start',function(data) {
            this._setContentSize();
        }.bind(this));

        this.sync.on('update',function(data) {
            if (!this.infiniteScrollDisabled && this._scroller._position + Math.abs(this._pageSpringPosition) + this.getSize()[1] >= this.contentSize - this.offset) {
                this._eventOutput.emit('infiniteScroll');
            }
        }.bind(this));
    }

    module.exports = InfiniteScrollView;
});
