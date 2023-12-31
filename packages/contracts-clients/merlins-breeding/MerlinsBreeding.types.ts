/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.16.3.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

export type BreedFinishedCountResponse = number;
export type Addr = string;
export interface BreedInfoResponse {
  child_token_id?: string | null;
  end_time: number;
  nft_owner: Addr;
  nft_token_id1: string;
  nft_token_id2: string;
  start_time: number;
  withdrawn: boolean;
  [k: string]: unknown;
}
export type BreedRequestsCountResponse = number;
export type BreededCountResponse = number;
export type Uint128 = string;
export interface ConfigResponse {
  breed_count_limit: number;
  breed_duration: number;
  breed_price_amount: Uint128;
  breed_price_denom: string;
  breed_start_time: number;
  child_base_uri: string;
  child_contract_addr: Addr;
  child_nft_max_supply: number;
  owner: Addr;
  parent_contract_addr: Addr;
  [k: string]: unknown;
}
export interface Config {
  breed_count_limit: number;
  breed_duration: number;
  breed_price_amount: Uint128;
  breed_price_denom: string;
  breed_start_time: number;
  child_base_uri: string;
  child_contract_addr: Addr;
  child_nft_max_supply: number;
  owner: Addr;
  parent_contract_addr: Addr;
  [k: string]: unknown;
}
export type ExecuteMsg = {
  update_config: {
    breed_count_limit?: number | null;
    breed_duration?: number | null;
    breed_price_amount?: Uint128 | null;
    breed_price_denom?: string | null;
    owner?: string | null;
    [k: string]: unknown;
  };
} | {
  start_breed: {
    [k: string]: unknown;
  };
} | {
  breed: {
    nft_token_id1: string;
    nft_token_id2: string;
    [k: string]: unknown;
  };
} | {
  mint: {
    extension?: Metadata | null;
    token_id: string;
    token_uri?: string | null;
    [k: string]: unknown;
  };
} | {
  withdraw: {
    breed_id: number;
    [k: string]: unknown;
  };
} | {
  withdraw_fund: {
    [k: string]: unknown;
  };
};
export interface Metadata {
  animation_url?: string | null;
  attributes?: Attribute[] | null;
  description?: string | null;
  external_url?: string | null;
  image?: string | null;
  name?: string | null;
  royalty_payment_address?: string | null;
  royalty_percentage?: number | null;
  [k: string]: unknown;
}
export interface Attribute {
  trait_type: string;
  value: string;
  [k: string]: unknown;
}
export interface InstantiateMsg {
  breed_count_limit: number;
  breed_duration: number;
  breed_price_amount: Uint128;
  breed_price_denom: string;
  child_nft_base_uri: string;
  child_nft_ci: number;
  child_nft_max_supply: number;
  child_nft_name: string;
  child_nft_symbol: string;
  parent_contract_addr: Addr;
  [k: string]: unknown;
}
export type QueryBreedingsLengthResponse = number;
export type QueryBreedingsResponse = BreedInfo[];
export interface BreedInfo {
  child_token_id?: string | null;
  end_time: number;
  nft_owner: Addr;
  nft_token_id1: string;
  nft_token_id2: string;
  start_time: number;
  withdrawn: boolean;
  [k: string]: unknown;
}
export type QueryMsg = {
  config: {
    [k: string]: unknown;
  };
} | {
  breed_info: {
    breed_id: number;
    [k: string]: unknown;
  };
} | {
  breeded_count: {
    parent_nft_token_id: string;
    [k: string]: unknown;
  };
} | {
  breed_requests_count: {
    [k: string]: unknown;
  };
} | {
  breed_finished_count: {
    [k: string]: unknown;
  };
} | {
  query_breedings: {
    count: number;
    from: number;
    sort: string;
    [k: string]: unknown;
  };
} | {
  query_breedings_length: {
    [k: string]: unknown;
  };
} | {
  query_user_breedings: {
    count: number;
    from: number;
    sort: string;
    user: string;
    [k: string]: unknown;
  };
} | {
  query_user_breedings_length: {
    user: string;
    [k: string]: unknown;
  };
};
export type QueryUserBreedingsLengthResponse = number;
export type QueryUserBreedingsResponse = BreedInfo[];