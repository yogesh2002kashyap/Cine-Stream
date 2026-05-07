function Error({error}) {
  return (
    <div className="flex justify-center items-center mt-10">
      <p className="text-center text-gray-500 mt-10 text-lg">{error}</p>
    </div>
  );
}

export default Error;