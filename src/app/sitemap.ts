export default async function sitemap() {
  const baseUrl = 'https://localhost:3000/';

  return [{ url: baseUrl, lastModified: new Date() }];
}
