# GANRISE website SEO deployment notes

## Before publishing

1. Confirm GANRISE Consulting's official website domain.
2. Set `VITE_SITE_URL` to that domain in the hosting build environment, including `https://` and without a trailing slash. The current `https://www.example.com` value is a placeholder and must not be published.
3. Run `npm run build`. The build statically renders all public routes and generates domain-specific canonical URLs, JSON-LD, `dist/sitemap.xml`, and `dist/robots.txt`.
4. Configure the host to serve generated route files (`/about/index.html`, etc.) or rewrite unknown clean paths to `index.html`. Verify refresh on each route after deployment.
5. Confirm `https://<official-domain>/sitemap.xml`, `/robots.txt`, and `/favicon.svg` are publicly reachable.

## Google Search Console checklist

1. Add a **Domain** property for the official domain in Google Search Console.
2. Verify ownership by adding the DNS TXT record Search Console provides at the domain registrar. No verification token is embedded in this project.
3. After deployment, submit `https://<official-domain>/sitemap.xml` under **Sitemaps**.
4. Use **URL Inspection** on the homepage and key service pages; check the live URL, then request indexing where appropriate.
5. Review **Pages** for indexing exclusions/errors and **Performance** for branded queries such as GANRISE Consulting and GANRISE Consulting Hyderabad.
6. Recheck after content or deployment changes; indexing and rankings are determined by Google and are not guaranteed.

## Google Business Profile setup checklist

- Use the exact business name **GANRISE Consulting**.
- Enter the verified address: Plot 8, Poulomi Water Front, Vaishali Nagar, Madinaguda, Hyderabad, Telangana, India.
- Use the business phone **+91 9849685094** and official website domain.
- Select only categories that accurately describe the operating business; add ERP consulting, SAP consulting, and IT staffing as applicable services.
- Verify eligibility and the location directly with Google. This project does not create or claim a Business Profile.
