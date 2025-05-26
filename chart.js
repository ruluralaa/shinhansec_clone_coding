const ctx = document.getElementById('fundChart').getContext('2d');

const data = {
  labels: ['2025.04.28', '2025.05.01', '2025.05.08', '2025.05.13', '2025.05.18', '2025.05.21', '2025.05.23'],
  datasets: [{
    label: '수익률(%)',
    data: [0, 1.8, 3.1, -2.2, -6.0, -3.35, 0.5],
    borderColor: '#007bff',
    backgroundColor: 'rgba(0,123,255,0.08)',
    fill: true,
    tension: 0.3,
    pointRadius: 3,
    pointBackgroundColor: '#007bff',
    pointBorderColor: '#fff',
    pointHoverRadius: 5,
    pointHoverBackgroundColor: '#007bff',
    pointHoverBorderColor: '#fff',
  }]
};

const config = {
  type: 'line',
  data: data,
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        enabled: true,
        callbacks: {
          label: function(context) {
            return `수익률: ${context.parsed.y}%`;
          }
        }
      }
    },
    scales: {
      y: {
        min: -6,
        max: 4,
        ticks: {
          callback: function(value) {
            return value + '%';
          },
          color: '#888',
          font: { family: 'Noto Sans KR', size: 13 }
        },
        grid: { color: '#e5e5e5' }
      },
      x: {
        ticks: {
          color: '#888',
          font: { family: 'Noto Sans KR', size: 13 }
        },
        grid: { display: false }
      }
    }
  }
};

new Chart(ctx, config); 