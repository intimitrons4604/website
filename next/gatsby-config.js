module.exports = {
  plugins: [
    `fontawesome`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: 'trons-website-web-next',
        // Region is automatically retreived from the GetBucketLocation API
        // Set to null so the default public-read ACL is not applied - Terraform manages bucket policies
        acl: null,
        // Terraform manages static website hosting configuration
        enableS3StaticWebsiteHosting: false,
        // Delete old objects from the bucket
        removeNonexistentObjects: true,
        // We are not using redirects or matchPath and don't want anything generated
        generateRoutingRules: false,
        generateRedirectObjectsForPermanentRedirects: false,
        generateIndexPageForRedirect: false,
        generateMatchPathRewrites: false,
        // protocol and hostname don't need to be set if we don't use redirects
      },
    },
  ],
}
