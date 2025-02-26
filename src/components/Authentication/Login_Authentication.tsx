import React, { useState } from 'react';
import { Eye, EyeOff, User, Users, Building2, ArrowLeft } from 'lucide-react';

type UserRole = 'student' | 'teacher' | 'admin';
type AuthView = 'login' | 'signup';

type LoginFormData = {
  email: string;
  password: string;
  role: UserRole;
};

type SignUpFormData = {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: UserRole;
  studentId?: string;  // For students
  teacherId?: string;  // For teachers
  employeeId?: string; // For admins
};

const RoleBasedAuth = () => {
  const [currentView, setCurrentView] = useState<AuthView>('login');
  const [loginData, setLoginData] = useState<LoginFormData>({
    email: '',
    password: '',
    role: 'student'
  });
  const [signupData, setSignupData] = useState<SignUpFormData>({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'student'
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt:', loginData);
    // Add your login logic here
  };

  const handleSignupSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (signupData.password !== signupData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    console.log('Signup attempt:', signupData);
    // Add your signup logic here
  };

  const roleCards = [
    {
      role: 'student',
      icon: User,
      title: 'Student',
      description: 'Access your courses, assignments, and grades',
      idField: 'studentId',
      idLabel: 'Student ID'
    },
    {
      role: 'teacher',
      icon: Users,
      title: 'Teacher',
      description: 'Manage classes, assignments, and student progress',
      idField: 'teacherId',
      idLabel: 'Teacher ID'
    },
    {
      role: 'admin',
      icon: Building2,
      title: 'Administrator',
      description: 'School management and administrative controls',
      idField: 'employeeId',
      idLabel: 'Employee ID'
    }
  ];

  const LoginView = () => (
    <>
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900">Welcome Back</h2>
        <p className="mt-2 text-gray-600">Please select your role and sign in</p>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-8">
        {roleCards.map(({ role, icon: Icon, title, description }) => (
          <button
            key={role}
            onClick={() => setLoginData(prev => ({ ...prev, role: role as UserRole }))}

            className={`p-4 rounded-lg text-center transition-all ${
              loginData.role === role
                ? 'bg-blue-100 border-2 border-blue-500'
                : 'bg-white border border-gray-200 hover:border-blue-300'
            }`}
          >
            <div className="flex justify-center">
              <Icon
                size={24}
                className={loginData.role === role ? 'text-blue-500' : 'text-gray-500'}
              />
            </div>
            <h3 className="mt-2 font-medium text-sm">{title}</h3>
            <p className="mt-1 text-xs text-gray-500 hidden md:block">{description}</p>
          </button>
        ))}
      </div>

      <form className="mt-8 space-y-6" onSubmit={handleLoginSubmit}>
        <div className="space-y-4">
          <input
            type="email"
            required
            className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Email address"
            value={loginData.email}
            onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
          />
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              required
              className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Password"
              value={loginData.password}
              onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeOff className="h-5 w-5 text-gray-400" />
              ) : (
                <Eye className="h-5 w-5 text-gray-400" />
              )}
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
              Remember me
            </label>
          </div>

          <div className="text-sm">
            <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
              Forgot password?
            </a>
          </div>
        </div>

        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Sign in
        </button>

        <div className="text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{' '}
            <button
              type="button"
              onClick={() => setCurrentView('signup')}
              className="font-medium text-blue-600 hover:text-blue-500"
            >
              Sign up
            </button>
          </p>
        </div>
      </form>
    </>
  );

  const SignupView = () => (
    <>
      <div className="text-center">
        <button
          type="button"
          onClick={() => setCurrentView('login')}
          className="absolute left-4 top-4 p-2 text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft size={20} />
        </button>
        <h2 className="text-3xl font-bold text-gray-900">Create Account</h2>
        <p className="mt-2 text-gray-600">Please select your role and fill in your details</p>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-8">
        {roleCards.map(({ role, icon: Icon, title }) => (
          <button
            key={role}
            onClick={() => setSignupData(prev => ({ ...prev, role: role as UserRole }))}

            className={`p-4 rounded-lg text-center transition-all ${
              signupData.role === role
                ? 'bg-blue-100 border-2 border-blue-500'
                : 'bg-white border border-gray-200 hover:border-blue-300'
            }`}
          >
            <div className="flex justify-center">
              <Icon
                size={24}
                className={signupData.role === role ? 'text-blue-500' : 'text-gray-500'}
              />
            </div>
            <h3 className="mt-2 font-medium text-sm">{title}</h3>
          </button>
        ))}
      </div>

      <form className="mt-8 space-y-4" onSubmit={handleSignupSubmit}>
        <input
          type="text"
          required
          className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          placeholder="Full Name"
          value={signupData.fullName}
          onChange={(e) => setSignupData({ ...signupData, fullName: e.target.value })}
        />

        <input
          type="email"
          required
          className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          placeholder="Email address"
          value={signupData.email}
          onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
        />

        {roleCards.map(({ role, idField, idLabel }) => (
          role === signupData.role && (
            <input
              key={idField}
              type="text"
              required
              className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder={idLabel}
              value={signupData[idField as keyof SignUpFormData] || ''}
              onChange={(e) => setSignupData({ 
                ...signupData, 
                [idField as keyof SignUpFormData]: e.target.value 
              })}

            />
          )
        ))}

        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            required
            className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Password"
            value={signupData.password}
            onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
          />
          <button
            type="button"
            className="absolute inset-y-0 right-0 pr-3 flex items-center"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <EyeOff className="h-5 w-5 text-gray-400" />
            ) : (
              <Eye className="h-5 w-5 text-gray-400" />
            )}
          </button>
        </div>

        <div className="relative">
          <input
            type={showConfirmPassword ? 'text' : 'password'}
            required
            className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Confirm Password"
            value={signupData.confirmPassword}
            onChange={(e) => setSignupData({ ...signupData, confirmPassword: e.target.value })}
          />
          <button
            type="button"
            className="absolute inset-y-0 right-0 pr-3 flex items-center"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? (
              <EyeOff className="h-5 w-5 text-gray-400" />
            ) : (
              <Eye className="h-5 w-5 text-gray-400" />
            )}
          </button>
        </div>

        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Create Account
        </button>

        <div className="text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{' '}
            <button
              type="button"
              onClick={() => setCurrentView('login')}
              className="font-medium text-blue-600 hover:text-blue-500"
            >
              Sign in
            </button>
          </p>
        </div>
      </form>
    </>
  );

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 relative">
        {currentView === 'login' ? <LoginView /> : <SignupView />}
      </div>
    </div>
  );
};

export default RoleBasedAuth;
