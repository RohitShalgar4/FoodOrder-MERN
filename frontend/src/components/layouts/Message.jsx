import React from 'react'

export default function Message({varient, children }) {
  return <div className={'alert alert-${varient}'}>{children}</div>;
}
