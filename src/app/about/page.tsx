export default function AboutPage() {
    return (
      <div className="max-w-4xl mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold mb-6">About CodeFlex.AI</h1>
        <p className="mb-6">
          CodeFlex.AI is your personal AI-powered fitness companion designed to transform your fitness journey. 
          Our cutting-edge platform combines artificial intelligence with fitness expertise to create a truly 
          personalized workout and nutrition experience.
        </p>
        
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="mb-6">
          We believe that fitness should be accessible, personalized, and effective for everyone. 
          Our mission is to democratize personal training by leveraging AI technology to deliver 
          custom-tailored fitness and nutrition plans that adapt to your unique body, goals, and lifestyle.
        </p>
        
        <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
        <div className="mb-6">
          <p className="mb-3">CodeFlex.AI works in three simple steps:</p>
          <ol className="list-decimal list-inside ml-4 space-y-2">
            <li><strong>Assessment:</strong> Share your fitness goals, current fitness level, preferences, and any limitations.</li>
            <li><strong>AI Analysis:</strong> Our advanced AI evaluates your input and generates personalized workout routines and meal plans.</li>
            <li><strong>Interactive Training:</strong> Receive real-time feedback and adjustments as you progress through your fitness journey.</li>
          </ol>
        </div>
        
        <h2 className="text-2xl font-semibold mb-4">Features</h2>
        <ul className="list-disc list-inside ml-4 space-y-2 mb-6">
          <li><strong>Voice-Guided Workouts:</strong> Get real-time audio coaching during your exercises</li>
          <li><strong>Personalized Meal Plans:</strong> Nutrition recommendations tailored to your goals and preferences</li>
          <li><strong>Progress Tracking:</strong> Monitor your improvements with detailed analytics</li>
          <li><strong>Adaptive Programming:</strong> Your plan evolves as you progress</li>
          <li><strong>24/7 AI Support:</strong> Get answers to your fitness questions anytime</li>
        </ul>
        
        <h2 className="text-2xl font-semibold mb-4">Our Technology</h2>
        <p className="mb-6">
          CodeFlex.AI utilizes state-of-the-art machine learning algorithms and natural language processing 
          to understand your needs and communicate effectively. Our systems continuously learn from user 
          interactions to improve recommendations and provide increasingly personalized guidance.
        </p>
      </div>
    );
  }