import { useState } from "react";

import DashboardCards from "../components/DashboardCards";
import EmployeeForm from "../components/EmployeeForm";
import EmployeeList from "../components/EmployeeList";
import AdminDashboard from "../components/AdminDashboard";

function AdminPage() {

    const [refresh, setRefresh] = useState(false);

    const refreshEmployees = () => {
        setRefresh(!refresh);
    };

    return (

        <div>

            <DashboardCards />

            <EmployeeForm
                refreshEmployees={refreshEmployees}
            />

            <EmployeeList
                refresh={refresh}
                refreshEmployees={refreshEmployees}
            />

            <div style={{marginTop:"30px"}}>

                <AdminDashboard />

            </div>

        </div>

    );

}

export default AdminPage;