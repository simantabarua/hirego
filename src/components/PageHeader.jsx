import React from 'react'

function PageHeader({title}) {
  return (
    <div className="flex items-center justify-center w-full h-52 bg-purple-50 mb-16">
      <h2 className="text-2xl  font-extrabold text-gray-900">
        {title}
      </h2>
    </div>
  )
}

export default PageHeader