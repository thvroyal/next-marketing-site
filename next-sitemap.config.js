/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: process.env.SITE_URL,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    additionalSitemaps: [
      `${process.env.SITE_URL}/server-sitemap.xml`,
      `${process.env.SITE_URL}/server-sitemap-index.xml`
    ]
  }
}