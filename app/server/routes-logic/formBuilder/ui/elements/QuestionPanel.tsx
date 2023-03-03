



export default function QuestionPanel() {
  
  return (
    <div className="bg-white  px-4 py-5 shadow sm:rounded-lg sm:p-6">
    <div className="md:grid md:grid-cols-3 md:gap-6">
      {/* Question Title and Text */}
      <div className="md:col-span-1">
        <h3 className="text-lg font-medium leading-6 text-gray-900">{questionName}</h3>
        <p className="mt-1 text-sm text-gray-500">
          {questionText}
        </p>
      </div>
      {/* Fields area */}
      <div className="mt-5 space-y-6 md:col-span-2 md:mt-0">
        <div className="grid grid-cols-3 gap-6">
          {
            children
          }
        </div>
      </div>
    </div>
  </div>
  );
}