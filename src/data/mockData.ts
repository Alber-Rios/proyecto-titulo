import { Space, UserProfile, Reservation, Dispute, VisitRequest } from '../types.ts';

export const INITIAL_USERS: UserProfile[] = [
  {
    id: 'usr-admin-1',
    fullName: 'Ignacio Contreras Bravo',
    email: 'ignacio.contreras@spotly.cl',
    rut: '12.890.345-1',
    phone: '+56 9 6123 9876',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    gender: 'masculino',
    birthDate: '1976-06-12',
    role: 'admin',
    ownerTermsAccepted: true,
    verificationStatus: 'verified',
    commune: 'Santiago Centro',
    city: 'Santiago',
    createdAt: '2025-10-01T12:00:00Z',
  },
];

export const INITIAL_SPACES: Space[] = [];

export const INITIAL_RESERVATIONS: Reservation[] = [];

export const INITIAL_VISIT_REQUESTS: VisitRequest[] = [];

export const INITIAL_DISPUTES: Dispute[] = [];
