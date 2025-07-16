const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

// Sample vehicle data
const vehicles = [
    {
        id: 1,
        type: 'Car',
        name: 'BMW 7 Series',
        price: '$87,795',
        image: 'https://images.unsplash.com/photo-1627936354732-ffbe552799d8?q=80&w=2424&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        city: 'Toronto',
    },
    {
        id: 2,
        type: 'Bike',
        name: 'Ducati Panigale V4',
        price: '$28,395',
        image: 'https://images.unsplash.com/photo-1610579552025-ea146ae69356?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGR1Y2F0aXxlbnwwfHwwfHx8MA%3D%3D',
        city: 'Montreal',
    },


    {
        id: 3,
        type: 'Car',
        name: 'BMW 7 Series',
        price: '$87,795',
        image: 'https://images.unsplash.com/photo-1627936354732-ffbe552799d8?q=80&w=2424&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        city: 'Toronto',
    },
    {
        id: 4,
        type: 'Car',
        name: 'Mercedes-Benz S-Class',
        price: '$111,100',
        image: 'https://images.unsplash.com/photo-1680446983373-853872fb667a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1lcmNlZGVzJTIwcyUyMGNsYXNzfGVufDB8fDB8fHww',
        city: 'Montreal',
    },
    {
        id: 5,
        type: 'Car',
        name: 'Audi A8',
        price: '$86,500',
        image: 'https://images.unsplash.com/photo-1536150794560-43f988aec18e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXVkaSUyMGE4fGVufDB8fDB8fHww',
        city: 'Calgary',
    },
    {
        id: 6,
        type: 'Car',
        name: 'Porsche 911',
        price: '$114,400',
        image: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cG9yc2NoZSUyMDkxMXxlbnwwfHwwfHx8MA%3D%3D',
        city: 'Toronto',
    },
    {
        id: 7,
        type: 'Car',
        name: 'Lamborghini Huracan',
        price: '$206,485',
        image: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=800&q=80',
        city: 'Montreal',
    },
    {
        id: 8,
        type: 'Car',
        name: 'Tesla Model S Plaid',
        price: '$129,990',
        image: 'https://images.unsplash.com/photo-1716558964076-1abe07448abf?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dGVzbGElMjBtb2RlbCUyMHMlMjBwbGFpZHxlbnwwfHwwfHx8MA%3D%3D',
        city: 'Calgary',
    },
    {
        id: 9,
        type: 'Bike',
        name: 'Ducati Panigale V4',
        price: '$28,395',
        image: 'https://images.unsplash.com/photo-1610579552025-ea146ae69356?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGR1Y2F0aXxlbnwwfHwwfHx8MA%3D%3D',
        city: 'Montreal',
    },
    {
        id: 10,
        type: 'Bike',
        name: 'Harley-Davidson Street Glide',
        price: '$22,249',
        image: 'https://images.unsplash.com/photo-1698695290237-5c7be2bd52a8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RHVjYXRpJTIwUGFuaWdhbGUlMjBWNHxlbnwwfHwwfHx8MA%3D%3D',
        city: 'Calgary',
    },
    {
        id: 11,
        type: 'Bike',
        name: 'BMW R 1250 GS',
        price: '$17,995',
        image: 'https://images.unsplash.com/photo-1611323201023-e489a0ad943c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmlrZSUyMEJNVyUyMFIlMjAxMjUwJTIwR1N8ZW58MHx8MHx8fDA%3D',
        city: 'Toronto',
    },
    {
        id: 12,
        type: 'Bike',
        name: 'Kawasaki Ninja H2',
        price: '$29,500',
        image: 'https://images.unsplash.com/photo-1682980798344-6feac9455e66?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGthd2FzYWtpJTIwbmluamF8ZW58MHx8MHx8fDA%3D',
        city: 'Montreal',
    },
    {
        id: 13,
        type: 'Bike',
        name: 'Yamaha YZF R1M',
        price: '$26,099',
        image: 'https://images.unsplash.com/photo-1656582880247-e2f628fbc997?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHlhbWFoYSUyMFlaRiUyMFIxTXxlbnwwfHwwfHx8MA%3D%3D',
        city: 'Calgary',
    },
    {
        id: 14,
        type: 'Car',
        name: 'Rolls-Royce Ghost',
        price: '$311,900',
        image: 'https://images.unsplash.com/photo-1728458664292-ac6d6034e78d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJvbGxzJTIwcm95Y2UlMjBnaG9zdHxlbnwwfHwwfHx8MA%3D%3D',
        city: 'Toronto',
    },
    {
        id: 15,
        type: 'Bike',
        name: 'Suzuki Hayabusa',
        price: '$18,799',
        image: 'https://images.unsplash.com/photo-1698765319505-5782763c1f89?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGF5YWJ1c2F8ZW58MHx8MHx8fDA%3D',
        city: 'Montreal',
    },
    {
        id: 16,
        type: 'Car',
        name: 'Ferrari F8 Tributo',
        price: '$276,550',
        image: 'https://images.unsplash.com/photo-1614200179396-2bdb77ebf81b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RmVycmFyaSUyMEY4JTIwVHJpYnV0b3xlbnwwfHwwfHx8MA%3D%3D',
        city: 'Calgary',
    },
];

// GET /vehicles endpoint
app.get('/vehicles', (req, res) => {
    res.json(vehicles);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
