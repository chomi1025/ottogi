import Link from "next/link";

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
          <span
            style={{
              background: "url(" + props.url + ")no-repeat center center",
              backgroundSize: "contain",
              display: "block",
              width: "90px",
              height: "90px",
              marginBottom: "11px",
            }}
          />
          <p style={{ lineHeight: "18px", fontSize: "15px" }}>{props.text}</p>
        </a>
      </Link>
    </>
  );
}
