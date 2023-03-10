import Header from "~/layouts/components/Header";



function DefaultLayout({ children }) {
    return (
        <div>
            <div>
                <Header />
                <div>
                    <div className="content">{children}</div>
                </div>
            </div>
        </div>
    );
}

export default DefaultLayout;