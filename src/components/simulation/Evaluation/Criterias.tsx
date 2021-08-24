import React, { useState, useEffect, FC, ReactElement } from 'react';
const evalOptions: Array<any> = [
  {
    name: 'balance',
    show: 'Total Savings: ',
    pos_message: [
      'Good Job! Your total monthly expense was less than your income.',
      'Good Job! You saved some of your income. But your saving is still not in the recommended range.',
    ],
    neg_message: 'We Noticed that you spent more than you earned.',

    other:
      'We recommend that you always strive to save at least 20% of your monthly income. If you continuously spend more than you earn, you will end up in DEBT.',
  },
  {
    name: 'rent',
    show: 'Rent Spending: ',
    pos_message: 'Great! Your rent expense is within the recommended range.',
    neg_message:
      'We noticed you spent more on your rent than the recommended amount.',
    other:
      "Rent is a major expense in people's life. We recommend tha you spend 20% to 25% of your income in rent.",
  },
  {
    name: 'food',
    show: 'Food Spending: ',
    pos_message: 'Good Job! You spent a reasonable amount on food.',
    neg_message:
      'We noticed your food expenses are higher than the recommended range.',
    other:
      'We recommend keeping food related expenses within 7% of your monthly income. A smart way to reduce your food expense is to cook at home. McDonald’s everyday might be tempting, but cooking at home can be enjoyable and cost saving as well.',
  },
  {
    name: 'transport',
    show: 'Transport Option: ',
    pos_message: [
      'Great! You chose public transportation.',
      'Great! You chose a used car as your First Car.',
    ],
    neg_message:
      'Buying a brand new car for a first vehicle might not a great decision.',
    other:
      "Vehicles depreciate in value which means that your vehicle's sale price will be lower today than it was yesterday. Generally, vehicles loose half of their value in 4 years. This means a brand new car you purchased in 2016 for $10,000 will be worth around $5,000 in 2020. Hence, buying a car that is atleast 4 years old is a good strategy for your first vehicle purchase .",
  },
];

// const tester : {String: number} = {1: 1, "b": 1}
interface propsType {
  no: number;
  propVal: {
    show: String | number;
    positive: Boolean;
    pMsg?: number;
  };
}

const Criterias: FC<propsType> = ({ no, propVal }) => {
  //   const [propVal, setPropVal] = useState<>({ show: 10, positive: false });

  const [criteriaVal, setCriteriaVal] = useState<{
    show: String;
    pos_message: String;
    neg_message: String;
    other: String;
  }>({
    show: '',
    pos_message: 'String',
    neg_message: 'String',
    other: 'String',
  });

  /**
   * Updates {@link criteriaVal} state based on {@link no} prop
   */
  useEffect(() => {
    let { show, pos_message, neg_message, other } = evalOptions[no];

    // Because "transport" criteria has two positive messages
    if (no == 0 || no == 3) {
      pos_message = pos_message[propVal.pMsg];
      console.log(pos_message);
    }

    setCriteriaVal({
      ...criteriaVal,
      ...{ show, pos_message, neg_message, other },
    });
  }, [no]);

  return (
    <>
      <div style={{ marginTop: '1em' }}>
        <div
          style={{
            fontSize: '1.35em',
            color: `${propVal.positive ? 'green' : 'red'}`,
          }}
          className="bold ta-center"
        >
          {criteriaVal.show}
          {propVal.show}
        </div>
        <br />
        <span className="txt-underline">
          {propVal.positive ? (
            <em>{criteriaVal.pos_message}</em>
          ) : (
            <em>{criteriaVal.neg_message}</em>
          )}
        </span>
      </div>
      <br />
      <p>{criteriaVal.other}</p>
    </>
  );
};

export default Criterias;
