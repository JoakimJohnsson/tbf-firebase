const path = require('path')
module.exports = {
    title: 'TBF & Friends React styleguide',
    tocMode: 'collapse',
    // sections: [
    //     {
    //         name: 'Documentation',
    //         content: 'docs/Documentation.md',
    //         sections: [
    //             {
    //                 name: 'Graphic elements',
    //                 components: () => [
    //                     './src/components/TbfLogo/TbfLogo.js',
    //                 ],
    //                 exampleMode: 'collapse', // 'hide' | 'collapse' | 'expand'
    //                 usageMode: 'collapse', // 'hide' | 'collapse' | 'expand'
    //             },
    //             {
    //                 name: 'Buttons',
    //                 components: () => [
    //                     './src/components/microComponents/Buttons/LoadMoreButton.js',
    //                 ],
    //                 exampleMode: 'collapse', // 'hide' | 'collapse' | 'expand'
    //                 usageMode: 'collapse', // 'hide' | 'collapse' | 'expand'
    //             },
    //             {
    //                 name: 'Cards',
    //                 components: () => ['./src/components/Placeholder/Placeholder.js'],
    //                 exampleMode: 'collapse', // 'hide' | 'collapse' | 'expand'
    //                 usageMode: 'collapse', // 'hide' | 'collapse' | 'expand'
    //             },
    //         ],
    //     },
    // ],
    ribbon: {
        // Link to open on the ribbon click (required)
        url: 'https://www.thebaseballfield.se/',
        // Text to show on the ribbon (optional)
        text: 'Back to site'
    },
    require: [
        path.join(__dirname, 'src/css/index.css')
    ],
    exampleMode: "expand",
    ignore: [
        '**/components/pages/ArtistPage.js',
        '**/components/pages/ArtistsPage.js',
        '**/components/pages/RecordPage.js',
        '**/components/pages/RecordsPage.js',
        '**/components/pages/StartPage.js'
    ],
    theme: {
        spaceFactor: 116,
        color: {
            base: '#fff',
            light: '#ccc',
            lightest: '#eee',
            link: '#ff88cc',
            linkHover: '#ffcfeb',
            focus: 'rgba(22, 115, 177, 0.25)',
            border: '#444',
            name: '#acff88',
            type: '#ff6c4c',
            error: '#750606',
            baseBackground: '#151515',
            codeBackground: '#fff',
            sidebarBackground: '#000',
            ribbonBackground: '#000',
            ribbonText: '#ff88cc',
        },
        fontFamily: {
            base: '"Fira Sans", sans-serif'
        }
    },
}