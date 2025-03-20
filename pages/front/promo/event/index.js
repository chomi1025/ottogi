import { collection, getDocs } from "firebase/firestore";
import Event from "@/page/front/promo/event/index.container";
import { db } from "@/firebaseConfig";

export async function getStaticProps() {
  const eventBannerCollection = collection(db, "eventBanner");
  const eventBannerSnapshot = await getDocs(eventBannerCollection);

  const eventBanners = eventBannerSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return {
    props: {
      eventBanners,
    },
  };
}

export default function EventPage({ eventBanners }) {
  const breadcrumb = [{ id: "/front/promo/event", name: "이벤트" }];
  return <Event eventBanners={eventBanners} breadcrumb={breadcrumb} />;
}
