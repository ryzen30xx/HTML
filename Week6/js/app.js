const ctx = document.getElementById('myChart');
var time = document.getElementById('time');

const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Malaysia', 'VietNam', 'ThaiLand', 'United State'],
        datasets: [{
            label: 'Thống kê lượng người quan tâm (giả định)',
            data: [10410442, 10110165, 5010410, 1550104],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)'
            ]
        }]
    },
});


