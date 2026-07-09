import { useState } from "react";
import EmployeeForm from "../components/EmployeeForm";
import EmployeeList from "../components/EmployeeList";

function Home() {

    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const [refresh, setRefresh] = useState(false);

    const refreshEmployees = () => {
        setRefresh(!refresh);
    };

    return (
        <div>

            <h1>HR Management System</h1>

            <EmployeeForm
                selectedEmployee={selectedEmployee}
                refreshEmployees={refreshEmployees}
            />

            <hr />

            <EmployeeList
                setSelectedEmployee={setSelectedEmployee}
                refresh={refresh}
                refreshEmployees={refreshEmployees}
            />

        </div>
    );
}

export default Home;