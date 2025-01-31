import {onboardingSchema} from '@/types/schema';
import {create} from 'zustand';
import {createJSONStorage, persist} from 'zustand/middleware'

//partial is used as the data will be stored step by step not all at once as it is a multi-step form.
type OnBoardingState = Partial<onboardingSchema> & {
    setData: (data: Partial<onboardingSchema>)=> void;
}

export const useSubmitDataStore = create<OnBoardingState>()(
    persist((set)=>({
        setData: (data)=>set(data),
    }), {
        name: 'onboarding-data',
        storage: createJSONStorage(()=>localStorage)
    })
)

// export const useSubmitDataStore = create<OnBoardingState>((set)=>{
//     return {
//         // set will be used to update the state and setData will be used to update the state.
//         setData: (data)=>set(data),
//     }
// })