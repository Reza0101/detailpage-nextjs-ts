import { Fragment } from "react";
import { dummyEventsType } from "@/Types";
import { getEventById } from "@/dummy-data";
import { useRouter } from "next/router";
import EventSummary from "@/components/event-detail/event-summary";
import EventLogistics from "@/components/event-detail/event-logistics";
import EventContent from "@/components/event-detail/event-content";

const EventDetailPage = () => {
    const router = useRouter();

    const eventId = router.query.eventId;

    const event: any = getEventById(Number(eventId));

    return (
        <Fragment>
            <EventSummary title={event?.title} />
            <EventLogistics {...event} />
            <EventContent>
                <p>{event?.description}</p>
            </EventContent>
        </Fragment>
    );
};

export default EventDetailPage;
