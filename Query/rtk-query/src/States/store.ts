import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./Counter/CounterSlice";
import { postApiSlice } from "./posts/PostApiSlice";

export const store = configureStore({
    reducer: {
        counter: counterSlice,
        [postApiSlice.reducerPath]: postApiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(postApiSlice.middleware), 
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

/*
* Add the API reducer to the store.
* Adding the api middleware enables caching, invalidation, polling, and other features of RTK Query
*/