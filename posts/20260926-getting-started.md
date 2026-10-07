---
layout: post.njk
title: "Getting Started: Installation and Deployment"
date: 2026-09-26
tags: [attention, appetite, fastidious, approve, ritual]
---

### Install and Run Locally {.sticky-header}

#### Install Node.js

You will need [Node.js](https://nodejs.org/en), version 18 or higher, to install 11ty. You can check if you have Node installed, and what version, by running the command `node -v` in a terminal.

A response of `Command 'node' not found` means Node is not installed on your system, and you need to install in the link above. A response of `v22.17.0` or something similar means you are good to go, but if the first number directly after the *v* is less than 18, you will need to install the latest version in the link above.

Node.js is a JavasScript runtime that allows users to run javascript outside of the browser. The part we need to worry about is that it comes with the *node package manager*, or *npm*.

#### Install The Bellwether 

First, download the Github repository to your local system. You can do this in a couple of different ways:

- Download and extract one of the releases from the [repo](https://github.com/meganrenae21/the-bellwether)
- From a terminal, run `git clone https://github.com/meganrenae21/the-bellwether.git`
  - This method assumes you have some version of [Git](https://github.com/git-guides/install-git) installed.

In your terminal, navigate to The Bellwether's top-level directory, then run `npm i` or `npm install`. This will read the `package.json` file and install all the dependencies that make The Bellwether work, including 11ty. Once it runs, you will notice a `node_modules/` folder that will include all the external dependencies needed to run your site.

#### Building the Site and Viewing on a Local Server

The documents in the directory now are your pre-processing -- or *source* -- files that will be used to build the site. In your terminal, run `npm run dev`.

When you do this, two things will happen:

- Your website files will be compiled in a folder `_site`
- A live local server will be opened on your machine on port 8080

In a web browser, navigate to `https://localhost:8080` to view The Bellwether on your local server. Right now, it should be identical to this website. Any changes you make to the pre-processing files that change your site's build will update the site live as long as the server is open.

Close the server by pressing `Ctrl+c`.

You should never make changes to any files in the `_site` folder directly. Any time you make changes to your source files, you can run `npm run dev` to build your site and see the changes. If you only want to build the site without opening a server, you can run `npm run build`.

### Deploying Your Site {.sticky-header}

There are a range of options when it comes to hosting your site. I'll go over the two main categories of hosting providers, and give a list of each with links to learn more. 

#### Static (Traditional) Hosting Providers

On a traditional hosting platform, all you need to do is upload the contents of your `_site` folder to your hosted server. If you choose this method, all updates can be completed locally -- there is no need to upload your source files to an online directory.

- [neocities](https://neocities.org/)
- [Nekoweb](https://nekoweb.org/)
- [xmit](https://xmit.co/)
- [Sourcehut Pages](https://srht.site/)
- [HelioHost](https://heliohost.org/)

#### Jamstack Providers

A jamstack provider builds your site by running the 11ty command automatically whenever you commit or push changes into the online repository where you keep your source files (so **not** the `_site` directory).

Providers where you can keep your source repository:

- [GitHub](https://github.com/)
- [GitLab](https://about.gitlab.com/)
- [Codeberg](https://Codeberg.org)

Jamstack hosting providers:

- [Netlify](https://app.netlify.com)
- [Codeberg Pages](https://codeberg.page/)
  - Source code must be hosted with Codeberg
- [Cloudflare Pages](https://www.cloudflare.com/products/pages/)
- [Stormkit](https://www.stormkit.io/)
- [Gitlab Pages](https://docs.gitlab.com/user/project/pages/)
  - Source code must be hosted with Gitlab
- [Vercel](https://vercel.com/)
- [GitHub Pages](https://docs.github.com/en/pages)
  - Source code must be hosted with GitHub