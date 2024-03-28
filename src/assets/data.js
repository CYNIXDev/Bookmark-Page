const data = {
    contents: {
        hero: {
            title: 'A Simple Bookmark Manager',
            content: 'A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.',
        },
    
        feature: {
            title: 'Features',
            content: 'Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.',
        },
    
        download: {
            title: 'Download the extension',
            content: 'We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite you’d like us to prioritize.',
        },
        faqsHeader: {
            title: 'Frequently Asked Questions',
            content: 'Here are some of our FAQs. If you have any other questions you’d like answered please feel free to email us.',
        }
    },

    hero: {
        title: 'A Simple Bookmark Manager',
        content: 'A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.',
    },

    feature: {
        title: 'Features',
        content: 'Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.',
    },

    download: {
        title: 'Download the extension',
        content: 'We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite you’d like us to prioritize.',
    },

    featureNav: [
        {
            id: 1,
            navTitle: 'Simple Bookmarking',
            contentTitle: 'Bookmark in one click',
            content: 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.',
            link: '',
            img: '../src/assets/images/illustration-features-tab-1.svg',
        },
        {
            id: 2,
            navTitle: 'Speedy Searching',
            contentTitle: 'BIntelligent search',
            content: 'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.',
            link: '',
            img: '../src/assets/images/illustration-features-tab-2.svg',
        },
        {
            id: 3,
            navTitle: 'Easy Sharing',
            contentTitle: 'Share your bookmarks',
            content: 'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.',
            link: '',
            img: '../src/assets/images/illustration-features-tab-3.svg',
        },
    ],
    card: [
        { id: 1, img: './src/assets/images/logo-chrome.svg', browser: 'Add to Chrome', mimVer: 'Minimum version 62', link: '' },
        { id: 2, img: './src/assets/images/logo-firefox.svg', browser: 'Add to Firefox', mimVer: 'Minimum version 55', link: '' },
        { id: 3, img: './src/assets/images/logo-opera.svg', browser: 'Add to Opera', mimVer: 'Minimum version 46', link: '' },
    ],
    faqs: [
        { id: 1, fq: 'What is Bookmark?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.' },
        { id: 2, fq: 'How can I request a new browser?', answer: 'Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.' },
        { id: 3, fq: 'Is there a mobile app?', answer: 'Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.' },
        { id: 4, fq: 'What about other Chromium browsers?', answer: '  Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.' },
    ],
}

export default data