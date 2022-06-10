const DATA = [
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
        type: 'number',
        min: 10,
    },
    {
        subTitle: "Specify the period of your compaign",
        dateRange: true,
        key: 'dateRange',
    }
]


export default DATA;