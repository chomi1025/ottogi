import Image from "next/image";
import * as P from "./index.styles";
import Link from "next/link";
import CartComponent from "@/Componant/Main/Basket/Icon/index";

export default function ProductWrapper(props) {
  return (
    <P.Contents>
      {props.products?.map((product, index) => (
        <P.Item key={index}>
          <Link href={"/front/product/" + product.id}>
            <a>
              <P.Product_Wrapper>
                {product.best && <P.Number>{index + 1}</P.Number>}

                <P.Image_Wrapper>
                  <Image
                    src={product.imgSrc && product.imgSrc[0]} //이미지가 없어도 로딩되게끔
                    alt={product.name}
                    style={{ objectFit: "cover" }}
                    layout={"fill"}
                    objectFit={"cover"}
                  />
                  {product.inventory == 0 ? (
                    <P.Soldout>일시품절</P.Soldout>
                  ) : (
                    ""
                  )}
                  {product ? (
                    <CartComponent product={product} productID={product.id} />
                  ) : (
                    <P.Icon_alarm />
                  )}
                </P.Image_Wrapper>

                <P.Detail_Wrapper>
                  <p>{product.name}</p>

                  <p>
                    <strong>{product.price?.toLocaleString()}</strong>원
                  </p>

                  <p>{product.grade}</p>

                  <P.Tags>
                    {product.tag?.new && <P.Tags_new></P.Tags_new>}
                    {product.tag?.roomTemperature && (
                      <P.Tags_roomTemperature>실온</P.Tags_roomTemperature>
                    )}
                    {product.tag?.frozen && (
                      <P.Tags_Frozen>냉장 & 냉동</P.Tags_Frozen>
                    )}
                    {product.tag?.coupon && <P.Tags_Coupon></P.Tags_Coupon>}
                    {product.tag?.best && <P.Tags_Best />}
                    {product.tag?.freeDelivery && <P.Tags_FreeShipping />}
                    {product.tag?.recommend && (
                      <P.Tags_Recommend>
                        <img />
                      </P.Tags_Recommend>
                    )}
                  </P.Tags>
                </P.Detail_Wrapper>
              </P.Product_Wrapper>
            </a>
          </Link>
        </P.Item>
      ))}
    </P.Contents>
  );
}
