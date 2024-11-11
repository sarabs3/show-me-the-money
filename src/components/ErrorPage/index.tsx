"use client";
import Icon from './icon';

type ErrorPageProps = {
  message: string;
};

const ErrorPage = ({ message }: ErrorPageProps) => {
  const onRetry = () => {
    window?.location?.reload();
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md flex items-center justify-center flex-col">
        <Icon />
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Something went wrong</h2>
        <p className="text-gray-600 mb-6">
          {message}
        </p>
        <button
          onClick={onRetry}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Retry
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
