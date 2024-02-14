import React, {useState} from 'react'
import SaveButton from '../Button/SaveButton';
import NextButton from '../Button/NextButton';

const Certification = () => {
  const [certification, setCertification] = useState({
    title : '',
    description : ''
  })

  const changeHandler = (e) =>{
    setCertification({
      ...certification,
      [e.target.name] : e.target.value,
    })
  }
  const submitHandler = (e) =>{
    e.preventDefault();
    console.log(certification);
  }
  return (
    <div>
      <h3 className="font-bold py-3 text-xl">Certification</h3>
      <form className="space-y-4 md:space-y-6" onSubmit={submitHandler}>
        <div>
          <label
            htmlFor="title"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Title
          </label>
          <div className="flex items-center">
            <input
              type="text"
              name="title"
              id="title"
              value={certification.title}
              onChange={changeHandler}
              placeholder="title"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="description"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Description
          </label>
          <div className="flex items-center">
            <textarea
              rows={3}
              type="text"
              name="description"
              id="description"
              value={certification.description}
              onChange={changeHandler}
              placeholder="Enter Your Description"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
        </div>
        <div className='flex gap-2 w-full justify-end'>
          <SaveButton/>
          <NextButton/>
        </div>
        </form>
    </div>
  )
}

export default Certification