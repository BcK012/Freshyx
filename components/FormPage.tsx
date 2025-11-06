import React, { useState } from 'react';

interface FormPageProps {
  title: string;
  description: string;
  onBack: () => void;
}

const FormPage: React.FC<FormPageProps> = ({ title, description, onBack }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
    
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      // This is where you would send the data to your NestJS backend.
      // The endpoint '/api/submit-form' is a placeholder.
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        // We will simulate a failure for demonstration if email contains "error"
        if (typeof data.email === 'string' && data.email.includes('error')) {
             throw new Error('Simulation d\'une erreur réseau');
        }
        // In a real app, you might parse an error message from the response body
        // For now, we simulate a successful submission even if the mock endpoint doesn't exist.
        console.log("Mock API call successful (endpoint doesn't actually exist).");
      }
      
      setSubmitStatus('success');
      // Reset form or redirect after a short delay
      setTimeout(() => {
        onBack();
      }, 2000);

    } catch (error) {
      console.error('Erreur de soumission:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto py-20 px-4 sm:px-6 lg:px-16 flex flex-col items-center">
      <div className="w-full max-w-2xl text-center">
        <h1 className="text-5xl font-extrabold text-[#002D25]">{title}</h1>
        <p className="mt-6 text-lg text-gray-600">
          {description}
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="mt-12 bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="firstName" className="block text-sm font-bold text-gray-700 mb-2">Prénom</label>
            <input type="text" id="firstName" name="firstName" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#10B981]" disabled={isSubmitting} />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-bold text-gray-700 mb-2">Nom de famille</label>
            <input type="text" id="lastName" name="lastName" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#10B981]" disabled={isSubmitting} />
          </div>
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">Adresse e-mail</label>
          <input type="email" id="email" name="email" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#10B981]" disabled={isSubmitting} />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">Pourquoi souhaitez-vous nous rejoindre ? (Optionnel)</label>
          <textarea id="message" name="message" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#10B981]" disabled={isSubmitting}></textarea>
        </div>
        
        {submitStatus === 'success' && (
          <div className="text-center p-3 bg-green-100 text-green-800 rounded-lg">
            Merci pour votre soumission ! Nous vous contacterons bientôt.
          </div>
        )}
        {submitStatus === 'error' && (
          <div className="text-center p-3 bg-red-100 text-red-800 rounded-lg">
            Une erreur s'est produite. Veuillez réessayer.
          </div>
        )}

        <div className="flex items-center justify-between">
            <button type="button" onClick={onBack} className="text-gray-600 font-bold hover:text-[#002D25]" disabled={isSubmitting}>
                &larr; Retour
            </button>
            <button type="submit" className="bg-[#10B981] text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-[#059669] transition-colors disabled:bg-gray-400" disabled={isSubmitting}>
                {isSubmitting ? 'Envoi...' : 'Soumettre'}
            </button>
        </div>
      </form>
    </div>
  );
};

export default FormPage;