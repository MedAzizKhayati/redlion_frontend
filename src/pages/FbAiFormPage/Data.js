export default [
    {
        title: "Choose your sector",
        label: "Sector",
        key: 'sector',
        options: [
            { value: '10', label: 'E-commerce & Retail' },
            { value: '20', label: 'B2B' },
            { value: '30', label: 'Travel' },
            { value: '40', label: 'Automotive' },
        ]
    },
    {
        title: "What is your goal",
        label: "Goal",
        key: 'goal',
        options: [
            { value: '10', label: 'Interaction' },
            { value: '20', label: 'Traffic' },
            { value: '30', label: 'Lead Generation' },
        ]
    },
    {
        title: "What is your budget",
        label: "Budget",
        key: 'budget',
        options: [
            { value: '-10', label: '$100 - $500' },
            { value: '0', label: '$500 - $1,000' },
            { value: '10', label: '$1,000 - $5,000' },
            { value: '20', label: '$5,000 - $10,000' },
            { value: '30', label: '$10,000 - $25,000' },
            { value: '40', label: '$25,000 - $50,000' },
            { value: '50', label: '$50,000 - $100,000' },
            { value: '60', label: '$100,000 - $250,000' },
            { value: '70', label: '$250,000 - $500,000' },
        ]
    },
    {
        subTitle: "Specify the period of your compaign",
        dateRange: true,
        key: 'dateRange',
    }
]