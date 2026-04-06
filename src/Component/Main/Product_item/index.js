import * as P from "../Product_Wrapper/index.styles";
import Link from "next/link";
import Image from "next/image";
import CartComponent from "../Basket/Icon";

export default function ProductItem(props) {
  const item = props.product;
  const index = props.index;

  return (
    <P.Item main={props.main} key={item.id}>
      {item?.id && (
        <Link href={"/front/product/" + item.id}>
          <a>
            <P.Product_Wrapper>
              {item.best && <P.Number>{index + 1}</P.Number>}

              <P.Image_Wrapper>
                {item?.imgSrc?.[0] && (
                  <Image
                    src={item.imgSrc[0]}
                    alt={item.name}
                    layout="fill"
                    objectFit="cover"
                  />
                )}

                {item.inventory == 0 ? <P.Soldout>일시품절</P.Soldout> : ""}
                {item ? (
                  <CartComponent product={item} productID={item.id} />
                ) : (
                  <P.Icon_alarm />
                )}
              </P.Image_Wrapper>

              <P.Detail_Wrapper>
                <p>{item.name}</p>

                <p>
                  <strong>{item.price?.toLocaleString()}</strong>원
                </p>

                <p>{item.grade}</p>

                <P.Tags>
                  {item.tag?.new && <P.Tags_new></P.Tags_new>}
                  {item.tag?.roomTemperature && (
                    <P.Tags_roomTemperature>실온</P.Tags_roomTemperature>
                  )}
                  {item.tag?.frozen && (
                    <P.Tags_Frozen>냉장 & 냉동</P.Tags_Frozen>
                  )}
                  {item.tag?.coupon && <P.Tags_Coupon></P.Tags_Coupon>}
                  {item.tag?.best && <P.Tags_Best />}
                  {item.tag?.freeDelivery && <P.Tags_FreeShipping />}
                  {item.tag?.recommend && (
                    <P.Tags_Recommend>
                      <img />
                    </P.Tags_Recommend>
                  )}
                </P.Tags>
              </P.Detail_Wrapper>
            </P.Product_Wrapper>
          </a>
        </Link>
      )}
    </P.Item>
  );
}
