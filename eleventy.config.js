import markdownIt from "markdown-it";
import markdownItAttrs from "markdown-it-attrs";
import { DateTime } from "luxon";
import YAML from "yaml"

export const config = {
    dir: {
        includes: "_includes",
        layouts: "_layouts",
        data: "_data",
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
}

export default function (eleventyConfig) {
    eleventyConfig.addGlobalData("permalink", () => {
        return (data) => 
            `${data.page.filePathStem}.${data.page.outputFileExtension}`
        });
    eleventyConfig.addUrlTransform((page) => {
        if (page.url.endsWith(".html")) {
            return page.url.slice(0, -1 * ".html".length);
        }
    });
    eleventyConfig.addCollection("pages", function (collectionsApi) {
        return collectionsApi.getAllSorted().filter(function (item) {
            return item.data.layout === "page.njk"
        })
    })
    eleventyConfig.addCollection("posts", function (collectionsApi) {
        return collectionsApi.getAllSorted().filter(function (item) {
            return item.data.layout === "post.njk"
        })
    })

    eleventyConfig.addCollection("tags", function (collectionsApi) {
        const tags = new Set();
        collectionsApi.getAll().forEach(function (item) {
            if ("tags" in item.data) {
                let tagsList = item.data.tags;
                if (typeof tagsList === "string") {
                    tagsList = [tagsList];
                }
                for (const tag of tagsList) {
                    tags.add(tag)
                }
            }
        })
        return [...tags].sort();
    })

    eleventyConfig.addPassthroughCopy({ "**/*.css": "css" })

    const mdoptions = {
        html: true,
        breaks: true,
        linkify: true,
    };
    const markdownLib = markdownIt(mdoptions).use(markdownItAttrs, {
        leftDelimiter: '{',
        rightDelimiter: '}',
        allowedAttributes: []
    });
    eleventyConfig.setLibrary("md", markdownLib)

    eleventyConfig.addFilter("indexDate", (dateObj) => {
        return DateTime
        .fromJSDate(dateObj, {zone: "utc"})
        .toFormat("LLLddyyyy")
        .toUpperCase();
    })

    eleventyConfig.addFilter("postDate", (dateObj) => {
        return DateTime
        .fromJSDate(dateObj, {zone: "utc"})
        .toFormat("LLL dd yyyy")
        .toUpperCase();
    })

    eleventyConfig.addDataExtension("yaml", (contents) => YAML.parse(contents));

    const cssPath = "/css/styles.css";
    eleventyConfig.addGlobalData("cssPath", cssPath);
}