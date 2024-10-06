import StoreModule from '../module';

class CategoryList extends StoreModule {
  initState() {
    return {
      categoryList: [],
    };
  }
  async getCategoryList() {
    try {
      const response = await fetch('/api/v1/categories');
      const json = await response.json();

      this.setState({ ...this.getState(), categoryList: json.result.items });

      console.log('Category list loaded');
      // console.log('Category list', this.getState().categoryList);
    } catch (error) {
      console.error('Ошибка при получении категорий:', error);
    }
  }
  formatCategories(items, parentKey = null, depth = 0) {
    const result = [];

    const filteredItems = items.filter(item => {
      return item.parent ? item.parent._key === parentKey : parentKey === null;
    });

    filteredItems.forEach(item => {
      result.push({
        value: item._id,
        title: `${'- '.repeat(depth)} ${item.title}`,
      });

      result.push(...this.formatCategories(items, item._key, depth + 1));
    });

    if (!depth) {
      // console.log('Format result', result);
      result.unshift({ title: 'Все', value: '' });
    }
    return result;
  }
}
export default CategoryList;
