import MainHeader from "./main-header";

const Layout = (props: { children: React.ReactNode }) => {
    return (
        <>
            <MainHeader />
            <main>{props.children}</main>
        </>
    );
};

export default Layout;
