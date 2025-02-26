import React from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack/lib/typescript/src/types';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomePageProps, DashboardProps, StudentsProps, TeachersProps, ApplicationsProps, FeesManagementProps, EventsProps, WebViewProps, OnlinePaymentProps, PaymentHistoryProps, AssignmentsProps, ExamsProps, AttendanceProps, GradesProps, GradeHistoryProps, LeaveApprovalProps, LibraryBooksProps, PersonalInformationProps, ParentTeacherMeetingProps } from './@types/components';
import RoleBasedAuth from './components/Authentication/Login_Authentication';
import { StatusBar } from 'react-native';
// import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AuthProvider } from './components/context/AuthContext';
import ProtectedRoute from './components/navigation/ProtectRoute';
import AppNavigator from './components/navigation/AppNavigator';

// Import screens
import HomePage from './components/Homepage';
import Dashboard from './components/DashboardSection';
import Students from './components/Students/Class/GradeHistory/GradeHistory';
import Teachers from './components/Teachers/TeacherInformation';
import Applications from './components/Students/Class/Grades/Grades';
import FeesManagement from './components/FeeManagementSection';
// import TransportDetails from './components/Students/';
import Events from './components/Students/AdmissionForm/eventCalender/EventCalendar';

// Import from existing structure
import OnlinePayment from './components/Billing/OnlinePayment/OnlinePayment';
import PaymentHistory from './components/Authentication/Login_Authentication';
import Assignments from './components/Students/Class/Assignments/Assignments';
import Exams from './components/Students/Class/Exams/Exams';
import Attendance from './components/Students/Class/Attendance';
import Grades from './components/Students/Class/Grades/Grades';
import GradeHistory from './components/Students/Class/GradeHistory/GradeHistory';
import LeaveApproval from './components/Dasboard/AllStudents/LeaveApproval';
import LibraryBooks from './components/Dasboard/AllStudents/LeaveApproval';
import PersonalInformation from './components/Students/AdmissionForm/PersonalInformation/PersonalInformation';
import ParentTeacherMeeting from './components/Students/AdmissionForm/ptm/ParentTeacherMeeting';
import EventCalendar from './components/Students/AdmissionForm/eventCalender/EventCalendar';
import TeacherInformation from './components/Teachers/TeacherInformation';
import WebViewScreen from './components/WebViewScreen';

// Define the type for your navigation parameters
type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  Dashboard: undefined;
  Students: undefined;
  Teachers: undefined;
  Applications: undefined;
  FeesManagement: undefined;
  Events: undefined;
  WebView: { uri: string };
  OnlinePayment: undefined;
  PaymentHistory: undefined;
  Assignments: undefined;
  Exams: undefined;
  Attendance: undefined;
  Grades: undefined;
  GradeHistory: undefined;
  LeaveApproval: undefined;
  LibraryBooks: undefined;
  PersonalInformation: undefined;
  ParentTeacherMeeting: undefined;
  EventCalendar: undefined;
  TeacherInformation: undefined;
};

// Create a typed stack navigator
const Stack = createNativeStackNavigator<RootStackParamList>();

// Helper type for navigation props
type ScreenNavigationProp = NativeStackNavigationProp<RootStackParamList>;

// Wrapping component for protected routes
const ProtectedScreen = <P extends object>(
  Component: React.ComponentType<P & { navigation: ScreenNavigationProp }>
): React.FC<P & { navigation: ScreenNavigationProp }> => {
  return (props) => (
    <ProtectedRoute>
      <Component {...props} />
    </ProtectedRoute>
  );
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <StatusBar
          barStyle="light-content"
          backgroundColor="#1a237e"
          translucent
        />
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#1a237e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        >
          {/* Login screen should be defined here, but it's missing in your code */}
          <Stack.Screen 
            name="Login" 
            component={RoleBasedAuth} 
          />

          {/* Home Screen */}
          <Stack.Screen 
            name="Home" 
            component={ProtectedScreen(HomePage)} 
          />

          {/* Dashboard Screen */}
          <Stack.Screen 
            name="Dashboard" 
            component={ProtectedScreen(Dashboard)} 
            options={{ headerShown: false }}
          />

          {/* Students Screen */}
          <Stack.Screen 
            name="Students" 
            component={ProtectedScreen(Students)} 
          />

          {/* Teachers Screen */}
          <Stack.Screen 
            name="Teachers" 
            component={ProtectedScreen(Teachers)} 
          />

          {/* Applications Screen */}
          <Stack.Screen 
            name="Applications" 
            component={ProtectedScreen(Applications)} 
          />

          {/* Fees Management Screen */}
          <Stack.Screen 
            name="FeesManagement" 
            component={ProtectedScreen(FeesManagement)} 
          />

          {/* Events Screen */}
          <Stack.Screen 
            name="Events" 
            component={ProtectedScreen(Events)} 
          />

          {/* WebView Screen */}
          <Stack.Screen 
            name="WebView" 
            component={ProtectedScreen(WebViewScreen)} 
          />

          {/* Billing Screens */}
          <Stack.Screen 
            name="OnlinePayment" 
            component={ProtectedScreen(OnlinePayment)} 
          />

          <Stack.Screen 
            name="PaymentHistory" 
            component={ProtectedScreen(PaymentHistory)} 
          />

          {/* Class Screens */}
          <Stack.Screen 
            name="Assignments" 
            component={ProtectedScreen(Assignments)} 
          />

          <Stack.Screen 
            name="Exams" 
            component={ProtectedScreen(Exams)} 
          />

          <Stack.Screen 
            name="Attendance" 
            component={ProtectedScreen(Attendance)} 
          />

          <Stack.Screen 
            name="Grades" 
            component={ProtectedScreen(Grades)} 
          />

          <Stack.Screen 
            name="GradeHistory" 
            component={ProtectedScreen(GradeHistory)} 
          />

          {/* All Students Screens */}
          <Stack.Screen 
            name="LeaveApproval" 
            component={ProtectedScreen(LeaveApproval)} 
          />

          <Stack.Screen 
            name="LibraryBooks" 
            component={ProtectedScreen(LibraryBooks)} 
          />

          {/* Admission Form Screens */}
          <Stack.Screen 
            name="PersonalInformation" 
            component={ProtectedScreen(PersonalInformation)} 
          />

          <Stack.Screen 
            name="ParentTeacherMeeting" 
            component={ProtectedScreen(ParentTeacherMeeting)} 
          />

          <Stack.Screen 
            name="EventCalendar" 
            component={ProtectedScreen(EventCalendar)} 
          />

          {/* Teachers Screens */}
          <Stack.Screen 
            name="TeacherInformation" 
            component={ProtectedScreen(TeacherInformation)} 
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;