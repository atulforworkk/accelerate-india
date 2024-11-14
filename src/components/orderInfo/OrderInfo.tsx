import React from 'react'

type Props = {
    info:string,
    data:string,
}

const OrderInfo = ({info,data}: Props) => {
  return (
         <div className="flex justify-between">
                <p>{info}</p>
                <p>{data}</p>
            </div>
  )
}

export default OrderInfo