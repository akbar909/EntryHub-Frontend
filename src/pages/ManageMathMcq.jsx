import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ManageMathMcq = () => {
    const [questions, setQuestions] = useState([]);
    const [newQuestion, setNewQuestion] = useState('');
    const [newOptions, setNewOptions] = useState(['', '', '', '']);
    const [correctOption, setCorrectOption] = useState(1);
    const [selectedQuestionId, setSelectedQuestionId] = useState(null);

    useEffect(() => {
        // Fetch existing questions from the server
        const fetchQuestions = async () => {
            try {
                const response = await axios.get('http://localhost:4000/mathquestions/');
                setQuestions(response.data);
            } catch (error) {
                console.error('Error fetching questions:', error);
            }
        };

        fetchQuestions();
    }, []);


    const handleNewOptionChange = (index, value) => {
        const updatedOptions = [...newOptions];
        updatedOptions[index] = value;
        setNewOptions(updatedOptions);
    };

    const handleEditClick = (questionId) => {
        // Find the selected question by ID
        const selectedQuestion = questions.find((question) => question._id === questionId);

        // Populate the form fields with the selected question's details
        setNewQuestion(selectedQuestion.questionText);
        setNewOptions([...selectedQuestion.options]);
        setCorrectOption(selectedQuestion.correctOption + 1);

        // Set the selected question ID for update
        setSelectedQuestionId(questionId);
    };

    const handleUpdateClick = async () => {
        try {
            const response = await axios.put(`http://localhost:4000/mathquestions/update/${selectedQuestionId}`, {
                questionText: newQuestion,
                options: newOptions,
                correctOption: correctOption - 1,
            });

            if (response.status === 200) {
                // Successfully updated the question
                const updatedQuestions = questions.map((question) =>
                    question._id === selectedQuestionId ? response.data : question
                );
                setQuestions(updatedQuestions);

                // Reset the input fields and selected question ID
                setNewQuestion('');
                setNewOptions(['', '', '', '']);
                setCorrectOption(1);
                setSelectedQuestionId(null);
            }
        } catch (error) {
            console.error('Error updating question:', error);
        }
    };

    // Define addNewQuestion function here
    const addNewQuestion = async () => {
        try {
            const response = await axios.post('http://localhost:4000/mathquestions/create', {
                questionText: newQuestion,
                options: newOptions,
                correctOption: correctOption - 1,
            });

            if (response.status === 201) {
                // Successfully added the question
                setQuestions([...questions, response.data]);
                // Reset the input fields
                setNewQuestion('');
                setNewOptions(['', '', '', '']);
                setCorrectOption(1); // Reset to 1
            }
        } catch (error) {
            console.error('Error adding question:', error);
        }
    };

    const deleteQuestion = async (questionId) => {
        try {
            const response = await axios.delete(`http://localhost:4000/mathquestions/${questionId}`);

            if (response.status === 200) {
                // Successfully deleted the question
                const updatedQuestions = questions.filter((question) => question._id !== questionId);
                setQuestions(updatedQuestions);
            }
        } catch (error) {
            console.error('Error deleting question:', error);
        }
    };

    return (
        <div className="container  items-center justify-center mx-auto my-8 p-8 bg-white shadow-lg rounded-lg">
            <h2 className="text-3xl font-semibold mb-4">Math Admin Panel - Manage MCQs</h2>
            <div className='lg:flex gap-60 items-center'>
            {/* Display existing questions */}
            <div className='overflow-y-auto  h-96'>
                <h3 className="text-xl font-semibold mb-2">Existing Questions:</h3>
                <ul className="list-disc ml-4">
    {questions.map((question, index) => (
        <ul key={question._id} className="mb-2 ">
            {`${index + 1}. ${question.questionText} - Correct Option: ${question.correctOption + 1}`}
            <button
                onClick={() => handleEditClick(question._id)}
                className="ml-2 bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
            >
                Edit
            </button>

            <button
                onClick={() => deleteQuestion(question._id)}
                className="ml-2 bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
            >
                Delete
            </button>
        </ul>
    ))}
</ul>

            </div>


            {/* Add new question form */}
            <div className="mt-8">
                <h3 className="text-xl font-semibold mb-2">Add New Question:</h3>
                <div className="mb-4">
                    <label className="block text-sm font-semibold mb-2">Question Text:</label>
                    <input
                        type="text"
                        value={newQuestion}
                        onChange={(e) => setNewQuestion(e.target.value)}
                        className="w-96 px-4 py-2 border rounded focus:outline-none focus:border-blue-400"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-semibold mb-2">Options:</label>
                    {newOptions.map((option, index) => (
                        <div key={index} className="mb-2">
                            <input
                                type="text"
                                value={option}
                                onChange={(e) => handleNewOptionChange(index, e.target.value)}
                                className="px-4 py-2 border rounded focus:outline-none focus:border-blue-400"
                            />
                        </div>
                    ))}
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-semibold mb-2">Correct Option:</label>
                    <select
                        value={correctOption}
                        onChange={(e) => setCorrectOption(parseInt(e.target.value))}
                        className="px-4 py-2 border rounded focus:outline-none focus:border-blue-400"
                    >
                        {newOptions.map((_, index) => (
                            <option key={index} value={index + 1}>
                                Option {index + 1}
                            </option>
                        ))}
                    </select>
                </div>

                <button
                    onClick={addNewQuestion}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Add Question
                </button>
                <button
                    onClick={handleUpdateClick}
                    className="ml-2 bg-[#3FE0A5] hover:bg-teal-700 hover:text-white px-4 py-2 rounded "
                >
                    Update MCQ
                </button>
            </div>
        </div>
        </div>
    );
};

export default ManageMathMcq;
