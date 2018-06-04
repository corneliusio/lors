function lors(type, attributes, done, error) {
    let tag = document.createElement(type),
        onload = function(x) {
            tag.removeEventListener('load', onload);

            if (type === 'link') {
                this.media = attributes.media || 'all';
                try { // [https://stackoverflow.com/questions/30171270/link-onerror-do-not-work-in-ie]
                    if (this.sheet.cssRules && !this.sheet.cssRules.length) {
                        done = error;
                    }
                } catch (e) { }
            }

            if (done) {
                done.bind(this)(x);
            }
        },
        onerror = function(x) {
            tag.removeEventListener('error', onerror);

            if (error) {
                error.bind(this)(x);
            }
        },
        prop;

    tag.addEventListener('load', onload);
    tag.addEventListener('error', onerror);

    for (prop in attributes) {
        if (attributes.hasOwnProperty(prop) && prop !== 'media') {
            tag.setAttribute(prop, attributes[prop]);
        }
    }

    if (type === 'script') {
        if (!tag.type && 'noModule' in tag) {
            tag.type = 'module';
        } else {
            tag.defer = true;
        }
    } else if (type === 'link') {
        tag.rel = tag.rel || 'stylesheet';
        tag.type = tag.type || 'text/css';

        if (tag.type === 'text/css') {
            tag.media = 'bogus';
        }
    }

    (document.body || document.head).appendChild(tag);
}

export default lors;
