import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card';
import { HelpCircle, Book, MessageCircle, Video, ExternalLink } from 'lucide-react';
import Button from '../components/ui/Button';

const Help: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Help & Support</h1>
        <p className="mt-2 text-gray-600">
          Find answers to common questions and learn how to use PromptCraft
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="hover:shadow-card-hover transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Book className="mr-2 text-primary-600" size={20} />
              Documentation
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              Comprehensive guides and documentation to help you create powerful prompts.
            </p>
            <Button variant="outline" className="w-full" rightIcon={<ExternalLink size={16} />}>
              View Documentation
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-card-hover transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Video className="mr-2 text-primary-600" size={20} />
              Video Tutorials
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              Learn how to use PromptCraft effectively with our step-by-step video tutorials.
            </p>
            <Button variant="outline" className="w-full" rightIcon={<ExternalLink size={16} />}>
              Watch Tutorials
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-card-hover transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center">
              <MessageCircle className="mr-2 text-primary-600" size={20} />
              Contact Support
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              Need help with something specific? Our support team is here to help.
            </p>
            <Button variant="outline" className="w-full" rightIcon={<ExternalLink size={16} />}>
              Contact Us
            </Button>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Frequently Asked Questions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                question: "How do I create my first prompt?",
                answer: "Go to the Prompt Generator page, select your desired prompt type, fill in the required fields, and click 'Generate Detailed Prompt'."
              },
              {
                question: "Can I save my generated prompts?",
                answer: "Yes, after generating a prompt, you can save it to your library by clicking the 'Save' button in the prompt result card."
              },
              {
                question: "Which AI models are supported?",
                answer: "We currently support various AI models including VEO 3, VEO 2, Midjourney, DALL-E 3, and GPT-4."
              },
              {
                question: "How do I share my prompts with others?",
                answer: "After generating or saving a prompt, use the 'Share' button to get a shareable link that you can send to others."
              },
              {
                question: "Are there limitations to the free account?",
                answer: "Free accounts can generate up to 10 prompts per day and access a limited set of templates. Upgrade to Pro for unlimited access."
              }
            ].map((faq, index) => (
              <details 
                key={index}
                className="group border-b border-gray-200 last:border-0 pb-4"
              >
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <div className="flex items-center">
                    <HelpCircle size={16} className="text-primary-600 mr-2" />
                    <span className="font-medium text-gray-900">{faq.question}</span>
                  </div>
                  <svg 
                    className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-3 text-gray-600 pl-6">{faq.answer}</p>
              </details>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Help;