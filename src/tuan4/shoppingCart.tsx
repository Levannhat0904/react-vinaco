import React, { useState, useCallback, useMemo, useEffect } from 'react';

// Định nghĩa kiểu dữ liệu cho sản phẩm
interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const ShoppingCart = () => {
  const [cart, setCart] = useState<Product[]>([]);
  const [newProductName, setNewProductName] = useState('');
  const [newProductPrice, setNewProductPrice] = useState('');

  // Tạo ID mới cho sản phẩm
  const generateId = useCallback(() => {
    return cart.length > 0 ? Math.max(...cart.map((item) => item.id)) + 1 : 1;
  }, [cart]);

  // Hàm thêm sản phẩm vào giỏ hàng
  const addProduct = useCallback(() => {
    const price = parseFloat(newProductPrice);
    if (newProductName.trim() && !isNaN(price) && price > 0) {
      setCart((prevCart) => [
        ...prevCart,
        { id: generateId(), name: newProductName.trim(), price, quantity: 1 },
      ]);
      setNewProductName('');
      setNewProductPrice('');
    }
  }, [newProductName, newProductPrice, generateId]);

  // Hàm xóa sản phẩm khỏi giỏ hàng
  const removeProduct = useCallback((id: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  }, []);

  // Hàm cập nhật số lượng sản phẩm
  const updateQuantity = useCallback((id: number, quantity: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  }, []);

  // Tính tổng số tiền trong giỏ hàng
  const totalAmount = useMemo(
    () => cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cart]
  );

  // Hiệu ứng phụ: Log ra giỏ hàng mỗi khi cập nhật
  useEffect(() => {
    console.log('Giỏ hàng hiện tại:', cart);
  }, [cart]);

  return (
    <div>
      <h2>Quản lý giỏ hàng</h2>
      <div>
        <input
          type="text"
          placeholder="Tên sản phẩm"
          value={newProductName}
          onChange={(e) => setNewProductName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Giá sản phẩm"
          value={newProductPrice}
          onChange={(e) => setNewProductPrice(e.target.value)}
        />
        <button onClick={addProduct}>Thêm sản phẩm</button>
      </div>

      <h3>Giỏ hàng:</h3>
      <ul>
        {cart.map((product) => (
          <li key={product.id}>
            {product.name} - {product.price.toLocaleString()} VND x{' '}
            <input
              type="number"
              value={product.quantity}
              min="1"
              onChange={(e) =>
                updateQuantity(product.id, parseInt(e.target.value) || 1)
              }
            />{' '}
            = {(product.price * product.quantity).toLocaleString()} VND
            <button onClick={() => removeProduct(product.id)}>Xóa</button>
          </li>
        ))}
      </ul>
      <h3>
        Tổng tiền: <strong>{totalAmount.toLocaleString()} VND</strong>
      </h3>
    </div>
  );
};

export default ShoppingCart;
