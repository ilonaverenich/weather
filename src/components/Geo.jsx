import { usePosition } from 'use-position';

function Geo() {

    const watch = true;
    const {
      latitude,
      longitude,
      speed,
      timestamp,
      accuracy,
      heading,
      error,
    } = usePosition(watch);


  return (
    <div>
        <code>
        timestamp: {timestamp}<br/>
    </code>
    </div>
  )
}

export default Geo