import ResultsTitle from "@/components/event-detail/results-title";
import EventList from "@/components/events/event-list";
import Button from "@/components/ui/button";
import ErrorAlert from "@/components/ui/error-alert";
import { getFilteredEvents } from "@/dummy-data";
import { useRouter } from "next/router";

const FilteredEventsPage = () => {
    const router = useRouter();

    const filterData = router.query.slug;

    if (!filterData) {
        return <p className="center">Loading...</p>;
    }

    const filteredYearNum = +filterData[0];
    const filteredMonthNum = +filterData[1];

    if (
        isNaN(filteredMonthNum) ||
        isNaN(filteredYearNum) ||
        filteredYearNum >= 2024 ||
        filteredMonthNum < 1 ||
        filteredMonthNum > 12
    ) {
        return (
            <>
                <ErrorAlert>
                    <p className="center">
                        Invalid filter. Please adjust your values!
                    </p>
                </ErrorAlert>
                <div className="center">
                    <Button link="/events">Show All Events</Button>
                </div>
            </>
        );
    }

    const filteredEvents = getFilteredEvents({
        year: filteredYearNum,
        month: filteredMonthNum,
    });

    if (!filteredEvents || !filteredEvents.length) {
        return (
            <>
                <ErrorAlert>
                    <p className="center">
                        No events found for the chosen filter!
                    </p>
                </ErrorAlert>
                <div className="center">
                    <Button link="/events">Show All Events</Button>
                </div>
                ;
            </>
        );
    }
    

    const date = new Date(filteredYearNum, filteredMonthNum - 1);

    return (
        <>
            <ResultsTitle date={date} />
            <EventList items={filteredEvents} />
        </>
    );
};

export default FilteredEventsPage;
