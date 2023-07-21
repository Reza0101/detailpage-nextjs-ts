import { dummyEventsType } from "@/Types";
import EventItem from "./event-item";
import classes from "./event-list.module.css";

const EventList = (props: { items: dummyEventsType[] }) => {
    const { items } = props;

    return (
        <ul className={classes.list}>
            {items.map((event: dummyEventsType) => (
                <EventItem key={event.id} {...event} />
            ))}
        </ul>
    );
};

export default EventList;
