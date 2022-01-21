import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Chart } from 'react-chartjs-2'

ChartJS.register(
  RadialLinearScale,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

export default function ExpandedCard({open, program, onClose}) {
    const data = {
      labels: ['Affordability', 'Social Life', 'Location', 'Job Outcomes', 'Difficulty'],
      datasets: [
        {
          label: 'Score',
          backgroundColor: 'rgba(179,181,198,0.2)',
          borderColor: 'rgba(179,181,198,1)',
          pointBackgroundColor: 'rgba(179,181,198,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(179,181,198,1)',
          data: [70, 80, 90, 81, 86]
        },
      ]
    };

  return (
      <>
        {open && <div className={"flex-col rounded-lg p-8 mt-40 mx-8 bg-white   shadow text-left"}>
          <FontAwesomeIcon onClick={onClose} className="cursor-pointer w-10 h-10 " icon={faTimes} />
          <div className="flex">
            <div>
              <div className="flex">
                <div className="w-96 h-40" style={{
                  backgroundImage: `url(${program.thumbnailUrl})`,
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center'
                }}/>
                <div className="flex flex-col">
                  <div className="cursor-pointer rounded-xl bg-violet-700 px-10 py-3 my-2 text-white text-xs">See Related</div>
                  <div className="cursor-pointer rounded-xl bg-violet-700 px-10 py-3 my-2 text-white text-xs">Visit Website</div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex">
                  <div className="flex flex-col">
                    <h1 className="mb-5 text-xl">
                      <span className="font-semibold">{program.programName}</span>
                      {' - '}  
                      <span className="italic">{program.schoolName}</span>
                    </h1>
                    <p>{program.descPreview}</p>
                  </div>
                  <div className='w-1/2'>
                    <Radar
                      data={data}
                      width={1}
                      height={1}
                    />
                  </div>
                </div>
              </div>
            </div>   
          </div>
        </div>}
      </>
  )

}