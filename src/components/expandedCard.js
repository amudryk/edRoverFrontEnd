import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'

export default function ExpandedCard({open, program, onClose}) {

  const [addedBookmark, setAddedBookmark] = useState(false)

  const addBookmark = () => {
    setAddedBookmark(!addedBookmark)
  }

  const header = () => (
    <div className="flex flex-col w-1/2">
      <div className="w-96 h-40" style={{
        backgroundImage: `url(${program.thumbnailUrl})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
      }}/>
      <div className="ml-10 flex flex-col w-44">
        <div className="cursor-pointer rounded-xl bg-violet-700 px-10 py-3 my-2 text-white text-sm">See Related</div>
        <div className="cursor-pointer rounded-xl bg-violet-700 px-10 py-3 my-2 text-white text-sm">Visit Website</div>
      </div>
  </div>)

  const desc = () => (<div className="p-6 mb-8">
    <div className="flex">
      <div className="flex flex-col">
        <h1 className="mb-5 text-xl">
          <span className="font-semibold">{program.programName}</span>
          {' - '}  
          <span className="italic">{program.schoolName}</span>
        </h1>
        <p>{program.descPreview}</p>
      </div>
    </div>
  </div>)

  const breakdown = () => {
    const points = ["$7,865 / term tuition", "Located in Waterloo, Ontario", "OUAC Program Code: JWA", "80%+ admission average"]
    return (<div>
      <div className="text-xl font-medium mt-10 mb-4">
        Breakdown
      </div>
      {points.map((point) => (
        <div className="flex mb-2 items-center">
          <div className="mr-2 w-4 h-4 bg-violet-700 rounded-full"></div>
          <div>{point}</div> 
        </div>
      ))}
    </div>)
  }

  const ratingBars = () => {
    const ratingBarInformation = [
      {
        label: "Liked",
        percent: 80,
      },
      {
        label: "Useful",
        percent: 75,
      },
      {
        label: "Easy",
        percent: 60,
      },
    ]
    return (<div className="ml-4">
      {ratingBarInformation.map(({label, percent}) => {
        return (
          <div className="ml-8 mb-4">
            <div className="mb-2">{label}</div>
            <div className="flex">
              <div className="flex w-3/4 items-center">
                <div className={`w-3/4 h-4 bg-blue-700 rounded-xl z-10`}></div>
                <div className={`w-1/4 mr-2 -ml-1 w-1/4 h-4 bg-gray-300 rounded-r-xl`}></div>
              </div>
              <div className="ml-8 font-medium">{percent}%</div>
            </div>
          </div>
        )
      })}
    </div>)
  }

  return (
      <>
        {open && <div className={"flex-col rounded-lg py-8 mt-40 mx-28  mb-8 bg-white shadow text-left"}>
          <FontAwesomeIcon onClick={onClose} className="cursor-pointer ml-8" size="2x" icon={faTimes} />
            <section className="px-8">
              <div className="flex">
                {header()}
                {breakdown()}
                <FontAwesomeIcon onClick={addBookmark} className={`cursor-pointer -mt-10 text-right ml-auto ${addedBookmark && "text-amber-500"}`} size="2x" icon={faBookmark} />
              </div>
              {desc()}
            </section>
            <section>
              <div className='h-1 w-full bg-violet-700'/>
              <div className="text-xl font-medium mt-10 ml-8 mb-8">
                Program Reviews
              </div>
              <div>
                {ratingBars()}
                <div>
                  
                </div>
              </div>
            </section>   
        </div>}
      </>
  )

}