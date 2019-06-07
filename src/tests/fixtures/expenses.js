import moment from 'moment';

export default  [
    {id: 1,
    description: 'flat',
    note: '',
    amount: 10,
    createdAt: moment(0)
    },
    {id: 2,
    description: 'Student debt.',
    note: '',
    amount: 30,
    createdAt: moment(0).subtract(4, 'days').valueOf()
    },
    {id: 3,
    description: 'Credit card',
    note: '',
    amount: 20,
    createdAt: moment(0).add(4, 'days').valueOf()
    },
];