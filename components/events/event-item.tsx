import { dummyEventsType } from "@/Types";
import classes from "./event-item.module.css";
import Button from "./../../components/ui/button";

const EventItem = (props: dummyEventsType) => {
    const { title, image, date, location, id } = props;

    const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });

    const formattedAddress = location.replace(", ", "\n");

    return (
        <li className={classes.item}>
            <img src={`./${image}`} alt="" />
            <div className={classes.content}>
                <div className={classes.summary}>
                    <h2>{title}</h2>
                    <div className={classes.date}>
                        <time>{humanReadableDate}</time>
                    </div>
                    <div className={classes.address}>
                        <address>{formattedAddress}</address>
                    </div>
                </div>
                <div className={classes.actions}>
                    <Button link={`/events/${id}`}>Explore Event</Button>
                </div>
            </div>
        </li>
    );
};

export default EventItem;