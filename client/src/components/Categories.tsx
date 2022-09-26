import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

interface CategoriesProps {
  activItem: string
  device: any[]
}

const Categories: React.FC<CategoriesProps> = ({ activItem, device }) => {
  return (
    <>
     <div>
<div>
      <HighchartsReact
      highcharts={Highcharts}
      options={{
        chart: {
          type: 'column'
        },
        title: {
          text: 'Rating'
        },
        xAxis: {
          categories: device?.map((el) => el.title)
        },
        yAxis: {
          title: {
            text: 'rating'
          }
        },
        series: [
          {
            colorByPoint: true,
            data: device?.map((el) => el.rating),
            name: activItem
          }
        ]
      }}
      />
      </div>
    </div>

     </>
  )
}

export default Categories
