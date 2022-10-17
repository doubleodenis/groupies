import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import { Radar } from "react-chartjs-2";
import { Chart, PointElement, LineElement, RadialLinearScale, LinearScale, Filler } from 'chart.js';
  
Chart.register(PointElement, LineElement, RadialLinearScale, LinearScale, Filler);
  
/**
 * Character Stats component to show radar chart with attributes.
 * 
 * @param {*} props: { stats: [ str, int, cha, agi, bea ] } 
 * @returns 
 */
const CharacterStats = ({ stats }) => {
    const data = {
        labels: ['Strength', 'Intelligence', 'Charisma', 'Agility', 'Beauty'],
        datasets: [
          {
            // label: '# of Votes',
            data: stats,
            fill: true,
            backgroundColor: 'rgba(25, 145, 75, 0.2)',
            borderColor: 'rgba(25, 145, 75, 1)',
            borderWidth: 3,
            width: 150
          },
        ],
    };

    const options = {
        scales: {
            
            r: {
                backgroundColor: 'rgba(255,255,255,0.05)',
                angleLines: {
                    color: 'white'
                },
                pointLabels: {
                    color: 'white',
                    font: { 
                        size: 14
                    }
                },
                suggestedMin: 0,
                suggestedMax: 10,
                ticks: {
                    stepSize: 2,
                    display: false,
                    showLabelBackdrop: false
                },
                grid: {
                    color: 'white'
                }
            }
        }
    };

  return (
    <Radar options={options} data={data} width={300}/>
  );
};

export default CharacterStats;
