import StoreModule from '../module';

class CategoryList extends StoreModule {
  initState() {
    return {
      categoryList: [],
    };
  }
  async getCategoryList() {
    try {
      // const response = await fetch('/api/v1/categories');
      const response = await fetch('/api/v1/categories?fields=_id,title,parent(_id)&limit=*');
      const json = await response.json();

      this.setState({ ...this.getState(), categoryList: json.result.items });

      console.log('Category list loaded');
    } catch (error) {
      console.error('Ошибка при получении категорий:', error);
    }
  }

  formatCategories(items) {
    const result = [];
    const parentMap = new Map();
    const childrenMap = new Map();

    items.forEach(item => {
      parentMap.set(item._id, item.parent ? item.parent._id : null);
      childrenMap.set(item._id, []);
    });

    items.forEach(item => {
      const parentId = item.parent ? item.parent._id : null;
      if (parentId) {
        childrenMap.get(parentId).push(item);
      }
    });

    const addCategories = (parentKey, depth) => {
      const children = childrenMap.get(parentKey) || [];
      for (const child of children) {
        result.push({
          value: child._id,
          title: '- '.repeat(depth) + child.title,
        });
        addCategories(child._id, depth + 1);
      }
    };

    const rootItems = items.filter(item => !item.parent);
    for (const rootItem of rootItems) {
      result.push({
        value: rootItem._id,
        title: rootItem.title,
      });
      addCategories(rootItem._id, 1);
    }

    result.unshift({ title: 'Все', value: '' });

    return result;
  }
}
export default CategoryList;
