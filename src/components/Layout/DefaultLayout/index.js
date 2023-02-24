import Header from "~/components/Layout/components/Header";
import SideBar from "./SideBar";


function DefaultLayout({ children }) {
    return (
        <div>
            <div>
                <Header />
                <div>
                    <SideBar />
                    <div className="content">{children}</div>
                </div>
            </div>
        </div>
    );
}
export default DefaultLayout;