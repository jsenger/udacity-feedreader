$(function() {
    describe('RSS Feeds', function() {

        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        it('have URL', function() {
            for(feed of allFeeds) {
                expect(feed.url).toBeDefined();
                expect(feed.url).not.toBe('');
            }
        });

        it('have name', function() {
            for(feed of allFeeds) {
                expect(feed.name).toBeDefined();
                expect(feed.name).not.toBe('');
            }
        });
    });

    describe('The menu', function() {

        it('is hidden by default', function() {
            expect($('body')[0]).toHaveClass('menu-hidden');
        });

         it('changes visibility when icon is clicked', function() {
            $('.menu-icon-link').click();
            expect($('body')[0]).not.toHaveClass('menu-hidden');
            $('.menu-icon-link').click();
            expect($('body')[0]).toHaveClass('menu-hidden');
         });

    });

    describe('Initial Entries', function() {

        beforeEach(function(done) {
            loadFeed(0, done);
        });

        it('have at least one entry', function(done) {
            const entries = $( ".feed .entry" ).toArray();
            expect(entries.length).not.toBe(0);
            done();
        });

    });

    describe('New Feed Selection', function() {
        let beforeFeed, afterFeed;

        beforeEach(function(done) {
            loadFeed(0, function() {
                beforeFeed = $('.feed').text();
                loadFeed(1, function() {
                    afterFeed = $('.feed').text();
                    done();
                });
            });
        });

        it('changes content', function(done) {
            expect(afterFeed).not.toEqual(beforeFeed);
            done();
        });

    });
}());
