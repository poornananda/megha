import { AgChartsReact } from 'ag-charts-react';

export const Chart = (props) => {

    const options  = {
        autoSize: true,
        data: props.data,
        title: {
          text: 'Total Visitors to Museums and Galleries',
          fontSize: 18,
        },
        subtitle: {
          text: 'Source: Department for Digital, Culture, Media & Sport',
        },
        series: [
          {
            type: 'column',
            xKey: 'year',
            yKey: 'visitors',
            fill: '#1e64a5',
            strokeWidth: 0,
            shadow: {
              xOffset: 3,
            },
            label: {
              enabled: true,
              color: '#eeeeee',
              formatter: ({ value }) => formatNumber(value),
            },
            tooltip: {
              renderer: ({ yValue, xValue }) => {
                return { title: xValue, content: formatNumber(yValue) };
              },
            },
          },
        ],
        axes: [
          {
            type: 'category',
            position: 'bottom',
            title: {
              text: 'Year',
            },
          },
          {
            type: 'number',
            position: 'left',
            title: {
              text: 'Total visitors',
            },
            label: {
              formatter: ({ value }) => formatNumber(value),
            },
          },
        ],
        legend: {
          enabled: false,
        },
      };
return (<>


<AgChartsReact options={options} /></>);
}
