// https://github.com/ensdomains/ens-contracts/tree/master/contracts/resolvers most updated registry contract on the ENS repo
export const RESOLVER = [
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'bytes32',
				name: 'node',
				type: 'bytes32',
			},
			{
				indexed: true,
				internalType: 'uint256',
				name: 'contentType',
				type: 'uint256',
			},
		],
		name: 'ABIChanged',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'bytes32',
				name: 'node',
				type: 'bytes32',
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'a',
				type: 'address',
			},
		],
		name: 'AddrChanged',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'bytes32',
				name: 'node',
				type: 'bytes32',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'coinType',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'bytes',
				name: 'newAddress',
				type: 'bytes',
			},
		],
		name: 'AddressChanged',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'bytes32',
				name: 'node',
				type: 'bytes32',
			},
			{
				indexed: false,
				internalType: 'bytes32',
				name: 'hash',
				type: 'bytes32',
			},
		],
		name: 'ContentChanged',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'bytes32',
				name: 'node',
				type: 'bytes32',
			},
			{
				indexed: false,
				internalType: 'bytes',
				name: 'hash',
				type: 'bytes',
			},
		],
		name: 'ContenthashChanged',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'bytes32',
				name: 'node',
				type: 'bytes32',
			},
			{
				indexed: false,
				internalType: 'bytes',
				name: 'name',
				type: 'bytes',
			},
			{
				indexed: false,
				internalType: 'uint16',
				name: 'resource',
				type: 'uint16',
			},
			{
				indexed: false,
				internalType: 'bytes',
				name: 'record',
				type: 'bytes',
			},
		],
		name: 'DNSRecordChanged',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'bytes32',
				name: 'node',
				type: 'bytes32',
			},
			{
				indexed: false,
				internalType: 'bytes',
				name: 'name',
				type: 'bytes',
			},
			{
				indexed: false,
				internalType: 'uint16',
				name: 'resource',
				type: 'uint16',
			},
		],
		name: 'DNSRecordDeleted',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'bytes32',
				name: 'node',
				type: 'bytes32',
			},
		],
		name: 'DNSZoneCleared',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'bytes32',
				name: 'node',
				type: 'bytes32',
			},
			{
				indexed: false,
				internalType: 'bytes',
				name: 'lastzonehash',
				type: 'bytes',
			},
			{
				indexed: false,
				internalType: 'bytes',
				name: 'zonehash',
				type: 'bytes',
			},
		],
		name: 'DNSZonehashChanged',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'bytes32',
				name: 'node',
				type: 'bytes32',
			},
			{
				indexed: true,
				internalType: 'bytes4',
				name: 'interfaceID',
				type: 'bytes4',
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'implementer',
				type: 'address',
			},
		],
		name: 'InterfaceChanged',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'bytes32',
				name: 'node',
				type: 'bytes32',
			},
			{
				indexed: false,
				internalType: 'string',
				name: 'name',
				type: 'string',
			},
		],
		name: 'NameChanged',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'bytes32',
				name: 'node',
				type: 'bytes32',
			},
			{
				indexed: false,
				internalType: 'bytes32',
				name: 'x',
				type: 'bytes32',
			},
			{
				indexed: false,
				internalType: 'bytes32',
				name: 'y',
				type: 'bytes32',
			},
		],
		name: 'PubkeyChanged',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'bytes32',
				name: 'node',
				type: 'bytes32',
			},
			{
				indexed: true,
				internalType: 'string',
				name: 'indexedKey',
				type: 'string',
			},
			{
				indexed: false,
				internalType: 'string',
				name: 'key',
				type: 'string',
			},
		],
		name: 'TextChanged',
		type: 'event',
	},
	{
		inputs: [
			{
				internalType: 'bytes32',
				name: 'node',
				type: 'bytes32',
			},
			{
				internalType: 'uint256',
				name: 'contentTypes',
				type: 'uint256',
			},
		],
		name: 'ABI',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
			{
				internalType: 'bytes',
				name: '',
				type: 'bytes',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'bytes32',
				name: 'node',
				type: 'bytes32',
			},
		],
		name: 'addr',
		outputs: [
			{
				internalType: 'address payable',
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
				internalType: 'bytes32',
				name: 'node',
				type: 'bytes32',
			},
			{
				internalType: 'uint256',
				name: 'coinType',
				type: 'uint256',
			},
		],
		name: 'addr',
		outputs: [
			{
				internalType: 'bytes',
				name: '',
				type: 'bytes',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'bytes32',
				name: 'node',
				type: 'bytes32',
			},
		],
		name: 'content',
		outputs: [
			{
				internalType: 'bytes32',
				name: '',
				type: 'bytes32',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'bytes32',
				name: 'node',
				type: 'bytes32',
			},
		],
		name: 'contenthash',
		outputs: [
			{
				internalType: 'bytes',
				name: '',
				type: 'bytes',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'bytes32',
				name: 'node',
				type: 'bytes32',
			},
			{
				internalType: 'bytes32',
				name: 'name',
				type: 'bytes32',
			},
			{
				internalType: 'uint16',
				name: 'resource',
				type: 'uint16',
			},
		],
		name: 'dnsRecord',
		outputs: [
			{
				internalType: 'bytes',
				name: '',
				type: 'bytes',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'bytes32',
				name: 'node',
				type: 'bytes32',
			},
			{
				internalType: 'bytes4',
				name: 'interfaceID',
				type: 'bytes4',
			},
		],
		name: 'interfaceImplementer',
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
				internalType: 'bytes[]',
				name: 'data',
				type: 'bytes[]',
			},
		],
		name: 'multicall',
		outputs: [
			{
				internalType: 'bytes[]',
				name: 'results',
				type: 'bytes[]',
			},
		],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'bytes32',
				name: 'node',
				type: 'bytes32',
			},
		],
		name: 'multihash',
		outputs: [
			{
				internalType: 'bytes',
				name: '',
				type: 'bytes',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'bytes32',
				name: 'node',
				type: 'bytes32',
			},
		],
		name: 'name',
		outputs: [
			{
				internalType: 'string',
				name: '',
				type: 'string',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'bytes32',
				name: 'node',
				type: 'bytes32',
			},
		],
		name: 'pubkey',
		outputs: [
			{
				internalType: 'bytes32',
				name: 'x',
				type: 'bytes32',
			},
			{
				internalType: 'bytes32',
				name: 'y',
				type: 'bytes32',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'bytes32',
				name: 'node',
				type: 'bytes32',
			},
			{
				internalType: 'uint256',
				name: 'contentType',
				type: 'uint256',
			},
			{
				internalType: 'bytes',
				name: 'data',
				type: 'bytes',
			},
		],
		name: 'setABI',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'bytes32',
				name: 'node',
				type: 'bytes32',
			},
			{
				internalType: 'uint256',
				name: 'coinType',
				type: 'uint256',
			},
			{
				internalType: 'bytes',
				name: 'a',
				type: 'bytes',
			},
		],
		name: 'setAddr',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'bytes32',
				name: 'node',
				type: 'bytes32',
			},
			{
				internalType: 'address',
				name: 'addr',
				type: 'address',
			},
		],
		name: 'setAddr',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'bytes32',
				name: 'node',
				type: 'bytes32',
			},
			{
				internalType: 'bytes32',
				name: 'hash',
				type: 'bytes32',
			},
		],
		name: 'setContent',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'bytes32',
				name: 'node',
				type: 'bytes32',
			},
			{
				internalType: 'bytes',
				name: 'hash',
				type: 'bytes',
			},
		],
		name: 'setContenthash',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'bytes32',
				name: 'node',
				type: 'bytes32',
			},
			{
				internalType: 'bytes',
				name: 'data',
				type: 'bytes',
			},
		],
		name: 'setDnsrr',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'bytes32',
				name: 'node',
				type: 'bytes32',
			},
			{
				internalType: 'bytes4',
				name: 'interfaceID',
				type: 'bytes4',
			},
			{
				internalType: 'address',
				name: 'implementer',
				type: 'address',
			},
		],
		name: 'setInterface',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'bytes32',
				name: 'node',
				type: 'bytes32',
			},
			{
				internalType: 'bytes',
				name: 'hash',
				type: 'bytes',
			},
		],
		name: 'setMultihash',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'bytes32',
				name: 'node',
				type: 'bytes32',
			},
			{
				internalType: 'string',
				name: '_name',
				type: 'string',
			},
		],
		name: 'setName',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'bytes32',
				name: 'node',
				type: 'bytes32',
			},
			{
				internalType: 'bytes32',
				name: 'x',
				type: 'bytes32',
			},
			{
				internalType: 'bytes32',
				name: 'y',
				type: 'bytes32',
			},
		],
		name: 'setPubkey',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'bytes32',
				name: 'node',
				type: 'bytes32',
			},
			{
				internalType: 'string',
				name: 'key',
				type: 'string',
			},
			{
				internalType: 'string',
				name: 'value',
				type: 'string',
			},
		],
		name: 'setText',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'bytes4',
				name: 'interfaceID',
				type: 'bytes4',
			},
		],
		name: 'supportsInterface',
		outputs: [
			{
				internalType: 'bool',
				name: '',
				type: 'bool',
			},
		],
		stateMutability: 'pure',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'bytes32',
				name: 'node',
				type: 'bytes32',
			},
			{
				internalType: 'string',
				name: 'key',
				type: 'string',
			},
		],
		name: 'text',
		outputs: [
			{
				internalType: 'string',
				name: '',
				type: 'string',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'bytes32',
				name: 'node',
				type: 'bytes32',
			},
		],
		name: 'zonehash',
		outputs: [
			{
				internalType: 'bytes',
				name: '',
				type: 'bytes',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
];

module.exports = RESOLVER;
