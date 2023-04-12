import React from "react";
import PageHeader from "../components/PageHeader";
const questionAnswers = [
  {
    question: "When should you use context API?",
    answer:
      "Context API is a feature  feature in Rect to pass data through components.  it is very useful when we have  to pass data through the component tree without having to pass props down manually at every level. The Context API consists of two main components: the Provider and the Consumer. we wrap main top level entry point by the Provider. then Consumer is used to access the data from any child component that needs it. when need to pass data through deep level components we should use context API to avoid props drilling  ",
  },
  {
    question: "What is a custom hook?",
    answer:
      "Custom hook is a JavaScript function. which  are used  one or more of the built-in React hooks to add additional functionality. this is use not reaping function over and over in other component. by creating custom hooks we can implement our own logic in our application it make our code cleaner and reuseable",
  },
  {
    question: "What is useRef?",
    answer:
      "useRef is a built-in React hook which returns a mutable ref object. we can use the ref object to persist a value across component render  without triggering a re-render when the value is updated. we can use the  useRef hook to access a DOM element directly without relying on selectors like document.querySelector() method. ",
  },
  {
    question: "What is useMemo?",
    answer:
      "useMemo is a built-in  hook  in React which used for  memoizes the result of a function memoize a value so that it is only re-calculated when its dependencies change.  it can be useful in our react application for optimizing performance by avoiding unnecessary re-computations. ",
  },
];

function Blog() {
  return (
    <>
      <PageHeader title="Blog" />
      <div className="flex flex-col items-center justify-center bg-gray-100 min-h-screen py-6">
        <div className="max-w-7xl w-full flex flex-col gap-5 px-4 sm:px-6 lg:px-8">
          {questionAnswers.map((questionAnswer, index) => (
            <div
              key={index}
              questionAnswer={questionAnswer}
              className="bg-white overflow-hidden shadow-md rounded-lg"
            >
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {questionAnswer.question}
                </h2>
                <p className="text-gray-700 text-base">
                  {questionAnswer.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Blog;
