import Navbar from "./Navbar";
import SideBar from "./SideBar";
import MainContent from "./MainContent";
import '../css/styles.css'


const MainLayout = (props) => {
    return (
        <div className="d-flex" id="wrapper">
            <SideBar/>
            <div id="page-content-wrapper">
                <Navbar {...props}/>
                <div className="container-fluid">
                    <MainContent/>
                </div>
            </div>
        </div>
        )
}

export default MainLayout