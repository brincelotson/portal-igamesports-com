const contentMap = {
  site: "https://portal-igamesports.com",
  tag: "爱游戏体育",
  sections: [
    {
      id: "home",
      title: "首页",
      keywords: ["爱游戏体育", "体育新闻", "赛事直播"],
      items: [
        { name: "最新动态", url: "/news" },
        { name: "热门赛事", url: "/events" }
      ]
    },
    {
      id: "games",
      title: "游戏中心",
      keywords: ["爱游戏体育", "电子竞技", "游戏攻略"],
      items: [
        { name: "电竞赛事", url: "/esports" },
        { name: "游戏库", url: "/library" }
      ]
    },
    {
      id: "community",
      title: "社区",
      keywords: ["爱游戏体育", "玩家交流", "论坛"],
      items: [
        { name: "讨论区", url: "/forum" },
        { name: "排行榜", url: "/ranking" }
      ]
    }
  ]
};

function searchContent(keyword, sections = contentMap.sections) {
  const results = [];
  for (const section of sections) {
    const matchKeyword = section.keywords.some(k =>
      k.toLowerCase().includes(keyword.toLowerCase())
    );
    const matchItems = section.items.filter(item =>
      item.name.toLowerCase().includes(keyword.toLowerCase())
    );
    if (matchKeyword || matchItems.length > 0) {
      results.push({
        sectionId: section.id,
        title: section.title,
        matchedItems: matchItems.length > 0 ? matchItems : section.items
      });
    }
  }
  return results;
}

function filterByTag(tag, sections = contentMap.sections) {
  return sections.filter(section =>
    section.keywords.some(k => k.includes(tag))
  );
}

function renderContentList(sections = contentMap.sections) {
  const list = [];
  for (const section of sections) {
    list.push(`[${section.title}]`);
    for (const item of section.items) {
      list.push(`  - ${item.name} (${contentMap.site}${item.url})`);
    }
  }
  return list.join("\n");
}

// 示例调用
const searchResults = searchContent("电竞");
console.log("搜索 '电竞':", searchResults);

const tagFiltered = filterByTag("爱游戏体育");
console.log("标签过滤:", tagFiltered.map(s => s.title));

console.log("内容列表:");
console.log(renderContentList());