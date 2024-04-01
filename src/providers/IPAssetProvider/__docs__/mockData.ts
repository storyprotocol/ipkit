export const AssetData = {
  data: {
    id: "0xbbf08a30b9ff0f717a024a75963d3196aaf0f0dd",
    chainId: "11155111",
    parentIpIds: [
      {
        id: "0x60c193e8b4381c6ff11e8e661d2c6168b8a04c6a",
        chainId: "11155111",
        parentIpIds: null,
        childIpIds: null,
        rootIpIds: null,
        tokenContract: "0x7ee32b8b515dee0ba2f25f612a04a731eec24f49",
        tokenId: "322",
        metadataResolverAddress: "0x3809f4128b0b33afb17576edafd7d4f4e2abe933",
        metadata: {
          name: "",
          hash: "0x0000000000000000000000000000000000000000000000000000000000000000",
          registrationDate: "1709207328",
          registrant: "0x193fd2912c06a0ca39cfcbe5ef327d1c96b65b75",
          uri: "",
        },
        blockNumber: "5387301",
        blockTimestamp: "1709207328",
      },
      {
        id: "0xa4ad3f18c2a37f1fb8d86bcd5922739f53e57bae",
        chainId: "11155111",
        parentIpIds: null,
        childIpIds: null,
        rootIpIds: null,
        tokenContract: "0x7ee32b8b515dee0ba2f25f612a04a731eec24f49",
        tokenId: "323",
        metadataResolverAddress: "0x3809f4128b0b33afb17576edafd7d4f4e2abe933",
        metadata: {
          name: "",
          hash: "0x0000000000000000000000000000000000000000000000000000000000000000",
          registrationDate: "1709207496",
          registrant: "0x83cdbb9cbeb6b5874d13932070bd313c6a2c610f",
          uri: "",
        },
        blockNumber: "5387313",
        blockTimestamp: "1709207496",
      },
    ],
    childIpIds: [],
    rootIpIds: [
      {
        id: "0x60c193e8b4381c6ff11e8e661d2c6168b8a04c6a",
        chainId: "11155111",
        parentIpIds: null,
        childIpIds: null,
        rootIpIds: null,
        tokenContract: "0x7ee32b8b515dee0ba2f25f612a04a731eec24f49",
        tokenId: "322",
        metadataResolverAddress: "0x3809f4128b0b33afb17576edafd7d4f4e2abe933",
        metadata: {
          name: "",
          hash: "0x0000000000000000000000000000000000000000000000000000000000000000",
          registrationDate: "1709207328",
          registrant: "0x193fd2912c06a0ca39cfcbe5ef327d1c96b65b75",
          uri: "",
        },
        blockNumber: "5387301",
        blockTimestamp: "1709207328",
      },
    ],
    tokenContract: "0x7ee32b8b515dee0ba2f25f612a04a731eec24f49",
    tokenId: "324",
    metadataResolverAddress: "0x3809f4128b0b33afb17576edafd7d4f4e2abe933",
    metadata: {
      name: "hihihi",
      hash: "0x0000000000000000000000000000000000000000000000000000000000000000",
      registrationDate: "1709207664",
      registrant: "0xd5795e7b76b9005b7a519fdc2350769c4080e6cd",
      uri: "",
    },
    blockNumber: "5387326",
    blockTimestamp: "1709207664",
  },
}

export const IPAPolicies = {
  data: [
    {
      id: "0x300cdb41519ff0xd5",
      ipId: "0xbbf08a30b9ff0f717a024a75963d3196aaf0f0dd",
      policyId: "7",
      index: "0",
      active: true,
      inherited: true,
      blockNumber: "5387326",
      blockTimestamp: "1709207664",
    },
  ],
}

export const Royalties = {
  data: {
    id: "0xbbf08a30b9ff0f717a024a75963d3196aaf0f0dd",
    splitClone: "0xae0219e58fe5a4529b84f7a252c26fdf2cf45538",
    ancestorsVault: "0x1d49a894554b7ad5a04a44d0b15297447e41690b",
    royaltyStack: "300",
    targetAncestors: ["0x60c193e8b4381c6ff11e8e661d2c6168b8a04c6a", "0xa4ad3f18c2a37f1fb8d86bcd5922739f53e57bae"],
    targetRoyaltyAmount: ["200", "100"],
    blockNumber: "5387326",
    blockTimestamp: "1709207664",
  },
}

export const Policy = {
  data: {
    id: "7",
    policyFrameworkManager: "0xeaabf2b80b7e069ee449b5629590a1cc0f9bc9c2",
    frameworkData:
      "0x0000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001a00000000000000000000000000000000000000000000000000000000000000064000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000001c000000000000000000000000000000000000000000000000000000000000001e000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
    royaltyPolicy: "0x16ef58e959522727588921a92e9084d36e5d3855",
    royaltyData: "0x0000000000000000000000000000000000000000000000000000000000000064",
    mintingFee: "1000000000000000000",
    mintingFeeToken: "0x857308523a01b430cb112400976b9fc4a6429d55",
    blockNumber: "5378866",
    blockTimestamp: "1709100120",
    pil: {
      id: "0xd7d20e6b7d3f80xa8",
      attribution: true,
      commercialUse: true,
      commercialAttribution: true,
      commercializerChecker: "0x0000000000000000000000000000000000000000",
      commercializerCheckerData: "0x",
      commercialRevShare: "100",
      derivativesAllowed: true,
      derivativesAttribution: false,
      derivativesApproval: false,
      derivativesReciprocal: true,
      territories: [],
      distributionChannels: [],
      contentRestrictions: [],
    },
  },
}

export const NFT = {
  nft_id: "ethereum-sepolia.0x7ee32b8b515dee0ba2f25f612a04a731eec24f49.324",
  chain: "ethereum-sepolia",
  contract_address: "0x7ee32b8B515dEE0Ba2F25f612A04a731eEc24F49",
  token_id: "324",
  name: "Yeah cool NFT #324",
  description: "Example NFT!",
  previews: {
    image_small_url:
      "https://lh3.googleusercontent.com/75hIsI46X3QiSnmq_0fYET6Y60T6AGInh8gQT64zoF2wRKERWiRexUGYWcB8YKg96X1aLl4Gu-HfJFMPSZs5UAC7QPgVsgGkQA=s250",
    image_medium_url:
      "https://lh3.googleusercontent.com/75hIsI46X3QiSnmq_0fYET6Y60T6AGInh8gQT64zoF2wRKERWiRexUGYWcB8YKg96X1aLl4Gu-HfJFMPSZs5UAC7QPgVsgGkQA",
    image_large_url:
      "https://lh3.googleusercontent.com/75hIsI46X3QiSnmq_0fYET6Y60T6AGInh8gQT64zoF2wRKERWiRexUGYWcB8YKg96X1aLl4Gu-HfJFMPSZs5UAC7QPgVsgGkQA=s1000",
    image_opengraph_url:
      "https://lh3.googleusercontent.com/75hIsI46X3QiSnmq_0fYET6Y60T6AGInh8gQT64zoF2wRKERWiRexUGYWcB8YKg96X1aLl4Gu-HfJFMPSZs5UAC7QPgVsgGkQA=k-w1200-s2400-rj",
    blurhash: "UFM@itt7_3xu?bofxuRj00ofM{WB~qIURj%M",
    predominant_color: "#dadada",
  },
  image_url: "https://cdn.simplehash.com/assets/69ac28cb44bcf041b5d103706c80cad6b6207ced313c7d768f7875d448ea07e5.jpg",
  image_properties: {
    width: 720,
    height: 576,
    size: 279189,
    mime_type: "image/jpeg",
  },
  video_url: null,
  video_properties: null,
  audio_url: null,
  audio_properties: null,
  model_url: null,
  model_properties: null,
  other_url: null,
  other_properties: null,
  background_color: null,
  external_url: null,
  created_date: "2024-02-29T11:48:24",
  status: "minted",
  token_count: 1,
  owner_count: 1,
  owners: [
    {
      owner_address: "0xd5795e7b76b9005B7a519FDc2350769c4080e6cD",
      quantity: 1,
      quantity_string: "1",
      first_acquired_date: "2024-02-29T11:48:24",
      last_acquired_date: "2024-02-29T11:48:24",
    },
  ],
  contract: {
    type: "ERC721",
    name: "Example NFT",
    symbol: "ENFT",
    deployed_by: "0xf398C12A45Bc409b6C652E25bb0a3e702492A4ab",
    deployed_via_contract: null,
    owned_by: null,
    has_multiple_collections: false,
  },
  collection: {
    collection_id: "3eb0dfade3c5f4bed80d4ef85e69e8e5",
    name: "Example NFT",
    description: null,
    image_url:
      "https://lh3.googleusercontent.com/yRu5vHEP2U_PlGVDT0rHh_Ul4f44okUvhbs3Rb_0ZAh77pi1P669Kc9nLxHaWJeAUMn_4Brro6y4qlI1wb1-clLhd9w5hTecEr0",
    banner_image_url: null,
    category: null,
    is_nsfw: false,
    external_url: null,
    twitter_username: null,
    discord_url: null,
    instagram_username: null,
    medium_username: null,
    telegram_url: null,
    marketplace_pages: [
      {
        marketplace_id: "opensea",
        marketplace_name: "OpenSea",
        marketplace_collection_id: "example-nft-12",
        nft_url: "https://testnets.opensea.io/assets/sepolia/0x7ee32b8b515dee0ba2f25f612a04a731eec24f49/324",
        collection_url: "https://testnets.opensea.io/collection/example-nft-12",
        verified: false,
      },
    ],
    metaplex_mint: null,
    metaplex_candy_machine: null,
    metaplex_first_verified_creator: null,
    spam_score: null,
    floor_prices: [],
    top_bids: [],
    distinct_owner_count: 194,
    distinct_nft_count: 1599,
    total_quantity: 1599,
    chains: ["ethereum-sepolia"],
    top_contracts: ["ethereum-sepolia.0x7ee32b8b515dee0ba2f25f612a04a731eec24f49"],
    collection_royalties: [
      {
        source: "opensea",
        total_creator_fee_basis_points: 0,
        recipients: [],
      },
    ],
  },
  last_sale: null,
  first_created: {
    minted_to: "0xd5795e7b76b9005B7a519FDc2350769c4080e6cD",
    quantity: 1,
    quantity_string: "1",
    timestamp: "2024-02-29T11:48:24",
    block_number: 5387299,
    transaction: "0xf5070fb6454610d4131347b1135a086594ddef341259ed1d294183776564571b",
    transaction_initiator: "0xd5795e7b76b9005B7a519FDc2350769c4080e6cD",
  },
  rarity: {
    rank: null,
    score: null,
    unique_attributes: null,
  },
  royalty: [
    {
      source: "opensea",
      total_creator_fee_basis_points: 0,
      recipients: [],
    },
  ],
  extra_metadata: {
    attributes: [],
    image_original_url:
      "https://cloudflare-ipfs.com/ipfs/QmRibyKgMy5iK2VmhgNYwdhDJBr795ji3eozk9nPYmU9oU/steamboat-willie.jpg",
    animation_original_url: null,
    metadata_original_url:
      '{"name": "Example NFT #324", "description": "Example NFT!", "image": "https://cloudflare-ipfs.com/ipfs/QmRibyKgMy5iK2VmhgNYwdhDJBr795ji3eozk9nPYmU9oU/steamboat-willie.jpg"}',
  },
}

export const Licenses = {
  data: [
    {
      id: "450",
      policyId: "148",
      licensorIpId: "0xbe4dd0988ac0f7b97fc0d7e8e0b67ed1feec8cea",
      transferable: true,
      amount: "1",
      blockNumber: "5604923",
      blockTimestamp: "1711959852",
    },
    {
      id: "449",
      policyId: "1",
      licensorIpId: "0xbe4dd0988ac0f7b97fc0d7e8e0b67ed1feec8cea",
      transferable: true,
      amount: "2",
      blockNumber: "5604921",
      blockTimestamp: "1711959828",
    },
    {
      id: "448",
      policyId: "1",
      licensorIpId: "0x0771200bfca68e4a4684fd0cde33fb993cdf7851",
      transferable: true,
      amount: "2",
      blockNumber: "5604302",
      blockTimestamp: "1711952400",
    },
    {
      id: "447",
      policyId: "1",
      licensorIpId: "0xea3b69e0f8a21d855d55c40b9495e5b2f4bd4555",
      transferable: true,
      amount: "2",
      blockNumber: "5601593",
      blockTimestamp: "1711919892",
    },
    {
      id: "446",
      policyId: "1",
      licensorIpId: "0x416579a8201071632c73fb4bba646cab89a3dc40",
      transferable: true,
      amount: "1",
      blockNumber: "5584177",
      blockTimestamp: "1711705464",
    },
    {
      id: "445",
      policyId: "1",
      licensorIpId: "0xefaa0bd68271e99403bd14cc56a82ebba7f6105d",
      transferable: true,
      amount: "2",
      blockNumber: "5584169",
      blockTimestamp: "1711705368",
    },
    {
      id: "444",
      policyId: "19",
      licensorIpId: "0x5aeeb3b86c2804ee33199286f8cc25a6e04409f1",
      transferable: true,
      amount: "1",
      blockNumber: "5584158",
      blockTimestamp: "1711705212",
    },
    {
      id: "443",
      policyId: "1",
      licensorIpId: "0x99ad346b429c164266da2e1bf041d62de59db3fd",
      transferable: true,
      amount: "1",
      blockNumber: "5584143",
      blockTimestamp: "1711705020",
    },
    {
      id: "442",
      policyId: "9",
      licensorIpId: "0xe85478085e1d4fd40210d1be4093937ee4aac29d",
      transferable: true,
      amount: "1",
      blockNumber: "5584057",
      blockTimestamp: "1711703880",
    },
    {
      id: "441",
      policyId: "1",
      licensorIpId: "0x98c21a2f7c35861612e8809fc28ce84f4796ba25",
      transferable: true,
      amount: "2",
      blockNumber: "5584048",
      blockTimestamp: "1711703760",
    },
    {
      id: "440",
      policyId: "19",
      licensorIpId: "0x19a37d8df3b7d1b4a43fd1d853adf011538f0db5",
      transferable: true,
      amount: "1",
      blockNumber: "5584042",
      blockTimestamp: "1711703688",
    },
    {
      id: "439",
      policyId: "18",
      licensorIpId: "0x27ab26805419e7cfa136eeaef5fb2143374e49de",
      transferable: true,
      amount: "2",
      blockNumber: "5584031",
      blockTimestamp: "1711703544",
    },
    {
      id: "438",
      policyId: "1",
      licensorIpId: "0x2d59898677abfc46567063745748ea2e172bf314",
      transferable: true,
      amount: "1",
      blockNumber: "5583998",
      blockTimestamp: "1711703124",
    },
    {
      id: "437",
      policyId: "1",
      licensorIpId: "0x16064c457f29f8d989737a23d5616b6feb9a0de4",
      transferable: true,
      amount: "2",
      blockNumber: "5583823",
      blockTimestamp: "1711700832",
    },
    {
      id: "436",
      policyId: "1",
      licensorIpId: "0xfb89d92cbc2bd958893a73fc11681d8ad5d9ad04",
      transferable: true,
      amount: "1",
      blockNumber: "5583784",
      blockTimestamp: "1711700328",
    },
    {
      id: "435",
      policyId: "18",
      licensorIpId: "0x09f1cb9fc265af88962e0f240f52431b492e95f1",
      transferable: true,
      amount: "1",
      blockNumber: "5582403",
      blockTimestamp: "1711682568",
    },
    {
      id: "434",
      policyId: "8",
      licensorIpId: "0x09f1cb9fc265af88962e0f240f52431b492e95f1",
      transferable: true,
      amount: "1",
      blockNumber: "5582402",
      blockTimestamp: "1711682556",
    },
    {
      id: "433",
      policyId: "9",
      licensorIpId: "0x09f1cb9fc265af88962e0f240f52431b492e95f1",
      transferable: true,
      amount: "1",
      blockNumber: "5582400",
      blockTimestamp: "1711682532",
    },
    {
      id: "432",
      policyId: "1",
      licensorIpId: "0x09f1cb9fc265af88962e0f240f52431b492e95f1",
      transferable: true,
      amount: "1",
      blockNumber: "5582399",
      blockTimestamp: "1711682520",
    },
    {
      id: "431",
      policyId: "1",
      licensorIpId: "0x8902339dd3755d8a878f2a93f8c4751e35cf71ef",
      transferable: true,
      amount: "2",
      blockNumber: "5582383",
      blockTimestamp: "1711682316",
    },
    {
      id: "430",
      policyId: "9",
      licensorIpId: "0xa425b89cb4cb8987b977afb6e32cbcc4d899bca2",
      transferable: true,
      amount: "1",
      blockNumber: "5582377",
      blockTimestamp: "1711682244",
    },
    {
      id: "429",
      policyId: "1",
      licensorIpId: "0xd25de9afd8a2e521692840a081594757af40111e",
      transferable: true,
      amount: "2",
      blockNumber: "5582367",
      blockTimestamp: "1711682124",
    },
    {
      id: "428",
      policyId: "1",
      licensorIpId: "0x607f481acf285e93b396b74180c0da65125c3ac0",
      transferable: true,
      amount: "1",
      blockNumber: "5582359",
      blockTimestamp: "1711682016",
    },
    {
      id: "427",
      policyId: "1",
      licensorIpId: "0xd6a95f418a8fc3c825fe5dc9c6adfa372f23e3bd",
      transferable: true,
      amount: "1",
      blockNumber: "5582356",
      blockTimestamp: "1711681980",
    },
    {
      id: "426",
      policyId: "1",
      licensorIpId: "0xac2c6accd78916eb8299cbf008bdc9a7836f338d",
      transferable: true,
      amount: "0",
      blockNumber: "5582351",
      blockTimestamp: "1711681920",
    },
    {
      id: "425",
      policyId: "1",
      licensorIpId: "0xd64e9bfec85e0c4f2f315f676a18ee61946b3a31",
      transferable: true,
      amount: "0",
      blockNumber: "5582348",
      blockTimestamp: "1711681884",
    },
    {
      id: "424",
      policyId: "9",
      licensorIpId: "0x518f6c2d232a1c2e4a22d779b3fedb79a9be9f43",
      transferable: true,
      amount: "1",
      blockNumber: "5582342",
      blockTimestamp: "1711681812",
    },
    {
      id: "423",
      policyId: "1",
      licensorIpId: "0xfb7f694b0189f37602c4fc660d5debb688a59304",
      transferable: true,
      amount: "2",
      blockNumber: "5582335",
      blockTimestamp: "1711681728",
    },
    {
      id: "422",
      policyId: "19",
      licensorIpId: "0x1ab6c285f42b60345aed7f9e8b8ec51a9ef25633",
      transferable: true,
      amount: "1",
      blockNumber: "5582323",
      blockTimestamp: "1711681584",
    },
    {
      id: "421",
      policyId: "18",
      licensorIpId: "0x2c836d6e8458f73690c9b0a578d819cc7d7363e3",
      transferable: true,
      amount: "2",
      blockNumber: "5582312",
      blockTimestamp: "1711681440",
    },
    {
      id: "420",
      policyId: "1",
      licensorIpId: "0xcd514c8bb48edd5100cfecda1f8016d9c175f58f",
      transferable: true,
      amount: "2",
      blockNumber: "5577313",
      blockTimestamp: "1711617060",
    },
    {
      id: "419",
      policyId: "13",
      licensorIpId: "0xded0584d9ef48c33347a4dca58d062f5693e0339",
      transferable: false,
      amount: "1",
      blockNumber: "5577171",
      blockTimestamp: "1711615236",
    },
    {
      id: "418",
      policyId: "13",
      licensorIpId: "0x51e67714b483d29caefd59d798d2d0cd7249e2e0",
      transferable: false,
      amount: "1",
      blockNumber: "5577011",
      blockTimestamp: "1711613256",
    },
    {
      id: "417",
      policyId: "1",
      licensorIpId: "0x86bf5b6a2430afde082fd4d84364e66b3a18485d",
      transferable: true,
      amount: "1",
      blockNumber: "5575139",
      blockTimestamp: "1711589088",
    },
    {
      id: "416",
      policyId: "1",
      licensorIpId: "0xe36c76322dbe649d609ed4a462d1d0c7906952e3",
      transferable: true,
      amount: "2",
      blockNumber: "5575023",
      blockTimestamp: "1711587612",
    },
    {
      id: "415",
      policyId: "1",
      licensorIpId: "0xbca76fa9116a7585f2797e2a8742663faae5509b",
      transferable: true,
      amount: "1",
      blockNumber: "5574459",
      blockTimestamp: "1711580544",
    },
    {
      id: "414",
      policyId: "1",
      licensorIpId: "0x3c3c050402d7ad8c7b1e08ec4a3d50dcc0bac1bf",
      transferable: true,
      amount: "2",
      blockNumber: "5574166",
      blockTimestamp: "1711576884",
    },
    {
      id: "413",
      policyId: "18",
      licensorIpId: "0xe91a79221353be85cd9d1eb354b64ea4c785c1a6",
      transferable: true,
      amount: "1",
      blockNumber: "5571220",
      blockTimestamp: "1711539456",
    },
    {
      id: "412",
      policyId: "8",
      licensorIpId: "0xe91a79221353be85cd9d1eb354b64ea4c785c1a6",
      transferable: true,
      amount: "1",
      blockNumber: "5571218",
      blockTimestamp: "1711539432",
    },
    {
      id: "411",
      policyId: "9",
      licensorIpId: "0xe91a79221353be85cd9d1eb354b64ea4c785c1a6",
      transferable: true,
      amount: "1",
      blockNumber: "5571216",
      blockTimestamp: "1711539408",
    },
    {
      id: "410",
      policyId: "1",
      licensorIpId: "0xe91a79221353be85cd9d1eb354b64ea4c785c1a6",
      transferable: true,
      amount: "1",
      blockNumber: "5571215",
      blockTimestamp: "1711539396",
    },
    {
      id: "409",
      policyId: "18",
      licensorIpId: "0xb03122a50504992c9028465acfa8da6203272f5d",
      transferable: true,
      amount: "1",
      blockNumber: "5571165",
      blockTimestamp: "1711538760",
    },
    {
      id: "408",
      policyId: "8",
      licensorIpId: "0xb03122a50504992c9028465acfa8da6203272f5d",
      transferable: true,
      amount: "1",
      blockNumber: "5571164",
      blockTimestamp: "1711538748",
    },
    {
      id: "407",
      policyId: "9",
      licensorIpId: "0xb03122a50504992c9028465acfa8da6203272f5d",
      transferable: true,
      amount: "1",
      blockNumber: "5571163",
      blockTimestamp: "1711538736",
    },
    {
      id: "406",
      policyId: "1",
      licensorIpId: "0xb03122a50504992c9028465acfa8da6203272f5d",
      transferable: true,
      amount: "1",
      blockNumber: "5571162",
      blockTimestamp: "1711538724",
    },
    {
      id: "405",
      policyId: "9",
      licensorIpId: "0x227b5fcc6edbf7320156bf4c01557398caee1405",
      transferable: true,
      amount: "1",
      blockNumber: "5571117",
      blockTimestamp: "1711538160",
    },
    {
      id: "404",
      policyId: "1",
      licensorIpId: "0x227b5fcc6edbf7320156bf4c01557398caee1405",
      transferable: true,
      amount: "1",
      blockNumber: "5571116",
      blockTimestamp: "1711538148",
    },
    {
      id: "403",
      policyId: "18",
      licensorIpId: "0x95bca270125a84e9e81cafeca7f3e7654e42a3f1",
      transferable: true,
      amount: "1",
      blockNumber: "5571046",
      blockTimestamp: "1711537272",
    },
    {
      id: "402",
      policyId: "8",
      licensorIpId: "0x95bca270125a84e9e81cafeca7f3e7654e42a3f1",
      transferable: true,
      amount: "1",
      blockNumber: "5571045",
      blockTimestamp: "1711537260",
    },
    {
      id: "401",
      policyId: "9",
      licensorIpId: "0x95bca270125a84e9e81cafeca7f3e7654e42a3f1",
      transferable: true,
      amount: "1",
      blockNumber: "5571043",
      blockTimestamp: "1711537236",
    },
    {
      id: "400",
      policyId: "1",
      licensorIpId: "0x95bca270125a84e9e81cafeca7f3e7654e42a3f1",
      transferable: true,
      amount: "1",
      blockNumber: "5571042",
      blockTimestamp: "1711537224",
    },
    {
      id: "399",
      policyId: "18",
      licensorIpId: "0xa921efe4d7904f07ff76fcb33a0e38edccb862fb",
      transferable: true,
      amount: "1",
      blockNumber: "5571005",
      blockTimestamp: "1711536768",
    },
    {
      id: "398",
      policyId: "8",
      licensorIpId: "0xa921efe4d7904f07ff76fcb33a0e38edccb862fb",
      transferable: true,
      amount: "1",
      blockNumber: "5571004",
      blockTimestamp: "1711536756",
    },
    {
      id: "397",
      policyId: "9",
      licensorIpId: "0xa921efe4d7904f07ff76fcb33a0e38edccb862fb",
      transferable: true,
      amount: "1",
      blockNumber: "5571001",
      blockTimestamp: "1711536720",
    },
    {
      id: "396",
      policyId: "1",
      licensorIpId: "0xa921efe4d7904f07ff76fcb33a0e38edccb862fb",
      transferable: true,
      amount: "1",
      blockNumber: "5570999",
      blockTimestamp: "1711536684",
    },
    {
      id: "395",
      policyId: "1",
      licensorIpId: "0x3ba4d020b84cfa108a8f876d07e44ec3f7572ef4",
      transferable: true,
      amount: "1",
      blockNumber: "5570942",
      blockTimestamp: "1711535952",
    },
    {
      id: "394",
      policyId: "1",
      licensorIpId: "0x1e869745e54a8eae360ad02015ee42ab3c135d32",
      transferable: true,
      amount: "1",
      blockNumber: "5570897",
      blockTimestamp: "1711535412",
    },
    {
      id: "393",
      policyId: "1",
      licensorIpId: "0x32a730634c11c2f5042ac6b496d8de7b9c3d58a3",
      transferable: true,
      amount: "1",
      blockNumber: "5570842",
      blockTimestamp: "1711534716",
    },
    {
      id: "392",
      policyId: "1",
      licensorIpId: "0xd0e1c88b296b5bbf6833b0600f2e56d923f5d9e8",
      transferable: true,
      amount: "1",
      blockNumber: "5570835",
      blockTimestamp: "1711534632",
    },
    {
      id: "391",
      policyId: "1",
      licensorIpId: "0xa29779473c2bae934048703d53738eb026c192f3",
      transferable: true,
      amount: "1",
      blockNumber: "5570779",
      blockTimestamp: "1711533924",
    },
    {
      id: "390",
      policyId: "1",
      licensorIpId: "0xfcc38957e096ffc1ea8769fc3d674a7c5192824d",
      transferable: true,
      amount: "1",
      blockNumber: "5570773",
      blockTimestamp: "1711533852",
    },
    {
      id: "389",
      policyId: "1",
      licensorIpId: "0x39b4f8a56a0313108c914a1c7863790fd8d2f328",
      transferable: true,
      amount: "1",
      blockNumber: "5570763",
      blockTimestamp: "1711533720",
    },
    {
      id: "388",
      policyId: "8",
      licensorIpId: "0xeb7bf45975ce8d43be7753f270ebd9c777f4a134",
      transferable: true,
      amount: "1",
      blockNumber: "5570605",
      blockTimestamp: "1711531728",
    },
    {
      id: "387",
      policyId: "9",
      licensorIpId: "0xeb7bf45975ce8d43be7753f270ebd9c777f4a134",
      transferable: true,
      amount: "1",
      blockNumber: "5570604",
      blockTimestamp: "1711531716",
    },
    {
      id: "386",
      policyId: "1",
      licensorIpId: "0xeb7bf45975ce8d43be7753f270ebd9c777f4a134",
      transferable: true,
      amount: "1",
      blockNumber: "5570603",
      blockTimestamp: "1711531704",
    },
    {
      id: "385",
      policyId: "8",
      licensorIpId: "0xd0753509c8ad84b26a34dc43d0a4f0b972376a26",
      transferable: true,
      amount: "1",
      blockNumber: "5570507",
      blockTimestamp: "1711530480",
    },
    {
      id: "384",
      policyId: "9",
      licensorIpId: "0xd0753509c8ad84b26a34dc43d0a4f0b972376a26",
      transferable: true,
      amount: "1",
      blockNumber: "5570506",
      blockTimestamp: "1711530468",
    },
    {
      id: "383",
      policyId: "1",
      licensorIpId: "0xd0753509c8ad84b26a34dc43d0a4f0b972376a26",
      transferable: true,
      amount: "1",
      blockNumber: "5570505",
      blockTimestamp: "1711530456",
    },
    {
      id: "382",
      policyId: "8",
      licensorIpId: "0x86e52ea154e4359fd1d070bc88cc3a3ee8e2c205",
      transferable: true,
      amount: "1",
      blockNumber: "5570499",
      blockTimestamp: "1711530372",
    },
    {
      id: "381",
      policyId: "8",
      licensorIpId: "0xb8f72a87df71c2cf241e3fa6d93966060ad1b4db",
      transferable: true,
      amount: "1",
      blockNumber: "5570270",
      blockTimestamp: "1711527444",
    },
    {
      id: "380",
      policyId: "9",
      licensorIpId: "0xb8f72a87df71c2cf241e3fa6d93966060ad1b4db",
      transferable: true,
      amount: "1",
      blockNumber: "5570268",
      blockTimestamp: "1711527420",
    },
    {
      id: "379",
      policyId: "1",
      licensorIpId: "0xb8f72a87df71c2cf241e3fa6d93966060ad1b4db",
      transferable: true,
      amount: "1",
      blockNumber: "5570263",
      blockTimestamp: "1711527360",
    },
    {
      id: "378",
      policyId: "19",
      licensorIpId: "0x2e1461f28cfa2e377d5314d8bbb33aa6af3e503c",
      transferable: true,
      amount: "1",
      blockNumber: "5570174",
      blockTimestamp: "1711526244",
    },
    {
      id: "377",
      policyId: "18",
      licensorIpId: "0xa96bb93843781e97ed6c54f10dc6a48f69b373a2",
      transferable: true,
      amount: "2",
      blockNumber: "5570164",
      blockTimestamp: "1711526112",
    },
    {
      id: "376",
      policyId: "19",
      licensorIpId: "0x56d0a95934947a2ebad9733cd9935cca93a6e9cb",
      transferable: true,
      amount: "1",
      blockNumber: "5570138",
      blockTimestamp: "1711525776",
    },
    {
      id: "375",
      policyId: "18",
      licensorIpId: "0xb1eed4f4b63cea315d7057b3734efac0485194d1",
      transferable: true,
      amount: "2",
      blockNumber: "5570128",
      blockTimestamp: "1711525644",
    },
    {
      id: "374",
      policyId: "19",
      licensorIpId: "0x6527b21d480af540feee37f030f49cf8446f5120",
      transferable: true,
      amount: "1",
      blockNumber: "5570101",
      blockTimestamp: "1711525284",
    },
    {
      id: "373",
      policyId: "18",
      licensorIpId: "0x24bd6b6620c045fddb28de608340e76cf7014a9b",
      transferable: true,
      amount: "2",
      blockNumber: "5569977",
      blockTimestamp: "1711523700",
    },
    {
      id: "372",
      policyId: "19",
      licensorIpId: "0x5850094e799239bb99055ccd091744bce39718ca",
      transferable: true,
      amount: "1",
      blockNumber: "5569945",
      blockTimestamp: "1711523280",
    },
    {
      id: "371",
      policyId: "19",
      licensorIpId: "0x1afa26317304e1bd76c3300ee0773b9dd17f05b3",
      transferable: true,
      amount: "1",
      blockNumber: "5569924",
      blockTimestamp: "1711523016",
    },
    {
      id: "370",
      policyId: "1",
      licensorIpId: "0x56470eb39c683433995b8e139feae36efb6707b6",
      transferable: true,
      amount: "1",
      blockNumber: "5569638",
      blockTimestamp: "1711519212",
    },
    {
      id: "369",
      policyId: "1",
      licensorIpId: "0xe50b1f6f11947d5d0db8881906d37d7ed69524a5",
      transferable: true,
      amount: "1",
      blockNumber: "5569631",
      blockTimestamp: "1711519128",
    },
    {
      id: "368",
      policyId: "1",
      licensorIpId: "0x9b9bcda61764538d887cf9559b5a520522ba1122",
      transferable: true,
      amount: "1",
      blockNumber: "5569594",
      blockTimestamp: "1711518660",
    },
    {
      id: "367",
      policyId: "1",
      licensorIpId: "0xf96ed994771919457ff509d9ea1cf12bf03173c4",
      transferable: true,
      amount: "1",
      blockNumber: "5569513",
      blockTimestamp: "1711517640",
    },
    {
      id: "366",
      policyId: "1",
      licensorIpId: "0x45749ee6570080ad6e93f7a946bac1c5b8733dbc",
      transferable: true,
      amount: "1",
      blockNumber: "5569493",
      blockTimestamp: "1711517400",
    },
    {
      id: "365",
      policyId: "1",
      licensorIpId: "0x637fe37069f3d742318b579d2cabc41ef53c487e",
      transferable: true,
      amount: "1",
      blockNumber: "5569352",
      blockTimestamp: "1711515600",
    },
    {
      id: "364",
      policyId: "1",
      licensorIpId: "0x54a0805c4e178f43908d7a44b56c09a60c12b29d",
      transferable: true,
      amount: "1",
      blockNumber: "5569342",
      blockTimestamp: "1711515480",
    },
    {
      id: "363",
      policyId: "1",
      licensorIpId: "0xa7191c7798f70a0aeea284b65ac0f3b0a5bf8764",
      transferable: true,
      amount: "1",
      blockNumber: "5569325",
      blockTimestamp: "1711515252",
    },
    {
      id: "362",
      policyId: "1",
      licensorIpId: "0x9fdf9929edcdbced13cf8465beba4b05a7becc9c",
      transferable: true,
      amount: "1",
      blockNumber: "5569317",
      blockTimestamp: "1711515144",
    },
    {
      id: "361",
      policyId: "1",
      licensorIpId: "0xe62dd2265fb37d284dae33d311e0b50182767d62",
      transferable: true,
      amount: "1",
      blockNumber: "5569285",
      blockTimestamp: "1711514748",
    },
    {
      id: "360",
      policyId: "1",
      licensorIpId: "0x16826574a1089b1a8fb179c8dc86952c65bd24e8",
      transferable: true,
      amount: "1",
      blockNumber: "5569280",
      blockTimestamp: "1711514688",
    },
    {
      id: "359",
      policyId: "1",
      licensorIpId: "0x5878fcb2286c6e38fbe05f8cb02ecc2075b77937",
      transferable: true,
      amount: "2",
      blockNumber: "5569014",
      blockTimestamp: "1711511328",
    },
    {
      id: "358",
      policyId: "1",
      licensorIpId: "0x58d26d2110111fe1ccfb8857cee7eaff1faa6d05",
      transferable: true,
      amount: "1",
      blockNumber: "5568974",
      blockTimestamp: "1711510812",
    },
    {
      id: "357",
      policyId: "1",
      licensorIpId: "0xf5dd798f92b3400de3b36e0a3f5f70f8e698f6a1",
      transferable: true,
      amount: "1",
      blockNumber: "5568967",
      blockTimestamp: "1711510716",
    },
    {
      id: "356",
      policyId: "1",
      licensorIpId: "0xac476301f89e917ffbb589e9ad74f0de297a1cb1",
      transferable: true,
      amount: "1",
      blockNumber: "5568963",
      blockTimestamp: "1711510656",
    },
    {
      id: "355",
      policyId: "9",
      licensorIpId: "0x553bdfd6c73faa16016e1767c0727a88eb1ad937",
      transferable: true,
      amount: "1",
      blockNumber: "5568959",
      blockTimestamp: "1711510584",
    },
    {
      id: "354",
      policyId: "1",
      licensorIpId: "0x71525f921340aab1f0204e6176d6381d8c733bd5",
      transferable: true,
      amount: "2",
      blockNumber: "5568950",
      blockTimestamp: "1711510476",
    },
    {
      id: "353",
      policyId: "1",
      licensorIpId: "0x3ae1018680902d280a23f3d0e1f4939d8c85f0a3",
      transferable: true,
      amount: "2",
      blockNumber: "5568903",
      blockTimestamp: "1711509876",
    },
    {
      id: "352",
      policyId: "9",
      licensorIpId: "0x0d1ae795aa19d798d728ba92b5570b240d139042",
      transferable: true,
      amount: "1",
      blockNumber: "5568891",
      blockTimestamp: "1711509732",
    },
    {
      id: "351",
      policyId: "1",
      licensorIpId: "0xc1f539ea9ceeb63d5dd5a425a4463125edbad068",
      transferable: true,
      amount: "2",
      blockNumber: "5568883",
      blockTimestamp: "1711509636",
    },
  ],
}
