import React, { useState } from 'react'
import SaveButton from '../Button/SaveButton';
import NextButton from '../Button/NextButton';
import toast from "react-hot-toast";
import { IoAddCircleSharp } from "react-icons/io5";

const Education = ({ setResumeData }) => {
  const [education, setEducation] = useState({
    college: '',
    degree: '',
    CGPA: '',
    completionDate: '',
    description: ''
  })

  const changeHandler = (e) => {
    setEducation({
      ...education,
      [e.target.name]: e.target.value,
    })
  }
  const submitHandler = (e) => {
    e.preventDefault();
    setResumeData((prev) => ({
      ...prev,
      Education: [...prev.Education, education]
    }))
    toast.success("Data save Successfully");
  }
  const addFields = () =>{
    
  }

  return (
    <div>
      <div className='flex items-center justify-between'>
        <h3 className="font-bold py-3 text-xl">Education</h3>
        <IoAddCircleSharp onClick={addFields} size={25} className='mx-3 cursor-pointer' />
      </div>
      <form className="space-y-4 md:space-y-6" onSubmit={submitHandler}>
        <div>
          <label
            htmlFor="college"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            College Name
          </label>
          <div className="flex items-center">
            <input
              type="text"
              name="college"
              id="college"
              value={education.college}
              onChange={changeHandler}
              placeholder="College Name"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="degree"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Degree
          </label>
          <div className="flex items-center">
            <input
              type="text"
              name="degree"
              id="degree"
              value={education.degree}
              onChange={changeHandler}
              placeholder="EX. BE, B.tech, BCA"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
        </div>
        <div className="flex gap-2">
          <div className="w-1/2">
            <label
              htmlFor="CGPA"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              CGPA/Percentage
            </label>
            <input
              type="text"
              name="CGPA"
              id="CGPA"
              value={education.CGPA}
              onChange={changeHandler}
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder='9.1 CGPA or 86.4 %'
            />
          </div>
          <div className="w-1/2">
            <label
              htmlFor="completionDate"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Completion Date
            </label>
            <div className="flex items-center">
              <input
                type="date"
                name="completionDate"
                id="completionDate"
                value={education.completionDate}
                onChange={changeHandler}
                placeholder="Enter Your Last Name"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
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
              value={education.description}
              onChange={changeHandler}
              placeholder="Enter Your Description"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
        </div>
        <div className='flex gap-2 w-full justify-end'>
          <SaveButton />
          <NextButton />
        </div>
      </form>
    </div>
  )
}

export default Education
