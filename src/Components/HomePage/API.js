const res = [
  {
    name: 'USISTemplate1',
    id: 10502,
    active: 'Y',
  },
  {
    name: 'USISTemplate2',
    id: 10486,
    active: 'Y',
  },
  {
    name: 'EWSTemplate1',
    id: 10503,
    active: 'Y',
  },
  {
    name: 'EWSTemplate2',
    id: 10487,
    active: 'Y',
  },
];

const data = {
  USISTemplate1: [
    {
      id: 110504,
      chargeOfferName: 'ChargeOffer1_8',
    },
    {
      id: 110488,
      chargeOfferName: 'ChargeOffer2_9',
    },
    {
      id: 1120488,
      chargeOfferName: 'ChargeOffer3_4',
    },
    {
      id: 1140488,
      chargeOfferName: 'ChargeOffer4_3',
    },
    {
      id: 1510488,
      chargeOfferName: 'ChargeOffer5_2',
    },
    {
      id: 1410489,
      chargeOfferName: 'ChargeOffer6_5',
    },
  ],
  USISTemplate2: [
    {
      id: 110505,
      chargeOfferName: 'ChargeOffer7_1',
    },
    {
      id: 115490,
      chargeOfferName: 'ChargeOffer8_2',
    },
    {
      id: 116490,
      chargeOfferName: 'ChargeOffer9_4',
    },
    {
      id: 117490,
      chargeOfferName: 'ChargeOffer01_1',
    },
  ],
  EWSTemplate1: [
    {
      id: 110506,
      chargeOfferName: 'ChargeOffer5_3',
    },
    {
      id: 110491,
      chargeOfferName: 'ChargeOffer6_1',
    },
  ],
  EWSTemplate2: [
    {
      id: 110507,
      chargeOfferName: 'ChargeOffer7_2',
    },
    {
      id: 110492,
      chargeOfferName: 'ChargeOffer8_1',
    },
  ],
};

export function getList() {
  return fetch('http://localhost:8080/templateNames')
    .then((data) => data.json())
    .catch((err) => res);
}

export function getCoList(name) {
  console.log('in', name)
  return fetch(`http://localhost:8080/${name}`)
    .then((data) => data.json())
    .catch((err) => data[name]);
}
