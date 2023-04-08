import React from 'react'
import StackNavigation from './src/StackNavigation'
import { NavigationContainer } from '@react-navigation/native'
import { AuthProvider } from './src/useAuth'

export default function App() {
  return (
      <NavigationContainer>
          <AuthProvider>
              <StackNavigation />
          </AuthProvider>
      </NavigationContainer>
  )
}