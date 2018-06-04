# LorS

LorS is simply a tiny, little script (684B) to load styles or scripts asynchronously on a page. No, it's not always something you really need. But I like to have it every-so-often for really lightweight projects.  
Yes, it loads styles asynchronously. Yes, it supports modules in modern browser.

Sorry, no love for stylesheets in Edge. Stylesheets will still load, but they will not be asynchronous.

## Usage

### lors(type, attributes [, done [, error]])

```html
<script src="https://unpkg.com/lors"></script>
<script>
    lors('script', { src: '/assets/js/app.js' }, function (event) {
        console.log('SUCCESS');
    }, function (event) {
        console.log('FAIL');
    });
    
    lors('link', { href: '/assets/css/app.css' }, function (event) {
        console.log('SUCCESS');
    }, function (event) {
        console.log('FAIL');
    });
</script>
```

