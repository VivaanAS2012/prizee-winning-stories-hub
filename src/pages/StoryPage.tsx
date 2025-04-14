
import { useParams } from 'react-router-dom';

const StoryPage = () => {
  const { slug } = useParams();

  return (
    <div className="min-h-screen bg-background text-white p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">The Future of Technology</h1>
        <p className="text-lg text-gray-200 mb-4">
          Artificial Intelligence is revolutionizing every aspect of our lives. From how we work to how we live,
          AI is making processes more efficient and creating new possibilities we never thought possible.
        </p>
        <p className="text-lg text-gray-200">
          As we move forward, the integration of AI in our daily lives will only deepen, bringing both 
          exciting opportunities and important challenges we need to address.
        </p>
      </div>
    </div>
  );
};

export default StoryPage;
