"use client"
import React, { useEffect } from 'react'
import Smartlookclient from 'smartlook-client'

interface SmartlookProps {
  init: string
}

const Smartlook: React.FC<SmartlookProps> = ({ init }) => {
  useEffect(() => {
    Smartlookclient.init(init, { region: 'eu' })
  }, [init])

  return null
};

export default Smartlook