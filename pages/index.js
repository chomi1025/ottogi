export async function getServerSideProps() {
  return {
    redirect: {
      destination: "/main",
      permanent: false, // true로 하면 301 영구 리디렉션
    },
  };
}

export default function Home() {
  return null; // 실제로 렌더링되지 않음
}
