import React, { useState } from 'react';
import { Eye, EyeOff, ArrowRight } from 'lucide-react';

// Define types for form data
type SignUpFormData = {
  schoolName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

type LoginFormData = {
  email: string;
  password: string;
};

// Define props for SignUp component
type SignUpProps = {
  onNavigateToLogin: () => void;
  onSignUp: (formData: SignUpFormData) => void;
};

// Define props for Login component
type LoginProps = {
  onNavigateToSignUp: () => void;
  onLogin: (formData: LoginFormData) => void;
};

// SignUp Component
const SignUp: React.FC<SignUpProps> = ({ onNavigateToLogin, onSignUp }) => {
  const [formData, setFormData] = useState<SignUpFormData>({
    schoolName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSignUp(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-medium text-gray-900">Welcome, xyz schl</h2>
          <p className="mt-2 text-gray-600">It is our great pleasure to have you on board!</p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Enter the name of school"
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                value={formData.schoolName}
                onChange={(e) => setFormData({ ...formData, schoolName: (e.target as HTMLInputElement).value })}

              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Enter the school email"
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Choose a password"
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm password"
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: (e.target as HTMLInputElement).value })}

              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Next <ArrowRight className="ml-2" size={20} />
            </button>
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{' '}
              <button
                type="button"
                onClick={onNavigateToLogin}
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                Sign in
              </button>
            </p>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-gray-50 text-gray-500">or</span>
            </div>
          </div>

          <button
            type="button"
            className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
          >
            <img src="/api/placeholder/20/20" alt="Google logo" className="mr-2" />
            Continue with Google
          </button>
        </form>

        {/* Progress Indicator */}
        <div className="mt-8">
          <div className="flex justify-between items-center">
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white">✓</div>
              <p className="mt-2 text-xs text-blue-500">Your details</p>
              <p className="text-xs text-gray-500">Name and email</p>
            </div>
            <div className="flex-1 h-1 mx-4 bg-blue-200"></div>
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white">2</div>
              <p className="mt-2 text-xs text-blue-500">Choose a password</p>
              <p className="text-xs text-gray-500">Secure password</p>
            </div>
            <div className="flex-1 h-1 mx-4 bg-gray-200"></div>
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">4</div>
              <p className="mt-2 text-xs text-gray-500">Upload documents</p>
              <p className="text-xs text-gray-500">For verification</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Login Component
const Login: React.FC<LoginProps> = ({ onNavigateToSignUp, onLogin }) => {
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-medium text-gray-900">Login</h2>
          <p className="mt-2 text-gray-600">Welcome back!</p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <input
                type="email"
                placeholder="Enter your email"
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: (e.target as HTMLInputElement).value })}

              />
            </div>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: (e.target as HTMLInputElement).value })}

              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Sign in
            </button>
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{' '}
              <button
                type="button"
                onClick={onNavigateToSignUp}
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                Sign up
              </button>
            </p>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-gray-50 text-gray-500">or</span>
            </div>
          </div>

          <button
            type="button"
            className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
          >
            <img src="/api/placeholder/20/20" alt="Google logo" className="mr-2" />
            Continue with Google
          </button>
        </form>
      </div>
    </div>
  );
};

// Main Auth Flow Component
const AuthFlow: React.FC = () => {
  const [view, setView] = useState<'login' | 'signup'>('login');

  const handleLogin = (formData: LoginFormData) => {
    console.log('Login:', formData);
    // Add your login logic here
  };

  const handleSignUp = (formData: SignUpFormData) => {
    console.log('Sign up:', formData);
    // Add your signup logic here
  };

  return (
    <div>
      {view === 'login' ? (
        <Login 
          onNavigateToSignUp={() => setView('signup')}
          onLogin={handleLogin}
        />
      ) : (
        <SignUp 
          onNavigateToLogin={() => setView('login')}
          onSignUp={handleSignUp}
        />
      )}
    </div>
  );
};

export default AuthFlow;
