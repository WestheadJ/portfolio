export const siteTree = {
    name: "/",
    type: "dir",
    children: [
        { name: "about", type: "file", children: [] },
        {
            name: "projects",
            type: "dir",
            children: [
                {
                    name: "personal",
                    type: "dir",
                    children: [
                        { name: "project1", type: "file", children: [] },
                        { name: "project2", type: "file", children: [] },
                    ],
                },
                {
                    name: "university",
                    type: "dir",
                    children: [
                        { name: "project3", type: "file", children: [] },
                        { name: "project4", type: "file", children: [] },
                    ],
                },
            ],
        },
        { name: "contact", type: "file", children: [] },
    ],
};