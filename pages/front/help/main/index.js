import LayoutHelp from "@/Layout/front/help/index.layout";
import HelpmainUI from "@/page/front/help/main/index";

export default function HelpPage() {
  return <HelpmainUI />;
}

HelpPage.getLayout = function getLayout(page) {
  return <LayoutHelp>{page}</LayoutHelp>;
};
