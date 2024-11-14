import PostAuthHeader from '@/components/postAuthHeader/PostAuthHeader'
import React from 'react'
import { useNavigate } from 'react-router-dom';

type Props = {}

const Payment = (props: Props) => {
    const navigate = useNavigate();

    setTimeout(() => {
            navigate("/credits")
    }, 2000);
  return (
    <div>
            <PostAuthHeader heading='Payment Gateway '/>
    </div>
  )
}

export default Payment