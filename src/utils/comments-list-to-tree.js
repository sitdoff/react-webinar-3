export default function commentsListToTree(list, key = '_id') {
  let trees = {};
  let roots = [];

  function setLevel(node, level = 0) {
    node.level = level;
    if (node.children && node.children.length > 0) {
      node.children.forEach(child => setLevel(child, level + 1));
    }
  }

  for (const item of list) {
    if (!trees[item[key]]) {
      trees[item[key]] = { ...item, children: [] };
    } else {
      trees[item[key]] = { ...trees[item[key]], ...item };
    }

    if (item.parent?.[key]) {
      if (!trees[item.parent[key]]) {
        trees[item.parent[key]] = { children: [] };
      }
      trees[item.parent[key]].children.push(trees[item[key]]);
    }

    if (item.parent?._type === 'article') {
      roots.push(trees[item[key]]);
    }
  }

  roots.forEach(root => setLevel(root));

  return roots;
}
