import React, { useRef } from "react";
import EventList from "@/components/events/event-list";
import Button from "@/components/ui/button";
import { getAllEvents } from "@/dummy-data";
import classes from "./index.module.css";
import { useRouter } from "next/router";

const AllEventsPage = () => {
    const events = getAllEvents();
    const router = useRouter();

    const submitHandler = (event: React.ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();

        const selectedYear = yearInputRef.current.value;
        const selectedMonth = monthInputRef.current.value;

        findEventsHandler(selectedYear, selectedMonth);
    };

    const findEventsHandler = (year: string, month: string) => {
        const fullPath = `/events/${year}/${month}`;
        router.push(fullPath);
    };

    const yearInputRef: any = useRef();
    const monthInputRef: any = useRef();

    return (
        <>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.controls}>
                    <div className={classes.control}>
                        <label htmlFor="year">Year</label>
                        <select id="year" ref={yearInputRef}>
                            <option value="2023">2023</option>
                            <option value="2022">2022</option>
                        </select>
                    </div>

                    <div className={classes.control}>
                        <label htmlFor="month">Month</label>
                        <select id="month" ref={monthInputRef}>
                            <option value="1">January</option>
                            <option value="2">February</option>
                            <option value="3">March</option>
                            <option value="4">April</option>
                            <option value="5">May</option>
                            <option value="6">June</option>
                            <option value="7">July</option>
                            <option value="8">August</option>
                            <option value="9">Septemer</option>
                            <option value="10">October</option>
                            <option value="11">November</option>
                            <option value="12">December</option>
                        </select>
                    </div>
                </div>
                <Button>Find Events</Button>
            </form>
            <EventList items={events} />
        </>
    );
};

export default AllEventsPage;
