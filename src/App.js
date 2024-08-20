import { Login, Notfound, Signup, Englishmcq, Admin, BiologyMcq ,PhysicsMcq,MathMcq, ChemistryMcq } from './routes/pages';
import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import Home from './pages/Home';
function App() {
  return (
    <>
    
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Home />} ></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/english" element={<Englishmcq />}></Route>
        <Route path='biology' element={<BiologyMcq />}></Route>
        <Route path='physics' element={<PhysicsMcq />}></Route>
        <Route path='chemistry' element={<ChemistryMcq />}></Route>
        <Route path='math' element={<MathMcq />}></Route>
        <Route path="/admindashboard622" element={<Admin />}></Route>
        <Route path="*" element={<Notfound />}></Route>
      </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;


// src/App.js

// src/App.js
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Audio } from 'react-loader-spinner';
// import './App.css';

// function App() {
//   const [images, setImages] = useState([]);
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     setLoading(true);
//     axios.get('http://localhost:5000/images')
//       .then(response => {
//         setImages(response.data);
//         setLoading(false);
//       })
//       .catch(error => {
//         console.error(error);
//         setLoading(false);
//       });
//   }, []);

//   const handleFileChange = (event) => {
//     setSelectedFile(event.target.files[0]);
//   };

//   const handleUpload = () => {
//     if (selectedFile) {
//       setLoading(true);
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         const base64String = reader.result.replace("data:", "").replace(/^.+,/, "");
//         axios.post('http://localhost:5000/upload', {
//           name: selectedFile.name,
//           base64: base64String
//         })
//           .then(response => {
//             setImages([...images, response.data]);
//             setLoading(false);
//           })
//           .catch(error => {
//             console.error(error);
//             setLoading(false);
//           });
//       };
//       reader.readAsDataURL(selectedFile);
//     }
//   };

//   return (
//     <div className="App container mx-auto">
//       <h1 className="text-2xl font-bold">Image Upload</h1>
//       <input type="file" onChange={handleFileChange} className="my-4" />
//       <button onClick={handleUpload} className="bg-blue-500 text-white py-2 px-4 rounded">
//         Upload
//       </button>

//       {loading ? (
//         <div className="flex justify-center items-center my-4">
//           <Audio
//             height="80"
//             width="80"
//             radius="9"
//             color="green"
//             ariaLabel="loading"
//             wrapperStyle
//             wrapperClass
//           />
//         </div>
//       ) : (
//         <div className="grid grid-cols-3 gap-4 my-4">
//           {images.map((image) => (
//             <div key={image._id} className="border p-4">
//               <h2 className="text-lg font-bold">{image.name}</h2>
//               <img src={`data:image/jpeg;base64,${image.base64}`} alt={image.name} className="mt-2" />
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;

