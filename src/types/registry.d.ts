/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type Network = {
  [k: string]: unknown;
} & {
  /**
   * Established name of the chain on the Graph network, i.e. mainnet, btc, arweave-mainnet, near-testnet
   */
  id: string;
  /**
   * Short display name of the network, i.e. Ethereum, BNB
   */
  shortName: string;
  /**
   * Display name of the network, i.e. Ethereum Mainnet, Bitcoin Testnet
   */
  fullName: string;
  /**
   * CAIP-2 Chain ID, i.e. eip155:1, bip122:000000000019d6689c085ae165831e93
   */
  caip2Id: string;
  /**
   * dummy test field
   */
  newField?: string;
  /**
   * [optional] List of possible aliases for the chain id, i.e. ethereum, eth, mainnet, eth-mainnet
   */
  aliases?: string[];
  /**
   * Whether the chain is a mainnet/testnet/devnet
   */
  networkType: "mainnet" | "testnet" | "devnet";
  relations?: {
    /**
     * Kind of relation
     */
    kind:
      | "testnetOf"
      | "beaconOf"
      | "forkedFrom"
      | "l2Of"
      | "shardOf"
      | "evmOf"
      | "other";
    /**
     * Id of the related network, i.e. mainnet, near-mainnet
     */
    network: string;
  }[];
  /**
   * Firehose block information
   */
  firehose?: {
    /**
     * Block type, i.e. sf.ethereum.type.v2.Block
     */
    blockType: string;
    /**
     * Bytes encoding, i.e. hex, 0xhex, base58
     */
    bytesEncoding: "hex" | "0xhex" | "base58";
    /**
     * Protobuf definitions on buf.build, i.e. https://buf.build/streamingfast/firehose-ethereum
     */
    bufUrl: string;
    /**
     * [optional] Whether supports extended block model if EVM chain
     */
    evmExtendedModel?: boolean;
  };
  genesis?: {
    /**
     * Hash of the genesis block either in 0x-prefixed hex or base58
     */
    hash: string;
    /**
     * Block height of the genesis or the first available block
     */
    height: number;
  };
  /**
   * Symbol of the native token
   */
  nativeToken?: string;
  graphNode?: {
    /**
     * [optional] Protocol name in graph-node, i.e. ethereum, near, arweave
     */
    protocol?: "ethereum" | "near" | "arweave" | "cosmos" | "starknet";
    [k: string]: unknown;
  };
  /**
   * URLs for the block explorers
   */
  explorerUrls?: string[];
  /**
   * Providers support for the chain by providers
   */
  support: {
    subgraphs?: Service[];
    sps?: Service[];
    firehose?: Service[];
    substreams?: Service[];
    [k: string]: unknown;
  };
  /**
   * Issuance rewards on the Graph Network for this chain
   */
  issuanceRewards: boolean;
  web3Icon?: string;
  /**
   * List of RPC URLs for the chain. Use {CUSTOM_API_KEY} as a placeholder for a private API key
   */
  rpcUrls?: string[];
  /**
   * List of API URLs for the chain, i.e. https://api.etherscan.io/api. Use {CUSTOM_API_KEY} as a placeholder for a private API key
   */
  apiUrls?: {
    url: string;
    kind: "etherscan" | "blockscout" | "ethplorer" | "subscan" | "other";
  }[];
  /**
   * URL to the chain documentation
   */
  docsUrl?: string;
  /**
   * Documentation to run indexer components for the chain
   */
  indexerDocsUrls?: {
    url: string;
    kind: "rpc" | "firehose" | "other";
    hint?: string;
  }[];
};

export interface TheGraphNetworksRegistrySchema {
  /**
   * Reference to this schema file
   */
  $schema: string;
  title: string;
  description: string;
  /**
   * Version of the registry
   */
  version: string;
  /**
   * Date and time of the last update
   */
  updatedAt: string;
  /**
   * List of networks
   */
  networks: Network[];
}
export interface Service {
  provider:
    | "e&n"
    | "pinax"
    | "graphops"
    | "streamingfast"
    | "messari"
    | "semiotic";
  url?: string;
}
