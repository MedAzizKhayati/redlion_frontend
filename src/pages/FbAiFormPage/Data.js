const DATA = [
    {
        title: "Choose your sector",
        label: "Sector",
        key: 'sector',
        options: [
            { value: 'Ecommerce & Retail', label: 'Ecommerce & Retail' },
            { value: 'B2B', label: 'B2B' },
            { value: 'Travel', label: 'Travel' },
            { value: 'Automotive', label: 'Automotive' },
        ]
    },
    {
        title: "What is your goal",
        label: "Goal",
        key: 'goal',
        options: [
            { value: 'post engagement', label: 'Interaction' },
            { value: 'Traffic', label: 'Traffic' },
            { value: 'lead generation', label: 'Lead Generation' },
            { value: 'CONVERSIONS', label: 'Conversions' },
            { value: "pages likes", label: 'Likes' },
            { value: 'Messages', label: 'Messages' },
        ]
    },
    {
        title: "What is your budget",
        label: "Budget",
        key: 'budget',
        type: 'number',
        min: 10,
    },
    {
        title: "Specify the period of your compaign",
        dateRange: true,
        key: 'dateRange',
    }
]


export default DATA;