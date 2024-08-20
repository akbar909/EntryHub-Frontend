import React, { useState } from 'react';
import ManageMCQ from './ManageMCQ';
import ManageBiologyMcq from './ManageBiologyMcq';
import ManagePhysicsMcq from './ManagePhysicsMcq';
import ManageMathMcq from './ManageMathMcq';
import ManageChemistryMcq from './ManageChemistryMcq';

const Admin = () => {
  const [selectedSubject, setSelectedSubject] = useState('');

  const handleSubjectClick = (subject) => {
    setSelectedSubject(subject);
  };

  return (
    <div>
      <h1 className="text-3xl text-center font-semibold mb-2">Admin Dashboard</h1>

      <div className='lg:gap-3 lg:flex lg:flex-row justify-center text-center lg:text-2xl font-bold'>
        <div className='mt-2'>
        <button onClick={() => handleSubjectClick('english')}
        className={selectedSubject === 'english' ? 'border-2 border-b-4 border-b-fuchsia-500 rounded-full p-2'
        :'border-2 border-b-4 border-b-emerald-700 rounded-full p-2'}>
          English DashBoard
        </button>
        </div>
        <div className='mt-2'>
        <button onClick={() => handleSubjectClick('biology')}
        className={selectedSubject === 'biology' ? 'border-2 border-b-4 border-b-fuchsia-500 rounded-full p-2'
        :'border-2 border-b-4 border-b-emerald-700 rounded-full p-2'}>
          Biology DashBoard
        </button>
        </div>
        <div className='mt-2'>
        <button onClick={() => handleSubjectClick('math')}
        className={selectedSubject === 'math' ? 'border-2 border-b-4 border-b-fuchsia-500 rounded-full p-2'
        : 'border-2 border-b-4 border-b-emerald-700 rounded-full p-2'}>
          Mathematics DashBoard
        </button>
        </div>
        <div className='mt-2'>
        <button onClick={() => handleSubjectClick('physics')}
        className={selectedSubject === 'physics' ? 'border-2 border-b-4 border-b-fuchsia-500 rounded-full p-2'
        : 'border-2 border-b-4 border-b-emerald-700 rounded-full p-2'}>
          Physics DashBoard
        </button>
        </div>
        <div className='mt-2'>
        <button onClick={() => handleSubjectClick('chemistry')}
        className={selectedSubject === 'chemistry' ? 'border-2 border-b-4 border-b-fuchsia-500 rounded-full p-2'
        : 'border-2 border-b-4 border-b-emerald-700 rounded-full p-2'}>
          Chemistry DashBoard
        </button>
        </div>
       
      </div>
      {selectedSubject === 'biology' && <ManageBiologyMcq />}
      {selectedSubject === 'physics' && <ManagePhysicsMcq />}
      {selectedSubject === 'english' && <ManageMCQ />}
      {selectedSubject === 'math' && <ManageMathMcq />}
      {selectedSubject === 'chemistry' && <ManageChemistryMcq />}
    </div>
  );
};

export default Admin;
