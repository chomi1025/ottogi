import EventUI from "./index.presenter";

export default function Event(props) {
  return (
    <EventUI eventBanners={props.eventBanners} breadcrumb={props.breadcrumb} />
  );
}
