package com.sule.hrmanagement.controller;

import com.sule.hrmanagement.dto.EmployeeRequest;
import com.sule.hrmanagement.dto.EmployeeResponse;
import com.sule.hrmanagement.dto.LeaveRequestResponse;
import com.sule.hrmanagement.service.EmployeeService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/employees")
public class EmployeeController {

    private final EmployeeService employeeService;

    public EmployeeController(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }

    // Yeni çalışan ekle
    @PostMapping
    public EmployeeResponse saveEmployee(@RequestBody EmployeeRequest request) {
        return employeeService.saveEmployee(request);
    }

    // Tüm çalışanları getir
    @GetMapping
    public List<EmployeeResponse> getAllEmployees() {
        return employeeService.getAllEmployees();
    }

    // ID'ye göre çalışan getir
    @GetMapping("/{id}")
    public EmployeeResponse getEmployeeById(@PathVariable Long id) {
        return employeeService.getEmployeeById(id);
    }

    // Çalışanı güncelle
    @PutMapping("/{id}")
    public EmployeeResponse updateEmployee(@PathVariable Long id,
                                           @RequestBody EmployeeRequest request) {
        return employeeService.updateEmployee(id, request);
    }

    // Çalışanı sil
    @DeleteMapping("/{id}")
    public void deleteEmployee(@PathVariable Long id) {
        employeeService.deleteEmployee(id);
    }


}