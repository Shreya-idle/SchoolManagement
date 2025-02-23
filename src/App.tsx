import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'react-native';
// import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomePage from './components/Homepage';
import Dashboard from './components/Dasboard/Dasboard';
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

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    
      <NavigationContainer>
        <StatusBar
          barStyle="light-content"
          backgroundColor="#1a237e"
          translucent
        />
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomePage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Dashboard"
            component={Dashboard}
            options={{ title: 'Dashboard' }}
          />
          <Stack.Screen
            name="WebView"
            component={WebViewScreen}
            options={{ title: 'WebView' }}
          />
          {/* Billing Screens */}
          <Stack.Screen
            name="OnlinePayment"
            component={OnlinePayment}
            options={{ title: 'Online Payment' }}
          />
          <Stack.Screen
            name="PaymentHistory"
            component={PaymentHistory}
            options={{ title: 'Payment History' }}
          />
          {/* Class Screens */}
          <Stack.Screen
            name="Assignments"
            component={Assignments}
            options={{ title: 'Assignments' }}
          />
          <Stack.Screen
            name="Exams"
            component={Exams}
            options={{ title: 'Exams' }}
          />
          <Stack.Screen
            name="Attendance"
            component={Attendance}
            options={{ title: 'Attendance' }}
          />
          <Stack.Screen
            name="Grades"
            component={Grades}
            options={{ title: 'Grades' }}
          />
          <Stack.Screen
            name="GradeHistory"
            component={GradeHistory}
            options={{ title: 'Grade History' }}
          />
          {/* All Students Screens */}
          <Stack.Screen
            name="LeaveApproval"
            component={LeaveApproval}
            options={{ title: 'Leave Approval' }}
          />
          <Stack.Screen
            name="LibraryBooks"
            component={LibraryBooks}
            options={{ title: 'Library Books' }}
          />
          {/* Admission Form Screens */}
          <Stack.Screen
            name="PersonalInformation"
            component={PersonalInformation}
            options={{ title: 'Personal Information' }}
          />
          <Stack.Screen
            name="ParentTeacherMeeting"
            component={ParentTeacherMeeting}
            options={{ title: 'Parent Teacher Meeting' }}
          />
          <Stack.Screen
            name="EventCalendar"
            component={EventCalendar}
            options={{ title: 'Event Calendar' }}
          />
          {/* Teachers Screens */}
          <Stack.Screen
            name="TeacherInformation"
            component={TeacherInformation}
            options={{ title: 'Teacher Information' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    
  );
};

export default App;