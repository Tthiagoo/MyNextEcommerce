import { GetStaticPaths } from 'next'
import React from 'react'
import Stripe from 'stripe'
import stripeConfig from '../../config/stripe'

export const getStaticPaths: GetStaticPaths = async () => {
  const stripe = new Stripe(stripeConfig.secretKey, {
    apiVersion: '2020-08-27'
  })

  const skus = await stripe.skus.list()

  const paths = skus.data.map(sku => ({
    params: {
      skuId: sku.id
    }
  }))

  return {
    paths,
    fallback: false
  }
}

export default function product() {
  return <div></div>
}
