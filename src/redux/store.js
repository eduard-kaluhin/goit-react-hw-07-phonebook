import { configureStore } from '@reduxjs/toolkit';
import { contactReducer } from './contactSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactPersistConfig = {
  key: 'contact',
  storage,
  blacklist: ['filter'],
};

export const store = configureStore({
  reducer: {
    contact: persistReducer(contactPersistConfig, contactReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
