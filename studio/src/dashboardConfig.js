export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "61188f9669bb55cecec2e7bf",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-px1ez2f1",
                  apiId: "73aeb406-b877-409c-931b-a1b33db7f20f",
                },
                {
                  buildHookId: "61188f976d3766e61f149388",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-r59ohj7h",
                  apiId: "4dea684d-ffe4-4368-8cb9-6f033a67b75c",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/lucas-two/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-r59ohj7h.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
