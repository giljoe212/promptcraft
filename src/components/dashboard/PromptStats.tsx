import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/Card';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const PromptStats: React.FC = () => {
  const data = {
    labels: ['Business', 'Storytelling', 'Advertising', 'Video', 'Image', 'Social'],
    datasets: [
      {
        label: 'Prompts Created',
        data: [12, 19, 8, 15, 25, 10],
        backgroundColor: 'rgba(124, 58, 237, 0.8)',
        borderColor: 'rgba(124, 58, 237, 1)',
        borderWidth: 1,
        borderRadius: 4,
      },
      {
        label: 'Prompts Used',
        data: [8, 15, 5, 12, 20, 7],
        backgroundColor: 'rgba(20, 184, 166, 0.8)',
        borderColor: 'rgba(20, 184, 166, 1)',
        borderWidth: 1,
        borderRadius: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Prompt Usage Statistics</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-64">
          <Bar data={data} options={options} />
        </div>
      </CardContent>
    </Card>
  );
};

export default PromptStats;