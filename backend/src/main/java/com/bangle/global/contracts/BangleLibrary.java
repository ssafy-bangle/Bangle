package com.bangle.global.contracts;

import java.math.BigInteger;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.concurrent.Callable;
import org.web3j.abi.TypeReference;
import org.web3j.abi.datatypes.Address;
import org.web3j.abi.datatypes.DynamicArray;
import org.web3j.abi.datatypes.Function;
import org.web3j.abi.datatypes.StaticStruct;
import org.web3j.abi.datatypes.Type;
import org.web3j.abi.datatypes.generated.Bytes32;
import org.web3j.crypto.Credentials;
import org.web3j.protocol.Web3j;
import org.web3j.protocol.core.RemoteCall;
import org.web3j.protocol.core.RemoteFunctionCall;
import org.web3j.protocol.core.methods.response.TransactionReceipt;
import org.web3j.tx.Contract;
import org.web3j.tx.TransactionManager;
import org.web3j.tx.gas.ContractGasProvider;

/**
 * <p>Auto generated code.
 * <p><strong>Do not modify!</strong>
 * <p>Please use the <a href="https://docs.web3j.io/command_line.html">web3j command line tools</a>,
 * or the org.web3j.codegen.SolidityFunctionWrapperGenerator in the
 * <a href="https://github.com/web3j/web3j/tree/master/codegen">codegen module</a> to update.
 *
 * <p>Generated with web3j version 1.5.0.
 */
@SuppressWarnings("rawtypes")
public class BangleLibrary extends Contract {
    public static final String BINARY = "608060405234801561001057600080fd5b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610cbd806100606000396000f3fe60806040526004361061004a5760003560e01c80634eb5302b1461004f57806389eb12a81461007a578063a078707c146100a5578063bd79bea4146100ce578063ee436668146100e5575b600080fd5b34801561005b57600080fd5b50610064610101565b60405161007191906109f7565b60405180910390f35b34801561008657600080fd5b5061008f610211565b60405161009c91906109f7565b60405180910390f35b3480156100b157600080fd5b506100cc60048036038101906100c79190610a76565b610321565b005b3480156100da57600080fd5b506100e36105c1565b005b6100ff60048036038101906100fa9190610add565b610651565b005b6060600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805480602002602001604051908101604052809291908181526020016000905b8282101561020857838290600052602060002090600402016040518060800160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600182015481526020016002820154815260200160038201548152505081526020019060010190610162565b50505050905090565b6060600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805480602002602001604051908101604052809291908181526020016000905b8282101561031857838290600052602060002090600402016040518060800160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600182015481526020016002820154815260200160038201548152505081526020019060010190610272565b50505050905090565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146103af576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103a690610bb5565b60405180910390fd5b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060405180608001604052808673ffffffffffffffffffffffffffffffffffffffff16815260200185815260200184815260200183815250908060018154018082558091505060019003906000526020600020906004020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506020820151816001015560408201518160020155606082015181600301555050600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060405180608001604052808673ffffffffffffffffffffffffffffffffffffffff16815260200185815260200184815260200183815250908060018154018082558091505060019003906000526020600020906004020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550602082015181600101556040820151816002015560608201518160030155505050505050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461064f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161064690610bb5565b60405180910390fd5b565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146106df576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106d690610bb5565b60405180910390fd5b60008473ffffffffffffffffffffffffffffffffffffffff163460405161070590610c06565b60006040518083038185875af1925050503d8060008114610742576040519150601f19603f3d011682016040523d82523d6000602084013e610747565b606091505b505090508061078b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161078290610c67565b60405180910390fd5b600260008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060405180608001604052808773ffffffffffffffffffffffffffffffffffffffff16815260200186815260200185815260200184815250908060018154018082558091505060019003906000526020600020906004020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506020820151816001015560408201518160020155606082015181600301555050505050505050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006108f0826108c5565b9050919050565b610900816108e5565b82525050565b6000819050919050565b61091981610906565b82525050565b60808201600082015161093560008501826108f7565b5060208201516109486020850182610910565b50604082015161095b6040850182610910565b50606082015161096e6060850182610910565b50505050565b6000610980838361091f565b60808301905092915050565b6000602082019050919050565b60006109a482610899565b6109ae81856108a4565b93506109b9836108b5565b8060005b838110156109ea5781516109d18882610974565b97506109dc8361098c565b9250506001810190506109bd565b5085935050505092915050565b60006020820190508181036000830152610a118184610999565b905092915050565b600080fd5b610a27816108e5565b8114610a3257600080fd5b50565b600081359050610a4481610a1e565b92915050565b610a5381610906565b8114610a5e57600080fd5b50565b600081359050610a7081610a4a565b92915050565b60008060008060808587031215610a9057610a8f610a19565b5b6000610a9e87828801610a35565b9450506020610aaf87828801610a61565b9350506040610ac087828801610a61565b9250506060610ad187828801610a61565b91505092959194509250565b600080600080600060a08688031215610af957610af8610a19565b5b6000610b0788828901610a35565b9550506020610b1888828901610a35565b9450506040610b2988828901610a61565b9350506060610b3a88828901610a61565b9250506080610b4b88828901610a61565b9150509295509295909350565b600082825260208201905092915050565b7f43616c6c6572206973206e6f74206f776e657200000000000000000000000000600082015250565b6000610b9f601383610b58565b9150610baa82610b69565b602082019050919050565b60006020820190508181036000830152610bce81610b92565b9050919050565b600081905092915050565b50565b6000610bf0600083610bd5565b9150610bfb82610be0565b600082019050919050565b6000610c1182610be3565b9150819050919050565b7f4661696c656420746f2073656e64204574686572000000000000000000000000600082015250565b6000610c51601483610b58565b9150610c5c82610c1b565b602082019050919050565b60006020820190508181036000830152610c8081610c44565b905091905056fea26469706673582212203a1480bf68731cf3f0ff039738a61aec79045c1e60c0b2c6771c103e578e5cb964736f6c63430008120033\n";

    public static final String FUNC_PUBLISHBOOK = "publishBook";

    public static final String FUNC_PURCHASEBOOK = "purchaseBook";

    public static final String FUNC_PURCHASEBOOKP2P = "purchaseBookP2P";

    public static final String FUNC_GETPUBLISHEDLIST = "getPublishedList";

    public static final String FUNC_GETPURCHASEDLIST = "getPurchasedList";

    @Deprecated
    protected BangleLibrary(String contractAddress, Web3j web3j, Credentials credentials, BigInteger gasPrice, BigInteger gasLimit) {
        super(BINARY, contractAddress, web3j, credentials, gasPrice, gasLimit);
    }

    protected BangleLibrary(String contractAddress, Web3j web3j, Credentials credentials, ContractGasProvider contractGasProvider) {
        super(BINARY, contractAddress, web3j, credentials, contractGasProvider);
    }

    @Deprecated
    protected BangleLibrary(String contractAddress, Web3j web3j, TransactionManager transactionManager, BigInteger gasPrice, BigInteger gasLimit) {
        super(BINARY, contractAddress, web3j, transactionManager, gasPrice, gasLimit);
    }

    protected BangleLibrary(String contractAddress, Web3j web3j, TransactionManager transactionManager, ContractGasProvider contractGasProvider) {
        super(BINARY, contractAddress, web3j, transactionManager, contractGasProvider);
    }

    public RemoteFunctionCall<TransactionReceipt> publishBook(String author, byte[] ipfsAddress, byte[] key, byte[] serialNumber) {
        final Function function = new Function(
                FUNC_PUBLISHBOOK,
                Arrays.<Type>asList(new org.web3j.abi.datatypes.Address(160, author),
                        new org.web3j.abi.datatypes.generated.Bytes32(ipfsAddress),
                        new org.web3j.abi.datatypes.generated.Bytes32(key),
                        new org.web3j.abi.datatypes.generated.Bytes32(serialNumber)),
                Collections.<TypeReference<?>>emptyList());
        return executeRemoteCallTransaction(function);
    }

    public RemoteFunctionCall<TransactionReceipt> purchaseBook(String reader, String author, byte[] ipfsAddress, byte[] key, byte[] serialNumber, BigInteger weiValue) {
        final Function function = new Function(
                FUNC_PURCHASEBOOK,
                Arrays.<Type>asList(new org.web3j.abi.datatypes.Address(160, reader),
                        new org.web3j.abi.datatypes.Address(160, author),
                        new org.web3j.abi.datatypes.generated.Bytes32(ipfsAddress),
                        new org.web3j.abi.datatypes.generated.Bytes32(key),
                        new org.web3j.abi.datatypes.generated.Bytes32(serialNumber)),
                Collections.<TypeReference<?>>emptyList());
        return executeRemoteCallTransaction(function, weiValue);
    }

    public RemoteFunctionCall<TransactionReceipt> purchaseBookP2P() {
        final Function function = new Function(
                FUNC_PURCHASEBOOKP2P,
                Arrays.<Type>asList(),
                Collections.<TypeReference<?>>emptyList());
        return executeRemoteCallTransaction(function);
    }

    public RemoteFunctionCall<List> getPublishedList() {
        final Function function = new Function(FUNC_GETPUBLISHEDLIST,
                Arrays.<Type>asList(),
                Arrays.<TypeReference<?>>asList(new TypeReference<DynamicArray<BookInfo>>() {}));
        return new RemoteFunctionCall<List>(function,
                new Callable<List>() {
                    @Override
                    @SuppressWarnings("unchecked")
                    public List call() throws Exception {
                        List<Type> result = (List<Type>) executeCallSingleValueReturn(function, List.class);
                        return convertToNative(result);
                    }
                });
    }

    public RemoteFunctionCall<List> getPurchasedList() {
        final Function function = new Function(FUNC_GETPURCHASEDLIST,
                Arrays.<Type>asList(),
                Arrays.<TypeReference<?>>asList(new TypeReference<DynamicArray<BookInfo>>() {}));
        return new RemoteFunctionCall<List>(function,
                new Callable<List>() {
                    @Override
                    @SuppressWarnings("unchecked")
                    public List call() throws Exception {
                        List<Type> result = (List<Type>) executeCallSingleValueReturn(function, List.class);
                        return convertToNative(result);
                    }
                });
    }

    @Deprecated
    public static BangleLibrary load(String contractAddress, Web3j web3j, Credentials credentials, BigInteger gasPrice, BigInteger gasLimit) {
        return new BangleLibrary(contractAddress, web3j, credentials, gasPrice, gasLimit);
    }

    @Deprecated
    public static BangleLibrary load(String contractAddress, Web3j web3j, TransactionManager transactionManager, BigInteger gasPrice, BigInteger gasLimit) {
        return new BangleLibrary(contractAddress, web3j, transactionManager, gasPrice, gasLimit);
    }

    public static BangleLibrary load(String contractAddress, Web3j web3j, Credentials credentials, ContractGasProvider contractGasProvider) {
        return new BangleLibrary(contractAddress, web3j, credentials, contractGasProvider);
    }

    public static BangleLibrary load(String contractAddress, Web3j web3j, TransactionManager transactionManager, ContractGasProvider contractGasProvider) {
        return new BangleLibrary(contractAddress, web3j, transactionManager, contractGasProvider);
    }

    public static RemoteCall<BangleLibrary> deploy(Web3j web3j, Credentials credentials, ContractGasProvider contractGasProvider) {
        return deployRemoteCall(BangleLibrary.class, web3j, credentials, contractGasProvider, BINARY, "");
    }

    public static RemoteCall<BangleLibrary> deploy(Web3j web3j, TransactionManager transactionManager, ContractGasProvider contractGasProvider) {
        return deployRemoteCall(BangleLibrary.class, web3j, transactionManager, contractGasProvider, BINARY, "");
    }

    @Deprecated
    public static RemoteCall<BangleLibrary> deploy(Web3j web3j, Credentials credentials, BigInteger gasPrice, BigInteger gasLimit) {
        return deployRemoteCall(BangleLibrary.class, web3j, credentials, gasPrice, gasLimit, BINARY, "");
    }

    @Deprecated
    public static RemoteCall<BangleLibrary> deploy(Web3j web3j, TransactionManager transactionManager, BigInteger gasPrice, BigInteger gasLimit) {
        return deployRemoteCall(BangleLibrary.class, web3j, transactionManager, gasPrice, gasLimit, BINARY, "");
    }

    public static class BookInfo extends StaticStruct {
        public String author;

        public byte[] ipfsAddress;

        public byte[] key;

        public byte[] serialNumber;

        public BookInfo(String author, byte[] ipfsAddress, byte[] key, byte[] serialNumber) {
            super(new org.web3j.abi.datatypes.Address(160, author),
                    new org.web3j.abi.datatypes.generated.Bytes32(ipfsAddress),
                    new org.web3j.abi.datatypes.generated.Bytes32(key),
                    new org.web3j.abi.datatypes.generated.Bytes32(serialNumber));
            this.author = author;
            this.ipfsAddress = ipfsAddress;
            this.key = key;
            this.serialNumber = serialNumber;
        }

        public BookInfo(Address author, Bytes32 ipfsAddress, Bytes32 key, Bytes32 serialNumber) {
            super(author, ipfsAddress, key, serialNumber);
            this.author = author.getValue();
            this.ipfsAddress = ipfsAddress.getValue();
            this.key = key.getValue();
            this.serialNumber = serialNumber.getValue();
        }
    }
}
