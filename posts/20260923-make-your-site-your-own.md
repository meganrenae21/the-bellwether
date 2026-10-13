---
layout: post.njk
title: "Make Your Site Your Own"
date: 2026-09-23
tags: [fine, fastidious, behavior, appetite, dine]
post_series: Docs
---

### Updating The Site Data {.sticky-header}

#### Your Site's Package

As an 11ty static site, your blog is powered by [Node](https://nodejs.org/en). That means it is is a node package, and as such, has its own `package.json` file in the root directory. Right now, that file is equipped with The Bellwether's data.

Your `package.json` data is accessible in the `pkg` variable. That means, for example, that `pkg.description` will populate the "description" field.

I recommend updating this file as the first thing you do to signal that this blog is officially "yours" now, and not The Bellwether.

| What You Should Change | Do not change |
|:-----------------------|:--------------|
| **name**               | **scripts** (unless you know what you are doing) |
| **version** (but keep a simple system) | **type** |
| **description**        | **dependencies** (npm will update these automatically) |
| **keywords**           |               |
| **author**             |               |
| **license** (Open Source preferred, a list of [open source licenses is here](https://opensource.org/licenses)) |  |

#### Site Metadata

The next step is to update the `_data/series.yaml` file. This is a rather straightforward process. Currently, this file is housing some placeholder data.

You can add properties to this file as needed. The purpose of this file is to store variables that will be used at the site's base or in the site's metadata.

### Style and Appearance {.sticky-header}

#### Color Scheme

The Bellwether is a two-tone template, meant for two colors with sufficient contrast.

If you open `styles.css` in the root directory, find the selectors where the variables are defined.

```css
/* styles.css */
:root {
  --light-color: #fbdcf1;
  --dark-color: #2a051d;
```

When I wrote the stylesheet, I intended for the light color to be the typical background and the dark color to be the typical foreground. However, if you prefer dark mode you can reverse this, and put a darker color code in the variable `--light-color` and a lighter color code in the variable `--dark-color`.

A few different color palette tools to explore different options:

[Coolors](https://coolors.co)
: Discover millions of popular color palettes, or generate your own.

[ColorKit](https://colorkit.co)
: A free and fast color palette generator.

[Paletton](https://paletton.com)
: A full featured color wheel tool allowing users to create palettes of various styles.

[Picular](https://www.picular.co/)
: Generate the color of a single word.

#### Fonts

Three fonts have been imported from [Google Fonts](https://fonts.google.com/) via an `@import url()` statement at the top of `styles.css`. Their variables round out the `:root` selector:

```css
/* styles.css */
  --head-font: "Francois One", sans-serif;
  --text-font: "Sofia Sans", monospace;
  --code-font: "Inconsolata", monospace;
}
```

If you are unfamiliar with how to use your own fonts, [here's a handy guide from DigitalOcean](https://www.digitalocean.com/community/tutorials/how-to-load-and-use-custom-fonts-with-css) which will take you through several techniques.

Google Fonts is certainly among the easiest and most well-known resources out there for typefaces, offering 1,950 different families, but it is hardly the only one or the most expansive. 

[Fontjoy](https://fontjoy.com/)
: A font pairing generator that allows you to generate sets of three fonts at a time.

[Monotype.](https://www.monotype.com/font-pairing)
: A font pairing generator.

[Variable Fonts](https://v-fonts.com/)
: Resource for finding and trying out variable fonts.

[Fontspace](https://www.fontspace.com/)
: 170,000+ free fonts.

[Modern Font Stacks](https://modernfontstacks.com)
: The fastest fonts available in every style.

#### The Site Logo

The "logo" that shows up on the top left corner of all posts (not pages) and links pack to the home page is actually an icon from [Font Awesome](https://fontawesome.com/kits/1df0fd71fd/icons). You probably want to replace this with something that goes with your site.

##### Replacing the Logo with Another Font Awesome Icon

The easiest way to change the logo is just to change it to another free Font Awesome icon. You can also find 

Open `_includes/logo.njk`. This file has just one line of code. On the Font Awesome kit I linked, find any icon you like. There will be options for styling. **Make sure to set the color with whatever your `--dark-color` variable is in your `styles.css` file.** Then it should give you the HTML code. You can just replace the current contents of `_includes/logo.njk` with that code and you're set!

##### Using a Material Design or SVG icon

Another similar option is to go with Google Font's [Material Design icons](https://fonts.google.com/icons).

Once you clicked on the icon you wanted, I'd change the size to somewhere between 40 and 50. Set the color to the color you have stored in your `--dark-color` variable in `styles.css`. Then you can click the copy button, and it will copy the SVG code. Paste than in place of the HTML in `_includes/logo.njk`. 

The logic is the same for any SVG icon. Instead of downloading the icon itself, you can just grab the SVG code and put it in the `_includes/logo.njk` file, but make sure you have the color correct. Most SVG icon sites will allow you to set your own color. 

Here are some of my favorite sources for SVGs and icons:

- [Icones](https://icones.js.org/)
- [SVGOwl](https://svgowl.com/)
- [The Noun Project](https://thenounproject.com/) -- except for public domain icons, attribution is required for black icons only. Otherwise, you can purchase an attribution-free license.
- [Iconify](https://icon-sets.iconify.design/) -- make sure to carefully read license to determine if attribution is required.

##### Creating Your Own SVG Icon

I would recommend keeping your icon no larger than 50 x 50 pixels. {.sidenote}

Rather than use an icon that's already available, you may prefer to create one yourself. There are a few free/freemium programs that allow you to do that.

| Program | Platform | Price |
|:--------|:---------|:------|
| [Inkscape](https://wiki.inkscape.org/wiki/Inkscape) | Mac, Windows, Linux | Free/Open Source |
| [Boxy SVG](https://boxy-svg.com/) | Mac, Linux, Online, Android | Paid (Free Trial) |
| [GodSVG](https://godsvg.com/) | Mac, Windows, Linus, Online, Android | Free/Open Source |
| [Figma](https://www.figma.com) | Mac, Windows, Online, iOS, Android | Free/Premium Tiers |
| [Canva](https://www.canva.com) | Mac, Windows, Online, iOS, Android | Free/Premium Tiers |

##### Uploading a Picture as a Logo Instead

Instead of copying and pasting a block of SVG code, you can save an image file to your `assets` directory in your source files. It doesn't have to be an `.svg` image; it can be an `.svg`, `.png`, or `.jpg`, or any other valid image type. Personally, I like PNGs and SVGs because they allow for transparent backgrounds. 

Let's say we have a file we want to save as `my-logo.png`. Since this isn't going to be attached to a specific post or page, we're going to place it in the `assets/base/` folder.

Then, in `_includes/logo.njk`, we'll write:

```html
<img src="{% baseAsset 'my-logo.png' %}" alt="my super awesome logo" />
```

#### The Front Page Picture

You should also change the picture currently on the home page. The image is currently sitting in `/assets/base/bw-title-image.jpg`. 

The picture you choose should be square (preferrably 400px x 400px). Once you have it loaded, you'll need to update `_layouts/page.njk`. Specifically, find this line of code:

```html
<img src={% baseAsset "bw-title-image.jpg" %} alt="photograph of woman holding bouquet of picked wildflowers" id="title-image" />
```

Take these steps:

1. Update the filename.
2. Update the alt attribute to something that fits.
3. Add a width attribute (it should be `width=400`).
4. Add a height attribute (it should be `height=auto`).

Steps 3 and 4 are unnecessary if the picture is 400 x 400 pixels.

### Creating Posts and Pages {.sticky-header}

Once you are ready to fill your site with your own content, feel free to delete all of mine. Don't worry, you'll still have access to all of these docs online.

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

| Field |  Required? |
|:------|:----------|
| **layout** -- must be page.njk | Yes |
| **title** | Yes, IF it is to appear on navigation bar |
| **permalink** | No |
| **eleventyExcludeFromCollections** | Yes, IF not wanting to appear on navigation bar |