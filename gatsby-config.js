const path = require('path');

module.exports = {
    siteMetadata: {
        title: "AMACSS Website",
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-svgr`,
        `gatsby-plugin-styled-components`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `team`,
                path: `${__dirname}/src/images/team`,
            },
        },
        {
            resolve: `gatsby-source-youtube-v3`,
            typeName: 'allYoutubeVideo',
            fieldName: 'allYoutubeVideo',
            options: {
              channelId: ['UCUAWhdc8JqyH97S1mFzLCAg'],
              apiKey: 'AIzaSyCxNn4TYovZwzMXgSMcp87uuhMK5oCT4NE',
              maxVideos: 50 // Defaults to 50
            },
        },
        // {
        //     resolve: `gatsby-source-google-calendar`,
        //     options: {
        //       calendarIds: [
        //         'https://calendar.google.com/calendar/u/0?cid=YW1hY3NzLnVvZnRAZ21haWwuY29t',
        //       ],
        //       // options to retrieve the next 10 upcoming events
        //       timeMin: (new Date()).toISOString(),
        //       maxResults: 30,
        //       singleEvents: true,
        //       orderBy: 'startTime',
        //     }
        //   },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `art`,
                path: `${__dirname}/src/images/art`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Absurd`,
                short_name: `absurd`,
                start_url: `/`,
                background_color: `#3b3742`,
                theme_color: `#3b3742`,
                display: `minimal-ui`,
                icon: `static/favicon.svg`,
            },
        },
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [`average`, `prata\:400,700`],
            },
        },
        {
            resolve: `gatsby-plugin-alias-imports`,
            options: {
                alias: {
                    '@components': path.resolve(__dirname, 'src/components'),
                    '@common': path.resolve(__dirname, 'src/components/common'),
                    '@images': path.resolve(__dirname, 'src/images'),
                    '@sections': path.resolve(__dirname, 'src/components/sections'),
                    '@styles': path.resolve(__dirname, 'src/styles/'),
                    '@static': path.resolve(__dirname, 'static/'),
                },
            },
        },
    ],
};
