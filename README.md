famous-infinitescroll
=====================

Infinite Scroll implementation for famous framework

## Requirements

You can install famous-infinitescroll and its dependencies with bower: `bower install famous-infinitescroll`.


## Getting started

	var InfiniteScrollView  = require('famous-infinitescroll/InfiniteScrollView');

	this.viewList = [];

	this.scrollview = new InfiniteScrollView({
		margin: 1000,
		offset: 1000
	});

	this.viewSequence = new ViewSequence(this.viewList);
	this.scrollview.sequenceFrom(this.viewSequence);

	this.setOffset(this.scrollview.getSize()[1]);

	this.scrollview.on('infiniteScroll', function(data) {
		this.scrollview.infiniteScrollDisabled = true;

		console.log('infiniteScroll');

		setTimeout(function () {
			this.scrollview.infiniteScrollDisabled = false;
		}.bind(this), 1000);
	}.bind(this));


## Contributors

- [João Ribeiro](https://github.com/JonnyBGod) (author)
- Lots of [wonderful helper elves](https://github.com/JonnyBGod/famous-infinitescroll/contributors) on GitHub

## TODO

- Fix ALL THE THINGS! on the GitHub [issues list](https://github.com/JonnyBGod/node-moloni/issues)
