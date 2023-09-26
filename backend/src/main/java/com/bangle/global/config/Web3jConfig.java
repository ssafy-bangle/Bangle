package com.bangle.global.config;

import com.bangle.global.contracts.BangleLibrary;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.web3j.crypto.Credentials;
import org.web3j.crypto.ECKeyPair;
import org.web3j.protocol.Web3j;
import org.web3j.protocol.http.HttpService;
import org.web3j.tx.Contract;
import org.web3j.tx.FastRawTransactionManager;
import org.web3j.tx.gas.DefaultGasProvider;
import org.web3j.tx.gas.StaticGasProvider;

import java.math.BigInteger;

@Configuration
public class Web3jConfig {
    @Value("${geth.rpc.url}")
    private String gethRpcUrl;
    @Value("${wallet.private}")
    private String walletPrivate;
    @Bean
    public Web3j web3j() {
        return Web3j.build(new HttpService(gethRpcUrl));
    }
    @Bean
    public Credentials credentials() {
        return Credentials.create(ECKeyPair.create(new BigInteger(walletPrivate, 16)));
    }
    @Bean
    public BangleLibrary bangleLibrary() {
        long chainId = 11155111;   // sepolia
        FastRawTransactionManager fastRawTransactionManager = new FastRawTransactionManager(web3j(), credentials(), chainId);
        return BangleLibrary.load("0xA387E32C9CC2eaFC9ea99A9Da466756306e89010",
                web3j(), fastRawTransactionManager, new DefaultGasProvider());
    }

}
