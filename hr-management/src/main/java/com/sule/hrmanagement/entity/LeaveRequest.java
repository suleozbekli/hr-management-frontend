package com.sule.hrmanagement.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Entity
@Table(name = "leave_requests")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class LeaveRequest {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // İzin isteyen çalışan
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "employee_id", nullable = false)
    private Employee employee;

    // İzin türü
    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private LeaveType leaveType;

    // Başlangıç tarihi
    @Column(nullable = false)
    private LocalDate startDate;

    // Bitiş tarihi
    @Column(nullable = false)
    private LocalDate endDate;

    // Kaç gün izin
    @Column(nullable = false)
    private Integer totalDays;

    // Açıklama
    @Column(length = 500)
    private String reason;

    // Durum
    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private LeaveStatus status;
}