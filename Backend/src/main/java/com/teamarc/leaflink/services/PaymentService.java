package com.teamarc.leaflink.services;


import com.teamarc.leaflink.entity.Payment;
import com.teamarc.leaflink.entity.Session;
import com.teamarc.leaflink.entity.enums.PaymentStatus;
import com.teamarc.leaflink.exceptions.ResourceNotFoundException;
import com.teamarc.leaflink.repository.PaymentRepository;
import com.teamarc.leaflink.strategies.WalletPaymentStrategy;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class PaymentService {
    private final WalletPaymentStrategy walletPaymentStrategy;
    private final PaymentRepository paymentRepository;

    public void processPayment(Session session) {
        Payment payment = paymentRepository.findBySession(session)
                .orElseThrow(() -> new ResourceNotFoundException("Payment not found for session with id: " + session.getSessionId()));
        walletPaymentStrategy.processPayment(payment);
    }


    public Payment createNewPayment(Session session) {
        Payment payment = Payment.builder()
                .session(session)
                .paymentStatus(PaymentStatus.PENDING)
                .amount(session.getSessionFee())
                .build();
        return paymentRepository.save(payment);
    }

    public void refundPayment(Session session) {
        Payment payment = paymentRepository.findBySession(session)
                .orElseThrow(() -> new ResourceNotFoundException("Payment not found for session with id: " + session.getSessionId()));
        walletPaymentStrategy.refundPayment(payment);
    }
}