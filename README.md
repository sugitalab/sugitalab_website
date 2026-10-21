# Sugita Laboratory Website

This repository contains the source code and content for the official website of the **Sugita Laboratory** at RIKEN.

**Official Website:** [https://sugitalab.riken.jp](https://sugitalab.riken.jp)

---

## Architecture

This website is built as a static site for maximum security, performance, and maintainability.

- **Framework:** [Hugo](https://gohugo.io/) (Static Site Generator)
- **Content Format:** Markdown (CommonMark)
- **CI/CD:** GitHub Actions
- **Hosting:** GitHub Pages

## Content Management

The website's content is managed through Markdown files located in the `content/` directory.

### Structure
- `content/news/`: Laboratory news and updates.
- `content/member/`: Profile pages for lab members.
- `content/research/`: Research project descriptions.
- `content/publication/`: List of publications and awards.

### Multi-language Support
The site supports both Japanese and English. Files are named using the following convention:
- `filename.ja.md`: Japanese version.
- `filename.en.md`: English version.

### ❗ Hyperlink Guidelines & Policy

To prevent link rot, eliminate security risks (such as Broken Link Hijacking and SSL certificate expiration), and minimize long-term maintenance overhead, all contributors must adhere to the following rules when creating or updating links:

1. **Protocol Requirements**:
   - **HTTPS Only**: All external URLs must use `https://`. Unencrypted `http://` URLs are strictly prohibited.
2. **Permitted Domains & Academic Permanence**:
   - Only link to stable URLs with verified institutional backing:
     - **Academic & Research Institutes**: `.ac.jp`, `.edu`, `riken.jp`, etc.
     - **Government & Funding Agencies**: `go.jp`, `.gov`, `jsps.go.jp`, `jst.go.jp`, etc.
     - **Scientific Publishers & Repositories**: Nature, Science, ACS, Oxford, Wiley, PubMed, etc.
     - **Verified Organization Accounts**: Official organization accounts on GitHub (e.g., `github.com/sugitalab/`).
     - **Persistent Identifiers**: Always prefer permanent DOIs (`https://doi.org/...`) for publication references.
3. **Prohibited Link Types**:
   - ❌ **No Self-Registered / Commercial Domains**: Do not link to custom `.com`, `.org`, `.net`, or `.io` domains registered for individual events or short-term projects. Once abandoned, lapsed domains are often hijacked by malicious or commercial squatters.
   - ❌ **No Personally Maintained Websites**: Do not link to personal student/staff homepages or private blogs. Use official faculty profiles or Researchmap instead.
   - ❌ **No Bookmark Lists / Software Directories**: The lab website is not a generic tool directory. Do not maintain "commonly used software" bookmark lists. Mention tools in plain text or cite their original peer-reviewed paper DOI instead.
   - ❌ **No Ephemeral Event Websites**: Past workshops or symposia must be archived as static Markdown files under `content/meeting/workshop/misc/` rather than relying on external temporary event websites.
4. **Internal Link Conventions**:
   - **Root-Relative Paths**: Always use root-relative paths starting with a leading slash (e.g., `[Software](/en/publication/software/)`). Never use ambiguous relative paths like `member/index.html`.
   - **No `target="_blank"` on Internal Links**: Internal navigation must open in the same tab. `target="_blank"` is strictly reserved for external websites.

## Maintenance and Updates

### Automatic Deployment
The website is automatically built and deployed via **GitHub Actions** whenever changes are pushed to the `main` branch. 
- **Production Build:** Triggered on push to `main`.
- **Releases:** Creating a tag (e.g., `v1.0.0`) will automatically generate a ZIP archive of the site in the GitHub Releases section.

### Scheduled Link Integrity Checks
The repository automatically audits all hyperlinks across rendered HTML pages every week via GitHub Actions using [Lychee](https://github.com/lycheeverse/lychee).

- **Workflow**: Defined in `.github/workflows/link-checker.yml` with rules configured in `lychee.toml`.
- **Automated Issue Tracking**: When broken links, dead DNS entries, or expired TLS certificates are detected, an automated report is posted or updated in GitHub Issues.
- **Triage SOP for Maintainers**:
  1. **Degrade to Plain Text**: If an outdated external resource in an old news item or event is offline, remove the `<a>` tag and preserve the entity name as plain text.
  2. **Update to Canonical URL**: If an essential tool or organization migrated to a modern institutional domain, update it to its canonical permanent URL.
  3. **Purge Abandoned Custom Domains**: Immediately remove any expired commercial `.com`/`.org` domain to prevent broken link hijacking.

### Local Development
To preview the website locally before pushing changes:

1. **Install Hugo**: Ensure you have Hugo (extended version, v0.148.2 or later) installed.
2. **Clone the repository**: `git clone --recursive [repo-url]`
3. **Run the server**:
   ```bash
   hugo server -D
   ```
4. **Access the preview**: Open `http://localhost:1313` in your browser.

---

## Copyright
Copyright © Sugita-Lab, RIKEN. All rights reserved.
