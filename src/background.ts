function addInNotion(title: string | undefined, url: string | undefined, comment: string | undefined) {
    const token = import.meta.env.VITE_NOTION_TOKEN
    const headers = {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
        "Notion-Version": "2022-06-28"
    }
    const body = JSON.stringify({
        "parent": {"database_id": import.meta.env.VITE_NOTION_DATABASE_ID},
        "properties": {
            "title": { "title": [{ "text": { "content": title } }] },
            "select": { "name": "分からん" }
        },
        "children": [
            {
                "object": "block",
                "type": "bookmark",
                "bookmark": {
                    "url": url,
                }
            }
        ]
    });
    console.log(body)

    fetch("https://api.notion.com/v1/pages", {
        method: "POST",
        headers: headers,
        body: body
    })
    .then(response => response.json())
    .catch(error => console.error("Error:", error));
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "addInNotion") {
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
            const tab = tabs[0];
            if (tab) {
                sendResponse({ url: tab.url });
                addInNotion(tab.title, tab.url, message.comment);
            } else {
                sendResponse({ url: null });
            }
        });
        return true;
    }
});