package com.bangle.domain.blockchain.service;

import com.bangle.global.contracts.BangleLibrary;
import com.bangle.global.contracts.BangleNFT;
import java.math.BigInteger;
import java.nio.charset.StandardCharsets;
import java.util.List;
import java.util.concurrent.ExecutionException;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.web3j.crypto.Credentials;
import org.web3j.crypto.Keys;
import org.web3j.protocol.Web3j;
import org.web3j.protocol.core.DefaultBlockParameter;
import org.web3j.protocol.core.methods.response.EthGetBalance;
import org.web3j.protocol.core.methods.response.TransactionReceipt;

@Service
@RequiredArgsConstructor
public class EthereumService {
    private final Web3j web3j;
    private final BangleLibrary bangleLibrary;
    private final BangleNFT bangleNFT;

    @Value("${wallet.address}")
    private String walletAddress;

    private static byte[] stringTobyte32(String str) {
        byte[] inputBytes = str.getBytes(StandardCharsets.UTF_8);
        if (inputBytes.length > 32) {
            return null;
        } else {
            byte[] paddedBytes = new byte[32];
            System.arraycopy(inputBytes, 0, paddedBytes, 0, inputBytes.length);
            return paddedBytes;
        }
    }

    public static String pubKeyToAddress(String pubKey) {
        return Keys.getAddress(pubKey);
    }

    public EthGetBalance getEthBalance() throws ExecutionException, InterruptedException {
        return web3j.ethGetBalance(walletAddress,
                DefaultBlockParameter.valueOf("latest"))
            .sendAsync()
            .get();
    }

    public List getPurchasedList() throws Exception {
        return bangleLibrary.getPurchasedList().send();
    }

    public TransactionReceipt savePublish(String ipfsAddress) throws Exception {
        return bangleLibrary.publishBook(walletAddress, ipfsAddress).send();
    }

    public TransactionReceipt savePurchase(
        String ipfsAddress, String readerPubKey, String authorPubKey, int price
    ) throws Exception {
        return bangleLibrary.purchaseBook(
            pubKeyToAddress(readerPubKey),
                pubKeyToAddress(authorPubKey),
                ipfsAddress,
                BigInteger.valueOf(price))
            .send();
    }
}
