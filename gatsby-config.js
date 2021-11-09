module.exports = {
    siteMetadata: {
        siteUrl: 'https://www.yourdomain.tld',
        title: 'Copy Project',
    },
    plugins: [
        {
            resolve: 'gatsby-plugin-firebase-v9.0',
            options: {
                credentials: require('./firebase-cred.js'),
            },
        },
        // 'gatsby-plugin-firebase-v9.0',
    ],
};
