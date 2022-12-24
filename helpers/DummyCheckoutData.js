export const DummyCheckoutData = {
  firstName: "John",
  lastName: "Doe",
  email: "john@gmail.com",
  phone: "1234567890",
  address: "123 Main St",
  city: "New York",
  state: "NY",
  zip: "10001",
  cardNumber: "4111111111111111",
  cardExp: "1020",
  cardCvv: "123",
  cardZip: "10001",
  billingAddress: "123 Main St",
  totalPrice: "100.00",
  order:{
    number: '12345',
    ShippingId: '12345fS848',
    total: '€70.00',
    items: [
      {
        id: '1',
        name: 'Product A',
        image: 'https://picsum.photos/200/300',
        quantity: '1',
        price: '10.00€',
      },
      {
        id: '2',
        name: 'Product B',
        image: 'https://picsum.photos/200/300',
        quantity: '3',
        price: '20.00€',
      },
    ],
    shippingAddress: '123 Main St, Anytown USA 12345',
    paymentMethod: 'Visa se terminant par 1111',
  }
};
