package com.bangle.global.util;

import com.bangle.global.contracts.BangleLibrary;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.web3j.protocol.Web3j;
import org.web3j.protocol.core.DefaultBlockParameter;
import org.web3j.protocol.core.methods.response.EthGetBalance;
import org.web3j.protocol.core.methods.response.TransactionReceipt;

import java.nio.charset.StandardCharsets;
import java.util.List;
import java.util.concurrent.ExecutionException;

@Component
@Slf4j
@RequiredArgsConstructor
public class EthereumUtil {
    // send smart contract
    // send main contract - with server pubKey
    private final Web3j web3j;
    private final BangleLibrary bangleLibrary;

    @Value("${wallet.address}")
    private String walletAddress;

    public EthGetBalance getEthBalance() throws ExecutionException, InterruptedException {
        return web3j.ethGetBalance(walletAddress,
                DefaultBlockParameter.valueOf("latest"))
                .sendAsync()
                .get();
    }

    public List getPurchasedList() throws Exception {
        return bangleLibrary.getPurchasedList().send();
    }

    public static byte[] stringTobyte32(String str) {
        byte[] inputBytes = str.getBytes(StandardCharsets.UTF_8);
        if (inputBytes.length > 32) {
            return null;
        } else {
            byte[] paddedBytes = new byte[32];
            System.arraycopy(inputBytes, 0, paddedBytes, 0, inputBytes.length);
            return paddedBytes;
        }
    }

    public TransactionReceipt savePublish() throws Exception {
        return bangleLibrary.publishBook(
                walletAddress,
                stringTobyte32("this is ipfs"),
                stringTobyte32("this is key"),
                stringTobyte32("this is serial number")
        ).send();
    }
}
