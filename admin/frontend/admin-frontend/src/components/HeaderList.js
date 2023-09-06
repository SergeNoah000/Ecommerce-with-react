import './modals/css/modals.css'
import { Link } from "react-router-dom"
// const [filterValue, setFilterValue] = useState("All");
function HeaderList ({ filter }) {
  
    // const currentDate = new Date();

    //     let startDate;
    //     let endDate;

    //     if (filter === "Last 30 Days") {
    //     startDate = subDays(currentDate, 30);
    //     endDate = currentDate;
    //     } else if (filter === "This Month") {
    //     startDate = startOfMonth(currentDate);
    //     endDate = endOfMonth(currentDate);
    //     } else if (filter === "Last Year") {
    //     startDate = subYears(currentDate, 1);
    //     endDate = currentDate;
    //     }
    return <div className="row g-4 mb-3">
       <div className="row g-5 mb-3">
    <div className="col-sm-4">
        <div className=' projet-card'>
           <Link to='/AllComponents' className="btn btn-success" ><i className="ri-add-line align-bottom me-1"></i> Add New</Link>
            {/* <a href="apps-projects-create.html" className="btn btn-success"><i className="ri-add-line align-bottom me-1"></i> Add New</a> */}
        </div>
    </div>
    <div className="col-sm">
        <div className="d-flex justify-content-sm-end gap-2">
            <div className="search-box ms-2">
                <input type="text" className="form-control" placeholder="Search..."/>
                <i className="ri-search-line search-icon"></i>
            </div>

            <select
                        className="form-control w-md"
                        data-choices
                        data-choices-search-false
                      
                      
                        >
                        <option value="All">All</option>
                        <option value="Today">Today</option>
                        <option value="Yesterday">Yesterday</option>
                        <option value="Last 7 Days">Last 7 Days</option>
                        <option value="Last 30 Days">Last 30 Days</option>
                        <option value="This Month">This Month</option>
                        <option value="Last Year">Last Year</option>
            </select>
        </div>
    </div>
</div>
  </div>
}
export default HeaderList