package com.sule.hrmanagement.service;

import com.sule.hrmanagement.dto.LeaveRequestRequest;
import com.sule.hrmanagement.dto.LeaveRequestResponse;
import com.sule.hrmanagement.entity.Employee;
import com.sule.hrmanagement.entity.LeaveRequest;
import com.sule.hrmanagement.entity.LeaveStatus;
import com.sule.hrmanagement.repository.EmployeeRepository;
import com.sule.hrmanagement.repository.LeaveRequestRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class LeaveRequestServiceImpl implements LeaveRequestService {

    private final LeaveRequestRepository leaveRequestRepository;
    private final EmployeeRepository employeeRepository;

    @Override
    public LeaveRequestResponse createLeaveRequest(LeaveRequestRequest request) {

        Employee employee = employeeRepository.findById(request.getEmployeeId())
                .orElseThrow(() -> new RuntimeException("Employee not found"));

        LeaveRequest leave = LeaveRequest.builder()
                .employee(employee)
                .leaveType(request.getLeaveType())
                .startDate(request.getStartDate())
                .endDate(request.getEndDate())
                .totalDays(request.getTotalDays())
                .reason(request.getReason())
                .status(LeaveStatus.PENDING)
                .build();

        return mapToResponse(leaveRequestRepository.save(leave));
    }

    @Override
    public List<LeaveRequestResponse> getAllLeaveRequests() {

        return leaveRequestRepository.findAll()
                .stream()
                .map(this::mapToResponse)
                .collect(Collectors.toList());
    }

    @Override
    public LeaveRequestResponse getLeaveRequestById(Long id) {

        LeaveRequest leave = leaveRequestRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Leave request not found"));

        return mapToResponse(leave);
    }

    @Override
    public LeaveRequestResponse updateLeaveRequest(Long id, LeaveRequestRequest request) {

        LeaveRequest leave = leaveRequestRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Leave request not found"));

        Employee employee = employeeRepository.findById(request.getEmployeeId())
                .orElseThrow(() -> new RuntimeException("Employee not found"));

        leave.setEmployee(employee);
        leave.setLeaveType(request.getLeaveType());
        leave.setStartDate(request.getStartDate());
        leave.setEndDate(request.getEndDate());
        leave.setTotalDays(request.getTotalDays());
        leave.setReason(request.getReason());

        return mapToResponse(leaveRequestRepository.save(leave));
    }

    @Override
    public void deleteLeaveRequest(Long id) {
        leaveRequestRepository.deleteById(id);
    }

    private LeaveRequestResponse mapToResponse(LeaveRequest leave) {

        return LeaveRequestResponse.builder()
                .id(leave.getId())
                .employeeId(leave.getEmployee().getId())
                .employeeName(
                        leave.getEmployee().getFirstName() + " " +
                                leave.getEmployee().getLastName())
                .leaveType(leave.getLeaveType())
                .startDate(leave.getStartDate())
                .endDate(leave.getEndDate())
                .totalDays(leave.getTotalDays())
                .reason(leave.getReason())
                .status(leave.getStatus())
                .build();
    }
    @Override
    public LeaveRequestResponse approveLeave(Long id) {

        LeaveRequest leave = leaveRequestRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Leave request not found"));

        Employee employee = leave.getEmployee();

        if (employee.getAnnualLeave() < leave.getTotalDays()) {
            throw new RuntimeException("Not enough annual leave.");
        }

        employee.setAnnualLeave(employee.getAnnualLeave() - leave.getTotalDays());

        leave.setStatus(LeaveStatus.APPROVED);

        employeeRepository.save(employee);
        leaveRequestRepository.save(leave);

        return mapToResponse(leave);
    }

    @Override
    public LeaveRequestResponse rejectLeave(Long id) {

        LeaveRequest leave = leaveRequestRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Leave request not found"));

        leave.setStatus(LeaveStatus.REJECTED);

        return mapToResponse(leaveRequestRepository.save(leave));
    }
}