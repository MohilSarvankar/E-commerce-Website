export const color = [
    "white",
    "Black",
    "Red",
    "marun",
    "Being",
    "Pink",
    "Green",
    "Yellow"
];

export const filters = [
    {
        id: 'color',
        name: 'Color',
        options: [
            { value: 'white', label: 'White' },
            { value: 'beige', label: 'Beige' },
            { value: 'blue', label: 'Blue' },
            { value: 'brown', label: 'Brown' },
            { value: 'green', label: 'Green' },
            { value: 'purple', label: 'Purple' },
            { value: 'yellow', label: 'Yellow' }
        ],
    },
    {
        id: 'category',
        name: 'Category',
        options: [
            { value: 'new-arrivals', label: 'New Arrivals', checked: false },
            { value: 'sale', label: 'Sale', checked: false },
            { value: 'travel', label: 'Travel', checked: false },
            { value: 'organization', label: 'Organization', checked: false },
            { value: 'accessories', label: 'Accessories', checked: false },
        ],
    },
    {
        id: 'size',
        name: 'Size',
        options: [
            { value: 'S', label: 'S' },
            { value: 'M', label: 'M' },
            { value: 'L', label: 'L' }
        ],
    },
];

export const singleFilter = [
    {
        id: "price",
        name: "Price",
        options: [
            { value: "0-399", label: "0 to ₹399"},
            { value: "400-999", label: "₹400 to ₹999"},
            { value: "1000-1999", label: "₹1000 to ₹1999"},
            { value: "2000-4999", label: "₹2000 to ₹4999"},
            { value: "5000&above", label: "₹5000 & Above"},
        ]
    },
    {
        id: "discount",
        name: "Discount Range",
        options: [
            { value: "10%", label: "10% & Above"},
            { value: "20%", label: "20% & Above"},
            { value: "30%", label: "30% & Above"},
            { value: "40%", label: "40% & Above"},
            { value: "50%", label: "50% & Above"},
        ]
    },
    {
        id: "stock",
        name: "Availability",
        options: [
            { value: "inStock", label: "In Stock"},
            { value: "outOfStock", label: "Out Of Stock"},
        ]
    }
]