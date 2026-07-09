package com.sule.hrmanagement.service;

import com.sule.hrmanagement.dto.EmployeeRequest;
import com.sule.hrmanagement.dto.EmployeeResponse;
import com.sule.hrmanagement.dto.LeaveRequestResponse;

import java.util.List;

public interface EmployeeService {

    EmployeeResponse saveEmployee(EmployeeRequest request);

    List<EmployeeResponse> getAllEmployees();

    EmployeeResponse getEmployeeById(Long id);

    EmployeeResponse updateEmployee(Long id, EmployeeRequest request);

    void deleteEmployee(Long id);
}