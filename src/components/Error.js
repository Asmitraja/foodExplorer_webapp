import React from 'react'
import { useRouteError } from 'react-router-dom'
const Error = () => {
    const err = useRouteError();
    console.log(err);
  return (
    <div>
      <h1>OoppS !!!</h1>
      <h2>Something went wrong</h2>
      <h2>{err.status}:{err.statusText}</h2>
      {/* <h3>{err.statusText}</h3> */}
    </div>
  )
}

export default Error
