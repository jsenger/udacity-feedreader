$(function() {
    describe('RSS Feeds', function() {

        /* Make sure that the allFeeds variable has been
         * defined and that it is not empty
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* Loop through each feed in the allFeeds
         * object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('have URL', function() {
            for(feed of allFeeds) {
                expect(feed.url).toBeDefined();
                expect(feed.url).not.toBe('');
            }
        });

        /* Loop through each feed in the allFeeds
         * object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('have name', function() {
            for(feed of allFeeds) {
                expect(feed.name).toBeDefined();
                expect(feed.name).not.toBe('');
            }
        });
    });

    describe('The menu', function() {

        /* Ensure the menu element is hidden by default.
         */
        it('is hidden by default', function() {
            expect($('body')[0]).toHaveClass('menu-hidden');
        });

         /* Ensure the menu changes visibility
          * when the menu icon is clicked.
          */
         it('changes visibility when icon is clicked', function() {
            $('.menu-icon-link').click();
            expect($('body')[0]).not.toHaveClass('menu-hidden');
            $('.menu-icon-link').click();
            expect($('body')[0]).toHaveClass('menu-hidden');
         });

    });

    describe('Initial Entries', function() {

        /* Ensure that when the loadFeed function is called and
         * completes its work, there is at least a single
         * .entry element within the .feed container.
         */
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

        /* Ensures that when a new feed is loaded by the loadFeed
         * function that the content actually changes.
         */
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
