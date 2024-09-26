import StoreModule from '../module';

class Product extends StoreModule {
  initState() {
    return {
      productData: {},
    };
  }
  async load(productId) {
    // const response = await fetch(`/api/v1/articles/${productId}`);
    console.log('Fetsh product', productId);
    const response = await fetch(
      `/api/v1/articles/${productId}?fields=*,madeIn(title,code),category(title)`,
    );
    const json = await response.json();
    // console.log(json);
    this.setState(
      {
        ...this.getState(),
        productData: json.result,
      },
      'Загружен 1 товар из АПИ',
    );
    console.log('Product state', this.getState().productData);
  }
  clear() {
    this.setState({ ...this.initState() });
    console.log('Product state after clear', this.getState().productData);
  }
}

export default Product;
