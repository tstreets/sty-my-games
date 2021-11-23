module.exports = {
    siteMetadata: {
        siteUrl: 'https://tstreets.github.io/sty-my-games/public',
        title: "Streets' Games",
    },
    plugins: [
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                icon: 'src/images/logo.png',
                short_name: `Streets Games`,
                display: 'standalone',
            },
        },
        'gatsby-plugin-offline',
        {
            resolve: 'gatsby-plugin-firebase-v9.0',
            options: {
                credentials: require('./firebase-cred.js'),
            },
        },
    ],
    pathPrefix: '/sty-my-games/public',
};
