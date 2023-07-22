import Link from "next/link";
import classes from "./button.module.css";

type props = {
    link?: string;
    children: string;
    onclick?: React.ReactEventHandler
};

const Button = (props: props) => {
    if (props.link) {
        return (
            <Link href={props.link} legacyBehavior>
                <a className={classes.btn}>{props.children}</a>
            </Link>
        );
    } else {
        {
            return <button className={classes.btn} onClick={props.onclick}>{props.children}</button>;
        }
    }
};

export default Button;
