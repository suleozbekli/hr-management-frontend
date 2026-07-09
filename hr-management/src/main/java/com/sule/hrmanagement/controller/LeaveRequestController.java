package com.sule.hrmanagement.controller;

import com.sule.hrmanagement.dto.LeaveRequestRequest;
import com.sule.hrmanagement.dto.LeaveRequestResponse;
import com.sule.hrmanagement.service.LeaveRequestService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/leaves")
@RequiredArgsConstructor
public class LeaveRequestController {

    private final LeaveRequestService leaveRequestService;

    @PostMapping
    public LeaveRequestResponse createLeave(@RequestBody LeaveRequestRequest request) {
        return leaveRequestService.createLeaveRequest(request);
    }

    @GetMapping
    public List<LeaveRequestResponse> getAllLeaves() {
        return leaveRequestService.getAllLeaveRequests();
    }

    @GetMapping("/{id}")
    public LeaveRequestResponse getLeaveById(@PathVariable Long id) {
        return leaveRequestService.getLeaveRequestById(id);
    }

    @PutMapping("/{id}")
    public LeaveRequestResponse updateLeave(@PathVariable Long id,
                                            @RequestBody LeaveRequestRequest request) {
        return leaveRequestService.updateLeaveRequest(id, request);
    }

    @DeleteMapping("/{id}")
    public void deleteLeave(@PathVariable Long id) {
        leaveRequestService.deleteLeaveRequest(id);
    }
    @PutMapping("/{id}/approve")
    public LeaveRequestResponse approveLeave(@PathVariable Long id) {
        return leaveRequestService.approveLeave(id);
    }

    @PutMapping("/{id}/reject")
    public LeaveRequestResponse rejectLeave(@PathVariable Long id) {
        return leaveRequestService.rejectLeave(id);
    }
}