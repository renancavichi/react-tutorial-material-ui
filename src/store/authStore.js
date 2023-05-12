import { create } from 'zustand'

const useAuthStore = create((set) => ({
    isLogged: false,
    token: '',
    name: '',
    email: '',
    avatar: '',
    roles: '',
  login: (token, user) => set({ isLogged: true, token: token, name: user.name, email: user.email, avatar: user.avatar, roles: user.roles }),
  logout: () => set({ isLogged: false, token: '', name: '', email: '', avatar: '', roles: ''}),
}))

export default useAuthStore