import * as B from "./index.style";
import Breadcrumb from "../../../../Component/Main/breadcrumb/index";
import BasketComponent from "../../../../Component/Main/Basket/Tabmenu";
import { Inner } from "../../../../../styles/main";
import ProductCheckComponent from "@/Component/Main/Basket/ProductList";
import OrderComponent from "@/Component/Main/OrderComponent";
import { useState, useMemo, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebaseConfig";

export default function Basket(props) {
  const [allProducts, setAllProducts] = useState([]);
  const [activeTab, setActiveTab] = useState(0);

  const onClickActive = (number) => {
    setActiveTab(number);
  };

  const displayCart = useMemo(() => {
    return props.cart
      .map((cartItem) => {
        const productDetail = allProducts.find(
          (p) => String(p.id) === String(cartItem.id),
        );
        return productDetail ? { ...cartItem, product: productDetail } : null;
      })
      .filter(Boolean);
  }, [props.cart, allProducts]);

  const roomTemperaturePrice = displayCart
    .filter((item) => item.select && item.product?.tag?.refrigerated === false)
    .reduce(
      (total, item) => total + (item.product?.price || 0) * item.quantity,
      0,
    );

  const refrigeratedPrice = displayCart
    .filter((item) => item.select && item.product?.tag?.refrigerated === true)
    .reduce(
      (total, item) => total + (item.product?.price || 0) * item.quantity,
      0,
    );

  const totalPrice = roomTemperaturePrice + refrigeratedPrice;

  useEffect(() => {
    const fetchProducts = async () => {
      const productRef = collection(db, "product");
      const snap = await getDocs(productRef);
      setAllProducts(snap.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    };
    fetchProducts();
  }, []);
  return (
    <>
      <Inner width="1410px" padding="25px 0 0">
        <Breadcrumb
          name={"장바구니"}
          link={"/front/order/basket"}
          category={false}
        />

        <B.BasketWrapper>
          <B.Title>장바구니</B.Title>

          <B.ContentsWrapper>
            <B.leftWrapper>
              {/* 탭메뉴 */}
              <BasketComponent
                activeTab={activeTab}
                onClickActive={onClickActive}
                cart={props.cart}
              />

              {/* 장바구니 리스트 */}
              <ProductCheckComponent
                activeTab={activeTab}
                cart={props.cart}
                setCart={props.setCart}
                allProducts={allProducts}
                displayCart={displayCart}
              />
            </B.leftWrapper>

            <OrderComponent
              cart={props.cart}
              totalPrice={totalPrice}
              RefrigeratedPrice={props.RefrigeratedPrice}
              roomTemperaturePrice={props.roomTemperaturePrice}
            />
          </B.ContentsWrapper>
        </B.BasketWrapper>
      </Inner>
    </>
  );
}
