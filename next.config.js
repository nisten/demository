const withOffline = require("next-offline");


const nextConfig = {
  reactStrictMode: true,
  i18n: {
      locales: ['en', 'fr'],
      defaultLocale: 'en',
  }, 
}

module.exports = withOffline(nextConfig);
