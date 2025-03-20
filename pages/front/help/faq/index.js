import LayoutHelp from "@/Layout/front/help/index.layout";
import FAQUI from "@/page/front/help/faq/index";

export default function FAQPage() {
  return <FAQUI />;
}

FAQPage.getLayout = function getLayout(page) {
  return <LayoutHelp FAQ={true}>{page}</LayoutHelp>;
};
