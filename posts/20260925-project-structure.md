---
layout: post.njk
title: "Project Structure: Finding Your Way Around"
date: 2026-09-25
tags: [fastidious, fine, approval]
post_series: Docs
---

### The Overall File Structure {.sticky-header}

After your first build, your root directory should look like this:

```plain-text
|-- _data/
|-- _layouts/
|-- _site/
|-- posts/
|-- tags/
|-- node_modules/
|-- eleventy.config.js
|-- index.html
|-- 404.md
|-- about.md
|-- tags.html
|-- styles.css
|-- package.json
|-- .gitignore
```

Notice that three folders are prefixed by an underscore (_). Files in these folders are NOT processed as "input" or source files during the build process:

- `_data/`:: This folder stores site-wide variables used in templates.
- `_layouts/`:: This folder stores base templates (written in the [Nunjucks](https://mozilla.github.io/nunjucks/) templating language) for the static pages.
- `_sites/`:: This is where the build, or the "output" of the site goes.

The Bellwether's configuration file (in `eleventy.config.js`) has explicitly added Nunjucks files as a templating format to build from. That means, any files in Nunjucks format (ending in a `.njk` suffix) that are not in an excluded folder *should* be included in the build, in addition to any markdown (`.md`) and HTML (`.html`) files which are included in the input by default. The Bellwether's configuration explicitly includes the `styles.css` file as an input file. All other files are ignored in the build process, regardless of whether they are in an ignored folder.

Then, within your build output (your `_site` folder):

```plain-text
_site/
|-- css/
|-- posts/
|-- tags/
|-- 404.html
|-- about.html
|-- index.html
|-- tags.html
```

Let's go over what this all means, and what you should and shouldn't change.

### Source and Build {.sticky-header}

The source files used to build the site include the `posts/` directory (which contains the `.md` files for all the posts), the home page for the blog (`index.html`), the static pages in the root directory (`404.md`, `about.md`, `tags.html`), the CSS for the site (`styles.css`), and then another HTML template file, `tags/tag.html`.

Unless otherwise specified in the configuration file, the location of the build files is mirrored by the location of the file in the source directory (the source directory being the root directory). So, `index.html` becomes `_site/index.html`, `about.md` becomes `_site/about.html`, and so on.

#### Style and Assets

##### CSS

In `eleventy.config.js` it is specified:

```javascript
eleventyConfig.addPassthroughCopy({ "**/*.css": "css" })
```

That line of code tells 11ty to process any CSS file as a copy and put the output file in a folder called `css` in the `_sites` directory. The CSS is processed exactly as is.

##### Assets

Static assets (such as images, videos, audio files, documents, etc) are placed in the `assets` directory, which has three subfolders: `base`, `pages`, and `posts`.

Assets not associated with a particular post or page, but that are instead part of one of the site's base layouts, will be stored in the `base` folder.

Every page that has its own assets should have its own folder (titled by the page's slug name) under the `pages` folder for it's own assets -- same for every post under the `posts` folder.

### Data and Layout Files {.sticky-header}

#### Site-wide Data

[11ty provides some default variables](https://www.11ty.dev/docs/data-eleventy-supplied/). Additionally, page- and post-specific variables can be provided in that page's frontmatter. Finally, site-wide variables can be defined in the `_data` folder, inside YAML files (`.yaml` or `.yml` extensions). These variables can be accessed by using the filename as the object name.

#### Layouts

The `_layouts` folder includes templates used across the site.

- `base.njk`:: This is the base template that is used on every page which includes the head metadata and links the CSS stylesheet.
- `page.njk`:: This is the physical layout for top-level pages.
- `post.njk`:: This is the physical layout for blog posts.

### The Configuration File {.sticky-header}

The configuration for your site lives in the `eleventy.config.js` file. Typically, 11ty can use CommonJS or ESM (ECMAScript Modules aka JavaScript modules). The Bellwether is configured with a package type of "module" meaning the configuration file should use ESM syntax.

The purpose of the configuration file is to define your project defaults and to add and configure modules installed in the terminal via `npm install <module-name>`. This configuration file is why, in The Bellwether, Nunjucks is the default HTML and markdown templating enging over Liquidjs, why YAML is the default data format instead of JSON, and why I was able to use a plugin extending 11ty's own markdown engine to allow the user to define HTML classes and attributes in markdown syntax.

### And everything else {.sticky-header}

To round out the root directory are a few files that define the scope and dependencies of the project.

To start, there is the directory `node_modules`. This is the directory that houses the source code for all of the dependencies for The Bellwether, including 11ty's source code. This directory was added when we ran `npm install`, and node installed the dependencies listed in the `package.json` file.

Speaking of the `package.json` file, that is the centerpiece of any node project. It defines the project and its dependencies (called "modules"), allowing the project to be neatly packaged. You can also see the `package-lock.json` file, which will list the dependencies of the dependencies, and which generally should not be touched.

The `.gitignore` file is important if you are hosting your source code in your own online repository. This file tells Git what files to ignore. For example, you *probably* want to ignore the `node_modules` directory. 

The README.md has a Quickstart guide for those who don't want to bother with long documentation. And the license contains the full text of the MIT license that gives the terms for copying and sharing this starter kit. 