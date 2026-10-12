---
layout: post.njk
title: "The Bells and Whistles"
date: 2026-09-24
tags: [approve]
post_series: Docs
---

### Adding Classes and Attributes to Markdown Blocks {.sticky-header}

The Bellwether comes equipped with the plugin [Markdown-It-Attrs](https://github.com/arve0/markdown-it-attrs), which allows you to apply HTML classes and attributes to markdown blocks without having to write inline HTML in the vast majority of cases.

For instance, say you had an H1 element for a blog header with the below CSS style:

```css
h1.blog-header {
    font-size: 42px;
    color: purple;
}
```

In the markdown, you could format your header as:

```markdown
# My Wonderful Blog Header {.blog-header}
```

The HTML output is:

```html
<h1 class="blog-header">My Wonderful Blog Header</h1>
```

This can work with any attribute.

```markdown
This is a paragraph of markdown content. {id=para}
```

The above outputs as:

```html
<p id="para">This is a paragraph of markdown content.</p>
```

More information and examples can be found in the Markdown-It-Attrs [docs](https://github.com/arve0/markdown-it-attrs). {.sidenote}

The Bellwether also comes with the extension plugin [Markdown-It-Bracketed-Spans](https://github.com/mb21/markdown-it-bracketed-spans), which performs similar operations on `<span>` elements, using square brackets `[ ]`.

Example:

```markdown
Paragraph with [a span]{.my-class}
```

This outputs:

```html
<p>Paragraph with <span class="my-class">a span</span></p>
```

### Built-In Classes {.sticky-header}

The Bellwether comes with a few classes that are meant to be used with the Markdown-It-Attrs syntax.

#### sticky-header

The `sticky-header` class can be added to any heading element within any blog *post* (this does not apply to *pages*). In these docs, I have applied this class to the top-level headers within the post body. Since the post date is an `h1` heading, and the post title is an `h2` heading, the top-level headings would be the `h3` headings (you would not need to follow this format, this was just my preference--you could have top-level headings be `h1` headings). However, you could apply this class to headings or any and all levels.

Please note that for `sticky-header` to have any effect, the viewport will need to be in "landscape" mode, meaning its height will need to be greater than its width. {.sidenote}

The `sticky-header` class has two effects: 

1. The heading is offset to the left of the body text. 
2. The heading becomes "sticky", meaning once it reaches the top of the post, it will stay there until it is replaced by the next heading with a `sticky-header` class.

Again, you can see how this works by looking at the top-level headings of these docs (for example, the heading that says "Built-In Classes").

#### sidenote

Sidenotes are one way in which The Bellwether utilizes whitespace in posts. This class enables you to write in the margins when you have an additional thought or detail to add. The class should be added to the end of a paragraph, and the note will appear in the "margins" on the right of the page, next to the *next* element.

So:

```markdown
This is my sidenote. {.sidenote}

This is a paragraph.
```

Renders:

This is my sidenote. {.sidenote}

This is a paragraph.

In "portrait" mode, the sidenote will take up the last quarter of the space for the body text, and the body text will be wrapped around it.

Sidenotes are only allowable in posts.

#### emphasis

The `emphasis` class is available on pages and posts. It is used for paragraphs that, as the name implies, require special attention or emphasis. The text is contained in a centered box, where the two-tone colors are inverted and the font is enlarged and italicized. If you bold or italicize a portion of the text in the markdown, the affected text will be enlarged even more, will not be italicized, and will be converted to the title font.

```markdown
This is an example of a paragraph with an `emphasis` class. This class is used for emphasizing or drawing attention to a certain idea or issue. I can try to **bold** or *italicize* words further; either action will have the same effect. {.emphasis}
```

This is an example of a paragraph with an `emphasis` class. This class is used for emphasizing or drawing attention to a certain idea or issue. I can try to **bold** or *italicize* words further; either action will have the same effect. {.emphasis}

### Adding Images {.sticky-header}

The Bellwether has special classes to add images so they don't break the layout of your blog. The easiest way to do this is to add an asset folder for each page and post you have images to add to. For example, say you have a page called `my-page.html` and a post at `posts/my-post.html`. Then, you should create assets folders in the following places:

```plaintext
// for my-page.html

|- assets/
|--|-- pages/
|--|--|-- my-page/
|--|--|--|-- my-page-image.jpg

// for posts//my-post.html

|- assets/
|--|-- posts/
|--|--|-- my-post/
|--|--|--|--my-post-image.jpg
```

The 11ty guide has a [page on shortcodes](https://www.11ty.dev/docs/shortcodes/).{.sidenote}

The above structure will add `my-page-image.jpg` as an *asset* for `my-page.html`, and `my-post-image.jpg` as an asset for `posts/my-post.html`. The path for these files will be available **on these pages only** via a *shortcode*.

```nunjucks
// posts/my-post.md

{% asset "my-post-image.jpg" %}
```

The above renders as:

/assets/posts/my-post/my-post-image.jpg

If you wanted to create an image for the base layout of your website, and not for a single page or post, you can upload that image to the `assets/base` folder. It will then be available globally via this same method, except instead of an *asset*, you will need to use the *baseAsset* shortcode. {.emphasis}

The syntax for rendering images in markdown is:

```markdown
![Image alt](image-page)
```

So to render `my-post-image` we could write:

```markdown
![My post's image]({% asset "my-post-image.jpg" %})
```

However, we can exert more control by adding a class. The Bellwether adds four classes to allow you to control the layout of images. These classes are based on the *width* of the desired image on the page; the height is adjusted accordingly without stretching.

In portrait mode and on pages, images with a `large` and `medium` class have the same properties of an image with a `small` class and take up 100% of the text body without extending beyond the viewport. {.sidenote}

- `large`:: The image extends to left and right of the text body.
- `medium`:: The image extends to the right of the text body.
- `small`:: The image takes up 100% of the text body.
- `xsmall`:: The image is centered and takes up 50% of the text body.

To add classes, we can use the Markdown-It-Attrs syntax from above:

```markdown
![My post's image]({% asset "my-post-image.jpg" %}){.large}
```

#### Examples of Images

##### Large

![A misty forest]({% asset "misty-forest.jpg" %}){.large}

##### Medium

![A misty forest]({% asset "misty-forest.jpg" %}){.medium}

##### Small

![A misty forest]({% asset "misty-forest.jpg" %}){.small}

##### XSmall

![A misty forest]({% asset "misty-forest.jpg" %}){.xsmall}

### Automatic Tag Pages {.sticky-header}

The Bellwether takes advantage of 11ty's [pagination](https://www.11ty.dev/docs/pagination/) feature to generate a new tag page each time a tag is used for the first time.

In the source files of the project you'll find the `tags/tag.html` file, but there is no `_site/tags/tag.html`. Instead, there are several pages under the `_site/tag/` folder--one for each tag used so far in the blog!

You'll see a bit how this works in `tags/tag.html`, but I largely adapted the setup of [Josh Sherman](https://joshtronic.com/2025/09/07/eleventy-category-tag-pages/) for this feature.

The only thing necessary for you to do is to add tags via an array (enclosed with square brackets) or a list in the YAML front matter of a blog post, and the rest will be taken care of.

```yaml
---
title: "My Blog Post"
tags: [my-tag, another-tag]
---
```

```yaml
---
title: "My Blog Post"
tags:
  - my-tag
  - another-tag
---
```

A tag index page has been created at `tags.html` which links to every tag page generated.

### Creating a Series of Posts {.sticky-header}

The Bellwether has a special feature for multi-post series. Posts that are a part of a series will have a list of all posts (with links) in the series (in order) at the top of the post. For an example, see the list at the top of each entry in the docs.

It is very important that the *order* is provided for each post, and that it is unique. {.sidenote}

You can add a new series in the `_data/series.yaml` file. Series have two properties: a title, and a list of posts. Posts have three properties: a title, a permalink, and an order.

Due to The Bellwether's configuration, it isn't necessary to add the `.html` extension to the permalink property, but it's fine if you do.

```yaml
// _data/series.yaml

- title: "Star Wars movies"
  movies:
    - title: "A New Hope"
      permalink: /posts/new-hope
      order: 4
    - title: "The Empire Strikes Back"
      permalink: /posts/empire-strikes-back
      order: 5
    - title: "Return of the Jedi"
      permalink: /posts/return-jedi
      order: 6
    - title: "The Phantom Menace"
      permalink: /posts/phantom-menace
      order: 1
    - title: "Attack of the Clones"
      permalink: /posts/attack-clones
      order: 2
    - title: "Revenge of the Sith"
      permalink: /posts/revenge-sith
      order: 3
    - title: "The Force Awakens"
      permalink: /posts/force-awakens
      order: 7
    - title: "The Last Jedi"
      permalink: /posts/last-jedi
      order: 8
    - title: "The Rise of Skywalker"
      permalink: /posts/rise-skywalker
      order: 9
```

The titles are **case-sensitive**. If you are not seeing a series list at the top of a blog post when expected, double check to make sure that the title matches *exactly*. {.emphasis}

In the blog post itself, you will need to indicate the series it is a part of with the frontmatter properties `post_series`. Note that the `permalink` is just going to be the post's filename, with or without the `.html` extension, with `/posts/` prepended.

```yaml
---
title: "A New Hope"
post_series: "Star Wars movies"
---
```

There is no independent "series page" or template but these would be easy enough to generate on your own since the data is all here.

### Adding Your Own JavaScript and CSS files {.sticky-header}

#### CSS

The file `styles.css` in the source directory is copied directly into `_site/css/styles.css`. You can modify this file directly or add your own css and use `@import` statements. The Bellwether is configured so that all `.css` files from the source files, regardless of directory structure, are copied into the `_site/css` directory.

#### JavaScript

Only JavaScript (with a `.js` extension) files in the root `js/` folder are copied into the `_site/js/` directory.

The file `main.js` is loaded into the base template of the website (in `_layouts/base.njk`). It is recommended that scripts be saved as modules loaded as imports in `main.js`. Since `main.js` is loaded as soon as the DOM content finishes loading, once modules are imported and declared in `main.js`, you may run any functionality needed from them immediately. 

The Bellwether uses ESM syntax, so exporting a function looks like:

```javascript
// js/my-function.js
export function myFunction() {
    // do something here
}
```

Then, you can import and call your function like this:

```javascript
// js/main.js
import { myFunction } from "./my-function.js"

myFunction() // the function runs immediately
```

The Bellwether comes equipped with two modules out of the box: a reading time module (which displays the approximate time it takes to read a post), and a dynamic table of contents module.

Essentially, these modules are *internal plugins*.

##### External (npm) Plugins

You'll notice there are a few dependencies in The Bellwether's `package.json` file. These are all useful for the development and build process, but none of the plugins that come pre-installed are needed for the actual *production* files. Therefore, none have been added as plugins to the `eleventy.config.js` file. 

To download a plugin, whether you need it for development or production, you generally will need to run something like this on the command line:

```bash
npm install <package-name> --save
```

This will add the package to your dependencies in the `package.json` file and download the module to the `node_modules/` directory.

But to have the plugin available live, you'll need to update the configuration. I recommend adding this to your `eleventy.config.js` file:

```javascript
import <plugin-name> from <package-name>

export default function (eleventyConfig) {
    eleventyConfig.addPlugin(<plugin-name>);
}
```

### Creating Posts and Pages {.sticky-header}

Pages and Posts are the two primary custom [collections](https://www.11ty.dev/docs/collections/) which power The Bellwether. 

- *Pages* represent the static content of your site -- the stuff that has relevance regardless of age.
- *Posts* are the feeds of content that gets put out on a regular basis: the stuff that ages.
  
#### Adding a New Post

To create a new post, just add a new file in the `posts/` folder in the root directory. Posts can have an `.html`, `.md`, or `.njk` extension, but I recommend `.md` to allow the markdown format. All three extensions will recognize the nunjucks templating language thanks to the configuration. 

##### Required frontmatter

The front matter is written in YAML and is the very first thing in the file.

| Required Fields | Optional |
|:----------------|:---------|
| **layout** -- this MUST be post.njk   | **tags** -- should be in the format of a list, even if only one |
| **title** -- I recommend putting this in quotation marks | **post_series** -- required if part of series |
| **date** -- recommended format YYYY-MM-DD |   |

#### Adding a New Page

Any file created in the root directory with an `.md`, `.njk`, or `.html` extension is considered a *page*.

##### Frontmatter for Pages

Pages have different frontmatter requirements from Posts, but it's still important.

| Field | Description | Required? |
|:------|:------------|:----------|
| **layout** | Must be page.njk | Yes |
| **title** | The title of the page | Yes, IF it is to appear on navigation bar |
| **permalink** | Path relative to site path | No |
| **eleventyExcludeFromCollections** | Keep from appearing on navigation bar | Yes, IF not wanting to appear on navigation bar |