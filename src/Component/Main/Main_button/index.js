import Link from "next/link";
import Image from "next/image";

export default function Button(props) {
  return (
    <>
      <Link href="/">
        <a
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            borderRadius: "50%",
          }}
        >
          <Image src={props.url} width={90} height={90} />

          <p
            style={{ lineHeight: "18px", fontSize: "15px", marginTop: "10px" }}
          >
            {props.text}
          </p>
        </a>
      </Link>
    </>
  );
}
