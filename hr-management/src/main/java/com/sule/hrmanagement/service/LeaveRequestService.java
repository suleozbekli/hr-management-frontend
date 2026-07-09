package com.sule.hrmanagement.service;

import com.sule.hrmanagement.dto.LeaveRequestRequest;
import com.sule.hrmanagement.dto.LeaveRequestResponse;

import java.util.List;

public interface LeaveRequestService {

    LeaveRequestResponse createLeaveRequest(LeaveRequestRequest request);

    List<LeaveRequestResponse> getAllLeaveRequests();

    LeaveRequestResponse getLeaveRequestById(Long id);

    LeaveRequestResponse updateLeaveRequest(Long id, LeaveRequestRequest request);

    void deleteLeaveRequest(Long id);
    LeaveRequestResponse approveLeave(Long id);

    LeaveRequestResponse rejectLeave(Long id);
}