import React, { useState } from 'react';
import { Camera, Mail, User, Lock } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';

const Profile: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Your Profile</h1>
        <p className="mt-2 text-gray-600">
          Manage your account settings and saved prompts
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Information */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Profile Information</CardTitle>
              <Button
                variant={isEditing ? "outline" : "primary"}
                size="sm"
                onClick={() => setIsEditing(!isEditing)}
              >
                {isEditing ? "Cancel" : "Edit Profile"}
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center mb-6">
              <div className="relative">
                <div className="w-24 h-24 rounded-full bg-gray-200 overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                {isEditing && (
                  <div className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-primary-600 flex items-center justify-center cursor-pointer">
                    <Camera size={16} className="text-white" />
                  </div>
                )}
              </div>
              <div className="ml-6">
                <h3 className="text-xl font-semibold text-gray-900">Robert Washington</h3>
                <p className="text-gray-500">Prompt Creator</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  label="Full Name"
                  defaultValue="Robert Washington"
                  disabled={!isEditing}
                  leftIcon={<User size={18} className="text-gray-400" />}
                />
                <Input
                  label="Email"
                  type="email"
                  defaultValue="robert@example.com"
                  disabled={!isEditing}
                  leftIcon={<Mail size={18} className="text-gray-400" />}
                />
              </div>
              
              {isEditing && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    label="New Password"
                    type="password"
                    placeholder="Enter new password"
                    leftIcon={<Lock size={18} className="text-gray-400" />}
                  />
                  <Input
                    label="Confirm Password"
                    type="password"
                    placeholder="Confirm new password"
                    leftIcon={<Lock size={18} className="text-gray-400" />}
                  />
                </div>
              )}
              
              {isEditing && (
                <div className="flex justify-end">
                  <Button variant="primary" className="mt-2">
                    Save Changes
                  </Button>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
        
        {/* Account Stats */}
        <Card>
          <CardHeader>
            <CardTitle>Account Stats</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="text-sm text-gray-500">Account Type</p>
                  <p className="font-medium">Pro User</p>
                </div>
                <span className="px-2 py-1 text-xs font-medium rounded-full bg-primary-100 text-primary-800">
                  Active
                </span>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="text-sm text-gray-500">Joined</p>
                  <p className="font-medium">March 15, 2025</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="text-sm text-gray-500">Prompts Created</p>
                  <p className="font-medium">89</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="text-sm text-gray-500">Saved Templates</p>
                  <p className="font-medium">24</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Profile;