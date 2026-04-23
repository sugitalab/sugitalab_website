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

## Maintenance and Updates

### Automatic Deployment
The website is automatically built and deployed via **GitHub Actions** whenever changes are pushed to the `main` branch. 
- **Production Build:** Triggered on push to `main`.
- **Releases:** Creating a tag (e.g., `v1.0.0`) will automatically generate a ZIP archive of the site in the GitHub Releases section.

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
