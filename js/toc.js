export function tocSidebar() {
    const content = document.querySelector(".main-post")
    const toc = document.querySelector(".toc-sidebar")

    if (!content || !toc) return;

    const headings = [...content.querySelectorAll("h1, h2, h3, h4, h5, h6")]

    const list = document.createElement("ul")

    headings.forEach((heading,index) => {
        if (!heading.id) {
            heading.id = `heading-${index}`;
        }
        const item = document.createElement("li")
        item.classList.add(heading.tagName.toLowerCase());

        const link = document.createElement("a")

        link.href = `#${heading.id}`;
        link.textContent = heading.textContent;

        item.appendChild(link)
        list.appendChild(item);
    })

    toc.appendChild(list);

    content.addEventListener("scroll", () => {
        let current = headings[0]
        for (const heading of headings) {
            if (heading.offsetTop <= content.scrollTop + 20) {
                current = heading;
            } 
        }
        let currentLink = document.querySelector(`a[href="#${current.id}"]`)
        let currentActive = document.querySelector(".sidebar-toc-active")
        if (currentActive) {
            if (currentActive != currentLink) {
            currentActive.classList.remove("sidebar-toc-active")
            currentLink.classList.add("sidebar-toc-active")
            }
        }
        currentLink.classList.add("sidebar-toc-active")
    })
}