/* Autogenerated file. Do not edit manually. */
/* eslint-disable */

import { Contract, Signer } from 'ethers';
import { Provider } from '@ethersproject/providers';

import type { IGovernancePowerDelegationToken } from './IGovernancePowerDelegationToken';

export class IGovernancePowerDelegationToken__factory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider,
  ): IGovernancePowerDelegationToken {
    return new Contract(
      address,
      _abi,
      signerOrProvider,
    ) as IGovernancePowerDelegationToken;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'delegator',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'delegatee',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'enum IGovernancePowerDelegationToken.DelegationType',
        name: 'delegationType',
        type: 'uint8',
      },
    ],
    name: 'DelegateChanged',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'enum IGovernancePowerDelegationToken.DelegationType',
        name: 'delegationType',
        type: 'uint8',
      },
    ],
    name: 'DelegatedPowerChanged',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: '_nonces',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'delegatee',
        type: 'address',
      },
    ],
    name: 'delegate',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'delegatee',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'nonce',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'expiry',
        type: 'uint256',
      },
      {
        internalType: 'uint8',
        name: 'v',
        type: 'uint8',
      },
      {
        internalType: 'bytes32',
        name: 'r',
        type: 'bytes32',
      },
      {
        internalType: 'bytes32',
        name: 's',
        type: 'bytes32',
      },
    ],
    name: 'delegateBySig',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'delegatee',
        type: 'address',
      },
      {
        internalType: 'enum IGovernancePowerDelegationToken.DelegationType',
        name: 'delegationType',
        type: 'uint8',
      },
    ],
    name: 'delegateByType',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'delegatee',
        type: 'address',
      },
      {
        internalType: 'enum IGovernancePowerDelegationToken.DelegationType',
        name: 'delegationType',
        type: 'uint8',
      },
      {
        internalType: 'uint256',
        name: 'nonce',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'expiry',
        type: 'uint256',
      },
      {
        internalType: 'uint8',
        name: 'v',
        type: 'uint8',
      },
      {
        internalType: 'bytes32',
        name: 'r',
        type: 'bytes32',
      },
      {
        internalType: 'bytes32',
        name: 's',
        type: 'bytes32',
      },
    ],
    name: 'delegateByTypeBySig',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'delegator',
        type: 'address',
      },
      {
        internalType: 'enum IGovernancePowerDelegationToken.DelegationType',
        name: 'delegationType',
        type: 'uint8',
      },
    ],
    name: 'getDelegateeByType',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'blockNumber',
        type: 'uint256',
      },
      {
        internalType: 'enum IGovernancePowerDelegationToken.DelegationType',
        name: 'delegationType',
        type: 'uint8',
      },
    ],
    name: 'getPowerAtBlock',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
      {
        internalType: 'enum IGovernancePowerDelegationToken.DelegationType',
        name: 'delegationType',
        type: 'uint8',
      },
    ],
    name: 'getPowerCurrent',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'blockNumber',
        type: 'uint256',
      },
    ],
    name: 'totalSupplyAt',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];