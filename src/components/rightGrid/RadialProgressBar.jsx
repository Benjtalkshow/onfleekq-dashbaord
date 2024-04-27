import React, { useEffect, useState } from 'react'

const RadialProgressBar = ({targetPercentage = 20}) => {
    const [progress, setProgress] = useState(0);
  
    useEffect(() => {
      const timer = setInterval(() => {
        setProgress((prevProgress) =>
          prevProgress >= targetPercentage ? targetPercentage : prevProgress + 1
        );
      }, 50);
  
      return () => clearInterval(timer);
    }, [targetPercentage]);


  return (
    <div className="relative w-64 h-64 rounded-full">
      <div className="absolute inset-0 rounded-full overflow-hidden">
        <div
          className="h-full w-full bg-no-repeat"
          style={{
            background: `conic-gradient(blue ${
              progress * 3.6
            }deg, transparent 0deg)`,
            transform: "rotate(-90deg)",
          }}
        >
          {progress > 0 && (
            <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  rounded-full border-4 border-white"
              style={{
                transform: `translate(-50%, -50%) rotate(${
                  progress * 3.6
                }deg) translateX(32px)`,
              }}
            >
              <div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full"
                style={{
                  transform: `translate(-50%, -50%) rotate(${
                    progress * 3.6
                  }deg) translateX(32px)`,
                }}
              ></div>
            </div>
          )}
        </div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-white p-10 rounded-full">
          <div className="bg-background pb-1 rounded-full">
            <div className="shadow-md grid p-[5.3rem] place-content-center text-center bg-white rounded-full w-32 h-32">
              <h1 className="percent text-4xl text-primary font-bold">
                {progress > 100 ? "Nil" : progress}
                <span className="text-xl">%</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RadialProgressBar