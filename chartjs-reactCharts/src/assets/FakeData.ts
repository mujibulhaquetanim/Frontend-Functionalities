export const linearChartData = {
    labels: ['sat','sun','mon','tue','wed','thurs','fri'],
    datasets: [{
        label: 'steps (Mujib)',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
    },
    {
        label: 'steps (Emma)',
        data: [55, 47, 75, 71, 69, 55, 30],
        fill: false,
        borderColor: 'rgb(255, 99, 132)',
        tension: 0.1
    }]
};

export const barChartData ={
    labels: ['Rent','Groceries', 'Utilities', 'Entertainment' , 'Transportation'],
    datasets: [{
        label: 'Living Expenses In BD',
        data: [160,100,60,35,50],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
    },{
        label: 'Living expenses in USA',
        data: [750,300,150,80,100],
        borderWidth: 1,
    }]
};