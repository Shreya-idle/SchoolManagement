import React from 'react';
import { Platform, View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Bell, Search, User } from 'lucide-react';

// Define props for the Header component
type HeaderProps = {
  onLogout: () => void;
};

const Header: React.FC<HeaderProps> = ({ onLogout }) => {
  if (Platform.OS === 'web') {
    return (
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Search Section */}
          <div className="flex-1 max-w-xl">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            {/* Notifications */}
            <button className="relative p-2 hover:bg-gray-100 rounded-lg">
              <Bell size={20} className="text-gray-600" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
            </button>

            {/* Profile */}
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <div className="text-sm font-medium text-gray-900">Admin User</div>
                <div className="text-xs text-gray-500">School Administrator</div>
              </div>
              <button className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                <User size={20} className="text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </header>
    );
  } else {
    return (
      <View style={styles.header}>
        <View style={styles.iconsContainer}>
          <TouchableOpacity onPress={() => console.log('Notifications')}>
            <Image source={require('./path/to/notification-icon.png')} resizeMode="cover" style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={onLogout}>
            <Image source={require('./path/to/profile-icon.png')} resizeMode="cover" style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 10,
    backgroundColor: '#fff',
    elevation: 2, // For Android shadow
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
    marginLeft: 15,
  },
});

export default Header;