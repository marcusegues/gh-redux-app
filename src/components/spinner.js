import React from 'react'
import './../spinner.css'

export const Spinner = ({ message }) =>
  <div className="flex-container">
    <div className="spinner flex-container">
      <div className="bounce1"></div>
      <div className="bounce2"></div>
      <div className="bounce3"></div>
    </div>
    <div>{message}</div>
  </div>
