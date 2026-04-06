import { RecoilRoot } from "recoil";
import "../styles/globals.css";
import Layout from "@/Layout/index";
import AuthProvider from "@/Component/path/index";
import MyPopup from "@/Component/Main/CartPopup";

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <RecoilRoot>
      <AuthProvider>
        <Layout>
          {getLayout(<Component {...pageProps} />)}
          <MyPopup />
        </Layout>
      </AuthProvider>
    </RecoilRoot>
  );
}
