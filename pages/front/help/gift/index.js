import LayoutHelp from "@/Layout/front/help/index.layout";
import GiftUI from "./../../../../src/page/front/help/gift/index";

export default function GiftPage() {
  return <GiftUI />;
}

GiftPage.getLayout = function getLayout(page) {
  return <LayoutHelp>{page}</LayoutHelp>;
};
