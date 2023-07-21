import AddressIcon from "../icons/address-icon";
import DateIcon from "../icons/date-icon";
import LogisticsItem from "./logistics-item";
import classes from "./event-logistics.module.css";
import { dummyEventsType } from "@/Types";

function EventLogistics(props: dummyEventsType) {
    const { date, image, location, title } = props;

    const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });

    let addressText = null;

    if (location) {
        addressText = location.replace(", ", "\n");
    }

    return (
        <section className={classes.logistics}>
            <div className={classes.image}>
                <img src={`/${image}`} alt={title} />
            </div>
            <ul className={classes.list}>
                <LogisticsItem icon={DateIcon}>
                    <time>{humanReadableDate}</time>
                </LogisticsItem>
                <LogisticsItem icon={AddressIcon}>
                    <address>{location && addressText}</address>
                </LogisticsItem>
            </ul>
        </section>
    );
}

export default EventLogistics;
