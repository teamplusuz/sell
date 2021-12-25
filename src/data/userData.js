export const User = [
    {
        name: 'Julie Trnka',
        address1: 'Ostrava, Crech Republic',
        orders: [
            {
                id: 1,
                order: [
                    {
                        id: 1,
                        name: 'skull tee',
                        size: 'large',
                        color: 'green',
                        price: 65,
                        qty: 4,
                        total: price * qty,
                        date: new Date(),
                    },
                    {
                        id: 2,
                        name: 'transparent blouse',
                        size: 'medium',
                        color: '',
                        price: 65,
                        qty: 3,
                        total: price * qty,
                        date: new Date(),
                    },
                    {
                        id: 3,
                        name: 'white tee',
                        size: 'medium',
                        color: '',
                        price: 65,
                        qty: 3,
                        total: price * qty,
                        date: new Date(),
                    },
                ],
                date: {
                    day: new Date().getDate(),
                    month: new Date().getMonth(),
                    year: new Date().getUTCFullYear(),
                },
                total: order.forEach(ord => {
                    ord += ord.total
                }),
                status: 102,
            },
            {
                id: 2,
                order: [
                    {
                        id: 1,
                        name: 'skull tee',
                        size: 'large',
                        color: 'green',
                        price: 65,
                        qty: 4,
                        total: price * qty,
                        date: new Date(),
                    },
                    {
                        id: 2,
                        name: 'transparent blouse',
                        size: 'medium',
                        color: '',
                        price: 65,
                        qty: 3,
                        total: price * qty,
                        date: new Date(),
                    },
                    {
                        id: 3,
                        name: 'white tee',
                        size: 'medium',
                        color: '',
                        price: 65,
                        qty: 3,
                        total: price * qty,
                        date: new Date(),
                    },
                ],
                date: {
                    day: new Date().getDate(),
                    month: new Date().getMonth(),
                    year: new Date().getUTCFullYear(),
                },
                total: order.forEach(ord => {
                    ord += ord.total
                }),
                status: 200,
            },
            {
                id: 3,
                order: [
                    {
                        id: 1,
                        name: 'skull tee',
                        size: 'large',
                        color: 'green',
                        price: 65,
                        qty: 4,
                        total: price * qty,
                        date: new Date(),
                    },
                    {
                        id: 2,
                        name: 'transparent blouse',
                        size: 'medium',
                        color: '',
                        price: 65,
                        qty: 3,
                        total: price * qty,
                        date: new Date(),
                    },
                    {
                        id: 3,
                        name: 'white tee',
                        size: 'medium',
                        color: '',
                        price: 65,
                        qty: 3,
                        total: price * qty,
                        date: new Date(),
                    },
                ],
                date: {
                    day: new Date().getDate(),
                    month: new Date().getMonth(),
                    year: new Date().getUTCFullYear(),
                },
                total: order.forEach(ord => {
                    ord += ord.total
                }),
                status: 444,
            },
        ],
        profile: {},
        address: { oldAddres: {}, newAddres: {} },
        shippingAddress: {
            productName: '',
            street: '',
            city: '',
            country: '',
        },
        orderSummary: {
            orderSubtotal: null,
            delivery: 10,
            tax: 0,
            total: orderSubtotal + delivery + tax,
        },
        card: {}
    },
]
