package com.bangle.global.contracts;

import java.math.BigInteger;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.concurrent.Callable;
import org.web3j.abi.TypeReference;
import org.web3j.abi.datatypes.Address;
import org.web3j.abi.datatypes.DynamicArray;
import org.web3j.abi.datatypes.DynamicStruct;
import org.web3j.abi.datatypes.Function;
import org.web3j.abi.datatypes.Type;
import org.web3j.abi.datatypes.Utf8String;
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
    public static final String BINARY = "608060405234801561001057600080fd5b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506111ec806100606000396000f3fe60806040526004361061004a5760003560e01c80634eb5302b1461004f57806389eb12a81461007a578063bd79bea4146100a5578063d26fc6cd146100bc578063d7d8697c146100e5575b600080fd5b34801561005b57600080fd5b50610064610101565b6040516100719190610bdf565b60405180910390f35b34801561008657600080fd5b5061008f610285565b60405161009c9190610bdf565b60405180910390f35b3480156100b157600080fd5b506100ba610409565b005b3480156100c857600080fd5b506100e360048036038101906100de9190610c9c565b610499565b005b6100ff60048036038101906100fa9190610cfc565b610798565b005b6060600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805480602002602001604051908101604052809291908181526020016000905b8282101561027c57838290600052602060002090600202016040518060400160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820180546101eb90610d9f565b80601f016020809104026020016040519081016040528092919081815260200182805461021790610d9f565b80156102645780601f1061023957610100808354040283529160200191610264565b820191906000526020600020905b81548152906001019060200180831161024757829003601f168201915b50505050508152505081526020019060010190610162565b50505050905090565b6060600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805480602002602001604051908101604052809291908181526020016000905b8282101561040057838290600052602060002090600202016040518060400160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160018201805461036f90610d9f565b80601f016020809104026020016040519081016040528092919081815260200182805461039b90610d9f565b80156103e85780601f106103bd576101008083540402835291602001916103e8565b820191906000526020600020905b8154815290600101906020018083116103cb57829003601f168201915b505050505081525050815260200190600101906102e6565b50505050905090565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610497576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161048e90610e2d565b60405180910390fd5b565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610527576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161051e90610e2d565b60405180910390fd5b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060405180604001604052808573ffffffffffffffffffffffffffffffffffffffff16815260200184848080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050815250908060018154018082558091505060019003906000526020600020906002020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550602082015181600101908161065a9190611032565b505050600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060405180604001604052808573ffffffffffffffffffffffffffffffffffffffff16815260200184848080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050815250908060018154018082558091505060019003906000526020600020906002020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010190816107909190611032565b505050505050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610826576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161081d90610e2d565b60405180910390fd5b60008373ffffffffffffffffffffffffffffffffffffffff163460405161084c90611135565b60006040518083038185875af1925050503d8060008114610889576040519150601f19603f3d011682016040523d82523d6000602084013e61088e565b606091505b50509050806108d2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108c990611196565b60405180910390fd5b600260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060405180604001604052808673ffffffffffffffffffffffffffffffffffffffff16815260200185858080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050815250908060018154018082558091505060019003906000526020600020906002020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506020820151816001019081610a059190611032565b5050505050505050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610a6682610a3b565b9050919050565b610a7681610a5b565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610ab6578082015181840152602081019050610a9b565b60008484015250505050565b6000601f19601f8301169050919050565b6000610ade82610a7c565b610ae88185610a87565b9350610af8818560208601610a98565b610b0181610ac2565b840191505092915050565b6000604083016000830151610b246000860182610a6d565b5060208301518482036020860152610b3c8282610ad3565b9150508091505092915050565b6000610b558383610b0c565b905092915050565b6000602082019050919050565b6000610b7582610a0f565b610b7f8185610a1a565b935083602082028501610b9185610a2b565b8060005b85811015610bcd5784840389528151610bae8582610b49565b9450610bb983610b5d565b925060208a01995050600181019050610b95565b50829750879550505050505092915050565b60006020820190508181036000830152610bf98184610b6a565b905092915050565b600080fd5b600080fd5b610c1481610a5b565b8114610c1f57600080fd5b50565b600081359050610c3181610c0b565b92915050565b600080fd5b600080fd5b600080fd5b60008083601f840112610c5c57610c5b610c37565b5b8235905067ffffffffffffffff811115610c7957610c78610c3c565b5b602083019150836001820283011115610c9557610c94610c41565b5b9250929050565b600080600060408486031215610cb557610cb4610c01565b5b6000610cc386828701610c22565b935050602084013567ffffffffffffffff811115610ce457610ce3610c06565b5b610cf086828701610c46565b92509250509250925092565b60008060008060608587031215610d1657610d15610c01565b5b6000610d2487828801610c22565b9450506020610d3587828801610c22565b935050604085013567ffffffffffffffff811115610d5657610d55610c06565b5b610d6287828801610c46565b925092505092959194509250565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610db757607f821691505b602082108103610dca57610dc9610d70565b5b50919050565b600082825260208201905092915050565b7f43616c6c6572206973206e6f7420612073657276657200000000000000000000600082015250565b6000610e17601683610dd0565b9150610e2282610de1565b602082019050919050565b60006020820190508181036000830152610e4681610e0a565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302610ede7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82610ea1565b610ee88683610ea1565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b6000610f2f610f2a610f2584610f00565b610f0a565b610f00565b9050919050565b6000819050919050565b610f4983610f14565b610f5d610f5582610f36565b848454610eae565b825550505050565b600090565b610f72610f65565b610f7d818484610f40565b505050565b5b81811015610fa157610f96600082610f6a565b600181019050610f83565b5050565b601f821115610fe657610fb781610e7c565b610fc084610e91565b81016020851015610fcf578190505b610fe3610fdb85610e91565b830182610f82565b50505b505050565b600082821c905092915050565b600061100960001984600802610feb565b1980831691505092915050565b60006110228383610ff8565b9150826002028217905092915050565b61103b82610a7c565b67ffffffffffffffff81111561105457611053610e4d565b5b61105e8254610d9f565b611069828285610fa5565b600060209050601f83116001811461109c576000841561108a578287015190505b6110948582611016565b8655506110fc565b601f1984166110aa86610e7c565b60005b828110156110d2578489015182556001820191506020850194506020810190506110ad565b868310156110ef57848901516110eb601f891682610ff8565b8355505b6001600288020188555050505b505050505050565b600081905092915050565b50565b600061111f600083611104565b915061112a8261110f565b600082019050919050565b600061114082611112565b9150819050919050565b7f4661696c656420746f2073656e64204574686572000000000000000000000000600082015250565b6000611180601483610dd0565b915061118b8261114a565b602082019050919050565b600060208201905081810360008301526111af81611173565b905091905056fea2646970667358221220b44fbe2285007e52c8e35c9b28a0d5cb539a72035c4f919ed0e38201814cf26364736f6c63430008120033\n";

    public static final String FUNC_GETPUBLISHEDLIST = "getPublishedList";

    public static final String FUNC_GETPURCHASEDLIST = "getPurchasedList";

    public static final String FUNC_PUBLISHBOOK = "publishBook";

    public static final String FUNC_PURCHASEBOOK = "purchaseBook";

    public static final String FUNC_PURCHASEBOOKP2P = "purchaseBookP2P";

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

    public RemoteFunctionCall<TransactionReceipt> publishBook(String author, String ipfsAddress) {
        final Function function = new Function(
            FUNC_PUBLISHBOOK,
            Arrays.<Type>asList(new org.web3j.abi.datatypes.Address(160, author),
                new org.web3j.abi.datatypes.Utf8String(ipfsAddress)),
            Collections.<TypeReference<?>>emptyList());
        return executeRemoteCallTransaction(function);
    }

    public RemoteFunctionCall<TransactionReceipt> purchaseBook(String reader, String author, String ipfsAddress, BigInteger weiValue) {
        final Function function = new Function(
            FUNC_PURCHASEBOOK,
            Arrays.<Type>asList(new org.web3j.abi.datatypes.Address(160, reader),
                new org.web3j.abi.datatypes.Address(160, author),
                new org.web3j.abi.datatypes.Utf8String(ipfsAddress)),
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

    public static class BookInfo extends DynamicStruct {
        public String author;

        public String ipfsAddress;

        public BookInfo(String author, String ipfsAddress) {
            super(new org.web3j.abi.datatypes.Address(160, author),
                new org.web3j.abi.datatypes.Utf8String(ipfsAddress));
            this.author = author;
            this.ipfsAddress = ipfsAddress;
        }

        public BookInfo(Address author, Utf8String ipfsAddress) {
            super(author, ipfsAddress);
            this.author = author.getValue();
            this.ipfsAddress = ipfsAddress.getValue();
        }
    }
}
