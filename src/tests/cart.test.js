import Cart from '../cart';

describe('Cart', () => {
  let cart;

  beforeEach(() => {
    cart = new Cart();
  });

  it('should start with an empty cart', () => {
    expect(cart.getItems()).toEqual([]);
    expect(cart.getItemCount()).toBe(0);
    expect(cart.getTotalPrice()).toBe(0);
  });

  it('should add an item to the cart', () => {
    const item = { code: 1, name: 'Product 1', price: 100 };
    cart.addItem(item, 2);

    expect(cart.getItems()).toHaveLength(1);
    expect(cart.getItems()[0]).toEqual({ ...item, quantity: 2 });
    expect(cart.getItemCount()).toBe(1);
    expect(cart.getTotalPrice()).toBe(200);
  });

  it('should increase the quantity of an existing item', () => {
    const item = { code: 1, name: 'Product 1', price: 100 };
    cart.addItem(item, 2);
    cart.addItem(item, 1);

    expect(cart.getItems()[0].quantity).toBe(3);
    expect(cart.getTotalPrice()).toBe(300);
  });

  it('should remove an item from the cart', () => {
    const item1 = { code: 1, name: 'Product 1', price: 100 };
    const item2 = { code: 2, name: 'Product 2', price: 200 };
    cart.addItem(item1, 2);
    cart.addItem(item2, 1);

    cart.removeItem(1);

    expect(cart.getItems()).toHaveLength(1);
    expect(cart.getItems()[0].code).toBe(2);
    expect(cart.getTotalPrice()).toBe(200);
  });

  it('should clear the cart', () => {
    const item = { code: 1, name: 'Product 1', price: 100 };
    cart.addItem(item, 1);

    cart.clearCart();

    expect(cart.getItems()).toEqual([]);
    expect(cart.getItemCount()).toBe(0);
    expect(cart.getTotalPrice()).toBe(0);
  });

  it('should notify listeners when an item is added', () => {
    const listener = jest.fn();
    cart.subscribe(listener);

    const item = { code: 1, name: 'Product 1', price: 100 };
    cart.addItem(item, 1);

    expect(listener).toHaveBeenCalledTimes(1);
  });

  it('should notify listeners when an item is removed', () => {
    const listener = jest.fn();
    cart.subscribe(listener);

    const item = { code: 1, name: 'Product 1', price: 100 };
    cart.addItem(item, 1);
    cart.removeItem(1);

    expect(listener).toHaveBeenCalledTimes(2);
  });

  it('should unsubscribe listeners', () => {
    const listener = jest.fn();
    const unsubscribe = cart.subscribe(listener);

    unsubscribe();

    cart.addItem({ code: 1, name: 'Product 1', price: 100 }, 1);

    expect(listener).not.toHaveBeenCalled();
  });
});
