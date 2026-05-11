function MoodMatcherLoader() {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      
      <div className="flex gap-2 mb-4">
        <div className="w-3 h-3 bg-yellow-400 rounded-full animate-bounce"></div>

        <div className="w-3 h-3 bg-yellow-400 rounded-full animate-bounce [animation-delay:0.1s]"></div>

        <div className="w-3 h-3 bg-yellow-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
      </div>

      <p className="text-yellow-400 font-medium">
        Understanding your mood...
      </p>

      <p className="text-gray-400 text-sm mt-2">
        Finding the perfect movie match ✨
      </p>
    </div>
  );
}

export default MoodMatcherLoader;